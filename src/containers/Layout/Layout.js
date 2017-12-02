import React, { Component } from 'react';
import classes from './Layout.css';

import Aux from '../../hoc/Auxillary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';


class Layout extends Component {

    state = {
        sideDrawerVisible: false,
    }

    closeSideDrawerHandler = () => {
        this.setState({sideDrawerVisible: false});
    }

    openSideDrawerHandler = () => {
        this.setState((prevState) => {
            return {sideDrawerVisible: !prevState.sideDrawerVisible}});
    }

    render() {
        return (
        <Aux>
            <Toolbar 
                openSide={this.openSideDrawerHandler}/>
            <SideDrawer 
                open={this.state.sideDrawerVisible}
                close={this.closeSideDrawerHandler}/>
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Aux>
        );
    }
} 

export default Layout;