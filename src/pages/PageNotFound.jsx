import React from "react";
import {Link} from "react-router-dom"
import {Container, Row, Col} from "react-bootstrap"
export default function PagenotFound (){
    return (
        <div className="d-flex align-items-center justify-content-center w-100 text-center h-100">
            <Container fluid>
                <Row>
                    <Col xs="12"><h1>404</h1></Col>
                    <Col xs="12"><h2>Page Not Found</h2></Col>
                    <Link to="/">Home</Link>
                </Row>
            </Container>
        </div>
    )
}