import React, {Component} from 'react';
import {Media} from 'reactstrap';
import { Card, CardImg, CardTitle, CardImgOverlay, CardText, CardBody} from 'reactstrap';

class DishDetail extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        const commentList = this.props.dish.comments.map(item => (
            <p> {item.comment}
            <br/><br/>
            -- {item.author},  {item.date}
            <br/> </p>  
            
          )
        );
        return(
        <div className="row">
            <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                <CardBody>
                    <CardTitle>
                        {this.props.dish.name}
                    </CardTitle>
                    <CardText>
                        {this.props.dish.description}
                    </CardText>
                </CardBody>
            </Card>
            </div>
            <div className="col-sm-12 col-md-5 m-1">
                <h4>Comments</h4>
            {commentList}
            </div>
        </div>
        )
}
}
export default DishDetail; 