import {LOGIN, SET_DASHBOARD, SET_DASHBOARD_FALSE, SHOW_PROFILE, SIGN_UP, USER_DETAIL, VIEW_USER } from "./types";
import { useEffect, useReducer } from "react";
import globalReducer from "./GlobalReducer";
import globalContext from "./GlobalContext";

const GlobalState = (props) => {
  let storageData = 0;
  useEffect(() => {
    state.user = JSON.parse(localStorage.getItem('userDetail'))
  }, [])
  const initialState = {
    login: false,
    signup:true,
    dashboard: false,
    showProfile: false,
    user: null,
    reader: true,
    viewFilteredUser: null,
  };

  const [state, dispatch] = useReducer(globalReducer, initialState);

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

  const DashboardFalse = () => {
    dispatch({
      type: SET_DASHBOARD_FALSE
    })
    console.log('DashboardFalse')
  }

  const showProfileFunc = () => {
    dispatch({
      type: SHOW_PROFILE
    })
    console.log('SHOW_PROFILE')
  }

  const userDetail = (data, data1) => {
    dispatch({
      type: USER_DETAIL,
      payload: {...data, ...data1}
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
        Login,
        Dashboard,
        showProfileFunc,
        userDetail,
        Signup,
        viewFilteredUserFunc,
        DashboardFalse,
        login: state.login,
        signup: state.signup,
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
