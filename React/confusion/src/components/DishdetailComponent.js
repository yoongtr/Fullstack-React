import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        return(
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    // componentDidMount() {
    //     console.log('render')
    // }
 
    render() {
        const {selectedDish} = this.props
        
        if (selectedDish!=null)
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(selectedDish)}
                    </div>
                    {/* {selectedDish.comments.map((item, index) => {
                        <div  className="col-12 col-md-5 m-1" key={index}>
                            {item.comment}
                        </div>
                    })} */}
                </div>
            );
        else
            return (
                <div></div>
            );
    
    }
}

export default DishDetail;