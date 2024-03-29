import React, { useRef, useState, useEffect } from 'react';
import '../css/math-quiz.css';

function Mathquiz() {
	const [num1, setNum1] = useState(Math.floor(Math.random() * 10));
	const [num2, setNum2] = useState(Math.floor(Math.random() * 10));
	// const [color, setColor] = usestate('green'); // MANGLER
	const [userAnswer, setUserAnswer] = useState('');
	const [feedback, setFeedback] = useState('');
	const [score, setScore] = useState(0);
	const [attempts, setAttemps] = useState(0);
	const [isDivVisible, setIsDivVisible] = useState(false);
	const [quizComplete, setQuizComplete] = useState(false);
	const [seconds, setSeconds] = useState(20);
	const [showStartButton, setShowStartButton] = useState(true);
	const [showQuizTitle, setShowQuizTitle] = useState(true);

	const handleStartClick = () => {
		setIsDivVisible(true);
		setShowStartButton(false);
		setSeconds(20);
		setShowQuizTitle(true);
	};

	useEffect(() => {
		let countdown;

		if (isDivVisible) {
			countdown = setInterval(() => {
				setSeconds(seconds => seconds - 1);
			}, 1000);
		}

		if (seconds === 0) {
			clearInterval(countdown);
			setQuizComplete(true);
			setIsDivVisible(false);
			setShowStartButton(false);
		}

		return () => clearInterval(countdown);
	}, [isDivVisible, seconds]);

	// const handleTimerEnd = () => {
	// 	setQuizComplete(true);
	// 	setIsDivVisible(false);
	// };

	const handleRetry = () => {
		setQuizComplete(false);
		setIsDivVisible(false);
		setScore(0);
		setAttemps(0);
		setShowStartButton(true);
	};

	const handleSubmit = e => {
		e.preventDefault();
		const sum = num1 + num2;
		if (parseInt(userAnswer) === sum) {
			setFeedback('Correct!');
			setUserAnswer('');
			setScore(score + 1);
			setAttemps(attempts + 1);
			setNum1(Math.floor(Math.random() * 100));
			setNum2(Math.floor(Math.random() * 10));
			// setColor('green');
		} else if (attempts > 9) {
			if (score >= 8) {
				setFeedback('You won 🥳');
				setAttemps(10);
				setUserAnswer('');
				// setColor('red');
			} else if (score <= 8) {
				setFeedback('You lost. Try again! 🥳');
				setAttemps(10);
				setUserAnswer('');
				// setColor('red');
			}
		} else {
			setFeedback('Incorrect!');
			setAttemps(attempts + 1);
			setUserAnswer('');
			// setColor('red');
		}
	};

	return (
		<div className='quiz-container'>
			<div className='quiz-container2'>
				<div>
					{showStartButton && showQuizTitle && (
						<>
							<div className='quiz-header'>Math quiz!</div>
							<div className='quiz-title'>Get as many as you can in 20 seconds!</div>
							<button className='quiz-btn' onClick={handleStartClick}>
								<div className='start-btn'>Start</div>
							</button>
						</>
					)}
				</div>

				{isDivVisible && (
					<div className='quiz-inner-box'>
						<p className='quiz-numbers'>
							{num1} + {num2}
						</p>
						<form onSubmit={handleSubmit}>
							<input
								type='text'
								value={userAnswer}
								placeholder='your answer...'
								onChange={e => setUserAnswer(e.target.value)}
							/>

							<button type='submit' className='quiz-btn'>
								<p className='quiz-btn-text'>ENTER! </p>
							</button>
						</form>

						<p className='score-attempts'>
							Score: {score} <br></br> Attempts: {attempts}
						</p>
						<div className='seconds'> {seconds} seconds left</div>
						{/* {(feedback.state.color === 'red') } */}
					</div>
				)}
				{quizComplete && (
					<div className='quiz-inner-box'>
						<p className='quiz-end-text'>
							<strong>Good job!</strong> <br></br>
							You got {score} calculations right on {attempts} attempts and therefore got{' '}
							{((score / attempts) * 100).toFixed(0)}% right!!
						</p>
						<button className='quiz-btn quiz-btn-text' onClick={handleRetry}>
							Try again
						</button>
					</div>
				)}
			</div>
		</div>
	);
}

export default Mathquiz;
