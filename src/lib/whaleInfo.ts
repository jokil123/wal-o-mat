import blauwal from "$lib/assets/wale/blauwal.jpg";

export type WhaleInfo = {
  name: string;
  infoText: string;
  image: string;
  wikipediaLink: string;
};

export const whalesInfo: WhaleInfo[] = [
  {
    name: "Blauwal",
    infoText: "lorem ipsum",
    image: blauwal,
    wikipediaLink: "https://de.wikipedia.org/wiki/Blauwal",
  },
];
