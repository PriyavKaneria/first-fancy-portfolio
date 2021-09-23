import React, { useRef, useEffect } from "react"
import gsap, { TweenMax } from "gsap"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import PlaneTop from "../imgs/PlaneTop.svg"

function ContactPlane() {
	gsap.registerPlugin(MotionPathPlugin)
	gsap.registerPlugin(ScrollTrigger)
	let noGsapMobile = window.matchMedia("(min-width: 768px)").matches
	let plane = useRef(null)
	var flightpath = {
		entry: {
			path: [
				{ x: 0, y: 0 },
				{ x: 114.94, y: 302.57 },
				{ x: 879.57, y: 682.48 },
				{ x: 909, y: 455.5 },
				{ x: 941.13, y: 207.65 },
				{ x: 563.45, y: 452.48 },
				{ x: 847.5, y: 556.5 },
				{ x: 1131.55, y: 660.52 },
				{ x: 1143.41, y: 611.7 },
				{ x: 1600, y: 632 },
			],
			align: true,
			autoRotate: true,
			type: "cubic",
			curviness: 1.25,
			resolution: 24,
		},
	}
	console.log(flightpath.entry.path)
	useEffect(() => {
		if (noGsapMobile) {
			let tl = gsap.timeline({
				scrollTrigger: {
					trigger: plane,
					// pin: true,
					start: "top top",
					end: "+=800",

					scrub: 1,
				},
			})

			// add animations and labels to the timeline
			tl.add(
				TweenMax.to(plane, 1000, {
					css: { motionPath: flightpath.entry },
				})
			)
		}
	})

	return (
		<div className='contact-plane'>
			<div>
				<img
					src={PlaneTop}
					ref={(el) => {
						plane = el
					}}
					className='plane'
					style={{ transform: "rotate(45deg)", x: -100, y: 0 }}
					alt=''></img>
			</div>
		</div>
	)
}

export default ContactPlane
