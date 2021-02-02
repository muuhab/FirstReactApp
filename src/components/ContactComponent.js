import React,{Component} from 'react';
import {Breadcrumb, BreadcrumbItem,Form,FormGroup,Col,Label,Input,Button,FormFeedback} from 'reactstrap';
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
            message:'',
            touched: {
                firstname: false,
                lastname: false,
                telnum: false,
                email: false
            }
        }
        this.handleInput=this.handleInput.bind(this);
        this.handleSub=this.handleSub.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
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
    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }
    validate(firstname, lastname, telnum, email) {
        const errors = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: ''
        };

        if (this.state.touched.firstname && firstname.length < 3)
            errors.firstname = 'First Name should be >= 3 characters';
        else if (this.state.touched.firstname && firstname.length > 10)
            errors.firstname = 'First Name should be <= 10 characters';

        if (this.state.touched.lastname && lastname.length < 3)
            errors.lastname = 'Last Name should be >= 3 characters';
        else if (this.state.touched.lastname && lastname.length > 10)
            errors.lastname = 'Last Name should be <= 10 characters';

        const reg = /^\d+$/;
        if (this.state.touched.telnum && !reg.test(telnum))
            errors.telnum = 'Tel. Number should contain only numbers';

        if(this.state.touched.email && email.split('').filter(x => x === '@').length !== 1)
            errors.email = 'Email should contain a @';

        return errors;
    }
    render(){
        const errors = this.validate(this.state.fname, this.state.lname, this.state.tel, this.state.email);

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
                                    valid={errors.firstname === ''}
                                    invalid={errors.firstname !== ''}
                                    onBlur={this.handleBlur('firstname')}
                                    onChange={this.handleInput}
                                    />
                                    <FormFeedback>{errors.firstname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label md={2} htmlFor="lname">Last Name</Label>
                                <Col md={8}>
                                    <Input type="text" id="lname" name="lname" 
                                    value={this.state.lname} placeholder="Last Name"
                                    valid={errors.lastname === ''}
                                    invalid={errors.lastname !== ''}
                                    onBlur={this.handleBlur('lastname')}
                                    onChange={this.handleInput}
                                    />
                                    <FormFeedback>{errors.lastname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label md={2} htmlFor="tel">Telephone</Label>
                                <Col md={8}>
                                    <Input type="text" id="tel" name="tel" 
                                    value={this.state.tel} placeholder="Telephone"
                                    valid={errors.telnum === ''}
                                    invalid={errors.telnum !== ''}
                                    onBlur={this.handleBlur('telnum')}
                                    onChange={this.handleInput}
                                    />
                                    <FormFeedback>{errors.telnum}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label md={2} htmlFor="email">Email</Label>
                                <Col md={8}>
                                    <Input type="text" id="email" name="email" 
                                    value={this.state.email} placeholder="Email"
                                    onChange={this.handleInput}
                                    valid={errors.email === ''}
                                    invalid={errors.email !== ''}
                                    onBlur={this.handleBlur('email')}
                                    />
                                    <FormFeedback>{errors.email}</FormFeedback>
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