import React, { useEffect, useReducer, useState } from "react";
import ReactDOM from "react-dom";
import HomeGuest from "./component/homeGuest";
import Header from "./component/header";
import Footer from "./component/footer";
import Terms from "./component/Terms";
import About from "./component/about";
import jwtDecode from "jwt-decode"
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "./component/home";
import CreatePost from "./component/createPost";
import SinglePost from "./component/singlePost";
import FlashMessages from './component/messages/flashMessages';

export const UserContext = React.createContext()
const initialState = { loggein: false, info: { avatar: "", username: "", id: "" }, flashMessages: [] }
const reducer = (currentState, action) => {
  console.log(action && action.value, "acion.value")
  switch (action.type) {
    case "login":
      return { loggein: true, info: { avatar: " action.value.avatar", username: " action.value.username ", id: "action.value._id " }, flashMessages: currentState.flashMessages }
    case "logout":
      return { loggein: false, info: { avatar: "", username: "", id: "" }, flashMessages: currentState.flashMessages }
    case "msg":
      return { loggein: currentState.loggein, info: currentState.info, flashMessages: currentState.flashMessages.concat(action.value) }
    default:
      currentState
  }
}
const Main = () => {

  const [state, dispatch] = useReducer(reducer, initialState)
  // const [loggein, setLoggedin] = useState(false)
  // const [info, setInfo] = useState({ avatar: "", username: "", id: "" })
  // const [flashMessages, setFlashMessages] = useState([])

  console.log(state.loggein, "state.loggin")
  // const addFlashMessages = (msg) => {
  //   // setFlashMessages(prev => prev.concat(msg))
  //   dispatch({ type: "msg", value: msg })
  // }
  useEffect(() => {
    const token = localStorage.getItem("jwt")
    if (token) {
      const auth = jwtDecode(token)
      if (auth) {
        // setLoggedin(true); setInfo({ avatar: auth.avatar, username: auth.username, id: auth._id });
        dispatch({ type: "login", value: auth })
        console.log(auth, "checkkkkkkkkkk")
      }
      else {
        // setLoggedin(false) 
        dispatch({ type: "logout" })
      }

    } else { dispatch({ type: "logout" }) }
  }, [])
  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <  FlashMessages />
        <Header />
        <Switch>
          <Route path="/post/:id" exact component={SinglePost} />
          <Route path="/create-post" component={CreatePost} />
          <Route path="/about-us" component={About} />
          <Route path="/terms" component={Terms} />
          {state.loggein ? <Route path="/" exact component={Home} /> : <Route path="/" exact component={HomeGuest} />
          }
          <Redirect to="/" />
        </Switch>
        <Footer />
      </UserContext.Provider>
    </>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  document.getElementById("root")
);
