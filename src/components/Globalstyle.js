import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0%;
    padding: 0%;
    box-sizing: border-box;
}
html{
    &::-webkit-scrollbar{
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color: lightblue;
    }
}
/* font-family: 'Open Sans', sans-serif;
font-family: 'Squada One', cursive; */
body{
    font-family: 'Open Sans', sans-serif;
    width: 100%;
}
h2{
    font-size: 3rem;
    font-family: 'Squada One', cursive;
    font-weight: lighter;
}
h1{
    font-size: 4rem;
    font-family: 'Squada One', cursive;
    font-weight: lighter; 
}
h3{
    font-size: 1.3rem;
    color: #333;
    padding: 1.5rem 0rem;
}
p{
    font-size: 1.2rem;
    line-height: 200%;
    color: #333;
}
a{
    text-decoration: none;
}
img{
        display: block;
    }
input{
    font-weight: bold;
    font-family: 'Open Sans', sans-serif;
}
 `;

export default GlobalStyle;
