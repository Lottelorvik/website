// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import supabase from './supabase';
//CSS files
import './App.css';
// Components
import LotteLorvik from './components/lottelorvik';
import AboutMe from './components/aboutme';
import Mathquiz from './components/mathquiz.js';
import PasswordGenerator from './components/password-gen.js';
import Competencies from './components/competencies';
import ContactMe from './components/contact-form';

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
			<LotteLorvik />

			<div className='outercontainer'>
				<AboutMe />
				<Competencies />
				<div className='project-box'>
					<PasswordGenerator />
					<Mathquiz />
				</div>
				<ContactMe />
			</div>
		</>
	);
}

export default App;
