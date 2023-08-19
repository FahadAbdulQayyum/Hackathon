import { INCREMENT, LOGIN, SET_DASHBOARD, SHOW_PROFILE, SIGN_UP, USER_DETAIL, VIEW_USER } from "./types";

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
        profile: false,
        reader: false
      }
    }
    case SIGN_UP: {
      return {
        ...state,
        login: !state.login,
        profile: false,
        reader: false
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
    case USER_DETAIL: {
      return {
        ...state,
        user: action.payload
      }
    }
    case VIEW_USER: {
      return {
        ...state,
        viewFilteredUser: action.payload
      }
    }
    default:
      return state;
  }
};

export default GlobalReducer;
