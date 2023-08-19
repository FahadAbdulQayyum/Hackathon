import { INCREMENT, LOGIN, SET_DASHBOARD, SHOW_PROFILE } from "./types";

const GlobalReducer = (state, action) => {
  switch (action.type) {
    case INCREMENT: {
      return {
        ...state,
        quantity: state.quantity + 1,
      };
    }
    case LOGIN: {
      return {
        ...state,
        login: !state.login,
        profile: false
      }
    }
    case SET_DASHBOARD: {
      return {
        ...state,
        dashboard: !state.dashboard
      }
    }
    case SHOW_PROFILE: {
      return {
        ...state,
        showProfile: !state.showProfile
      }
    }
    default:
      return state;
  }
};

export default GlobalReducer;
