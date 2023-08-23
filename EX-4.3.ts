type Image = {
  kind: "Image";
  url: string;
  captions: string;
};

type Video = {
  kind: "Video";
  url: string;
  duration: number;
};

type Media = Video | Image;
