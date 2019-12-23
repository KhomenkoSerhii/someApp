import React from "react";
import "./ActiveQuiz.css";
import AnswersList from './AnswersList/AnswersList'


const ActiveQuiz = props => (
  <div className="ActiveQuiz">
    <p className="Question">
      <span>
        <strong>1.</strong>&nbsp; How are you
      </span>
      <small>4 / 12</small>
    </p>

   <AnswersList answers={props.answers}/>
  </div>
);

export default ActiveQuiz;
