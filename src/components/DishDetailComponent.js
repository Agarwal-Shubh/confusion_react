import React, {Component} from 'react';
import {Media} from 'reactstrap';
import { Card, CardImg, CardTitle, CardImgOverlay, CardText, CardBody} from 'reactstrap';

class DishDetail extends Component{
    constructor(props){
        super(props);
    }
     renderDish=(dish)=>{
         return (
        <Card>
             <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>
                        {dish.name}
                    </CardTitle>
                    <CardText>
                        {dish.description}
                    </CardText>
                </CardBody>
            </Card>
         )
        }
        renderComments=(comments)=> {

            const commentList = this.props.dish.comments.map( (comment) => {
              return(
                <div key={comment.id}>
                    <li>{comment.comment}</li>
                    <li>-- {comment.author}, {comment.date}</li>
                </div>
              );
            });
        
            if (comments != null){
              return(
                <div>
                  <ul className="list-unstyled">
                    {commentList}
                  </ul>
                </div>
              );
            }else {
              return(
                <div></div>
              );
            }
        
          }
    render(){
        return(
        <div className="row">
            <div className="col-12 col-md-5 m-1">
            {this.renderDish({...this.props.dish})}
            </div>
            <div className="col-sm-12 col-md-5 m-1">
                <h4>Comments</h4>
            {this.renderComments({...this.props.dish.comments})}
            </div>
        </div>
        )
}
}
export default DishDetail; 