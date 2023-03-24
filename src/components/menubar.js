import React, { useState } from 'react';
import '../css/menubar.css';
import logo from '../icons/L.png';

function Menubar() {
	return (
		<div className='topnav'>
			<a className='logo'>
				<img src={logo} />
			</a>
			<a href='#contact'>Kontakt</a>
			<a href='#projects'>Projekter</a>
			<a href='#about'>Om mig</a>
		</div>
	);
}

export default Menubar;
