import { AlbumActionTypes } from "./album.types";
export const fetchAlbumsAction = (albums) => ({
  type: AlbumActionTypes.FETCH_ALBUMS,
  payload: albums,
});

export const createAlbumAction = (album) => ({
  type: AlbumActionTypes.CREATE_ALBUM,
  payload: album,
});

export const deleteAlbumAction = (album) => ({
  type: AlbumActionTypes.DELETE_ALBUM,
  payload: album,
});

export const editAlbumAction = (album) => ({
  type: AlbumActionTypes.UPDATE_ALBUM,
  payload: album,
});

export const setEditingAlbumIdAction = (albumToEdit) => ({
  type: AlbumActionTypes.SET_EDITING_ALBUM_ID,
  payload: albumToEdit,
});

export const toggleEditModeAction = () => ({
  type: AlbumActionTypes.TOGGLE_EDIT_MODE,
});
