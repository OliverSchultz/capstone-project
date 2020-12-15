import { CompactPicker } from "react-color";
import { useState } from "react";
import { upcomingMatchdayToISOString } from "./Date";
import loadLocally from "./lib/loadLocally";

export default function ColorPicker({ color, updateColor }) {
	const [showCirclePicker, setShowCirclePicker] = useState(false);

	return (
		<>
			<button
				onClick={() =>
					setShowCirclePicker((showCirclePicker) => !showCirclePicker)
				}
			>
				{showCirclePicker ? "close picker" : "choose a color"}
			</button>
			{showCirclePicker && (
				<CompactPicker
					color={color}
					onChange={(updatedColor) => updateColor(updatedColor.hex)}
				/>
			)}
			<p>
				Du hast <span style={{ backgroundColor: color }}>{color}</span>{" "}
				ausgewählt
			</p>
		</>
	);
}
