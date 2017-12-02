import React from 'react';
import classes from './Controls.css';
import Control from './Control/Control';

const items = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];

const controls = (props) => {
    return(
        <div className={classes.Controls}>
            <p> Current price: <strong>${props.price.toFixed(2)}</strong> </p>
            {items.map(ele => (
                <Control 
                    key={ele.label} 
                    label={ele.label}
                    added={() => props.addIngredient(ele.type)}
                    removed={() => props.delIngredient(ele.type)} 
                    disabled = {props.disabled[ele.type]}/>
            ))}
            <button 
                className={classes.OrderButton}
                onClick={props.checkout}
                disabled={!props.purchaseable}>Check out Now</button>
        </div>
    );
    
}

export default controls;