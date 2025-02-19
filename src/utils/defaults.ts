export const LIMIT = 100;
export const PAGE_SIZE = 25;
export const getTopAlbumsUrl = (limit: number) =>
  `https://itunes.apple.com/us/rss/topalbums/limit=${limit}/json`;

export enum filterEnum {
  ALL = "All",
  ALBUMS = "Albums",
  ARTISTS = "Artists",
}
