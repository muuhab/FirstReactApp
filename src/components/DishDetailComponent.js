import React,{Component} from 'react';
import {Card,CardImg,CardText,CardBody,CardTitle,Breadcrumb, BreadcrumbItem,Label,Button,Modal,ModalBody,ModalHeader} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { addComment } from '../redux/ActionCreators';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class Comment extends Component {
    constructor(props){
        super(props);
        this.state={
            isModalOpen:false
        }
        this.toggleModal=this.toggleModal.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleSubmit(values){
        this.toggleModal();
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
    }
    toggleModal(){
        this.setState({
            isModalOpen:!this.state.isModalOpen
        })
    }
    render(){
        return(
            <div>
                <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span>Submit Comment</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>
                        Submit Comment
                    </ModalHeader>
                    <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <div className="form-group">
                                <Label htmlFor="rating">Rating</Label>
                                    <Control.select model=".rating" name="rating" id="rating"
                                        className="form-control" defaultValue="1" >
                                        <option >1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                            </div>
                            <div className="form-group">
                                <Label htmlFor="firstname">Your Name</Label>
                                    <Control.text model=".author" id="firstname" name="firstname"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                             minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                          <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                            </div>
                            <div className="form-group">
                                <Label htmlFor="message">Comment</Label>
                                    <Control.textarea model=".comment" id="message" name="message"
                                        divs="6"
                                        className="form-control" />
                            </div>
                            <div className="form-group">
                                    <Button type="submit" value="Submit" color="primary">
                                        Submit
                                    </Button>
                            </div>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
            
        );
    }
}

    function RenderDish({dish}){
        if(dish!=null){
            return(
                <Card>
                    <CardImg width="100%" src={baseUrl + dish.image}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }
    function RenderComments({comments,addComment,dishId}){
        if(comments!=null){
            const com=comments.map((comment)=>{return(
                <div key={comment.id}>
    
                
                <ul className="list-unstyled">
                         <li>
                        {comment.comment}
                    </li>
                    <li>
                        -- {comment.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                    </li>
                </ul>
                </div>
            );
        });
        return(
            <div >
                <h4>Comments</h4>
                {com}
                <Comment dishId={dishId} addComment={addComment} />
            </div>
        );
        }
        else{
            return(<div></div>);
        }
     
       
    }
        const DishDetail=(props)=>{
            if (props.isLoading) {
                return(
                    <div className="container">
                        <div className="row">            
                            <Loading />
                        </div>
                    </div>
                );
            }
            else if (props.errMess) {
                return(
                    <div className="container">
                        <div className="row">            
                            <h4>{props.errMess}</h4>
                        </div>
                    </div>
                );
            }
            else if (props.dish != null) 
                return(
                    <div className="container">
                        <div className="row">
                        <Breadcrumb>

                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>                
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
        
                    <RenderDish dish={props.dish}/>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                        
                    
                    <RenderComments comments={props.comments}
                        addComment={props.addComment}
                        dishId={props.dish.id} /> 
                        </div>
                </div>
                </div>
                );
        
    
    
        }
        
export default DishDetail