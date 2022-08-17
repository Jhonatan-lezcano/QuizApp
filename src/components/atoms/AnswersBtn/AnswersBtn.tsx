import React, { ReactHTMLElement } from "react";
import { Answers } from "./AnswersBtnstyles";

interface Props {
  answer: string;
  onClick: Function;
  isCorrect: boolean;
  id: string;
}

const AnswersBtn = ({ answer, onClick, isCorrect, id }: Props) => {
  // console.log(isCorrect);
  return (
    <Answers
      id={id}
      width="90%"
      onClick={(e: React.BaseSyntheticEvent) => onClick(e, isCorrect, id)}
    >
      {answer}
    </Answers>
  );
};

export default AnswersBtn;
