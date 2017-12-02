import React from 'react';
import classes from './Control.css';

const control = (props) => {
    return(
        <div className={classes.Control}>
            <div className={classes.Label}>{props.label}</div>
            <button 
                className={classes.Less}
                onClick={props.removed} 
                disabled={props.disabled}>-</button>
            <button className={classes.More} onClick={props.added}>+</button>
        </div>
    )
};

export default control;