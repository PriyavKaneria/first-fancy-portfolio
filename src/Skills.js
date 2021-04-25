import "./Skills.css"
import React from "react"
import Aos from "aos"
import Frontend from "./imgs/TechIcons/Frontend.svg"
import Backend from "./imgs/TechIcons/Backend.svg"
import Languages from "./imgs/TechIcons/Languages.svg"
import Dbaot from "./imgs/TechIcons/Database and other tools.svg"
import Softskills from "./imgs/TechIcons/Soft Skills.svg"

function Skills() {
	Aos.init()
	return (
		<div className='skills' id='skills'>
			<div className='skill-title'>SKILLS</div>
			<div className='skill-col'>
				<div className='lang'>
					<div className='skill-heading'>Languages</div>
					<object type='image/svg+xml' data={Languages} className='skill-image'>
						languages I know - HTML, CSS, JavaScript, C++ and python
					</object>
				</div>
			</div>
			<div className='skill-col'>
				<div className='front'>
					<div className='skill-heading'>Frontend</div>
					<object type='image/svg+xml' data={Frontend} class='skill-image'>
						Frontend stack - Svelte, React and Elm
					</object>
				</div>
				<div className='back'>
					<div className='skill-heading'>Backend</div>
					<object type='image/svg+xml' data={Backend} class='skill-image'>
						Backend stack - Nodejs, FastAPI, Django and Flask
					</object>
				</div>
				<div className='dbaot'>
					<div className='skill-heading'>Database and other tools</div>
					<object type='image/svg+xml' data={Dbaot} className='skill-image'>
						Database and other tools stack - RabbitMQ, Pusher, postgres, redis,
						MySQL, ArangoDB
					</object>
				</div>
			</div>
			<div className='skill-col'>
				<div className='ss'>
					<div className='skill-heading'>Soft Skills</div>
					<object
						type='image/svg+xml'
						data={Softskills}
						className='skill-image'>
						Soft Skills - Presentation, Leadership, Communication and Project
						Management
					</object>
					<div className='ss-text'>
						<div>Presentation</div>
						<div>Leadership</div>
						<div>Communication</div>
						<div>Project Management</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Skills
