import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 * {  
	 border: none;  
   outline: none;
	}  
 body {
   font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
   margin: 0;
   padding: 0;
   list-style: none;
   text-decoration: none;
   height: 100vh;
   min-width: 320px;
 }
 li{
   list-style: none;
 }
 a {
   text-decoration: none;
 }
 h1, h2, h3, h4, h5, h6, p, ul {
   margin: 0;
   padding: 0;
 }
`;
