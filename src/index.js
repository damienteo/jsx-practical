import React from "react";
import ReactDOM from "react-dom";

import faker from "faker";

import CommentDetail from "./CommentDetail";

const App = () => {
  const buttonText = "Click Me!";
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Alex"
        timeAgo="Today at 4.54pm"
        comment="lol"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Sam"
        timeAgo="Today at 1.24pm"
        comment="I agree"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Jane"
        timeAgo="Today at 2.19pm"
        comment="haha"
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
