import React, { useEffect, useState } from "react";
import Quiz from "./components/pages/Quiz/Quiz";
import QuizResult from "./components/pages/QuizResult/QuizResult";
import StartQuiz from "./components/pages/StartQuiz/StartQuiz";
import { colors, Container } from "./styles/global";
import { questions } from "./utils/questions";

interface user {
  name: string;
  score: number;
}

function App() {
  const [userInfo, setUserInfo] = useState<user>({
    name: "",
    score: 0,
  });
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isFinish, setIsFinish] = useState(false);
  const [timer, setTimer] = useState(10);
  const [answersDisabled, setanswersDisabled] = useState(false);
  const [startQuiz, setStartQuiz] = useState(false);

  const handleChange = (e: React.BaseSyntheticEvent) => {
    setUserInfo({ ...userInfo, name: e.target.value });
  };

  const handleAnswerSubmit = (isCorrect: boolean, id: string) => {
    const userAnswer = document.getElementById(id);
    //añadir puntuación
    if (isCorrect) {
      setUserInfo({ ...userInfo, score: userInfo.score + 1 });
    }
    setanswersDisabled(true);
    //añadir estilos
    userAnswer!.style.background = isCorrect
      ? colors.correct
      : colors.incorrect;

    setTimeout(() => {
      questions[currentQuestion].options.forEach(item => {
        if (item.isCorrect && !isCorrect)
          document.getElementById(item.text)!.style.background = colors.correct;
      });
    }, 1000);
    //cambiar puntuación
    setTimeout(() => {
      if (currentQuestion === questions.length - 1) {
        setIsFinish(true);
        setStartQuiz(!startQuiz);
      } else {
        setCurrentQuestion(currentQuestion + 1);
        setTimer(10);
        setanswersDisabled(false);
      }
    }, 2000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (startQuiz) {
        if (timer > 0) setTimer(prev => prev - 1);
        if (timer === 0) {
          setanswersDisabled(true);
          if (currentQuestion === questions.length - 1) {
            setIsFinish(true);
            setStartQuiz(!startQuiz);
            localStorage.setItem("user", JSON.stringify(userInfo));
          } else {
            questions[currentQuestion].options.forEach(item => {
              if (item.isCorrect)
                document.getElementById(item.text)!.style.background =
                  colors.correct;
            });
            setTimeout(() => {
              setCurrentQuestion(currentQuestion + 1);
              setTimer(10);
              setanswersDisabled(false);
            }, 1500);
          }
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timer, startQuiz]);

  useEffect(() => {
    if (isFinish) localStorage.setItem("user", JSON.stringify(userInfo));
  }, [isFinish]);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (typeof user === "string") {
      const userParse = JSON.parse(user);

      if (userParse && userParse.name.length >= 0 && userParse.score >= 0) {
        setUserInfo(userParse);
        setIsFinish(true);
        setStartQuiz(false);
      } else {
        setUserInfo({ name: "", score: 0 });
        setIsFinish(false);
        setStartQuiz(false);
      }
    }
  }, []);
  return (
    <main className="app">
      <Container>
        {!isFinish && startQuiz ? (
          <Quiz
            questions={questions[currentQuestion]}
            currentQuestion={currentQuestion}
            handleAnswerSubmit={handleAnswerSubmit}
            answersDisabled={answersDisabled}
            timer={timer}
            numberOfQuestions={questions.length}
          />
        ) : isFinish && !startQuiz ? (
          <QuizResult
            name={userInfo.name}
            score={userInfo.score}
            numberOfQuestions={questions.length}
          />
        ) : (
          !isFinish &&
          !startQuiz && (
            <StartQuiz
              value={userInfo.name}
              onChange={handleChange}
              onClick={() => setStartQuiz(!startQuiz)}
            />
          )
        )}
      </Container>
    </main>
  );
}

export default App;
