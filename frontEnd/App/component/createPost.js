import axios from 'axios';
import React, { Component, useContext, useState } from 'react'
import PageTitle from './pageTitle';
import R from "../services/authHttpServices"
import { withRouter } from 'react-router';
import { UserContext } from '../Main';
import FlashMessages from './messages/flashMessages';

const CreatePost = (props) => {
    const context = useContext(UserContext)
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await R.http({
                url: "/create-post",
                method: "post",
                data: { title, body, token: localStorage.getItem("jwt") }
            })
            if (response.data) {
                context.addFlashMessages("The post has created successfuly")
                props.history.push(`/post/${context.info.id}`)
            }
            console.log(response)
        } catch (ex) {
            if (ex.response && 400 < ex.response.status < 501) context.addFlashMessages(ex.response.data)
            else {
                context.addFlashMessages("un expected error ocurred")
            }
        }

    }
    return (
        <PageTitle title="create new post">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="post-title" className="text-muted mb-1">
                        <small>Title</small>
                    </label>
                    <input onClick={(e) => setTitle(e.target.value)} autoFocus name="title" id="post-title" className="form-control form-control-lg form-control-title" type="text" placeholder="" autoComplete="off" />
                </div>

                <div className="form-group">
                    <label htmlFor="post-body" className="text-muted mb-1 d-block">
                        <small>Body Content</small>
                    </label>
                    <textarea onClick={(e) => setBody(e.target.value)} name="body" id="post-body" className="body-content tall-textarea form-control" type="text"></textarea>
                </div>

                <button type="submit" className="btn btn-primary">Save New Post</button>
            </form>
        </PageTitle>);
}

export default withRouter(CreatePost);