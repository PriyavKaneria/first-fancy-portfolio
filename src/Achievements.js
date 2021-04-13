import "./Achievements.css"
import React from "react"

let noGsapMobile = window.matchMedia("(min-width: 768px)").matches

class Achievements extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			title: "Hover over an achievement to see details",
			info: "Information regarding the achievement",
		}
		if(!noGsapMobile){
			this.state = {
				title: "Click over an achievement to see details",
				info: "Information regarding the achievement",
			}
		}
		this.data = [
			{
				key: 0,
				title: "Achievement1",
				info: "I did this and that at here to earn what i earned",
				category: "medal",
				type: "gold",
			},
			{
				key: 1,
				title: "Achievement1",
				info: "I did this and that at here to earn what i earned",
				category: "medal",
				type: "gold",
			},
			{
				key: 2,
				title: "Achievement2",
				info: "I did this and that at here to earn what i earned",
				category: "medal",
				type: "silver",
			},
			{
				key: 3,
				title: "Achievement2",
				info: "I did this and that at here to earn what i earned",
				category: "medal",
				type: "silver",
			},
			{
				key: 4,
				title: "Achievement2",
				info: "I did this and that at here to earn what i earned",
				category: "medal",
				type: "silver",
			},
			{
				key: 5,
				title: "Achievement3",
				info: "I did this and that at here to earn what i earned",
				category: "medal",
				type: "bronze",
			},
			{
				key: -1,
			},
			{
				key: 7,
				title: "Achievement4",
				info: "I did this and that at here to earn what i earned",
				category: "trophy",
				type: "",
			},
			{
				key: 8,
				title: "Achievement5",
				info: "I did this and that at here to earn what i earned",
				category: "trophy",
				type: "",
			},
			{
				key: 9,
				title: "Achievement6",
				info: "I did this and that at here to earn what i earned",
				category: "certificate",
				type: "1",
			},
			{
				key: 10,
				title: "Achievement7",
				info: "I did this and that at here to earn what i earned",
				category: "certificate",
				type: "2",
			},
			{
				key: 11,
				title: "Achievement8",
				info: "I did this and that at here to earn what i earned",
				category: "certificate",
				type: "3",
			},
		]
		this.displaydata = this.displaydata.bind(this)
	}
	displaydata(data) {
		this.setState(() => {
			return { title: data.title, info: data.info }
		})
	}
	render = () => {
		var { title, info } = this.state
		return (
			<div className='achievements' id='achievements'>
				<div className='achieve-title title'>Achievements</div>
				<div className='table-top'>
					{this.data.map((d) => {
						if (d.key === -1) {
							return <br />
						}
						if (d.category === "medal") {
							return (
								<div
									className='achievement'
									id={d.key}
									onMouseEnter={() => this.displaydata(d)}>
									<div className={"glow medal-" + d.type}></div>
								</div>
							)
						} else if (d.category === "trophy") {
							return (
								<div
									className='achievement'
									id={d.key}
									onMouseEnter={() => this.displaydata(d)}
									style={{
										marginTop: "50px",
										marginLeft: "25px",
									}}>
									<div className={"glow trophy"}></div>
									<div className={"trophy-stand"}></div>
								</div>
							)
						} else {
							return (
								<div
									className={"achievement" + d.category}
									id={d.key}
									onMouseEnter={() => this.displaydata(d)}>
									<div className={"glow certificate rotate" + d.type}></div>
								</div>
							)
						}
					})}
				</div>
				<div className='ach-content'>
					<div className='ach-title' id='ach-title'>
						{title}
					</div>
					<div className='ach-info' id='ach-info'>
						{info}
					</div>
				</div>
			</div>
		)
	}
}

export default Achievements
