import { SidebarActionTypes } from "./sidebar.types";
const INITIAL_STATE = {
  isOpen: false,
};
const sidebarReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SidebarActionTypes.TOGGLE_SIDEBAR:
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    default:
      return state;
  }
};

export default sidebarReducer;
