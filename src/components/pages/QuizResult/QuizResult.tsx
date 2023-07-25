import React from "react";
import Congratulations from "../../Lottie/Congratulations";
import { Saddness } from "../../Lottie/Saddness";
import { QuizResultStyles } from "./QuizResult.styles";

interface Props {
  name: string;
  score: number;
  numberOfQuestions: number;
}

const QuizResult = ({ name, score, numberOfQuestions }: Props) => {
  return (
    <QuizResultStyles>
      <h1 className="title">
        {score >= 3
          ? `Felicitaciones ${name.toUpperCase()} obtuviste ${score} puntos de ${numberOfQuestions}`
          : `Lo sentimos ${name.toUpperCase()} pero obtuviste ${score} punto(s) de ${numberOfQuestions} :'( `}
      </h1>
      {score >= 3 ? <Congratulations /> : <Saddness />}
    </QuizResultStyles>
  );
};

export default QuizResult;
