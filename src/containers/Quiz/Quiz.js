import React, { Component } from "react";
import "./Quiz.css";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends Component {
  state = {
    activeQuestion: 0,
    answerState: null,
    quiz: [
      {
        question: "How are you?",
        rightAnswerId: 2,
        id: 1,
        answers: [
          { text: "Answer #1", id: 1 },
          { text: "Answer #2", id: 2 },
          { text: "Answer #3", id: 3 },
          { text: "Answer #4", id: 4 }
        ]
      },
      {
        question: "What ... ?",
        rightAnswerId: 2,
        id: 2,
        answers: [
          { text: "Answer #1", id: 1 },
          { text: "Answer #2", id: 2 },
          { text: "Answer #3", id: 3 },
          { text: "Answer #4", id: 4 }
        ]
      }
    ]
  };

  onAnswerClickHandler = answerId => {

    if (this.state.answerState){
      const key = Object.keys(this.state.answerState)[0]
      if(this.state.answerState[key] === 'success'){
        return
      }
    }

    const question = this.state.quiz[this.state.activeQuestion];

    if (question.rightAnswerId === answerId) {
      this.setState({
        answerState: { [answerId]: "success" }
      });

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answer: null
          });
        }
        window.clearTimeout(timeout);
      }, 1000);
    } else {
      this.setState({
        answerState: { [answerId]: "error" }
      });
    }
  };

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length;
  }

  render() {
    return (
      <div className="Quiz">
        <div className="QuizWrapper">
          <h1>Quiz</h1>
          <ActiveQuiz
            answers={this.state.quiz[this.state.activeQuestion].answers}
            question={this.state.quiz[this.state.activeQuestion].question}
            onAnswerClick={this.onAnswerClickHandler}
            quizLength={this.state.quiz.length}
            answerNumber={this.state.activeQuestion + 1}
            state={this.state.answerState}
          />
        </div>
      </div>
    );
  }
}

export default Quiz;
