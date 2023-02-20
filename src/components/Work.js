import { Controller, Scene } from "react-scrollmagic"
import Sequence from "./ImageSequence"
import "../styles/Timeline.css"
import TimelineEvent from "./TimelineEvent"
import React, { useRef, useEffect } from "react"
import gsap, { TweenMax } from "gsap"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import PlaneTop from "../imgs/PlaneTop.svg"

function Timeline() {
	const ref = useRef()
	let noGsapMobile = window.matchMedia("(min-width: 768px)").matches
	gsap.registerPlugin(MotionPathPlugin)
	gsap.registerPlugin(ScrollTrigger)
	let plane = useRef(null)
	useEffect(() => {
		if (noGsapMobile) {
			let tl = gsap.timeline({
				scrollTrigger: {
					trigger: plane,
					// pin: true,
					start: "top center",
					end: "+=600",

					scrub: 1,
				},
			})

			// add animations and labels to the timeline
			tl.add(
				TweenMax.to(plane, 1000, {
					css: { top: "50vh", left: "-120vw", height: "200px", width: "200px" },
				})
			)
		}
	})
	return (
		<div className='work' id='work'>
			<div style={{ height: 0, position: "absolute", right: "-100px" }}>
				<img
					src={PlaneTop}
					ref={(el) => {
						plane = el
					}}
					className='plane-contact'
					alt=''></img>
			</div>
			<ul className='timeline'>
				<a
					href='https://www.linkedin.com/company/symb-technologies/'
					target='_blank'
					rel='noreferrer'>
					<TimelineEvent
						date='May 2021 - August 2021'
						title='Web Developer'
						subtitle='SYMB Techonologies'
						worktitle=''
						workdesc={`• Developed a skill testing platform, Skillpad website using NextJs & NodeJs
• Programmed & optimized web scrapper to collect detailed & formatted Properties' data of particular location`}
					/>
				</a>
				<TimelineEvent
					date='May 2020 - June 2022'
					title='Software Development Intern'
					subtitle='Aztlan Pvt. Ltd.'
					worktitle=''
					workdesc={`• Developed 4 products handling Backend (FastAPI, PostgreSQL), Frontend (NextJs, Svelte, Tailwind CSS) & Database (ArangoDB, PostgreSQL).
• Delivered 3 products as Product lead servicing clients managing DevOps & Frontend-Backend Hosting.
• Designed database schema, built APIs & integrated with frontend.
• Hired potential candidates for frontend team of this startup.`}
				/>
				<TimelineEvent
					date='Aug 2022 - Present'
					title='Web System Administrator'
					subtitle='Motilal Nehru National Institute Of Technology'
					worktitle=''
					workdesc='Managing the Registrations, Admissions, Examinations, Results, and data with a team under the Dean Academics'
				/>
				<TimelineEvent
					date='Jan 2022 - Present'
					title='Full Stack Developer'
					subtitle='PureML'
					worktitle='My work4'
					workdesc={`• Designed and optimized schema for the application
• Built complete backend application compatible for CLI and web in FastAPI, Nodejs as well as GoLang
• Managing production deployment`}
				/>
			</ul>
			<div className='heading'>
				W<br />O<br />R<br />K
			</div>
			<div className='heading-resp'>W O R K</div>
			<div className='ImageSequence'>
				<Controller>
					<Scene duration='100%' triggerHook='onLeave' pin>
						{(progress) => (
							<div
								style={{
									position: "relative",
									height: "100%",
									width: "100%",
									left: "0",
									inset: "0px auto auto 0px",
								}}>
								<Sequence ref={ref} progress={progress} />
							</div>
						)}
					</Scene>
				</Controller>
			</div>
		</div>
	)
}

export default Timeline
