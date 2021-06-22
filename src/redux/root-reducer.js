import { combineReducers } from "redux";

import albumReducer from "./album/album.reducer";

export default combineReducers({
  album: albumReducer,
});
