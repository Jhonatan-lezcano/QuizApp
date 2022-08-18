import React from "react";
import Button from "../../atoms/Button/Button";
import Input from "../../atoms/Input/Input";
import Spacer from "../../atoms/Spacer/Spacer";
import { StartQuizStyles } from "./StartQuiz.styles";

interface Props {
  value: string;
  onChange: Function;
  onClick: Function;
}

const StartQuiz = ({ value, onChange, onClick }: Props) => {
  return (
    <StartQuizStyles>
      <h1 className="title">Iniciar quiz</h1>
      <Spacer vertical="3rem" />
      <Input value={value} onChange={onChange} />
      <Spacer vertical="3rem" />
      <Button
        title="empezar"
        onClick={() => onClick()}
        width="90%"
        disabled={value.length > 3 ? false : true}
      />
    </StartQuizStyles>
  );
};

export default StartQuiz;
