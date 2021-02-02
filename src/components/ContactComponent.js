import React,{Component} from 'react';
import {Breadcrumb, BreadcrumbItem,Form,FormGroup,Col,Label,Input,Button} from 'reactstrap';
import {Link} from 'react-router-dom';

class Contact extends Component {
    constructor(props){
        super(props);
        this.state={
            fname:'',
            lname:'',
            tel:'',
            email:'',
            agree:false,
            contactType:'Tel.',
            message:''
        }
        this.handleInput=this.handleInput.bind(this);
        this.handleSub=this.handleSub.bind(this);
    }
    handleInput(event){
        const target=event.target;
        const name=target.name;
        const value=target.value==='checkbox'?target.checked:target.value;
        this.setState({
            [name]:value
        });
    }
    handleSub(event){
        alert(JSON.stringify(this.state));
        event.preventDefault();
    }
    render(){
        
        return(
            <div className="container">
                <div className="row">
                        <Breadcrumb>
    
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                        <h3>Contact Us</h3>
                        <hr />
                    </div>               
                        </div>
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info" href="/"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">Send Your FeedBack</div>
                    <div className="col-12 col-md-9">
                        <Form onSubmit={this.handleSub}>
                            <FormGroup row>
                                <Label md={2} htmlFor="fname">First Name</Label>
                                <Col md={8}>
                                    <Input type="text" id="fname" name="fname" 
                                    value={this.state.fname} placeholder="First Name"
                                    onChange={this.handleInput}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label md={2} htmlFor="lname">Last Name</Label>
                                <Col md={8}>
                                    <Input type="text" id="lname" name="lname" 
                                    value={this.state.lname} placeholder="Last Name"
                                    onChange={this.handleInput}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label md={2} htmlFor="tel">Telephone</Label>
                                <Col md={8}>
                                    <Input type="text" id="tel" name="tel" 
                                    value={this.state.tel} placeholder="Telephone"
                                    onChange={this.handleInput}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label md={2} htmlFor="email">Email</Label>
                                <Col md={8}>
                                    <Input type="text" id="email" name="email" 
                                    value={this.state.email} placeholder="Email"
                                    onChange={this.handleInput}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size:4,offset: 2}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" name="agree" checked={this.state.agree}
                                            onChange={this.handleInput} />{' '}<strong>May we contact you ?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{size:3,offset:1}}>
                                    <Input type="select" name="contactType" value={this.state.contactType}
                                    onChange={this.handleInput}>
                                        <option>Tel.</option>
                                        <option>Email</option>
                                        
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label md={2} htmlFor="message">Feedback</Label>
                                <Col md={8}>
                                    <Input type="textarea" id="message" name="message" 
                                    value={this.state.message} row="12"
                                    onChange={this.handleInput}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size:8,offset:2}}>
                                    <Button type="submit" color="primary">Submit</Button>
                                </Col>
                            </FormGroup>
                           
                        </Form>
                    </div>

                </div>
            </div>
        );
    }
    
}

export default Contact;