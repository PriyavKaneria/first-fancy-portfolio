import React from "react"
import ReactDOM from "react-dom"
import About from "./About"
import Achievements from "./Achievements"
import App from "./App"
import Education from "./Education"
import "./index.css"
import Navbar from "./Navbar"
import BezierPathAnim from "./BezierPathAnim"
import Projects from "./Projects"
import reportWebVitals from "./reportWebVitals"
import Skills from "./Skills"
import Work from "./Work"
import Contact from "./Contact"

ReactDOM.render(
	<React.StrictMode>
		<Navbar />
		<BezierPathAnim />
		<App />
		<About />
		<Work />
		<Education />
		<Skills />
		<Projects />
		<Achievements />
		<Contact />
	</React.StrictMode>,
	document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
