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
				<TimelineEvent
					date='May 2020 - Present'
					title='Full Stack Software Developer'
					subtitle='Aztlan Pvt. Ltd.'
					worktitle='Frontend and Backend'
					workdesc='I did this and that in the job'
				/>
				<a href='https://skillpad.io/' target='_blank' rel="noreferrer">
					<TimelineEvent
						date='May 2021 - August 2021'
						title='Frontend Web Developer'
						subtitle='SYMB Techonologies'
						worktitle='Caomplete frontend, Skillpad'
						workdesc='I did this and that in the job'
					/>
				</a>
				<TimelineEvent
					date='Coming Soon...'
					title='Work Title'
					subtitle='Some Company Name'
					worktitle='My work3'
					workdesc='I did this and that in the job'
				/>
				<TimelineEvent
					date='Coming Soon...'
					title='Work Title'
					subtitle='Another Company Name'
					worktitle='My work4'
					workdesc='I did this and that in the job'
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
