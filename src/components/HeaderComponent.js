import React,{Component} from 'react';
import { Navbar,NavbarBrand,Jumbotron,Nav,Collapse,NavbarToggler,NavItem,Button,Modal,ModalBody,ModalHeader,
Form,FormGroup,Label,Input } from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            IsNavOpen:false,
            isModalOpen:false
        }
        this.toggleNav=this.toggleNav.bind(this)
        this.toggleModal=this.toggleModal.bind(this)
        this.handleLogin=this.handleLogin.bind(this)
    }
    toggleNav(){
        this.setState({
            IsNavOpen:!this.state.IsNavOpen
        })
    }
    toggleModal(){
        this.setState({
            isModalOpen:!this.state.isModalOpen
        })
    }
    handleLogin(e){
        this.toggleModal();
        alert(` Username: ${this.username.value}
                Password: ${this.password.value}
                Remember: ${this.remember.checked}`);
        e.preventDefault();
    }
    render(){
        return(
            <React.Fragment>
                <Navbar dark expand="md" >
                    <div className="container">
                <NavbarToggler onClick={this.toggleNav}/>
                <NavbarBrand href="/" className="mr-auto">
                    <img src="assets/images/logo.png" width="41" height="30" alt="logo"></img>
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
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span>Login</Button>
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
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>
                        Login
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username" innerRef={(input)=>this.username=input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" Pame="password" innerRef={(input)=>this.password=input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember" innerRef={(input)=>this.remember=input}/>
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>

                    </ModalBody>
                </Modal>
            </React.Fragment>
           
        );
    }
}
export default Header