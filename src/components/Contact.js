import "../styles/Contact.css"
import TypeIt from "typeit-react"
import React, { useRef, useEffect } from "react"
import gsap, { TweenMax } from "gsap"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import PlaneTop from "../imgs/PlaneTop.svg"

function LanguagesAndContact() {
	gsap.registerPlugin(MotionPathPlugin)
	gsap.registerPlugin(ScrollTrigger)
	let plane = useRef(null)
	let noGsapMobile = window.matchMedia("(min-width: 768px)").matches
	let startVal = "top center"
	let planeCss
	if (noGsapMobile) {
		planeCss = { top: "40px", right: "200px", height: "600px", width: "600px" }
	} else {
		planeCss = { top: "30vh", right: "0", height: "300px", width: "300px" }
		startVal = "top 80%"
	}
	useEffect(() => {
		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: plane,
				// pin: true,
				start: startVal,
				end: "+=300",

				scrub: 1,
			},
		})

		// add animations and labels to the timeline
		tl.add(
			TweenMax.to(plane, 1000, {
				css: planeCss,
			})
		)
	})

	return (
		<div className='LnC'>
			<div
				style={{
					height: "67vh",
					width: "100vw",
					position: "absolute",
					overflow: "hidden",
				}}>
				<img
					src={PlaneTop}
					ref={(el) => {
						plane = el
					}}
					className='plane-contact override-plane'
					alt=''></img>
			</div>
			<div className='fullsize'>
				<div className='small-title'>Languages</div>
				<div className='languages' id='languages'>
					<div className='typer'>
						<TypeIt
							options={{
								loop: true,
								lifeLike: true,
								waitUntilVisible: true,
								loopDelay: null,
							}}
							getBeforeInit={(instance) => {
								instance
									.type("I am fluent in English")
									.pause(1500)
									.delete()
									.type("ગુજરાતી મારી માતૃભાષા છે")
									.break()
									.type(
										"<span className='subtype'>Gujarati is my mother toungue</span>"
									)
									.pause(1500)
									.delete()
									.type("मुझे हिंदी भी आती है", { speed: 70 })
									.break()
									.type(
										"<span className='subtype'>I can speak hindi too</span>"
									)
									.pause(1600)
								return instance
							}}
						/>
					</div>
					<i>English / Gujarati / Hindi</i>
				</div>
			</div>
			<div className='contact' id='contact' style={{ listStyle: "none" }}>
				<li className='icon icon--linkedin'>
					<a
						href='https://www.linkedin.com/in/priyavkaneria'
						target='_blank'
						rel='noreferrer'>
						<span className='icon__name'>LinkedIn</span>
					</a>
				</li>
				<li className='icon icon--github'>
					<a
						href='https://github.com/PriyavKaneria'
						target='_blank'
						rel='noreferrer'>
						<span className='icon__name'>Github</span>
					</a>
				</li>
				<li className='icon icon--gitlab'>
					<a
						href='https://gitlab.com/PriyavKaneria'
						target='_blank'
						rel='noreferrer'>
						<span className='icon__name'>Gitlab</span>
					</a>
				</li>
				<li className='icon icon--gmail'>
					<a
						href='mailto:priyavkaneria+website@gmail.com'
						target='_blank'
						rel='noreferrer'>
						<span className='icon__name'>Mail</span>
					</a>
				</li>
			</div>
		</div>
	)
}

export default LanguagesAndContact
