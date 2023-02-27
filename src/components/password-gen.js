import React, { useState } from 'react';
import '../css/password-gen.css';
import copy from '../icons/copy.png';

function PasswordGenerator() {
	const [numCharacters, setNumCharacters] = useState(8);
	const [includeSymbols, setIncludeSymbols] = useState(false);
	const [generatedPassword, setGeneratedPassword] = useState('');

	function generatePassword(numChars, includeSymbols) {
		const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		const symbols = '!@#$%&';
		let password = '';
		let pool = chars;

		if (includeSymbols) {
			pool += symbols;
		}

		for (let i = 0; i < numChars; i++) {
			const randomIndex = Math.floor(Math.random() * pool.length);
			password += pool[randomIndex];
		}

		return password;
	}

	function handleSubmit(event) {
		event.preventDefault();
		const password = generatePassword(numCharacters, includeSymbols);
		setGeneratedPassword(password);
	}

	function copyText() {
		const el = document.createElement('textarea');
		el.value = generatedPassword;
		document.body.appendChild(el);
		el.select();
		document.execCommand('copy');
		document.body.removeChild(el);
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label>
					Number of characters:
					<input
						type='range'
						min='8'
						max='100'
						value={numCharacters}
						className='slider'
						onChange={event => setNumCharacters(parseInt(event.target.value))}
					/>
					{numCharacters} characters
				</label>
				<br />
				<label>
					Include symbols:
					<input
						type='checkbox'
						checked={includeSymbols}
						onChange={event => setIncludeSymbols(event.target.checked)}
					/>
				</label>
				<br />
				<button type='submit'>Generate Password</button>
			</form>
			<br />
			{generatedPassword && (
				<div>
					<div id='gen-password'>
						<strong>Generated Password:</strong>
						{generatedPassword} <div />
						<button onClick={copyText} className='copy-text-button'>
							<img src={copy} className='copy-icon' />
						</button>
					</div>
				</div>
			)}
		</div>
	);
}

export default PasswordGenerator;
