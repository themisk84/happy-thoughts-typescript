export const API_URL: string =
  "https://efthymios-happy-thoughts.herokuapp.com/thoughts";
export const LIKE_URL = (postId: string): string =>
  `https://efthymios-happy-thoughts.herokuapp.com/thoughts/${postId}/like`;
