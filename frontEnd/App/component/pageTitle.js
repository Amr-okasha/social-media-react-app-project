import React, { Component, useEffect } from 'react'
import Container from './Containe';

const PageTitle = (props) => {
    useEffect(() => {
        document.title = `${props.title}`
        window.scrollTo(0, 0)
    }, []);
    return <Container >

        {props.children}
    </Container>

}

export default PageTitle;