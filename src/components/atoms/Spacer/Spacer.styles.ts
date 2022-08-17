import styled from "styled-components";

interface Props {
  horizontal?: string;
  vertical?: string;
}

export const SpacerStyles = styled.div<Props>`
  height: ${({ vertical }) => vertical};
  width: ${({ horizontal }) => horizontal};
`;
