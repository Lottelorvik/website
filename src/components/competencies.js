import React, { useState } from 'react';
import '../css/section-competencies.css';

function Competencies() {
	const [show, setShow] = useState(false);

	return (
		<>
			<div className='competencies-div'>
				<div className='competencies-header'>Kompetencer</div>
				<div className='competencies-categories-text popup'>
					<div className='competencies-categories-text-hover' onClick={() => setShow(s => !s)}>
						Web development👇
					</div>
					{show && (
						<div>
							<span className='popup popuptext' id='popup-box'>
								Jeg har lavet blabla og bygget blabla
							</span>
						</div>
					)}
				</div>
			</div>
		</>
	);
}

export default Competencies;
