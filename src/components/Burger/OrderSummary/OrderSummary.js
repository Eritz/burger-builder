import React from 'react';
import Aux from '../../../hoc/Auxillary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const itemSummary = Object.keys(props.ingredients)
        .map(key => {
            return <li key={key}>
                <span style={{textTransform: 'capitalize'}}>{key}</span>: {props.ingredients[key]}
                </li>                
        });
    return (
        <Aux>
            <h3>The Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {itemSummary}
            </ul>
            <p><strong>Total Price: ${props.total.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button type="NotOkay" clicked={props.purchaseCancel}>Cancel</Button>
            <Button type="Okay" clicked={props.purchaseContinue}>Continue</Button>
        </Aux>
    );
};

export default orderSummary;