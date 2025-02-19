export type FeedResponse = {
  feed: {
    entry: Entry[];
  };
};

export type Entry = {
  "im:name": { label: string };
  "im:image": Image[];
  title: { label: string };
  link: Link;
  id: ID;
  "im:artist": Artist;
  category: Category;
  "im:releaseDate": {
    label: string;
    attributes: { label: string };
  };
};

type ID = {
  label: string;
  attributes: {
    im: {
      id: string;
    };
  };
};

type Image = {
  label: string;
  attributes: {
    height: string;
  };
};

type Artist = {
  label: string;
  attributes: {
    href: string;
  };
};

type Link = {
  attributes: {
    rel: string;
    type: string;
    href: string;
  };
};

type Category = {
  attributes: {
    im: {
      id: string;
      term: string;
      scheme: string;
      label: string;
    };
  };
};
