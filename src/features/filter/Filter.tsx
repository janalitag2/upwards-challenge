import React from "react";

export function Filter() {
  const [_activeSelection, setActiveSelection] = React.useState<number>(0);
  return (
    <menu className="filter-menu">
      <li
        onClick={() => {
          setActiveSelection(0);
        }}
      >
        All
      </li>
      <li onClick={() => {}}>Albums</li>
      <li onClick={() => {}}>Artists</li>
    </menu>
  );
}
