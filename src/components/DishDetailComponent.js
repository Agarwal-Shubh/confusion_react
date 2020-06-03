import React from 'react';
import {Media} from 'reactstrap';
import { Card, CardImg, CardTitle, CardImgOverlay, CardText, CardBody,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import { Link }  from 'react-router-dom';
    function RenderDish({dish}){
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
    function RenderComments({comments}){
             if (comments != null){

                const commentList =comments.map( (comment) => {
                    return(
                      <div key={comment.id}>
                          <li>{comment.comment}</li>
                          <li>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
                      </div>
                    );
                  });


              return(
                <div>
                  <ul className="list-unstyled">
                    {commentList}
                  </ul>
                </div>
              );
            }
            else {
              return(
                <div></div>
              );
            }
        
          }
    const DishDetail=(props)=>{
        if(props.dish!=null){
        return(
          <div className="container">  
          <div className="row">
                <Breadcrumb>
            <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>   
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
            <div className="col-sm-12 col-md-5 m-1"> 
                <h4>Comments</h4>
             <RenderComments comments={props.comments} />
            
            </div>
        </div>
        </div>
        )
        }

        else{
            return(
                <div></div>
            )
        }
}
export default DishDetail; 