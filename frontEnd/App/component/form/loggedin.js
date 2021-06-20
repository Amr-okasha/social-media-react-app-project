import React, { Component, useContext } from 'react'
import { UserContext } from '../../Main'
import { NavLink } from 'react-router-dom'


const Loggedin = (props) => {
    const context = useContext(UserContext)
    console.log(context.state, "dsfdsfsdf")
    console.log(context.state.dispatch)
    const handleLogOut = () => {
        context.dispatch({ type: "logout" })
        localStorage.removeItem("jwt")
    }
    return (<div className="flex-row my-3 my-md-0">
        <NavLink to="#" className="text-white mr-2 header-search-icon">
            <i className="fas fa-search"></i>
        </NavLink>
        <span className="mr-2 header-chat-icon text-white">
            <i className="fas fa-comment"></i>
            <span className="chat-count-badge text-white"> </span>
        </span>
        <NavLink to="#" className="mr-2">
            <img className="small-header-avatar" src={context.state.info.avatar} />
        </NavLink>
        <NavLink className="btn btn-sm btn-success mr-2" to="/create-post">
            Create Post
        </NavLink>
        <button onClick={handleLogOut} className="btn btn-sm btn-secondary">
            Sign Out
        </button>

    </div >);
}

export default Loggedin;