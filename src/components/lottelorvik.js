import React, { useState } from 'react';
import '../css/lottelorvik.css';

function LotteLorvik() {
	return (
		<section className='outer-introsection'>
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
		</section>
	);
}

export default LotteLorvik;
