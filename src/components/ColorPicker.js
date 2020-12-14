import { CompactPicker } from "react-color";
import { useState } from "react";
import { upcomingMatchdayToISOString } from "./Date";
import loadLocally from "./lib/loadLocally";

export default function ColorPicker() {
	const [color, setColor] = useState("#fff");
	const [showCirclePicker, setShowCirclePicker] = useState(false);

	const nextFriday = upcomingMatchdayToISOString();
	const participants = loadLocally(nextFriday);
	console.log(participants);
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
					onChange={(updatedColor) => setColor(updatedColor.hex)}
				/>
			)}
			<h2>Du hast {color} ausgewählt</h2>
		</>
	);
}
