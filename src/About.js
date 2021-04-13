import "./About.css"
import bolt from "./imgs/bolt.png"
import boltFilled from "./imgs/bolt_filled.png"
import circle from "./imgs/circle1.png"
import circleFilled from "./imgs/circle1_filled.png"
import heart from "./imgs/heart.png"
import heartFilled from "./imgs/heart_filled.png"
import joystick from "./imgs/joystick.png"
import joystickFilled from "./imgs/joystick_filled.png"
import stroke1 from "./imgs/stroke1.png"
import stroke1Filled from "./imgs/stroke1_filled.png"
import stroke2 from "./imgs/stroke2.png"
import stroke2Filled from "./imgs/stroke2_filled.png"
import stroke3 from "./imgs/stroke3.png"
import stroke3Filled from "./imgs/stroke3_filled.png"
import stroke4 from "./imgs/stroke4.png"
import stroke4Filled from "./imgs/stroke4_filled.png"
import swirl from "./imgs/swirl1.png"
import swirlFilled from "./imgs/swirl1_filled.png"

let noGsapMobile = window.matchMedia("(min-width: 768px)").matches

function MaskMouseMove(e) {
	if (noGsapMobile) {
		var offtop = document.scrollingElement.scrollTop
		var offleft = document.scrollingElement.scrollLeft
		var height = Math.max(
			document.documentElement.clientHeight,
			window.innerHeight || 0
		)
		height = (height * 110) / 100
		document.getElementById("mask").style.clipPath = `circle(60px at ${
			e.clientX - offleft
		}px ${e.clientY + offtop - height}px)`
	}
}

function MaskLeaveOver(e) {
	if (noGsapMobile) {
		document.getElementById("mask").style.clipPath = `circle(0px)`
	}
}

function About() {
	return (
		<div
			className='About'
			id='about'
			onMouseMove={MaskMouseMove}
			onMouseLeave={MaskLeaveOver}>
			<div className='aboutImage'>
				👨🏻‍💻
				<div className='overlayleft'>
					<img src={circle} className='o-circle' alt='Decorative imgs' />
					<img src={bolt} className='o-bolt' alt='Decorative imgs' />
					<img src={heart} className='o-heart' alt='Decorative imgs' />
					<img src={joystick} className='o-joystick' alt='Decorative imgs' />
					<img src={stroke3} className='o-stroke3' alt='Decorative imgs' />
				</div>
			</div>
			<div className='aboutContent'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
				mollitia, molestiae quas vel sint commodi repudiandae consequuntur
				voluptatum laborum numquam blanditiis harum quisquam eius sed odit
				fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
				accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
				molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
				officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
				nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
				error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis
				modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias
				error harum maxime adipisci amet laborum. Perspiciatis minima nesciunt
				dolorem! Officiis iure rerum voluptates a cumque velit quibusdam sed
				amet tempora. Sit laborum ab, eius fugit doloribus tenetur fugiat,
				temporibus enim commodi iusto libero magni deleniti quod quam
				consequuntur.
				<div className='overlayright'>
					<img src={swirl} className='o-swirl' alt='Decorative imgs' />
					<img src={stroke4} className='o-stroke4' alt='Decorative imgs' />
					<img src={stroke2} className='o-stroke2' alt='Decorative imgs' />
					<img src={stroke1} className='o-stroke1' alt='Decorative imgs' />
				</div>
			</div>
			<div className='hero' id='hero'>
				<div className='mask' id='mask'>
					<div className='About'>
						<div className='aboutImage'>
							🙆🏻‍♂️
							<div className='overlayleft'>
								<img
									src={circleFilled}
									className='o-circle'
									alt='Decorative imgs'
								/>
								<img
									src={boltFilled}
									className='o-bolt'
									alt='Decorative imgs'
								/>
								<img
									src={heartFilled}
									className='o-heart'
									alt='Decorative imgs'
								/>
								<img
									src={joystickFilled}
									className='o-joystick'
									alt='Decorative imgs'
								/>
								<img
									src={stroke3Filled}
									className='o-stroke3'
									alt='Decorative imgs'
								/>
							</div>
						</div>
						<div className='aboutContent'>
							Some other hidden text behind the actual text for some fun in the
							website. This took a lot of time to make.Some other hidden text
							behind the actual text for some fun in the website. This took a
							lot of time to make.Some other hidden text behind the actual text
							for some fun in the website. This took a lot of time to make.Some
							other hidden text behind the actual text for some fun in the
							website. This took a lot of time to make.Some other hidden text
							behind the actual text for some fun in the website. This took a
							lot of time to make.Some other hidden text behind the actual text
							for some fun in the website. This took a lot of time to make.Some
							other hidden text behind the actual text for some fun in the
							website. This took a lot of time to make.Some other hidden text
							behind the actual text for some fun in the website. This took a
							lot of time to make.Some other hidden text behind the actual text
							for some fun in the website. This took a lot of time to make.Some
							other hidden text behind the actual text for some fun in the
							website. This took a lot of time to make.
							<div className='overlayright'>
								<img
									src={swirlFilled}
									className='o-swirl'
									alt='Decorative imgs'
								/>
								<img
									src={stroke4Filled}
									className='o-stroke4'
									alt='Decorative imgs'
								/>
								<img
									src={stroke2Filled}
									className='o-stroke2'
									alt='Decorative imgs'
								/>
								<img
									src={stroke1Filled}
									className='o-stroke1'
									alt='Decorative imgs'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
