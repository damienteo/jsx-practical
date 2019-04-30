import React, { Component } from "react";

const CommentDetail = ({ author, timeAgo, comment, avatar }) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={avatar} />
      </a>
      <div className="content">
        <a href="/" classname="author">
          {author}
        </a>
        <div className="metadata">
          <span classNam="date">{timeAgo}</span>
        </div>
        <div className="text">{comment}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
