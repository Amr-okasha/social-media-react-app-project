import React, { Component, useContext, useState } from 'react'
import axios from 'axios';
import { UserContext } from '../../Main';


const LoggedOut = (props) => {
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const context = useContext(UserContext);

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            console.log("here we are")
            const response = await axios({
                method: "post",
                url: "http://localhost:8080/login",
                data: { username, password }
            })
            if (response.data) {
                console.log(response.data.token)
                localStorage.setItem("jwt", response.data.token)
                context.setLoggedin(true)
            } else { console.log("incorrect data") }

        } catch (ex) {
            if (ex.response && ex.response.status === 404)
                console.log(ex.response.data)
            else { console.log("ex.response.data") }
        }


    }
    return (
        <form onSubmit={(e) => handleSubmit(e)} className="mb-0 pt-2 pt-md-0">
            <div className="row align-items-center">
                <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
                    <input
                        name="username"
                        className="form-control form-control-sm input-dark"
                        type="text"
                        placeholder="Username"
                        autoComplete="off"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
                    <input
                        name="password"
                        className="form-control form-control-sm input-dark"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}

                    />
                </div>
                <div className="col-md-auto">
                    <button className="btn btn-success btn-sm">Sign In</button>
                </div>
            </div>
        </form>
    );
}

export default LoggedOut;