import React, { Component } from 'react';
import LoginBox from './LoginBox';
import RegisterBox from './RegisterBox';
import {
    TabContent, TabPane, Nav, NavItem, NavLink, Row, Col,
    Alert, Collapse
} from 'reactstrap';
import classnames from 'classnames';
import { newRegisteredUser, userLoggingIn } from '../../ServiceClient';

class MemberArea extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1',
            failCollapse: false,
            regOpen: true
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    createUser = (u) => {
        console.log("sending to database");
        newRegisteredUser(u, function (response) {
            console.log("Succeeded (" + response + ")");
            this.Success();
        }.bind(this));
    }

    checkUser = (u) => {
        console.log("checking from database");
        userLoggingIn(u, function (response) {
            console.dir(response);
            response === "Salasana väärin" ? this.Alert() : this.Success();
        }.bind(this));
    }

    Success = () => {
        this.props.history.push('/member/in');

    }

    Alert = () => {
        // Showing wrong password message to the user
        this.setState({ regOpen: false, failCollapse: true });
    }

    render() {
        return (
            <div>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.toggle('1'); }}>
                            <div className="Login">
                                Login
                            </div>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggle('2'); }}>
                            <div className="Register">
                                Register
                            </div>
                        </NavLink>
                    </NavItem>
                </Nav>
                <Collapse isOpen={this.state.failCollapse}>
                    <Alert color="danger">
                        Wrong password!
                    </Alert>
                </Collapse>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Col sm="12">
                                <LoginBox userLogging={this.checkUser} />
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
                <Collapse isOpen={this.state.regOpen}>
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="2">
                            <Row>
                                <Col sm="12">
                                    <RegisterBox newUser={this.createUser} />
                                </Col>
                            </Row>
                        </TabPane>
                    </TabContent>
                </Collapse>
            </div >
        );
    }
}

export default MemberArea;



