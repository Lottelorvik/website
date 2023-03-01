import { useEffect, useState } from 'react';
import supabase from '../supabase';
import '../css/section-contact-form.css';

function ContactMe() {
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

	return (
		<div className='container'>
			{showForm ? (
				<ContactForm ToggleContactForm={ToggleContactForm} />
			) : (
				<Thankyou ToggleContactForm={ToggleContactForm} />
			)}
		</div>
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

export default ContactMe;
