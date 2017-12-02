import React, { Component } from 'react';

import Aux from '../../hoc/Auxillary';
import Burger from '../../components/Burger/Burger'
import Controls from '../../components/Burger/Controls/Controls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 2.00,
    cheese: 0.50,
    meat: 1.50,
    bacon: 1.00,
};

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad : 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
        totalPrice: 4,
        isPurchaseable: false,
        isCheckout: false,
    }

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients).map(ele => {
            return ingredients[ele];
        }).reduce((sum, item) => {
            return sum + item;
        }, 0);

        this.setState({isPurchaseable: sum > 0});
    }

    addIngredientHandler =(type) => {
        const oldValue = this.state.ingredients[type];
        const newValue = oldValue + 1;
        const updateIngredients = {
            ...this.state.ingredients
        };
        updateIngredients[type] = newValue;

        const priceAdd = INGREDIENT_PRICES[type]; // one at a time
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAdd;

        this.setState({
            ingredients: updateIngredients,
            totalPrice: newPrice}
        );
        this.updatePurchaseState(updateIngredients);
    }

    delIngredientHandler = (type) => {
        const oldValue = this.state.ingredients[type];
        let newValue = oldValue - 1;
        if (newValue < 0) {
            newValue = 0;
        }
        const updateIngredients = {
            ...this.state.ingredients
        };
        updateIngredients[type] = newValue;

        const priceDel = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        let newPrice = oldPrice - priceDel;
        if (newPrice < 0) {
            newPrice = 0;
        }
        
        this.setState({
            ingredients: updateIngredients,
            totalPrice: newPrice
        });
        this.updatePurchaseState(updateIngredients);
    }

    checkoutHandler = () => {
        this.setState({isCheckout: true});
    }

    cancelCheckoutHandler = () => {
        this.setState({isCheckout: false});
    }

    continueCheckoutHandler = () => {
        alert('Continued~');
    }
    
    render() {

        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        } //disableInfo is an array with True or False values

        return (
            <Aux>
                <Modal show={this.state.isCheckout} 
                    closeModal={this.cancelCheckoutHandler}>
                    <OrderSummary 
                        ingredients={this.state.ingredients}
                        total = {this.state.totalPrice}
                        purchaseContinue={this.continueCheckoutHandler}
                        purchaseCancel = {this.cancelCheckoutHandler}/>
                </Modal>

                <Burger ingredients={this.state.ingredients}/>
                <Controls
                    price={this.state.totalPrice} 
                    addIngredient={this.addIngredientHandler}
                    delIngredient={this.delIngredientHandler}
                    disabled={disabledInfo}
                    purchaseable={this.state.isPurchaseable} 
                    checkout={this.checkoutHandler}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;