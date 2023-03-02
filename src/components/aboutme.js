import '../css/aboutme.css';
import lotteimg from '../img/lotteimg.JPG';

function AboutMe() {
	return (
		<div className='container boxtext '>
			<div className='about-me'>
				<img className='lotteimg' alt='portræt' src={lotteimg} />
				<div className='boxtext boxes text-box-div'>
					<div className='boxtitle about-me-header about-me-div'>OM MIG</div>
					<h3>Hej og velkommen til min personlige hjemmeside! 👋 </h3>
					<br></br>Mit navn er Lotte og jeg er en passioneret frontendudvikler hvis drivkraft ligger
					i at lave interaktive webapplikationer der er visuelt appellerende og brugervenlige. Jeg
					arbejder med moderne webteknologier og frameworks såsom HTML, CSS, Javascript og React.
					Jeg har en kandidatgrad fra IT-Universitetet i København hvor jeg lærte at lave
					funktionelle og responsive hjemmesider, der er lette at navigere i. Jeg var dog stadig
					sulten efter at blive dygtigere og jeg har derfor taget flere kurser inden for Javascript
					og React, som styrkede mine kompetencer endnu mere. Jeg bestræber mig konstant efter at
					blive bedre og det er vigtigt for mig at holde mig ajour med nyeste teknologier og best
					practices. Jeg leder på nuværende tidspunkt efter nye muligheder for at arbejde med
					dygtige og passionerede mennesker <br></br>
					<br></br>
					<a
						className='cv'
						href='https://drive.google.com/file/d/11mPmiwdubxIjhFEsfKw1XXyJT6dD69N-/view?usp=sharing'
						target='blank'
					>
						Se mit CV
					</a>
				</div>
			</div>
		</div>
	);
}

export default AboutMe;
