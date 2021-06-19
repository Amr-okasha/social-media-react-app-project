import React, { useEffect, useState } from "react";
import PageTitle from "./pageTitle";
import usePageTitle from "./pageTitle";
import axios from "axios"
import useCustomInput from './useCustom/useCustomInput';
export const WideContext = React.createContext()




const HomeGuest = () => {

  const [username, bindUserName, resetUserName] = useCustomInput("")
  const [password, bindPassword, resetPassword] = useCustomInput("")
  const [email, bindEmail, resetEmail] = useCustomInput("")

  // const [email, setEmail] = useState()
  // const [password, setPassword] = useState()
  // const [username, setUsername] = useState()

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log("here we are")
    try {
      await axios({
        method: "post",
        url: "http://localhost:8080/register",
        data: { username, password, email }
      })
      console.log("it was created")

    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        console.log(ex.response.data)
      else { console.log(ex.response.data) }
    }
    resetUserName
    resetPassword
    resetEmail

  }

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
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="form-group">
                  <label htmlFor="username-register" className="text-muted mb-1">
                    <small>Username</small>
                  </label>
                  <input
                    id="username-register"
                    name="username"
                    className="form-control"
                    type="text"
                    placeholder="Pick a username"
                    autoComplete="off"
                    {...bindUserName}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email-register" className="text-muted mb-1">
                    <small>Email</small>
                  </label>
                  <input
                    id="email-register"
                    name="email"
                    className="form-control"
                    type="text"
                    placeholder="you@example.com"
                    autoComplete="off"
                    {...bindEmail}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password-register" className="text-muted mb-1">
                    <small>Password</small>
                  </label>
                  <input
                    id="password-register"
                    name="password"
                    className="form-control"
                    type="password"
                    placeholder="Create a password"
                    {...bindPassword}
                  />
                </div>
                <button
                  type="submit"
                  className="py-3 mt-4 btn btn-lg btn-success btn-block"
                >
                  Sign up for ComplexApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </PageTitle>
    </WideContext.Provider>
  );
};

export default HomeGuest;
