import React, { useState } from 'react';
import '../css/projects.css';
import robogen from '../img/robo-img.jpg';
import robo from '../img/robony.png';
import munch from '../img/gotmunchies.png';

function Projects() {
	return (
		<div className='project-container' id='projects'>
			<div class='rounded'></div>
			<div className='project-header'>Mine projekter</div>
			<div className='project-inner-first'>
				<div className='text'>
					Jeg har lavet en random password generator som ud fra nogle brugerdefinerede parametere
					genererer et stærkt password. Programmet er lavet med React, HTML, CSS, NodeJS og er
					hosted på Netflify. Jeg planlægger at videreudvikle på programmet, så brugeren kan oprette
					en profil og gemme deres password. <br></br>
					<br></br>
					<a className='link' href='https://robo-generator.netlify.app/' target='blank'>
						Åben projektet
					</a>
				</div>
				<img className='project-img' alt='robo-gen' src={robo} />
			</div>

			<div className='project-inner-second'>
				<img className='project-img' alt='munchies' src={munch} />
				<div className='text'>
					Got Munchies var en ide der udsprang af min kærlighed til mad - jeg besluttede derfor at
					bygge en hjemmeside hvor jeg kan smide alle mine opskrifter ind. Så alt indholdet er mine
					egne opskrifter og billeder 🍔 Hjemmesiden er lavet i React, JS, HTML, CSS, Node.js og
					bruger React Router til at navigere på siden. Man kan vælge kategorier af opskrifter man
					vil se. Siden er også hosted på Netflify.
					<br></br>
					<br></br>
					<a className='link' href='https://gotmunchies.netlify.app/' target='blank'>
						Åben projektet
					</a>
				</div>
			</div>
		</div>
	);
}

export default Projects;
