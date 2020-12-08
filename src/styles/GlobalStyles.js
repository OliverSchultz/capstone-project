import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
  box-sizing: border-box;
	min-height: auto;
  
  
}
  
  body {
    background-image: linear-gradient(1200deg, #E1F4FE 0%, #01A1FD 90%);
    border:0;
    display: flex;
    flex-direction: column;
    font-family: sans-serif;
    font-size: 112.5%;
    margin: 0;
    width: 100vw;
    height: 188vw;
    padding:0;
    text-align: center;
  }`;
