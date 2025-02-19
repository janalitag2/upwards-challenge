import React from "react";
import "../css/App.css";
import NavBarLayout from "./layouts/NavBarLayout";
import ContentLayout from "./layouts/ContentLayout";
import { validateResponse } from "../utils/api";
import Pagination from "../components/pagination/Pagination";
import type { Entry, FeedResponse } from "../types/api";
import {
  filterEnum,
  getTopAlbumsUrl,
  LIMIT,
  PAGE_SIZE,
} from "../utils/defaults";

function App() {
  const [loadedData, setLoadedData] = React.useState<Entry[]>([]);
  const [albumData, setAlbumData] = React.useState<Entry[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [pageNumber, setPageNumber] = React.useState<number>(0);
  const [searchInput, setSearchInput] = React.useState<string>("");
  const [selectedFilter, setSelectedFilter] = React.useState<filterEnum>(
    filterEnum.ALL
  );

  function handleOnSearch(input: string) {
    setSearchInput(input);
    setPageNumber(0);
  }

  // TODO manipulate api call to retrieve x amount of results
  function getAlbumData() {
    fetch(getTopAlbumsUrl(LIMIT))
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const feedResponse = response.json();
        return feedResponse;
      })
      .then((feedResponse: FeedResponse) => {
        if (validateResponse(feedResponse)) {
          setLoadedData(feedResponse.feed.entry);
          setAlbumData(feedResponse.feed.entry);
        }
      })
      .catch((error) => {
        console.error(error.message);
      })
      .finally(() => setIsLoading(false));
  }

  // Quick and dirty way to filter the album data, API should be leveraged realistically
  React.useEffect(() => {
    function filterSwitch(input: string, entry: Entry) {
      switch (true) {
        case selectedFilter === filterEnum.ALL:
          return (
            entry["im:name"].label
              .toLowerCase()
              .includes(input.toLowerCase()) ||
            entry["im:artist"].label.toLowerCase().includes(input.toLowerCase())
          );
        case selectedFilter === filterEnum.ALBUMS:
          return entry["im:name"].label
            .toLowerCase()
            .includes(input.toLowerCase());
        case selectedFilter === filterEnum.ARTISTS:
          return entry["im:artist"].label
            .toLowerCase()
            .includes(input.toLowerCase());
      }
    }

    if (searchInput.length > 0) {
      const data = loadedData.filter((entry: Entry) =>
        filterSwitch(searchInput, entry)
      );
      setAlbumData(data);
    } else {
      setAlbumData(loadedData);
    }
  }, [searchInput, selectedFilter, loadedData]);

  // Reset the scroll when navigating pages
  React.useEffect(() => {
    const container = document.getElementById("app-container");
    if (container !== null) {
      container.scrollTop = 0;
    }
  }, [pageNumber]);

  React.useEffect(() => {
    getAlbumData();
  }, []);

  return (
    <div className="app">
      <NavBarLayout handleOnSearch={handleOnSearch} />
      <ContentLayout
        searchInput={searchInput}
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
        pageNumber={pageNumber}
        pageSize={PAGE_SIZE}
        isLoading={isLoading}
        albumData={albumData.slice(
          pageNumber * PAGE_SIZE,
          pageNumber * PAGE_SIZE + PAGE_SIZE
        )}
      />
      <Pagination
        currentPage={pageNumber}
        setCurrentPage={setPageNumber}
        totalPages={Math.floor(albumData.length / PAGE_SIZE)}
        pageSize={PAGE_SIZE}
      />
    </div>
  );
}

export default App;
