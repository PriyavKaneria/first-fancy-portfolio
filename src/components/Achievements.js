import "../styles/Achievements.css"
import React from "react"

let noGsapMobile = window.matchMedia("(min-width: 768px)").matches

class Achievements extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			title: "Hover over an achievement to see details",
			info: "Information regarding the achievement",
		}
		if (!noGsapMobile) {
			this.state = {
				title: "Click over an achievement to see details",
				info: "Information regarding the achievement",
			}
		}
		this.data = [
			{
				key: 0,
				title: "Gold Medal - National Cyber Olympiad",
				info: "Achieved state and school rank 1 in National Cyber Olympiad 2017-18",
				category: "medal",
				type: "gold",
			},
			{
				key: 1,
				title: "Silver Medal - National Cyber Olympiad",
				info: "Achieved school rank 2 in National Cyber Olympiad 2015-16",
				category: "medal",
				type: "silver",
			},
			{
				key: 2,
				title:
					"School Rank 2 - National Science Talent Search Examination 2018-19",
				info: "Achieved school rank 2 in National Science Talent Search Examination",
				category: "medal",
				type: "silver",
			},
			{
				key: 3,
				title:
					"School Rank 1 - National Science Talent Search Examination 2019-20",
				info: "Achieved school rank 1 in National Science Talent Search Examination",
				category: "medal",
				type: "gold",
			},
			{
				key: -1,
			},
			{
				key: 7,
				title: "Winner - Interschool Powerpoint Presentation - 2016",
				info: "Winner of State Level Interschool Powerpoint Presentation at Confluence 2016",
				category: "trophy",
				type: "",
			},
			{
				key: 8,
				title:
					"Best Powerpoint Presentation - Interschool Powerpoint Presentation - 2016",
				info: "Best Powerpoint Presentation of State Level Interschool Powerpoint Presentation at Confluence 2016",
				category: "trophy",
				type: "",
			},
			{
				key: 9,
				title: "3rd Position - Reliance Chess Championship",
				info: "Secured 3rd Position at Chess Tournament held at Reliance Greens Township",
				category: "trophy",
				type: "",
			},
			{
				key: 10,
				title: "2nd Prize - Interhouse Web Designing Competition - 2016",
				info: "Secured 2nd Position in Interhouse Web Designing Competition held at our school",
				category: "certificate",
				type: "1",
			},
			{
				key: 11,
				title: "2nd Prize - Interhouse Web Designing Competition - 2018",
				info: "Secured 2nd Position in Interhouse Web Designing Competition held at our school",
				category: "certificate",
				type: "2",
			},
			{
				key: 12,
				title: "1st Prize - Interhouse Web Designing Competition - 2019",
				info: "Secured 1st Position in Interhouse Web Designing Competition held at our school",
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
