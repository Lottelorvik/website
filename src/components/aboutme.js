import '../css/aboutme.css';
import lotteimg from '../img/lotteimg.JPG';

function AboutMe() {
	return (
		<div className='container boxtext '>
			<div className='about-me'>
				<div className='boxtext boxes text-box-div'>
					<div className='boxtitle about-me-header about-me-div'>ABOUT ME</div>
					Hi there and welcome to my personal website!<br></br>
					<br></br> My name is Lotte and I'm a passionate front-end developer with a strong desire
					to create visually stunning and interactive web applications. I specialize in using modern
					web technologies and frameworks such as <b id='orangetext'> HTML</b>,{' '}
					<b id='bluetext'>CSS</b>,<b id='yellowtext'> Javascript</b> and{' '}
					<b id='reacttext'>React</b> to create seamless user experiences that not only meet but
					exceed expectations. I have a master from the
					<b> IT-University of Copenhagen</b> where I learned about the importance of creating
					functional and responsive websites that are easy to navigate. I was still hungry to become
					better so I enrolled in a Javascript and multiple React courses which strengthened my
					knowledge even more. I am constantly striving to learn more to enhance my skills and are
					currently seeking new opoprtunities to work with skilled and passionate individuals and
					organizations.
				</div>
				<img className='lotteimg' alt='portræt' src={lotteimg} />
			</div>
		</div>
	);
}

export default AboutMe;
