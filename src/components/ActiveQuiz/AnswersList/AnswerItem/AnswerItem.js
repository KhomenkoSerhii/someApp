import React from "react";
import "./AnswerItem.css";

const AnswerItem = props => {
  // const cls = [AnswerItem];

  // if (props.state) {
  //   cls.push(AnswerItem[props.state]);
  // }

  return (
    <li
      className='AnswerItem'
      onClick={() => props.onAnswerClick(props.answer.id)}
    >
      {props.answer.text}
    </li>
  );
};

export default AnswerItem;
