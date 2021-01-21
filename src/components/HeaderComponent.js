import React,{Component} from 'react';
import { Navbar,NavbarBrand,Jumbotron,Nav,Collapse,NavbarToggler,NavItem } from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            IsNavOpen:false
        }
        this.toggleNav=this.toggleNav.bind(this)
    }
    toggleNav(){
        this.setState({
            IsNavOpen:!this.state.IsNavOpen
        })
    }
    render(){
        return(
            <React.Fragment>
                <Navbar dark expand="md" >
                    <div className="container">
                <NavbarToggler onClick={this.toggleNav}/>
                <NavbarBrand href="/" className="mr-auto">
                    <img src="assets/images/logo.png" width="41" height="30"></img>
                </NavbarBrand>
                <Collapse isOpen={this.state.IsNavOpen} navbar>
                <Nav navbar>
                    <NavItem>
                        <NavLink to="/home" className="nav-link"><span className="fa fa-home fa-lg"></span>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/about-us" className="nav-link"><span className="fa fa-info fa-lg"></span>About Us</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/menu" className="nav-link"><span className="fa fa-list fa-lg"></span>Menu</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/contact-us" className="nav-link"><span className="fa fa-address-card fa-lg"></span>Contact Us</NavLink>
                    </NavItem>
                </Nav>
                </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-5-12">
                                <h1>Muhab's Restorant</h1>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, tempore? Error dolore doloribus rem ipsum molestias, ipsam vel consequuntur dolorem.</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
           
        );
    }
}
export default Header