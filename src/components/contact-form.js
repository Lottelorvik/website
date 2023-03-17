import { useEffect, useState } from 'react';
import supabase from '../supabase';
import '../css/section-contact-form.css';

function ContactMe() {
	const [showForm, setShowForm] = useState(true);
	const [forms, setForms] = useState([]);

	function ToggleContactForm() {
		setShowForm(!showForm);
	}

	return (
		<div className='con-container'>
			{showForm ? (
				<ContactForm
					ToggleContactForm={ToggleContactForm}
					setForms={setForms}
					setShowForm={setShowForm}
				/>
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

function ContactForm({ SetShowForm, setForms, ToggleContactForm }) {
	const [full_name, setFullName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [isUploading, setIsUploading] = useState(false);
	const messageLength = message.length;

	async function handleSubmit(e) {
		e.preventDefault();

		if (full_name && email && message && message.length <= 1000) {
			setIsUploading(true);

			const { data: newForm, error } = await supabase
				.from('contactform')
				.insert([{ full_name, email, message }])
				.select();
			setIsUploading(false);

			if (!error) setForms(forms => [newForm[0], ...forms]);

			setFullName('');
			setEmail('');
			setMessage('');

			// setShowForm(false);
		} else if (!full_name) {
			setFullName('You must enter your full name');
		} else if (!email) {
			alert('Invalid email!');
		}
		ToggleContactForm();
	}

	return (
		<div className='con-box' id='contact'>
			{/* <div className='outro-box'>
				<p className='outro-text'>
					Thank you for visiting my website and please feel free to contact me if you have any
					inquiries or opportunities!
				</p>
			</div> */}
			<form className='contact-form '>
				<p className='contact-box-header'>Kontakt</p>
				<p>───────────────────────</p>
				<p className='outro-text'>
					Tak fordi du besøgte min hjemmeside - du er velkommen til at smide en besked afsted til
					mig hvis du har nogen forespørgsler eller muligheder!
				</p>
				<input
					type='text'
					placeholder='Fulde navn...'
					value={full_name}
					onChange={e => setFullName(e.target.value)}
					className='contact-form-text'
					disabled={isUploading}
				/>

				<input
					className='contact-form-text'
					type='text'
					placeholder='E-mail...'
					value={email}
					onChange={e => setEmail(e.target.value)}
					disabled={isUploading}
				/>

				<input
					type='text'
					placeholder='Besked... (max 500)'
					value={message}
					onChange={e => setMessage(e.target.value)}
					className='contact-form-text'
					disabled={isUploading}
				/>
				<span className='character-limit'>{500 - messageLength}</span>
				<button
					type='button'
					className='contact-btn contact-btn-large'
					disabled={isUploading}
					onClick={handleSubmit}
				>
					SEND
				</button>
			</form>
		</div>
	);
}

function Thankyou({ ToggleContactForm }) {
	return (
		<div className='con-box'>
			<div className='contact-form '>
				<div className='thank-you-box'>
					<p className='contact-box-header'> Sendt! </p>
					<p className='thank-you-box-text'>
						Tak for din besked! <br></br>
						<br></br>Jeg vender tilbage hurtigst muligt.
					</p>

					<button
						type='button'
						className='contact-btn contact-btn-large bottom-btn '
						onClick={ToggleContactForm}
					>
						Tilbage
					</button>
				</div>
			</div>
		</div>
	);
}

export default ContactMe;
