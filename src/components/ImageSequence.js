import { forwardRef } from "react"
import ImageArray from "./ImageArray"
import Skeleton from './Skeleton'

const ImageSequence = forwardRef(({ progress }, ref) => {
	const newImages = ImageArray()

	let index = Math.round(progress * 1 * (newImages.length - 1))
	let bgposx = "200px"
	let noGsapMobile = window.matchMedia("(min-width: 768px)").matches
	if(!noGsapMobile){
		bgposx = "0px"
	}
	if (newImages[index][1] !== undefined) {
		if (newImages[index][1] === "loading") {
			return <Skeleton width='100%' height='100%' />
		} else {
			return newImages.map((item, i) => (
				<span
					ref={ref}
					key={i}
					style={{
						display: i !== index ? "none" : "block",
						height: "100%",
						width: "100%",
						backgroundImage: `url('${item[0] ? item[0].src : null}')`,
						backgroundRepeat: "no-repeat",
						backgroundPositionX: bgposx,
						zIndex: "1",
					}}
				/>
			))
		}
	}
})

export default ImageSequence