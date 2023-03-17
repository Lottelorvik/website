import React, { useState } from 'react';
import '../css/lottelorvik.css';

function LotteLorvik() {
	return (
		<section className='outer-introsection' id='home'>
			<div className='image-wrapper'>
				<div className='introsectionbackground'></div>
			</div>
			<div className='background-box'>
				<div className='lotte '>LOTTE</div>
				<div className='lorvik'>LORVIK</div>

				<div>
					<div className='typed-out'>&lt; Front-End Developer &gt;</div>
				</div>
			</div>
			{/* <svg
				width='100%'
				height='100%'
				id='svg'
				viewBox='0 0 1440 390'
				xmlns='http://www.w3.org/2000/svg'
				className='transition duration-300 ease-in-out delay-150 wave-overlay'
			>
				<path
					d='M 0,400 C 0,400 0,200 0,200 C 133.7333333333333,238.66666666666666 267.4666666666666,277.3333333333333 418,273 C 568.5333333333334,268.6666666666667 735.8666666666668,221.33333333333334 909,202 C 1082.1333333333332,182.66666666666666 1261.0666666666666,191.33333333333331 1440,200 C 1440,200 1440,400 1440,400 Z'
					stroke='none'
					stroke-width='0'
					fill='#fcfcfc'
					fill-opacity='1'
					className='transition-all duration-300 ease-in-out delay-150 path-0'
				></path>
			</svg> */}
		</section>
	);
}

export default LotteLorvik;
