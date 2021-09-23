import "../styles/About.css"
import bolt from "../imgs/bolt.png"
import boltFilled from "../imgs/bolt_filled-min.png"
import circle from "../imgs/circle1.png"
import circleFilled from "../imgs/circle1_filled-min.png"
import heart from "../imgs/heart.png"
import heartFilled from "../imgs/heart_filled-min.png"
import joystick from "../imgs/joystick.png"
import joystickFilled from "../imgs/joystick_filled-min.png"
import stroke1 from "../imgs/stroke1.png"
import stroke1Filled from "../imgs/stroke1_filled-min.png"
import stroke2 from "../imgs/stroke2.png"
import stroke2Filled from "../imgs/stroke2_filled-min.png"
import stroke3 from "../imgs/stroke3.png"
import stroke3Filled from "../imgs/stroke3_filled-min.png"
import stroke4 from "../imgs/stroke4.png"
import stroke4Filled from "../imgs/stroke4_filled-min.png"
import swirl from "../imgs/swirl1.png"
import swirlFilled from "../imgs/swirl1_filled-min.png"
import aot from "../imgs/AOT-min.png"
import aotFilled from "../imgs/AOT_filled-min.png"
import me from "../imgs/me-min.png"
import meFilled from "../imgs/me_filled-min.png"

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
				<img className='aboutMe' src={me} alt="Priyav's best portrait" />
				<div className='overlayleft'>
					<img src={circle} className='o-circle' alt='Decorative imgs' />
					<img src={bolt} className='o-bolt' alt='Decorative imgs' />
					<img src={heart} className='o-heart' alt='Decorative imgs' />
					<img src={joystick} className='o-joystick' alt='Decorative imgs' />
					<img src={aot} className='o-aot' alt='Decorative imgs' />
					<img src={stroke3} className='o-stroke3' alt='Decorative imgs' />
				</div>
			</div>
			<div className='aboutContent'>
				I am Priyav Kaneria, currently pursuing B.Tech in Computer Science &
				Engineering from Motilal Nehru National Institute of Technology. I am a
				focused and determined programmer having good experience in full stack
				software development. I am a desciplined and curious person who loves to
				explore new things. I love handling things in team and work with
				responsibilities on head, with confidence of completion to achieve more.
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
							<img
								className='aboutMe'
								src={meFilled}
								alt="Priyav's best portrait"
							/>
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
									src={aotFilled}
									className='o-aot'
									alt='Decorative imgs'
									style={{
										filter: "drop-shadow(0px 0px 15px #3C6649)",
									}}
								/>
								<img
									src={stroke3Filled}
									className='o-stroke3'
									alt='Decorative imgs'
								/>
							</div>
						</div>
						<div className='aboutContent' style={{ color: "#0400ff" }}>
							So you finally found out the hidden text. Want to know more about
							me?? I love playing chess and developing games in Unity for you
							all to enjoy. I think I can dance and sing well. I even have
							interest in robotics and electronics. I even spend some time in
							refreshing by playing games and watching youtube (from where I
							have acquired most of my knowledge). Feel free to ping me on
							social medias or through mail anytime.
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
