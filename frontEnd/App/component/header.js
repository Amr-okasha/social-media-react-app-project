import { Link } from "react-router-dom";
import React, { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import LoggedOut from "./form/loggedout";
import Loggedin from "./form/loggedin";

import { UserContext } from "../Main.js";

const Header = () => {
  const context = useContext(UserContext);
  console.log(context, "context");

  return (
    <>
      <header className="header-bar bg-primary mb-3">
        <div className="container d-flex flex-column flex-md-row align-items-center p-3">
          <h4 className="my-0 mr-md-auto font-weight-normal">
            <Link to="/" className="text-white">
              ComplexApp
            </Link>
          </h4>
          {context.state.loggein ? <Loggedin /> : <LoggedOut />}
        </div>
      </header>
    </>
  );
};

export default Header;
