import { CompactPicker } from "react-color";
import { useState } from "react";
import { upcomingMatchdayToISOString } from "./Date";
import loadLocally from "./lib/loadLocally";
import Button from "./Button";

export default function ColorPicker({ color, updateColor }) {
	const [showCirclePicker, setShowCirclePicker] = useState(false);

	return (
		<>
			<Button
				name="Farbwahl"
				onClick={() =>
					setShowCirclePicker((showCirclePicker) => !showCirclePicker)
				}
			>
				{showCirclePicker ? "close picker" : "choose a color"}
			</Button>
			{showCirclePicker && (
				<CompactPicker
					color={color}
					onChange={(updatedColor) => updateColor(updatedColor.hex)}
				/>
			)}
		</>
	);
}
