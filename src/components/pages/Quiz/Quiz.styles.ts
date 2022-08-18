import styled from "styled-components";
import { colors, fontSize } from "../../../styles/global";

export const Question = styled.div`
  align-items: center;
  display: flex;
  height: 30rem;
  justify-content: center;
  position: relative;
  width: 100%;

  .question {
    font-size: ${fontSize.font26};
    text-align: justify;
  }

  .counter {
    color: ${colors.paragraph};
    font-size: ${fontSize.font22};
    position: absolute;
    right: 3rem;
    top: 3rem;
  }

  .timer {
    bottom: 3rem;
    color: ${colors.buttons};
    font-size: ${fontSize.font24};
    position: absolute;
    right: 3rem;
  }
`;
