import { Buttons } from "./ButtonStyles";

interface Props {
  title: string;
  onClick: Function;
  width: string;
  disabled?: boolean;
}
const Button = ({ title, onClick, width, disabled }: Props) => {
  return (
    <Buttons onClick={() => onClick()} width={width} disabled={disabled}>
      {title}
    </Buttons>
  );
};

export default Button;
