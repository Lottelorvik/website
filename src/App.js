// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import supabase from './supabase';
//CSS files
import './App.css';
// Components
import LotteLorvik from './components/lottelorvik';
import AboutMe from './components/aboutme';

import Competencies from './components/competencies';
import ContactMe from './components/contact-form';
import Menubar from './components/menubar';
import Projects from './components/projects';

function App() {
	const reveal = () => {
		var reveals = document.querySelectorAll('.reveal');

		for (var i = 0; i < reveals.length; i++) {
			var windowHeight = window.innerHeight;
			var elementTop = reveals[i].getBoundingClientRect().top;
			var elementVisible = 150;

			if (elementTop < windowHeight - elementVisible) {
				reveals[i].classList.add('active');
			} else {
				reveals[i].classList.remove('active');
			}
		}
	};

	window.addEventListener('scroll', reveal);

	return (
		<>
			<Menubar />
			<LotteLorvik />

			<div className='outercontainer'>
				<AboutMe />
				<Projects />
				{/* <Competencies /> */}
				<ContactMe />
			</div>
		</>
	);
}

export default App;
