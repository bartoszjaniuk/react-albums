import { AlbumActionTypes } from "./album.types";
export const fetchAlbumsAction = (albums) => ({
  type: AlbumActionTypes.FETCH_ALBUMS,
  payload: albums,
});
