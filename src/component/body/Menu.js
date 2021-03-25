import React, { Component } from 'react';
import DISHES from '../../data/dishes';
import MenuItem from './MenuItem';
import DishDetail from './DishDetail';
class Menu extends Component {
    state = {
        dishes: DISHES,
        selectDish: null
    }
    onDishSelect = dish => {
        // console.log(dish);
        this.setState({ selectDish: dish });
    }
    render() {
        const menu = this.state.dishes.map(item => {

            return (
                <MenuItem dish={item} key={item.id} DishSelect={this.onDishSelect} />
            );
        })
        let dishdetail = null;
        if (this.state.selectDish != null) {
            dishdetail = <DishDetail dish={this.state.selectDish} />
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        {menu}
                    </div>
                    <div className="col-lg-8">
                        {dishdetail}
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;