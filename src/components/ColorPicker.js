import { CompactPicker } from "react-color";
import { useState } from "react";

export default function ColorPicker() {
	const [color, setColor] = useState("#fff");
	const [showCirclePicker, setShowCirclePicker] = useState(false);

	return (
		<>
			<button
				onClick={() =>
					setShowCirclePicker((showCirclePicker) => !showCirclePicker)
				}
			>
				{showCirclePicker ? "close compact picker" : "choose a color"}
			</button>
			{showCirclePicker && (
				<CompactPicker
					color={color}
					onChange={(updatedColor) => setColor(updatedColor.hex)}
				/>
			)}
			<h2>Du hast {color} ausgewählt</h2>
		</>
	);
}
