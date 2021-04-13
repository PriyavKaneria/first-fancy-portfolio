import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { EffectCoverflow, Pagination, Navigation } from "swiper"
import "swiper/swiper.scss"
import "swiper/components/navigation/navigation.scss"
import "swiper/components/effect-coverflow/effect-coverflow.scss"
import "swiper/components/pagination/pagination.scss"
import "./Projects.css"
import bulboff from "./imgs/bulb-off.png"
import bulbon from "./imgs/bulb-on.png"
import React, { useRef, useEffect } from "react"
import gsap, { TweenMax } from "gsap"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import PlaneTop from "./imgs/PlaneTop.svg"

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
						backgroundImage:
							"url(https://swiperjs.com/demos/images/nature-1.jpg)",
					}}>
					<div className='project-detail'></div>
				</SwiperSlide>
				<SwiperSlide
					style={{
						backgroundImage:
							"url(https://swiperjs.com/demos/images/nature-2.jpg)",
					}}>
					<div className='project-detail'></div>
				</SwiperSlide>
				<SwiperSlide
					style={{
						backgroundImage:
							"url(https://swiperjs.com/demos/images/nature-3.jpg)",
					}}>
					<div className='project-detail'></div>
				</SwiperSlide>
				<SwiperSlide
					style={{
						backgroundImage:
							"url(https://swiperjs.com/demos/images/nature-4.jpg)",
					}}>
					<div className='project-detail'></div>
				</SwiperSlide>
				<SwiperSlide
					style={{
						backgroundImage:
							"url(https://swiperjs.com/demos/images/nature-5.jpg)",
					}}>
					<div className='project-detail'></div>
				</SwiperSlide>
				<SwiperSlide
					style={{
						backgroundImage:
							"url(https://swiperjs.com/demos/images/nature-6.jpg)",
					}}>
					<div className='project-detail'></div>
				</SwiperSlide>
				<SwiperSlide
					style={{
						backgroundImage:
							"url(https://swiperjs.com/demos/images/nature-7.jpg)",
					}}>
					<div className='project-detail'></div>
				</SwiperSlide>
				<SwiperSlide
					style={{
						backgroundImage:
							"url(https://swiperjs.com/demos/images/nature-8.jpg)",
					}}>
					<div className='project-detail'></div>
				</SwiperSlide>
				<SwiperSlide
					style={{
						backgroundImage:
							"url(https://swiperjs.com/demos/images/nature-9.jpg)",
					}}>
					<div className='project-detail'></div>
				</SwiperSlide>
				<SwiperSlide
					style={{
						backgroundImage:
							"url(https://swiperjs.com/demos/images/nature-10.jpg)",
					}}>
					<div className='project-detail'></div>
				</SwiperSlide>
			</Swiper>
		</div>
	)
}

export default Projects
