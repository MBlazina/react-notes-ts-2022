import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100vh;
  width: 100vw;
}

body {
  font-family: 'Patrick Hand', sans-serif;
  font-size: 1rem;
}

h1 {
  font-size: 4rem;
  line-height: 1.5;
}

h2 {
  font-size: 1.5rem;
  line-height: 1.5;
}

h3{
font-size: 1.25rem;
line-height: 1.5;
}
`;

export default GlobalStyles;
