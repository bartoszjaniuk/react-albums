import { AlbumActionTypes } from "./album.types";
export const fetchAlbumsAction = (albums) => ({
  type: AlbumActionTypes.FETCH_ALBUMS,
  payload: albums,
});

export const paginateAlbums = (albums) => ({
  type: AlbumActionTypes.PAGINATE_ALBUMS,
  payload: albums,
});
