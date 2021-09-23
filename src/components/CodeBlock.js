import "../styles/CodeBlock.css"
import TypeIt from "typeit-react"

function CodeBlock(props) {
	return (
		<div className='code-container' id={props.blockId}>
			<div className='menubar'>
				<div className='close'></div>
				<div className='tab'></div>
				<div className='minimize'></div>
			</div>
			<div className='code'>
				<code>
					{/* <TypeIt
						options={{
						strings: props.strings,
						speed: 50,
						waitUntilVisible: true,
						lifeLike: true
						}}
					/> */}
					<TypeIt
						getBeforeInit={(instance) => {
							instance
								.pause(props.times[0])
								.type(props.strings[0], { speed: 100 })
								.pause(props.times[1])
								.break()
								.type(props.strings[1], { speed: 100 })

							// Remember to return it!
							return instance
						}}
						options={{
							// cursor:false,
							lifeLike: true,
						}}
					/>
				</code>
			</div>
		</div>
	)
}

export default CodeBlock
