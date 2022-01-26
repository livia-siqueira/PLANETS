export interface Planet {
  id: string;
  color: string;
  name: string;
  overview: {
    content: string;
    source: string;
  };
  structure: {
    content: string;
    source: string;
  };
  geology: {
    content: string;
    source: string;
  };
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: {
    planet: "https://res.cloudinary.com/rjsmedia/image/upload/v1639000294/The%20Planets/planet-venus_bljvft.svg";
    internal: "https://res.cloudinary.com/rjsmedia/image/upload/v1639000294/The%20Planets/planet-venus-internal_kpag55.svg";
    geology: "https://res.cloudinary.com/rjsmedia/image/upload/v1639000288/The%20Planets/geology-venus_wxbaqn.png";
  };
}
