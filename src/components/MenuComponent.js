import React, {Component} from 'react';
import {Media} from 'reactstrap';
import { Card, CardImg, CardTitle, CardImgOverlay, CardText, CardBody} from 'reactstrap';
import DishDetail from './DishDetailComponent';

class Menu extends Component{
constructor(props){
    super(props);
    
    this.state={
     selectedDish : null   
    }
}
    onDishSelect(dish){
        this.setState({selectedDish: dish});
    }
    renderDish(dish){
        if(dish != null)
        return(
            <DishDetail dish={this.state.selectedDish} />
        )
        else
        return(
            <div></div>
        )
    };
render(){
    const menu = this.props.dishes.map((dish)=>{
        return (
            <div key={dish.id} className="col-sm-12 col-md-5 m-1">
              <Card key={dish.id} onClick={()=>this.onDishSelect(dish)}>
              <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>
                        {dish.name}
                    </CardTitle>
                </CardImgOverlay>
              </Card>
            </div>
        )
    });
    return(
        <div className="container">
            <div className="row">
                {menu}
            </div>
            <div>
            {this.renderDish(this.state.selectedDish)}
            </div>
        </div>
    )
}
}
export default Menu;