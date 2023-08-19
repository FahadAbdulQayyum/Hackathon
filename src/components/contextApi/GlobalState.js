import { INCREMENT, LOGIN, SET_DASHBOARD, SHOW_PROFILE } from "./types";
import { useReducer } from "react";
import globalReducer from "./GlobalReducer";
import globalContext from "./GlobalContext";

const GlobalState = (props) => {
  const initialState = {
    quantity: 0,
    login: true,
    dashboard: false,
    showProfile: false,
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

  return (
    <globalContext.Provider
      value={{
        incrementation,
        Login,
        Dashboard,
        showProfileFunc,
        quantity: state.quantity,
        login: state.login,
        dashboard: state.dashboard,
        showProfile: state.showProfile,
      }}
    >
      {props.children}
    </globalContext.Provider>
  );
};

export default GlobalState;
