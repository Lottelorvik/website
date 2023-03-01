import React, { useState } from 'react';
import '../css/password-gen.css';
import copy from '../icons/copy.png';

function PasswordGenerator() {
	const [numCharacters, setNumCharacters] = useState(8);
	const [includeSymbols, setIncludeSymbols] = useState(false);
	const [generatedPassword, setGeneratedPassword] = useState('');
	const [copied, setCopied] = useState(false);

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
		setCopied(true);
	}

	return (
		<div className='container'>
			<div className='password-generator-con'>
				<form onSubmit={handleSubmit}>
					<label>
						<div className='no-characters-text'>Number of characters:</div>
						<input
							type='range'
							min='8'
							max='100'
							value={numCharacters}
							className='slider'
							onChange={event => setNumCharacters(parseInt(event.target.value))}
						/>
						<div className='all-text'>{numCharacters} characters</div>
					</label>
					<br />
					<label>
						<div className='all-text'>Include symbols:</div>

						<input
							type='checkbox'
							checked={includeSymbols}
							onChange={event => setIncludeSymbols(event.target.checked)}
						/>
					</label>

					<br />
					<button type='submit' className='pas-btn'>
						Generate Password
					</button>
				</form>
				<br />
				{generatedPassword && (
					<div className='all-text'>
						<div id='gen-password'>
							<strong>Generated Password: </strong>
							{generatedPassword} <div />
							<button onClick={copyText} className='copy-icon'>
								<img src={copy} />
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default PasswordGenerator;
