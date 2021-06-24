import React from "react";
import { AlbumActionTypes } from "./album.types";

const INITIAL_STATE = {
  albums: [],
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
    default:
      return state;
  }
};

export default albumReducer;
