import React, { Component } from 'react';
import { Jumbotron, Button, } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';

class LoginBox extends Component {
   
    constructor(props) {
        super(props);

        this.state = {
            username: "", password: "",
        };
    }

    submitLogin = () => {
        console.log("logging in the following user:");

        var un = document.getElementById("UsernameF").value
        var pw = document.getElementById("PasswordF").value

        this.setState({ username: un, password: pw }, () => {
            // User details sent from memberarea component
            console.log(this.state);
            this.props.userLogging(this.state);
        })
    }

    render() {
        return (
            <Jumbotron>
                <AvForm>
                    <h2>Login</h2>
                    <AvField
                        id="UsernameF"
                        name="UsernameField"
                        label="Nick"
                        type="text"
                        value={this.state.Nickname}
                        validate={{
                            required: { value: true, errorMessage: 'Username required' },
                            pattern: { value: '^[A-Za-z0-9]+$', errorMessage: 'Your nick contains letters and numbers only' },
                            minLength: { value: 2, errorMessage: 'Your nick is between 2 and 20 characters' },
                            maxLength: { value: 20, errorMessage: 'Your nick is between 2 and 20 characters' }
                        }} />
                    <AvField
                        id="PasswordF"
                        name="PasswordField"
                        label="Password"
                        type="Password"
                        value={this.state.Password}
                        validate={{
                            required: { value: true, errorMessage: 'Password required' },
                            pattern: { value: '^[A-Za-z0-9.*+-/!?#]+$', errorMessage: 'Your password contains letters, numbers and characters .*+-/!?# only' },
                            minLength: { value: 5, errorMessage: 'Your Password has 5-20 characters' },
                            maxLength: { value: 20, errorMessage: 'Your Password has 5-20 characters' }
                        }} />
                    <Button color="secondary" onClick={this.submitLogin}>Login</Button>{' '}
                </AvForm>
            </Jumbotron>
        );
    }
}

export default LoginBox;