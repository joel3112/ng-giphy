import { APIGif, Gif } from './gifs.models';

export const gifMapper = (gif: APIGif): Gif => {
  const { id, title, images } = gif;

  return {
    id,
    title,
    url: images.downsized_medium.url,
    width: images.downsized_medium.width,
    height: images.downsized_medium.height
  };
};
