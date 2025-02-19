import { AlbumCard } from "./AlbumCard";
import type { Entry } from "../../types/api";

type AlbumListProps = {
  albumData: Entry[];
  pageNumber?: number;
  pageSize?: number;
};

export function AlbumList(props: AlbumListProps) {
  const { albumData, pageNumber, pageSize } = props;

  return (
    <div className="album-list">
      {albumData.map((entry: Entry, index: number, arr: Entry[]) => {
        return (
          <div key={`${entry.id.label}`} className={`album-card-wrapper`}>
            {pageNumber !== undefined && pageSize !== undefined && (
              <span className="album-number">
                {pageNumber * pageSize + index + 1}.
              </span>
            )}
            <AlbumCard entry={entry} />
          </div>
        );
      })}
    </div>
  );
}
