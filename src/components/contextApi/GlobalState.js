import { INCREMENT, LOGIN, SET_DASHBOARD, SHOW_PROFILE, SIGN_UP, USER_DETAIL, VIEW_USER } from "./types";
import { useReducer } from "react";
import globalReducer from "./GlobalReducer";
import globalContext from "./GlobalContext";

const GlobalState = (props) => {
  const initialState = {
    quantity: 0,
    login: false,
    dashboard: false,
    showProfile: false,
    user:null,
    reader: true,
    viewFilteredUser: null,
  };

  const [state, dispatch] = useReducer(globalReducer, initialState);
  //   const [state, dispatch] = useReducer(initialState, globalReducer);

  const incrementation = () => {
    console.log("incrementation pressed");
    dispatch({ type: INCREMENT });
  };

  const Login = () => {
    dispatch({
      type: LOGIN
    })
    console.log('login access')
  }

  const Signup = () => {
    dispatch({
      type: SIGN_UP
    })
    console.log('login access')
  }

  const Dashboard = () => {
    dispatch({
      type: SET_DASHBOARD
    })
    console.log('set_dashboard')
  }

  const showProfileFunc = () => {
    dispatch({
      type: SHOW_PROFILE
    })
    console.log('SHOW_PROFILE')
  }

  const userDetail = data => {
    dispatch({
      type: USER_DETAIL,
      payload: data
    })
    console.log('userDtail functino called')
  }

  const viewFilteredUserFunc = data => {
    dispatch({
      type: VIEW_USER,
      payload: data
    })
  }
  
  return (
    <globalContext.Provider
      value={{
        incrementation,
        Login,
        Dashboard,
        showProfileFunc,
        userDetail,
        Signup,
        viewFilteredUserFunc,
        quantity: state.quantity,
        login: state.login,
        dashboard: state.dashboard,
        showProfile: state.showProfile,
        user: state.user,
        reader: state.reader,
        viewFilteredUser: state.viewFilteredUser
      }}
    >
      {props.children}
    </globalContext.Provider>
  );
};

export default GlobalState;
