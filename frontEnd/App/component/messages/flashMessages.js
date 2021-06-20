import React, { Component, useContext } from 'react'
import ReactDOM from 'react-dom';
import { UserContext } from '../../Main';

const FlashMessages = () => {
    const context = useContext(UserContext)
    console.log(context, "kfsdjfkjsdkfj")
    return (ReactDOM.createPortal(
        <div className="floating-alerts">
            {context.state.flashMessages && context.state.flashMessages.map((msg, index) => {
                return <div key={index} className="alert alert-success text-center floating-alert shadow-sm">
                    {msg}
                </div>
            })}
        </div>
        , document.getElementById("root-portal")));
}

export default FlashMessages;