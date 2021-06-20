import React, { useEffect, useState } from "react";
import PageTitle from "./pageTitle";
import usePageTitle from "./pageTitle";
import axios from "axios"
import useCustomInput from './useCustom/useCustomInput';
import SignUp from "./form/signup";
export const WideContext = React.createContext()




const HomeGuest = () => {


  return (
    <WideContext.Provider value={{ wide: true }}>
      <PageTitle title="Home Guest"  >
        <div className="container py-md-5">
          <div className="row align-items-center">
            <div className="col-lg-7 py-3 py-md-5">
              <h1 className="display-3">Remember Writing?</h1>
              <p className="lead text-muted">
                Are you sick of short tweets and impersonal &ldquo;shared&rdquo;
                posts that are reminiscent of the late 90&rsquo;s email forwards?
                We believe getting back to actually writing is the key to enjoying
                the internet again.
              </p>
            </div>
            <div className="col-lg-5 pl-lg-5 pb-3 py-lg-5">
              <SignUp />
            </div>
          </div>
        </div>
      </PageTitle>
    </WideContext.Provider>
  );
};

export default HomeGuest;
