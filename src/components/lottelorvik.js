import React, { useState } from 'react';
import '../css/lottelorvik.css';
import bgvid from '../img/lines.mp4';

function LotteLorvik() {
	return (
		// <div>
		// 	<video id='myVideo' playsinline='playsinline' autoplay='autoplay' muted='muted' loop='loop'>
		// 		<source src={bgvid} type='video/mp4' />
		// 	</video>

		// 	<header class='viewport-header'>
		// 		<div className='lorvik'>LOTTE LORVIK</div>
		// 	</header>
		// </div>
		<section className='outer-introsection' id='home'>
			<div className='image-wrapper'>
				<div className='introsectionbackground'></div>
			</div>
			<div className='background-box'>
				<div className='lotte '>LOTTE LORVIK</div>
				{/* <div className='lorvik'>LORVIK</div> */}

				<div>
					<div className='typed-out'>&lt; Front-End Developer &gt;</div>
				</div>
			</div>
		</section>
	);
}

export default LotteLorvik;
