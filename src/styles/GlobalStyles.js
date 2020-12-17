import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
  box-sizing: border-box;
	min-height: auto;
  margin:0;
  
  
}
  
  body {
    background-image: linear-gradient(120deg, #E1F4FE 0%, #01A1FD 90%);
    background-repeat: none;
    border:0;
    display: flex;
    flex-direction: column;
    font-family: sans-serif;
    font-size: 112.5%;
    margin: 18px 0px 0px 0px;
  
    height: 300vw;
    padding:0;
    text-align: center;
      h3{
        margin: 0;
      }
  }`;
