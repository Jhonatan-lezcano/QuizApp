import { Answers } from "./AnswersBtnstyles";

interface Props {
  answer: string;
  onClick: Function;
  isCorrect: boolean;
  id: string;
  disabled: boolean;
}

const AnswersBtn = ({ answer, onClick, isCorrect, id, disabled }: Props) => {
  return (
    <Answers
      id={id}
      width="90%"
      onClick={() => onClick(isCorrect, id)}
      disabled={disabled}
    >
      {answer}
    </Answers>
  );
};

export default AnswersBtn;
