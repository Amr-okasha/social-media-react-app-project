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
// const initialState = { loggein: false, info: { avatar: "", username: "", id: "" }, flashMessages: [] }
// const reducer = (currentState, acion) => {
//   switch (acion.type) {
//     case "login":
//       return { loggein: true, info: { avatar: action.value.avatar, username: action.value.username, id: action.value._id }, ...flashMessages }
//     case "logout":
//       return { loggein: false, info: { avatar: "", username: "", id: "" }, ...flashMessages }
//     case "msg":
//       return { ...loggein, ...info, flashMessages: currentState.concat(action.value) }
//     default:
//       currentState
//   }
// }
const Main = () => {

  // const [state, dispatch] = useReducer(reducer, initialState)
  const [loggein, setLoggedin] = useState(false)
  const [info, setInfo] = useState({ avatar: "", username: "", id: "" })
  const [flashMessages, setFlashMessages] = useState([])


  const addFlashMessages = (msg) => {
    setFlashMessages(prev => prev.concat(msg))
  }
  useEffect(() => {
    const token = localStorage.getItem("jwt")
    if (token) {
      const auth = jwtDecode(token)
      if (auth) { setLoggedin(true); setInfo({ avatar: auth.avatar, username: auth.username, id: auth._id }); console.log(auth, "check") } else { setLoggedin(false) }

    }
  }, [])
  return (
    <>
      <UserContext.Provider value={{ loggein, info, flashMessages, setLoggedin, addFlashMessages }}>
        <  FlashMessages />
        <Header />
        <Switch>
          <Route path="/post/:id" exact component={SinglePost} />
          <Route path="/create-post" component={CreatePost} />
          <Route path="/about-us" component={About} />
          <Route path="/terms" component={Terms} />
          {!loggein ? <Route path="/" exact component={HomeGuest} />
            : <Route path="/" exact component={Home} />}
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
