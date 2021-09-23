import React from "react"
import ReactDOM from "react-dom"
import About from "./components/About"
import Achievements from "./components/Achievements"
import App from "./components/App"
import Education from "./components/Education"
import "./styles/index.css"
import Navbar from "./components/Navbar"
import BezierPathAnim from "./components/BezierPathAnim"
import Projects from "./components/Projects"
import reportWebVitals from "./components/reportWebVitals"
import Skills from "./components/Skills"
import Work from "./components/Work"
import Contact from "./components/Contact"

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
