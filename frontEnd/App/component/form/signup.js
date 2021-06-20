import React, { Component, useState } from 'react'
import axios from 'axios';



const SignUp = () => {
    //(1)
    // const [data, setData] = useState({ username: "", email: "", password: "" })
    // const handleInput = ({ target: input }) => {
    //   console.log(input)
    //   const datastore = data
    //   datastore[input.name] = input.value
    //   setData({ ...datastore })
    // }
    // (2)
    // const [handleInput, data] = useCustomInput("")
    //(3)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    //(4)
    // const [username, bindusername, resetusername] = useCustomInput("")
    // const [valuepassword, bindpassword, resetpassword] = useCustomInput("")
    // const [email, bindemail, resetemail] = useCustomInput("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("here we are")
        try {
            await axios({
                method: "post",
                url: "http://localhost:8080/register",
                data: { password, email, username }
            })
            if (response.data) {
                console.log("it was created")
                console.log(response.data.token)
                localStorage.setItem("jwt", response.data.token)
            } else { console.log("invalid data") }

        } catch (ex) {
            if (ex.response && ex.response.status === 404)
                console.log(ex.response.data)
            else { console.log(ex.response.data) }
        }


    }
    return (<form onSubmit={(e) => handleSubmit(e)}>
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
                //(1,2)
                // value={data.username}
                // onChange={(e) => handleInput(e)}
                // (3)
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            // (4)
            // {...bindusername}
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
                // (1,2)
                // value={data.email}
                // onChange={(e) => handleInput(e)}
                // (3)
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            // (4)
            // {...bindemail}
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
                // (1,2)
                // value={data.password}
                // onChange={(e) => handleInput(e)}
                // (3)
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            // (4)
            // {...bindpassword}
            />
        </div>
        <button
            type="submit"
            className="py-3 mt-4 btn btn-lg btn-success btn-block"
        >
            Sign up for ComplexApp
        </button>
    </form>);
}

export default SignUp;