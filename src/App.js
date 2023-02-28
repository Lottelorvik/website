import { useEffect, useState } from 'react';
import supabase from './supabase';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import lotteimg from './img/lotteimg.JPG';
//CSS files
import './App.css';
import './css/section-1-start.css';
import './css/section-2-intro.css';
import './css/section-contact-form.css';
import './css/section-competencies.css';
import Mathquiz from './components/mathquiz.js';
import PasswordGenerator from './components/password-gen.js';

function App() {
	const [forms, setForms] = useState([]);
	const [showForm, setShowForm] = useState(true);

	function ToggleContactForm() {
		setShowForm(!showForm);
	}

	useEffect(function () {
		async function getForms() {
			// setIsLoading(true);

			let query = supabase.from('contactform').select('*');

			const { data: contactform, error } = await query
				.order('full_name', { ascending: false })
				.limit(1000);

			if (!error) setForms(forms);
			else return null;
			// setIsLoading(false);
		}
		getForms();
	});

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

	// const [background, setBackground] = useState('dark');
	// const [textcolor, setTextcolor] = useState('lightext');

	// function changeBackground() {
	// 	if (background === 'dark') {
	// 		document.body.style.background =
	// 			'linear-gradient(55deg, #ffe2a4 0%, #fcd294 51%, #ffcd62 85%)';
	// 		// document.getElementsByClassName('lotteHeader').style.color = '#000000';
	// 		setTextcolor('darktext');
	// 		setBackground('light');
	// 	} else {
	// 		document.body.style.background =
	// 			'linear-gradient(55deg, #010e46 0%, #00011d 51%, #000000 85%)';
	// 		// document.getElementsByClassName('lotteHeader').style.color = '#FFFFFF';
	// 		setTextcolor('lighttext');
	// 		setBackground('dark');
	// 	}
	// }

	return (
		<>
			<section className='outer-introsection'>
				<div className='introsectionbackground'>
					<Start />
				</div>
			</section>

			<div className='outercontainer'>
				<div className='container boxtext '>
					<FirstIntroText />
				</div>

				{/* Getting my components */}
				<Competencies />
				<PasswordGenerator />
				<Mathquiz />

				<div className='container'>
					{showForm ? (
						<ContactForm ToggleContactForm={ToggleContactForm} />
					) : (
						<Thankyou ToggleContactForm={ToggleContactForm} />
					)}
				</div>
			</div>
		</>
	);
}

function Start() {
	return (
		<div className='background-box'>
			<div className='lotte '>LOTTE</div>
			<div className='lorvik'>LORVIK</div>
			<hr></hr>
			<div>
				<div className='typed-out'>&lt; Front-End Developer &gt;</div>
			</div>
		</div>
	);
}

function FirstIntroText() {
	return (
		<div className='about-me'>
			<div className='boxtext boxes text-box-div'>
				<div className='boxtitle about-me-header about-me-div'>ABOUT ME</div>
				Hi there and welcome to my personal website!<br></br>
				<br></br> My name is Lotte and I'm a passionate front-end developer with a strong desire to
				create visually stunning and interactive web applications. I specialize in using modern web
				technologies and frameworks such as <b id='orangetext'> HTML</b>, <b id='bluetext'>CSS</b>,
				<b id='yellowtext'> Javascript</b> and <b id='reacttext'>React</b> to create seamless user
				experiences that not only meet but exceed expectations. I have a master from the
				<b> IT-University of Copenhagen</b> where I learned about the importance of creating
				functional and responsive websites that not only look good but are easy to navigate. I was
				still hungry to become better so I enrolled in a Javascript and multiple React courses which
				strengthened my knowledge even more. I am constantly striving to learn more to enhance my
				skills and are currently seeking new opoprtunities to work with like-minded individuals and
				organizations.
			</div>
			<img className='lotteimg' alt='portræt' src={lotteimg} />
		</div>
	);
}

function Competencies() {
	const [show, setShow] = useState(false);

	return (
		<>
			<div className='competencies-div'>
				<div className='competencies-header'>COMPETENCIES</div>
				<div className='competencies-categories-text popup'>
					<div className='competencies-categories-text-hover' onClick={() => setShow(s => !s)}>
						Web development👇
					</div>
					{show && (
						<div>
							<span className='popup popuptext' id='popup-box'>
								I have built blabla and blabla and I have competencies within blabla... I have built
								blabla and blabla and I have competencies within blabla...I have built blabla and
								blabla and I have competencies within blabla...I have built blabla and
							</span>
						</div>
					)}
				</div>
			</div>
		</>
	);
}

function isValidEmail() {
	let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

	if (validRegex) {
		return true;
	} else {
		return false;
	}
}

function ContactForm({ setForm, setShowForm, ToggleContactForm }) {
	const [full_name, setFullName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [isUploading, setIsUploading] = useState(false);
	const messageLength = message.length;

	async function handleSubmit(e) {
		e.preventDefault();

		if (full_name && isValidEmail(email) && message && message.length <= 1000) {
			setIsUploading(true);
			const { data: newContact, error } = await supabase
				.from('contactform')
				.insert([{ full_name, email, message }])
				.select();
			setIsUploading(false);

			if (!error) setForm(form => [newContact[0], ...form]);

			setFullName('');
			setEmail('');
			setMessage('');

			setShowForm(false);
		} else if (!full_name) {
			setFullName('You must enter your full name');
		} else if (!isValidEmail(email)) {
			alert('Invalid email!');
		}
	}

	return (
		<div>
			{/* <div className='outro-box'>
				<p className='outro-text'>
					Thank you for visiting my website and please feel free to contact me if you have any
					inquiries or opportunities!
				</p>
			</div> */}
			<form className='contact-form ' onSubmit={handleSubmit}>
				<p className='contact-box-header'>Get in touch! </p>
				<h>________________</h>
				<p className='outro-text'>
					Thank you for visiting my website and please feel free to contact me if you have any
					inquiries or opportunities!
				</p>
				<input
					type='text'
					placeholder='Enter your name...'
					value={full_name}
					onChange={e => setFullName(e.target.value)}
					className='contact-form-text'
					disabled={isUploading}
				/>

				<input
					className='contact-form-text'
					type='text'
					placeholder='Enter your e-mail...'
					value={email}
					onChange={e => setEmail(e.target.value)}
					disabled={isUploading}
				/>

				<input
					type='text'
					placeholder='Enter message... (max 500)'
					value={message}
					onChange={e => setMessage(e.target.value)}
					className='contact-form-text'
					disabled={isUploading}
				/>
				<span className='character-limit'>{500 - messageLength}</span>
				<button
					className='contact-btn contact-btn-large'
					disabled={isUploading}
					onClick={ToggleContactForm}
				>
					SUBMIT
				</button>
			</form>
		</div>
	);
}

function Thankyou({ setForm, setShowForm, ToggleContactForm }) {
	return (
		<div className='thank-you-box'>
			<p className='contact-box-header'> Sent! </p>
			<p className='thank-you-box-text'>
				Thank you for your mail! <br></br>
				<br></br>I will get back to you as soon as possible.
			</p>

			<button className='contact-btn contact-btn-large bottom-btn ' onClick={ToggleContactForm}>
				Back!
			</button>
		</div>
	);
}

export default App;
