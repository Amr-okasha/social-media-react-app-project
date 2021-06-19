import React, { Component, useContext } from "react";
import { WideContext } from "./homeGuest";



const Container = (props) => {
  const Context = useContext(WideContext)

  return (
    <div className={"container  py-md-5" + (Context ? "" : " container--narrow")}>{props.children}</div>
  );
};

export default Container;
