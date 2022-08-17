import styled from "styled-components";
import { colors, fontSize } from "../../../styles/global";

interface Props {
  width: string;
}
export const Answers = styled.button<Props>`
  background: transparent;
  border: 0.1rem solid ${colors.paragraph};
  border-radius: 0.5rem;
  color: ${colors.paragraph};

  font-size: ${fontSize.font20};
  margin: 1rem 0;
  padding: 1.5rem 0;
  width: ${({ width }) => width};
`;
