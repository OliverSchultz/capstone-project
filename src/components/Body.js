import Button from "./Button";
import CreateAccount from "./src/pages/CreateAccount";

export default function Body() {
	return (
		<>
			<button>
				<Button name="username" />
				<Button name="password" />
				<Button name="register" />
			</button>
			<CreateAccount />
		</>
	);
}
