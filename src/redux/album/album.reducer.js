import React from "react";
import { AlbumActionTypes } from "./album.types";

const INITIAL_STATE = {
  albums: [],
  edit: {
    isEditing: false,
    albumToEdit: {
      id: null,
      title: "",
      userId: "",
    },
  },
};

const albumReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case AlbumActionTypes.FETCH_ALBUMS:
      return {
        ...state,
        albums: payload,
      };

    case AlbumActionTypes.CREATE_ALBUM:
      return {
        ...state,
        albums: [payload, ...state.albums],
      };

    case AlbumActionTypes.DELETE_ALBUM:
      return {
        ...state,
        albums: [
          ...state.albums.filter(
            (albumToDelete) => albumToDelete.id !== payload
          ),
        ],
      };
    case AlbumActionTypes.UPDATE_ALBUM:
      return {
        ...state,
        albums: [
          payload,
          ...state.albums.filter((album) => album.id !== payload.id),
        ],
        edit: { albumToEdit: {}, isEditing: !state.edit.isEditing },
      };
    case AlbumActionTypes.TOGGLE_EDIT_MODE:
      return {
        ...state,
        edit: { isEditing: !state.edit.isEditing },
      };
    case AlbumActionTypes.SET_EDITING_ALBUM_ID:
      return {
        ...state,
        edit: { albumToEdit: payload, isEditing: !state.edit.isEditing },
      };
    default:
      return state;
  }
};

export default albumReducer;
