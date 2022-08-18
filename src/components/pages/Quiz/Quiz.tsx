import React from "react";
import AnswersBtn from "../../atoms/AnswersBtn/AnswersBtn";
import Spacer from "../../atoms/Spacer/Spacer";
import { Question } from "./Quiz.styles";

interface Props {
  questions: any;
  currentQuestion: number;
  timer: number;
  handleAnswerSubmit: Function;
  answersDisabled: boolean;
  numberOfQuestions: number;
}

const Quiz = ({
  questions,
  currentQuestion,
  timer,
  handleAnswerSubmit,
  answersDisabled,
  numberOfQuestions,
}: Props) => {
  return (
    <>
      <Question className="">
        <h1 className="question">{questions.question}</h1>
        <span className="counter">
          preguntas {currentQuestion + 1} / {numberOfQuestions}
        </span>
        <span className="timer">{timer} s</span>
      </Question>
      <Spacer vertical="5rem" />
      {questions.options.map((answer: any) => (
        <AnswersBtn
          key={answer.text}
          id={answer.text}
          answer={answer.text}
          onClick={handleAnswerSubmit}
          isCorrect={answer.isCorrect}
          disabled={answersDisabled}
        />
      ))}
    </>
  );
};

export default Quiz;
