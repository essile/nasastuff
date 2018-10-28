import React, { Component } from 'react';
import LoginBox from './LoginBox';
import RegisterBox from './RegisterBox';
import {
    TabContent, TabPane, Nav, NavItem, NavLink, Row, Col,
    Alert, Collapse
} from 'reactstrap';
import classnames from 'classnames';
import { newRegisteredUser } from '../../ServiceClient';

class MemberArea extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '2',
            successCollapse: false, 
            regOpen: true // regopen does not work!
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

    Success = () => {
        console.log("tassa otetaan esiin");
        this.setState({ regOpen: false, successCollapse: true });
        
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
                <Collapse isOpen={this.state.successCollapse}>
                    <Alert color="success">
                        User account created!
                    </Alert>
                </Collapse>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Col sm="12">
                                <LoginBox />
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



