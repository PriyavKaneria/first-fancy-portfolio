import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { EffectCoverflow, Pagination, Navigation } from "swiper"
import "swiper/swiper.scss"
import "swiper/components/navigation/navigation.scss"
import "swiper/components/effect-coverflow/effect-coverflow.scss"
import "swiper/components/pagination/pagination.scss"
import "../styles/Projects.css"
import bulboff from "../imgs/bulb-off-min.png"
import bulbon from "../imgs/bulb-on-min.png"
import React, { useRef, useEffect } from "react"
import gsap, { TweenMax } from "gsap"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import PlaneTop from "../imgs/PlaneTop.svg"

import SS1 from "../imgs/Projects/SS1-min.png"
import SS2 from "../imgs/Projects/SS2-min.png"
import SS3 from "../imgs/Projects/SS3-min.png"
import SS4 from "../imgs/Projects/SS4-min.png"
import SS5 from "../imgs/Projects/SS5-min.png"
import SS6 from "../imgs/Projects/SS6-min.png"
import SS7 from "../imgs/Projects/SS7-min.png"
import SS8 from "../imgs/Projects/SS8-min.png"
import SS9 from "../imgs/Projects/SS9-min.png"

SwiperCore.use([Navigation, EffectCoverflow, Pagination])

function Projects() {
	gsap.registerPlugin(MotionPathPlugin)
	gsap.registerPlugin(ScrollTrigger)
	let plane = useRef(null)
	let noGsapMobile = window.matchMedia("(min-width: 768px)").matches
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
					css: {
						top: "50vh",
						right: "-120vw",
						height: "200px",
						width: "200px",
					},
				})
			)
		}
	})
	return (
		<div className='projects' id='projects'>
			<div style={{ height: 0, position: "absolute", left: "-100px" }}>
				<img
					src={PlaneTop}
					ref={(el) => {
						plane = el
					}}
					className='plane'
					alt=''></img>
			</div>
			<div className='title override-title'>Projects</div>
			<div className='bulb'>
				<img src={bulboff} className='bulboff' alt='' />
				<img src={bulbon} className='bulbon' alt='' />
			</div>
			<Swiper
				effect='coverflow'
				pagination={{ clickable: true }}
				grabCursor={true}
				centeredSlides={true}
				mousewheel={true}
				// autoplay={{
				// 	delay: 2500,
				// 	disableOnInteraction: false,
				// }}
				// loop={true}
				slidesPerView='auto'
				coverflowEffect={{
					rotate: 50,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows: true,
				}}
				navigation>
				<SwiperSlide
					style={{
						backgroundImage: `url(${SS1})`,
					}}>
					<div className='project-detail text-white'>
						<div className='project-title'>Dev-Assist</div>
						<div className='project-context'>
							TreeHacks 2021 hackathon project based on code assistant for
							developers
							<br />
							<u>
								Using React, Web scraping <br />
								(Python Selenium) - 2021
							</u>
						</div>
						<a
							href='https://github.com/PriyavKaneria/Dev-Assist'
							target='_blank'
							rel='noreferrer'>
							<div className='project-github' />
						</a>
						<a
							href='https://priyavkaneria.github.io/Dev-Assist/'
							target='_blank'
							rel='noreferrer'>
							<div className='project-link' />
						</a>
					</div>
				</SwiperSlide>
				<SwiperSlide
					style={{
						backgroundImage: `url(${SS2})`,
					}}>
					<div className='project-detail'>
						<div className='project-title'>protectHER & SOS-safeOsecure</div>
						<div className='project-context'>
							Hack36 hackathon project based on providing a easy to use SOS
							platform and emergency alert platform for security
							<br />
							<u>Using React, Firebase and Browser information - 2021</u>
						</div>
						<a
							href='#none'
							onClick={() => {
								window.open("https://github.com/PriyavKaneria/protectHER")
								window.open("https://github.com/PriyavKaneria/sos-safeosecure")
							}}>
							<div className='project-github' />
						</a>
						<a
							href='#none'
							onClick={() => {
								window.open("https://protectHER.netlify.app")
								window.open("https://SOS-safeOsecure.netlify.app")
							}}>
							<div className='project-link' />
						</a>
					</div>
				</SwiperSlide>
				<SwiperSlide
					style={{
						backgroundImage: `url(${SS3})`,
					}}>
					<div className='project-detail'>
						<div className='project-title'>1to50 game Hack</div>
						<div className='project-context'>
							A python project that can finish the 1to50 game in under 2
							seconds!
							<br />
							<u>Using OCR and mouse control - 2020</u>
						</div>
						<a
							href='https://github.com/PriyavKaneria/1to50-game-hack'
							target='_blank'
							rel='noreferrer'>
							<div className='project-github' />
						</a>
					</div>
				</SwiperSlide>
				<SwiperSlide
					style={{
						backgroundImage: `url(${SS4})`,
					}}>
					<div className='project-detail text-white'>
						<div className='project-title'>Schedule It!!</div>
						<div className='project-context'>
							A python project for scheduling an idealistic time table made for
							CBSE boards 2019-20
							<br />
							<u>Using TKinter - 2019</u>
						</div>
						<a
							href='https://github.com/PriyavKaneria/Schedule-It'
							target='_blank'
							rel='noreferrer'>
							<div className='project-github' />
						</a>
					</div>
				</SwiperSlide>
				<SwiperSlide
					style={{
						backgroundImage: `url(${SS5})`,
					}}>
					<div className='project-detail'>
						<div className='project-title'>Ordocorp</div>
						<div className='project-context'>
							Organ Donation Corporation - A responsive website made for
							web-designing competition 2019
							<br />
							<u>Using vanilla HTML, CSS and JavaScript - 2019</u>
						</div>
						<a
							href='https://github.com/PriyavKaneria/Ordocorp'
							target='_blank'
							rel='noreferrer'>
							<div className='project-github' />
						</a>
						<a
							href='https://priyavkaneria.github.io/Ordocorp/'
							target='_blank'
							rel='noreferrer'>
							<div className='project-link' />
						</a>
					</div>
				</SwiperSlide>
				<SwiperSlide
					style={{
						backgroundImage: `url(${SS6})`,
					}}>
					<div className='project-detail'>
						<div className='project-title'>Elm Todo-app</div>
						<div className='project-context'>
							A project made for learning functional programming language Elm
							<br />
							<u>Using Elm - 2021</u>
						</div>
						<a
							href='https://github.com/PriyavKaneria/Elm-todo-app'
							target='_blank'
							rel='noreferrer'>
							<div className='project-github' />
						</a>
						<a
							href='https://priyavkaneria.github.io/Elm-Todo-App'
							target='_blank'
							rel='noreferrer'>
							<div className='project-link' />
						</a>
					</div>
				</SwiperSlide>
				<SwiperSlide
					style={{
						backgroundImage: `url(${SS7})`,
					}}>
					<div className='project-detail text-white'>
						<div className='project-title'>Cyber Security</div>
						<div className='project-context'>
							Another website made for Google Web-Rangers competition
							<br />
							<u>Using vanilla HTML, CSS and JavaScript - 2019</u>
						</div>
						<a
							href='https://github.com/PriyavKaneria/Cyber-Security-WebDev'
							target='_blank'
							rel='noreferrer'>
							<div className='project-github' />
						</a>
						<a
							href='https://priyavkaneria.github.io/Cyber-Security-WebDev'
							target='_blank'
							rel='noreferrer'>
							<div className='project-link' />
						</a>
					</div>
				</SwiperSlide>
				<SwiperSlide
					style={{
						backgroundImage: `url(${SS8})`,
					}}>
					<div className='project-detail text-white'>
						<div className='project-title'>202020 - EyeSafe</div>
						<div className='project-context'>
							A python project made in 2020 which can be used to safeguard our
							eyes by making us watch 20m away for 20s each 20min
							<br />
							<u>Using python and win32 - 2020</u>
						</div>
						<a
							href='https://github.com/PriyavKaneria/202020-Eyesafe-project'
							target='_blank'
							rel='noreferrer'>
							<div className='project-github' />
						</a>
					</div>
				</SwiperSlide>
				<SwiperSlide
					style={{
						backgroundImage: `url(${SS9})`,
					}}>
					<div className='project-detail'>
						<div className='project-title'>Python Mini games</div>
						<div className='project-context'>
							Many classic python mini games like Snakes, Tic Tac Toe, Space
							Invaders, Frogger etc made while learning python
							<br />
							<u>Using python - 2018-19</u>
						</div>
						<a
							href='https://github.com/PriyavKaneria/Python-mini-games'
							target='_blank'
							rel='noreferrer'>
							<div className='project-github' />
						</a>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	)
}

export default Projects
