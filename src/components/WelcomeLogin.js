//import Header from "./components/Header";
import { useState } from "react";
import Button from "./Button";

export default function Body() {
	return (
		<>
			<button>
				<Button name="username" />
				<Button name="password" />
				<Button name="register" />
			</button>
		</>
	);
}
