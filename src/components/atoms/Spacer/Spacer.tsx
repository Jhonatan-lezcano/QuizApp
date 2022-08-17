import { SpacerStyles } from "./Spacer.styles";

interface Props {
  vertical?: string;
  horizontal?: string;
}

const Spacer = ({ vertical, horizontal }: Props) => {
  return <SpacerStyles vertical={vertical} horizontal={horizontal} />;
};

Spacer.defaultProps = {
  vertical: "0.2rem",
  horizontal: "0.2rem",
};

export default Spacer;
