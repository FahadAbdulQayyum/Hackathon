import { LOGIN, SET_DASHBOARD, SET_DASHBOARD_FALSE, SHOW_PROFILE, SIGN_UP, USER_DETAIL, VIEW_USER } from "./types";

const GlobalReducer = (state, action) => {
  switch (action.type) {
    case LOGIN: {
      console.log('LOIGINN')
      return {
        ...state,
        login: !state.login,
        signup: !state.signup,
        profile: false,
        reader: false,
      }
    }
    case SIGN_UP: {
      return {
        ...state,
        login: false,
        profile: false,
        reader: false
      }
    }
    case SET_DASHBOARD: {
      return {
        ...state,
        dashboard: true
      }
    }
    case SET_DASHBOARD_FALSE: {
      return {
        ...state,
        dashboard: false
      }
    }
    case SHOW_PROFILE: {
      return {
        ...state,
        showProfile: !state.showProfile
      }
    }
    case USER_DETAIL: {
      localStorage.setItem('userDetail', JSON.stringify(action.payload))
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
