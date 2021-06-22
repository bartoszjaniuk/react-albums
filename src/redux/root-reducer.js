import { combineReducers } from "redux";

import albumReducer from "./album/album.reducer";
import sidebarReducer from "./sidebar/sidebar.reducer";

export default combineReducers({
  album: albumReducer,
  sidebar: sidebarReducer,
});
