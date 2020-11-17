import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
    
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
    };
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
    };
};

const DishDetail = (props) => {
    // console.log('DishDetail component render invoked')

    // const dish = this.props.dish;
    
    // console.log(this.props);
    if (props.dish!=null) {
        return (
            <div className="row">
                <RenderDish dish={props.dish} />
                <RenderComments comments={props.dish.comments} />
            </div>
        )
    }
    else {
        return (
        <div></div>
        )
    }
};

export default DishDetail;