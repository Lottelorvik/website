import React, { useState } from 'react';
import '../css/lottelorvik.css';

function LotteLorvik() {
	return (
		<div className='background-box'>
			{/* <video src={backgroundvideo} autoPlay loop muted> */}
			<div className='lotte '>LOTTE</div>
			<div className='lorvik'>LORVIK</div>
			<hr></hr>
			<div>
				<div className='typed-out'>&lt; Front-End Developer &gt;</div>
			</div>
		</div>
	);
}

export default LotteLorvik;
