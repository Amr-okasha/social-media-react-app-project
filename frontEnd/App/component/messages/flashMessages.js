import React, { Component, useContext } from 'react'
import ReactDOM from 'react-dom';
import { UserContext } from '../../Main';

const FlashMessages = () => {
    const context = useContext(UserContext)
    return (ReactDOM.createPortal(
        <div className="floating-alerts">
            {context.flashMessages.map((msg, index) => {
                return <div key={index} className="alert alert-success text-center floating-alert shadow-sm">
                    {msg}
                </div>
            })}
        </div>
        , document.getElementById("root-portal")));
}

export default FlashMessages;