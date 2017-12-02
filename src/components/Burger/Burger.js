import React from 'react';
import Ingredient from './Ingredient/Ingredient';
import classes from './Burger.css';

const burger = (props) => {

    let passedIngredients = Object.keys(props.ingredients)
        .map(ele => {
            return  [...Array(props.ingredients[ele])].map((e, idx) =>
        {
            return <Ingredient key={ele + idx} type={ele} />;
        });
        }).reduce((arr, el) => {
            return arr.concat(el)
        }, []);

    if (passedIngredients.length === 0) {
        passedIngredients = <p>Add ingredients</p>;
    }

    return(
        <div className={classes.Burger}>
            <Ingredient type="bread-top" />
            {passedIngredients}
            <Ingredient type="bread-bottom" />
        </div>
    );
}

export default burger;