import React, { Component } from 'react';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Jumbotron, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class RegisterBox extends Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    submitRegistration = () => {
        console.log("submit Registration");
    }

    render() {
        return (
            <Jumbotron>
                <AvForm>
                    <h2>Register</h2>
                    <AvField name="UsernameField" label="Username" type="text" validate={{
                        required: { value: true, errorMessage: 'Username required' },
                        pattern: { value: '^[A-Za-z0-9]+$', errorMessage: 'You can only use letters and numbers' },
                        minLength: { value: 2, errorMessage: 'Your username must be between 2 and 20 characters' },
                        maxLength: { value: 20, errorMessage: 'Your username must be between 2 and 20 characters' }
                    }} />
                    <AvField name="PasswordField" label="Password" type="password" validate={{
                        required: { value: true, errorMessage: 'Password required' },
                        pattern: { value: '^[A-Za-z0-9.*+-/!?#]+$', errorMessage: 'You can only use letters, numbers and characters .*+-/!?#' },
                        minLength: { value: 5, errorMessage: 'Your password must have 5-20 characters' },
                        maxLength: { value: 20, errorMessage: 'Your password must have 5-20 characters' }
                    }} />
                    <Button color="secondary" onClick={this.submitRegistration}>Register</Button>{' '}
                </AvForm>

                {/* <Form>
                    <FormGroup>
                        <Label for="Username">Username:</Label>
                        <Input type="text" name="username" id="Username" placeholder="type your username" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Password">Password</Label>
                        <Input type="password" name="password" id="Password" placeholder="type your password" />
                    </FormGroup>
                </Form> */}
            </Jumbotron>
        );
    }
}

export default RegisterBox;