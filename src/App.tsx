import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import AnswersBtn from "./components/atoms/AnswersBtn/AnswersBtn";
import Button from "./components/atoms/Button/Button";
import Spacer from "./components/atoms/Spacer/Spacer";
import { colors, fontSize } from "./styles/global";
import { questions } from "./utils/questions";

const Container = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  width: 100%;
`;

const Question = styled.div`
  align-items: center;
  display: flex;
  height: 30rem;
  justify-content: center;
  padding: 0 3rem;
  position: relative;
  width: 100%;

  .question {
    font-size: ${fontSize.font26};
    text-align: justify;
  }

  .counter {
    color: ${colors.paragraph};
    font-size: ${fontSize.font22};
    position: absolute;
    right: 3rem;
    top: 3rem;
  }

  .timer {
    bottom: 3rem;
    color: ${colors.buttons};
    font-size: ${fontSize.font24};
    position: absolute;
    right: 3rem;
  }
`;

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinish, setIsFinish] = useState(false);
  const [timer, setTimer] = useState(15);

  const handleAnswerSubmit = (
    e: React.BaseSyntheticEvent,
    isCorrect: boolean,
    id: string
  ) => {
    const userAnswer = document.getElementById(id);
    //añadir puntuación
    if (isCorrect) setScore(score + 1);
    //añadir estilos
    userAnswer!.style.background = isCorrect
      ? colors.correct
      : colors.incorrect;
    //cambiar puntuación
    setTimeout(() => {
      if (currentQuestion === questions.length - 1) {
        setIsFinish(true);
      } else {
        setCurrentQuestion(currentQuestion + 1);
        setTimer(15);
      }
    }, 1500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) setTimer(prev => prev - 1);
      if (timer === 0) {
        if (currentQuestion === questions.length - 1) {
          setIsFinish(true);
        } else {
          questions[currentQuestion].options.forEach(item => {
            if (item.isCorrect) {
              const userAnswer = document.getElementById(item.text);
              userAnswer!.style.background = colors.correct;
            }
          });
          setTimeout(() => {
            setCurrentQuestion(currentQuestion + 1);
            setTimer(15);
          }, 1500);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  return (
    <main className="app">
      <Container>
        {!isFinish ? (
          <>
            <Question className="">
              <h1 className="question">
                {questions[currentQuestion].question}
              </h1>
              <span className="counter">
                preguntas {currentQuestion + 1} / {questions.length}
              </span>
              <span className="timer">{timer} s</span>
            </Question>
            <Spacer vertical="5rem" />
            {questions[currentQuestion].options.map(answer => (
              <AnswersBtn
                key={answer.text}
                id={answer.text}
                answer={answer.text}
                onClick={handleAnswerSubmit}
                isCorrect={answer.isCorrect}
              />
            ))}
          </>
        ) : (
          <div>
            <h1>
              obtuviste {score} punto de {questions.length}
            </h1>
          </div>
        )}
      </Container>
    </main>
  );
}

export default App;
