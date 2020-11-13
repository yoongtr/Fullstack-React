import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    render() {
        return <CardText>{dish.description}</CardText>;
    }
}

export default DishDetail;