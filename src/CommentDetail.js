import React, { Component } from "react";
import faker from "faker";

const CommentDetail = () => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.avatar()} />
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
  );
};

export default CommentDetail;
