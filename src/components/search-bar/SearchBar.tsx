import React, { ChangeEvent } from "react";

type SearchProps = {
  onSearch: (searchInput: string) => void;
};

export function SearchBar(props: SearchProps) {
  const { onSearch } = props;
  const [searchInput, setSearchInput] = React.useState("");

  const handleSearchChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setSearchInput(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="search-bar-container">
      <input
        className="search-input"
        type="text"
        placeholder="Search..."
        value={searchInput}
        onChange={handleSearchChange}
      />
    </div>
  );
}
