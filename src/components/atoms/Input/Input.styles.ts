import styled from "styled-components";
import { colors, fontSize } from "../../../styles/global";

interface Props {
  width: string;
}

export const InputStyles = styled.input<Props>`
  background: none;
  border: none;
  border-bottom: 1px solid ${colors.paragraph};
  color: ${colors.headline};
  font-size: ${fontSize.font20};
  padding: 1rem 1.5rem;

  width: ${({ width }) => width};

  &::placeholder {
    color: ${colors.paragraph};
  }
`;
