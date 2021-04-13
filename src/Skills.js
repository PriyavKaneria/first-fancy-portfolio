import "./Skills.css"
import React from "react"
import Aos from "aos"

function Skills() {
	Aos.init()
	return (
		<div className='skills' id='skills'>
			<div className='title'>Skills</div>
			<div className='skill-col'>
				<div className='skill-heading'>Type 1</div>

				<section className='chart-wrapper'>
					<ul className='chart-horizontal'>
						<li
							className='chart-bar'
							style={{ "--dataSkill": "92%" }}
							data-aos='zoom-in-right'
							data-aos-delay='100'>
							<span className='chart-bar-label'>Test Skill #1</span>
						</li>
						<li
							className='chart-bar'
							style={{ "--dataSkill": "23%" }}
							data-aos='zoom-in-right'
							data-aos-delay='250'>
							<span className='chart-bar-label'>Test Skill #2</span>
						</li>
						<li
							className='chart-bar'
							style={{ "--dataSkill": "67%" }}
							data-aos='zoom-in-right'
							data-aos-delay='400'>
							<span className='chart-bar-label'>Test Skill #3</span>
						</li>
					</ul>
				</section>
			</div>
			<div className='skill-col'>
				<div className='skill-heading'>Type 2</div>

				<section className='chart-wrapper'>
					<ul className='chart-horizontal'>
						<li
							className='chart-bar'
							style={{ "--dataSkill": "32%" }}
							data-aos='zoom-in-right'
							data-aos-delay='150'>
							<span className='chart-bar-label'>Test Skill #1</span>
						</li>
						<li
							className='chart-bar'
							style={{ "--dataSkill": "68%" }}
							data-aos='zoom-in-right'
							data-aos-delay='300'>
							<span className='chart-bar-label'>Test Skill #2</span>
						</li>
						<li
							className='chart-bar'
							style={{ "--dataSkill": "99%" }}
							data-aos='zoom-in-right'
							data-aos-delay='450'>
							<span className='chart-bar-label'>Test Skill #3</span>
						</li>
						<li
							className='chart-bar'
							style={{ "--dataSkill": "52%" }}
							data-aos='zoom-in-right'
							data-aos-delay='550'>
							<span className='chart-bar-label'>Test Skill #4</span>
						</li>
					</ul>
				</section>
			</div>
			<div className='skill-col'>
				<div className='skill-heading'>Type 3</div>

				<section className='chart-wrapper'>
					<ul className='chart-horizontal'>
						<li
							className='chart-bar'
							style={{ "--dataSkill": "51%" }}
							data-aos='zoom-in-right'
							data-aos-delay='200'>
							<span className='chart-bar-label'>Test Skill #1</span>
						</li>
						<li
							className='chart-bar'
							style={{ "--dataSkill": "85%" }}
							data-aos='zoom-in-right'
							data-aos-delay='350'>
							<span className='chart-bar-label'>Test Skill #2</span>
						</li>
						<li
							className='chart-bar'
							style={{ "--dataSkill": "68%" }}
							data-aos='zoom-in-right'
							data-aos-delay='500'>
							<span className='chart-bar-label'>Test Skill #3</span>
						</li>
						<li
							className='chart-bar'
							style={{ "--dataSkill": "41%" }}
							data-aos='zoom-in-right'
							data-aos-delay='600'>
							<span className='chart-bar-label'>Test Skill #4</span>
						</li>
						<li
							className='chart-bar'
							style={{ "--dataSkill": "64%" }}
							data-aos='zoom-in-right'
							data-aos-delay='650'>
							<span className='chart-bar-label'>Test Skill #5</span>
						</li>
					</ul>
				</section>
			</div>
		</div>
	)
}

export default Skills
