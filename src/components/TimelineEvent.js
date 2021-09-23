import "../styles/Timeline.css"

function TimelineEvent(props) {
	return (
		<li className='timeline-event'>
			<label className='timeline-event-icon'></label>
			<div className='timeline-event-copy'>
				<p className='timeline-event-thumbnail'>{props.date}</p>
				<h3>{props.title}</h3>
				<h4>{props.subtitle}</h4>
				{/* <p>
					<strong>{props.worktitle}</strong>
					<br />
					{props.workdesc}
				</p> */}
			</div>
		</li>
	)
}

export default TimelineEvent
