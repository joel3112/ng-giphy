export type APIGifImageType =
  | 'original'
  | 'downsized'
  | 'downsized_large'
  | 'downsized_medium'
  | 'downsized_small'
  | 'downsized_still'
  | 'fixed_height'
  | 'fixed_height_downsampled'
  | 'fixed_height_small'
  | 'fixed_height_small_still'
  | 'fixed_height_still'
  | 'fixed_width'
  | 'fixed_width_downsampled'
  | 'fixed_width_small'
  | 'fixed_width_small_still'
  | 'fixed_width_still'
  | 'looping'
  | 'original_still'
  | 'original_mp4'
  | 'preview'
  | 'preview_gif'
  | 'preview_webp'
  | 'hd'
  | '480w_still';

export interface APIGifImage {
  height: string;
  width: string;
  size: string;
  url: string;
  mp4_size?: string;
  mp4?: string;
  webp_size?: string;
  webp?: string;
  frames?: string;
  hash?: string;
}

export interface APIGifUser {
  avatar_url: string;
  banner_image: string;
  banner_url: string;
  profile_url: string;
  username: string;
  display_name: string;
  description: string;
  instagram_url: string;
  website_url: string;
  is_verified: boolean;
}

export interface APIGif {
  id: string;
  url: string;
  slug: string;
  bitly_gif_url: string;
  bitly_url: string;
  embed_url: string;
  username: string;
  source: string;
  title: string;
  rating: string;
  content_url: string;
  source_tld: string;
  source_post_url: string;
  is_sticker: number;
  import_datetime: string;
  trending_datetime: string;
  images: {
    [key in APIGifImageType]: APIGifImage;
  };
  user: APIGifUser;
  analytics_response_payload: string;
  analytics: {
    onload: {
      url: string;
    };
    onclick: {
      url: string;
    };
    onsent: {
      url: string;
    };
  };
}

export interface APIResponseListGifs {
  data: APIGif[];
  pagination: {
    total_count: number;
    count: number;
    offset: number;
  };
  meta: {
    status: number;
    msg: string;
    response_id: string;
  };
}

export interface Gif {
  id: string;
  url: string;
  title: string;
  height: string;
  width: string;
}

export interface ListGif {
  total_count: number;
  data: Gif[];
}
