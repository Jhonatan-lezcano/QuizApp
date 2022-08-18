import styled from "styled-components";
import { colors } from "../../../styles/global";

interface Props {
  width: string;
}

export const Buttons = styled.button<Props>`
  background: ${colors.buttons};
  color: ${colors.buttonsText};
  border: none;
  font-weight: 700;
  padding: 1.6rem;
  width: ${({ width }) => width};
`;
