import "../styles/App.css"
import CodeBlock from "./CodeBlock"

function App() {
	var b1strings = ["Hello!", "I am Priyav Kaneria"]
	var b1times = [0, 1500]
	var b2strings = ["How are you?", "I am fine"]
	var b2times = [6000, 2000]
	var b3strings = ["Hope you are too!👼🏻", "You can scroll down now"]
	var b3times = [9500, 1000]
	var b4strings = ["Come on!...👇🏻", "Many easter eggs down below😆"]
	var b4times = [14000, 3000]
	return (
		<div className='App'>
			<CodeBlock blockId='block1' strings={b1strings} times={b1times} />
			<CodeBlock blockId='block2' strings={b2strings} times={b2times} />
			<CodeBlock blockId='block3' strings={b3strings} times={b3times} />
			<CodeBlock blockId='block4' strings={b4strings} times={b4times} />
		</div>
	)
}

export default App
