import React, { Component } from 'react';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Jumbotron, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class RegisterBox extends Component {

    state = { 
        Nickname: "", 
        Password: "",
        Description: "",
    }

    // constructor(props) {
    //     super(props);
    // }

    submitRegistration = () => {
        var un = document.getElementById("UsernameField").value
        var pw = document.getElementById("PasswordField").value
        
        this.setState({ Nickname: un, Password: pw }, () => {
            console.log("updated status");
            console.log(this.state);
            this.props.newUser(this.state);
        });
    }


    render() {
        return (
            <Jumbotron>
                <AvForm>
                    <h2>Register</h2>
                    <AvField
                        id="UsernameField"
                        name="UsernameField"
                        label="Username"
                        type="text"
                        value={this.state.Nickname}
                        validate={{
                            required: { value: true, errorMessage: 'Username required' },
                            pattern: { value: '^[A-Za-z0-9]+$', errorMessage: 'You can only use letters and numbers' },
                            minLength: { value: 2, errorMessage: 'Your Nickname must be between 2 and 20 characters' },
                            maxLength: { value: 20, errorMessage: 'Your Nickname must be between 2 and 20 characters' }
                        }} />
                    <AvField
                        id="PasswordField"
                        name="PasswordField"
                        label="Password"
                        type="Password"
                        value={this.state.Password}
                        validate={{
                            required: { value: true, errorMessage: 'Password required' },
                            pattern: { value: '^[A-Za-z0-9.*+-/!?#]+$', errorMessage: 'You can only use letters, numbers and characters .*+-/!?#' },
                            minLength: { value: 5, errorMessage: 'Your Password must have 5-20 characters' },
                            maxLength: { value: 20, errorMessage: 'Your Password must have 5-20 characters' }
                        }} />
                    <Button color="secondary" onClick={this.submitRegistration}>Register</Button>{' '}
                </AvForm>

                {/* <Form>
                    <FormGroup>
                        <Label for="Username">Username:</Label>
                        <Input type="text" name="Nickname" id="Username" placeholder="type your Nickname" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Password">Password</Label>
                        <Input type="Password" name="Password" id="Password" placeholder="type your Password" />
                    </FormGroup>
                </Form> */}
            </Jumbotron>
        );
    }
}

export default RegisterBox;


