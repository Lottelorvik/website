import React, { useState } from 'react';
import '../css/menubar.css';
import logo from '../icons/L.png';

function Menubar() {
	return (
		<div className='topnav'>
			<b className='logo'>
				<img src={logo} />
			</b>
			<a className='active' href='#home'>
				Home
			</a>
			<a href='#contact'>Kontakt</a>
			<a href='#projects'>Projekter</a>

			<a href='#about'>Om mig</a>
		</div>
	);
}

export default Menubar;
