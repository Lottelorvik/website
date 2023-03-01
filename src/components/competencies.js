import React, { useState } from 'react';
import '../css/section-competencies.css';

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

export default Competencies;
