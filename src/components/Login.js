import { useState } from "react";
//import { useHistory } from "react-router-dom";
//import saveLocally from "../../lib/saveLocally";
import styled from "styled-components/macro";

export default function Login() {
	const [loginData, setLoginData] = useState({
		email: "",
		password: "",
	});
	//const history = useHistory();
	return (
		<>
			<FormStyled action="/home">
				<label htmlFor="email" />
				<input
					type="email"
					name="email"
					placeholder="Email"
					onChange={onChange}
					value={loginData.email}
				/>
				<label htmlFor="password" />
				<input
					type="password"
					name="password"
					placeholder="Password"
					onChange={onChange}
					value={loginData.password}
				/>
			</FormStyled>
		</>
	);
	function onChange(event) {
		setLoginData({
			...loginData,
			[event.target.name]: event.target.value,
		});
	}
	function loginUser(event) {
		event.preventDefault();
	}
}
const FormStyled = styled.form`
	margin: 2em;
	padding: 4.5em 2em 3.6em;
	box-shadow: 4px 4px 18px hsla(0, 0%, 0%, 0.3);
	border-radius: 20px;
	input {
		width: 100%;
		margin-bottom: 2em;
		padding: 0.7em 0;
		border: 0;
		border-bottom: 1px solid #d3d3d3;
	}
	input::placeholder {
		font-size: 1.2em;
		color: #d3d3d3;
	}
`;
