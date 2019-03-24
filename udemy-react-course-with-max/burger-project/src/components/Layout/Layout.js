import React, { Component } from 'react';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from './../SideDrawer/SideDrawer';

class Layout extends Component {
	state = {
		showSideDrawer: false
	};

	closeHandler = () => {
		this.setState({ showSideDrawer: false });
	};

	toggleHandler = () => {
		this.setState((prevState) => {
			return { showSideDrawer: !prevState.SideDrawer };
		});
	};

	render() {
		return (
			<React.Fragment>
				<SideDrawer show={this.state.showSideDrawer} close={this.closeHandler} />
				<Toolbar click={this.toggleHandler} />
				<div className={classes.Content}>Toolbar, SideDrawer, Backdrop</div>
				<main>{this.props.children}</main>
			</React.Fragment>
		);
	}
}

export default Layout;
