import React from "react";
import Loader from "../../components/loader/Loader";
import { Entry } from "../../types/api";
import { AlbumList } from "../../features/album/AlbumList";
import Button from "../../components/button/Button";
import { filterEnum } from "../../utils/defaults";

type ContentProps = {
  isLoading: boolean;
  albumData: Entry[];
  pageNumber: number;
  pageSize: number;
  searchInput: string;
  selectedFilter: filterEnum;
  setSelectedFilter: (filter: filterEnum) => void;
};

const ContentLayout = (props: ContentProps) => {
  const {
    isLoading,
    albumData,
    pageNumber,
    pageSize,
    searchInput,
    selectedFilter,
    setSelectedFilter,
  } = props;

  if (isLoading) {
    return (
      <div className="app-content loading">
        <Loader />
      </div>
    );
  }

  return (
    <div className="app-content" id={"app-container"}>
      <h2 className="content-header">Top Albums</h2>
      {searchInput.length > 0 ? (
        <div className="filter-results-container">
          <h5>Showing results for "{searchInput}"</h5>
          <div className="filter-buttons">
            <Button
              onClick={() => {
                setSelectedFilter(filterEnum.ALL);
              }}
              className={`filter-button ${
                selectedFilter === filterEnum.ALL ? "highlight" : ""
              }`}
            >
              All
            </Button>
            <Button
              onClick={() => {
                setSelectedFilter(filterEnum.ALBUMS);
              }}
              className={`filter-button ${
                selectedFilter === filterEnum.ALBUMS ? "highlight" : ""
              }`}
            >
              Albums
            </Button>
            <Button
              onClick={() => {
                setSelectedFilter(filterEnum.ARTISTS);
              }}
              className={`filter-button ${
                selectedFilter === filterEnum.ARTISTS ? "highlight" : ""
              }`}
            >
              Artists
            </Button>
          </div>
        </div>
      ) : null}
      <AlbumList
        pageNumber={pageNumber}
        pageSize={pageSize}
        albumData={albumData}
      />
    </div>
  );
};

export default ContentLayout;
