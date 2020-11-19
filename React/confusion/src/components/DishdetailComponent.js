import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
    
    // componentDidMount() {
    //     console.log('DishDetail component componentDidMount invoked')
    // };

    // componentDidUpdate() {
    //     console.log('DishDetail component componentDidUpdate invoked')
    // };

function RenderDish({dish}) {
    if (dish!=null) {
        return(
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );   
    }
    else {
        return (
            <div></div>
        );
    }
};

function RenderComments({comments}) {
    if (comments!=null) {
        const commentList = comments.map((comment) => {
            return (
                <li key={comment.id}>
                    <div>
                        <p>{comment.comment}</p>
                        <p>
                            --{comment.author},
                            &nbsp;
                            {new Intl.DateTimeFormat('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: '2-digit'
                            }).format(new Date(comment.date))}
                        </p>
                    </div>
                </li>
            )
        });
        return (
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {commentList}
                </ul>
            </div>
        );
    }
    else {
        return (
            <div></div>
        );
    }
};

const DishDetail = (props) => {
    // console.log('DishDetail component render invoked')

    // const dish = this.props.dish;
    
    // console.log(this.props);
    if (props.dish!=null) {
        return (
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
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={props.comments} />
                </div>
            </div>
            </div>
        );
    }
    else {
        return (
        <div></div>
        )
    }
};

export default DishDetail;