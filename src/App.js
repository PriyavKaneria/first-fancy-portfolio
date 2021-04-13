import "./App.css"
import CodeBlock from "./CodeBlock"

function App() {
	var b1strings = ["Hello!", "How are you?"]
	var b1times = [0, 6000]
	var b2strings = ["This is Priyav Kaneria", "Hope you are too!👼🏻"]
	var b2times = [1500, 9500]
	var b3strings = ["You can scroll down now", "Many easter eggs down below😆"]
	var b3times = [15000, 11000]
	var b4strings = ["I am fine", "Come on!...👇🏻"]
	var b4times = [9500, 10000]
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
