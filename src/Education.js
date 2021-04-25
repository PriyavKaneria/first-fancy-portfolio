import Aos from "aos"
import "aos/dist/aos.css"
import "./Education.css"
import College from "./imgs/College-min.png"
import CollegeIcon from "./imgs/CollegeIcon.svg"
import School2 from "./imgs/School+2-min.png"
import School from "./imgs/School-min.png"

let noGsapMobile = window.matchMedia("(min-width: 768px)").matches

function interactiveShadows(e) {
	if (noGsapMobile) {
		var imgs = document.getElementById("education").getElementsByTagName("img")
		var divs = document.getElementsByClassName("img-handler-top")
		// console.log(imgs);
		for (let i = 0; i < 3; i++) {
			var x = e.clientX
			var y = e.clientY
			var nodeHeight = divs[i].getBoundingClientRect().top
			var nodeWidth = divs[i].getBoundingClientRect().left + 200
			var shadowX = 0
			var shadowY = 0
			shadowX = nodeWidth - x
			shadowY = nodeHeight - y

			shadowX = shadowX / 12
			shadowY = shadowY / 12

			var blur = shadowX / 8
			if (x > nodeWidth * 0.33 && x < nodeWidth * 0.66) {
				blur = shadowY / 8
			}
			if (blur < 0) {
				blur = blur * -1
			}
			shadowY += 10
			imgs[i].style.filter =
				"drop-shadow(3px 3px 0 #b4b4b4) drop-shadow(-3px -3px 0 #b4b4b4) drop-shadow(" +
				shadowX +
				"px " +
				shadowY +
				"px " +
				blur +
				"px #666)"
		}
	}
}

function Education() {
	Aos.init()
	return (
		<div className='education' id='education' onMouseMove={interactiveShadows}>
			<div className='ps-timeline-sec'>
				<div className='container'>
					<ol className='ps-timeline'>
						<li data-aos='fade-right' data-aos-anchor-placement='top-bottom'>
							<div className='img-handler-top'>
								<img src={School} alt='' style={{ width: "40%" }} />
							</div>
							<div className='ps-bot' data-aos='zoom-in' data-aos-delay='200'>
								<p>
									<b>2017-2018</b>
									<br />
									<b>K</b>okilaben <b>D</b>hirubhai <b>A</b>mbani <b>V</b>
									idyamandir
								</p>
							</div>
							<span className='ps-sp-top'>
								10<sup>th</sup>
							</span>
						</li>
						<li
							data-aos='fade-right'
							data-aos-anchor-placement='top-bottom'
							data-aos-delay='200'>
							<div className='img-handler-top'>
								<img src={School2} alt='' style={{ width: "55%" }} />
							</div>
							<div className='ps-bot' data-aos='zoom-in' data-aos-delay='400'>
								<p>
									<b>2019-2020</b>
									<br />
									<b>K</b>okilaben <b>D</b>hirubhai <b>A</b>mbani <b>V</b>
									idyamandir
								</p>
							</div>
							<span className='ps-sp-top'>
								12<sup>th</sup>
							</span>
						</li>
						<li
							data-aos='fade-right'
							data-aos-anchor-placement='top-bottom'
							data-aos-delay='400'>
							<div className='img-handler-top'>
								<img src={College} alt='' style={{ width: "30%" }} />
							</div>
							<div className='ps-bot' data-aos='zoom-in' data-aos-delay='600'>
								<p>
									<b>2020-2024</b>
									<br />
									<b>M</b>otilal <b>N</b>ehru
									<br /> <b>N</b>ational <b>I</b>nstitute of <b>T</b>echnology
								</p>
							</div>
							<span className='ps-sp-top'>
								<img
									src={CollegeIcon}
									alt='college icon'
									style={{ clipPath: "circle(26px)" }}
								/>
							</span>
						</li>
					</ol>
				</div>
			</div>
			<div className='title'>Education</div>
		</div>
	)
}

export default Education
