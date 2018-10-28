import React, { Component } from 'react';
import { Jumbotron, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class LoginBox extends Component {

    constructor(props) {
        super(props);

        this.state = { LoginOpen: true, registerOpen: false };
    }

    submitLogin = () => {

    }

    render() {
        return (
            <Jumbotron>
                <Form>
                    <h2>Login</h2>
                    <FormGroup>
                        <Label for="Username">Username:</Label>
                        <Input type="text" name="username" id="Username"  placeholder="type your username" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Password">Password</Label>
                        <Input type="password" name="password" id="Password" placeholder="type your password" />
                    </FormGroup>
                    <Button color="secondary" onClick={this.submitLogin}>Register</Button>{' '}
                </Form>
            </Jumbotron>
        );
    }
}

export default LoginBox;