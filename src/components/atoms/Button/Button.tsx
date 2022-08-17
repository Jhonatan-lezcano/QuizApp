import { Buttons } from "./ButtonStyles";

interface Props {
  title: string;
}
const Button = ({ title }: Props) => {
  return <Buttons>{title}</Buttons>;
};

export default Button;
