import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import i18n from '../../i18n';
import FinnishFlag from '../../Photos/FinnishFlag.png';
import UKflag from '../../Photos/UKflag.png';

function ChangeL() {

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('language', lng);
    }
    return (
            <div>
                <input type="image" onClick={() => changeLanguage('fi')} src={FinnishFlag} alt="fi"/>&nbsp;
                <input type="image" onClick={() => changeLanguage('en')} src={UKflag} alt="en"/>
                {/* <button onClick={() => changeLanguage('fi')}><img src={FinnishFlag}/></button> */}
                {/* <button onClick={() => changeLanguage('en')}>en</button> */}
            </div>
    );
};

class NavBar extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/">NASA STUFF</NavbarBrand>
                <div><ChangeL/></div>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/photo-today/">{i18n.t('Today\'s photo')}</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/archived-photos/">{i18n.t('Search photos')}</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/member-area">{i18n.t('Your account')}</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default NavBar;