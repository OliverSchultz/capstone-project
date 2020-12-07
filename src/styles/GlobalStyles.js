import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
  box-sizing: border-box;
	margin: 0;
	padding: 0;
}
  
  body {
    background-image: linear-gradient(120deg, #f6d365 0%, #fda085 90%);
    max-width: 100vw;
    padding:0;
    border:0;
    margin: 0;
    font-size: 112.5%;
    font-family: sans-serif;
  }`;
