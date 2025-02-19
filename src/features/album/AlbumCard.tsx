import React from "react";
import type { Entry } from "../../types/api";

type AlbumCardProps = {
  entry: Entry;
};

export function AlbumCard(props: AlbumCardProps) {
  const { entry } = props;

  return (
    <div
      className="album-card"
      onClick={() => {
        window.open(entry.link.attributes.href, "_blank").focus();
      }}
    >
      <div className="album-img">
        <img src={entry["im:image"][2].label} alt="Album Cover" />
      </div>
      <div className="album-body">
        <h4 className="album-text">
          {entry["im:name"].label}
          <span>{entry["im:artist"].label}</span>
        </h4>
      </div>
    </div>
  );
}
