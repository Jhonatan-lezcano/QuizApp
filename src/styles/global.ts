import styled, { createGlobalStyle } from "styled-components";

export const colors = {
  background: "#232946",
  buttons: "#eebbc3",
  buttonsText: "#232946",
  paragraph: "#b8c1ec",
  headline: "#fffffe",
  correct: "#078080",
  incorrect: "#f25042",
};

export const fontSize = {
  font10: "1rem",
  font12: "1.2rem",
  font14: "1.4rem",
  font16: "1.6rem",
  font18: "1.8rem",
  font20: "2rem",
  font22: "2.2rem",
  font24: "2.4rem",
  font26: "2.6rem",
  font28: "2.8rem",
  font30: "3rem",
  font32: "3.2rem",
  font34: "3.4rem",
  font36: "3.6rem",
  font38: "3.8rem",
  font48: "4rem",
};

export const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html {
    font-size: 10px;
  }

  h1,h2,h3,h4,h5,h6 {
    color: ${colors.headline};
  }

  p {
    color: ${colors.paragraph};
  }

  .app {
    background: ${colors.background}
  }

  @media (max-width: 1350px) {
    html {
      font-size: 8px;
    }
  }
`;
