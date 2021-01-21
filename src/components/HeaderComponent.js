import React,{Component} from 'react';
import { Navbar,NavbarBrand,Jumbotron } from 'reactstrap';

class Header extends Component{
    render(){
        return(
            <React.Fragment>
                <Navbar dark >
                    <div className="container">
                <NavbarBrand href="/">Muhab</NavbarBrand>
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