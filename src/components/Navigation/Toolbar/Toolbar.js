import React from 'react';
import classes from './Toolbar.css';
import tog from '../SideDrawer/Toggle.css'

import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';

const toolbar = (props) => {
    return(
        <header className={classes.Toolbar}>
            <div className={tog.Toggle} onClick={props.openSide}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav className={classes.Desktop}>
                <NavItems />
            </nav>
        </header>
    );
}

export default toolbar;