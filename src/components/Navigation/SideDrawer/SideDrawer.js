import React from 'react';

import BackDrop from '../../UI/Backdrop/Backdrop';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import classes from './SideDrawer.css';
import Aux from '../../../hoc/Aux';


const sidedrawer = (props) => {
    // attach conditional css before show
    let attachedClasses = [classes.SideDrawer, classes.Close];

    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return(
        <Aux>
            <BackDrop 
                show={props.open} 
                clicked={props.close}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                
                <nav>
                    <NavItems />
                </nav>
            </div>
        </Aux>
    );

}

export default sidedrawer;