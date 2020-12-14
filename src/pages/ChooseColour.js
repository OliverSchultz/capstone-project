import Header from "../components/Header";
import ColorPicker from "../components/ColorPicker";

export default function ChooseColor() {
	const pageHeader = "Wähle die Form deiner Vernichtung";
	return (
		<>
			<Header datatransport={pageHeader} />
			<ColorPicker />
		</>
	);
}
