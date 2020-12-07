import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
  box-sizing: border-box;
  height: fit-content;
	margin: 0;
	padding: 0;
}
  
  body {
    background-image: linear-gradient(120deg, #E1F4FE 0%, #01A1FD 90%);
    border:0;
    display: flex;
    flex-direction: column;
    font-family: sans-serif;
    font-size: 112.5%;
    
    margin: 0;
    max-width: 100vw;
    padding:0;
    text-align: center;
    
    
    
    
  }`;
