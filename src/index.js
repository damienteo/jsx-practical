import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const buttonText = "Click Me!";
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" />
        </a>
        <div className="content">
          <a href="/" classname="author">
            Sam
          </a>
          <div className="metadata">
            <span classNam="date">Today at 6:00pm</span>
          </div>
          <div className="text">Nice blogpost</div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
