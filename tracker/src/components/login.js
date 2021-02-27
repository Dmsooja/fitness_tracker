import React, { Component, useState } from 'react';
import { Row, Col, Form, Button, Container } from 'react-bootstrap'

class Login extends Component {

    state = {
        email: '',
        password: '',
        validated: 'false'
    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value });


    handleSubmit = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }

        this.state.validated = 'true'
        const data = {
            email: this.state.email,
            password: this.state.password
        };
        /*api.post('/', data)
        .then(res => console.log(res))
        .catch(err => console.log(err))*/
        console.log(data)
    };

    render() {

        const { email, password, validated } = this.state

        return (
            <Container style={{ padding: '0 10vw' }}>
                <Form noValidate validated={validated} onSubmit={this.handleSubmit} >
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control value={ email } onChange={this.handleChange} type="email" placeholder="Enter email" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control value={ password } onChange={this.handleChange} type="password" placeholder="Password" />
                        </Form.Group>
                    </Form.Row>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        )
    }
}
  
export default Login;