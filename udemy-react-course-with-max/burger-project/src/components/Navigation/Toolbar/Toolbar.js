import React from 'react';
import styles from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import MenuIcon from './MenuIcon/MenuIcon';

export default function Toolbar(props) {
	return (
		<header className={styles.Toolbar}>
			<MenuIcon clicked={props.click} />
			<Logo height="80%" />
			<div className={styles.DesktopOnly}>
				<NavigationItems />
			</div>
		</header>
	);
}
