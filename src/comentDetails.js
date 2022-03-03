import React from 'react';

const ComentDetails = props => {
  return (
    <div className="ui comments">
      <div className="comment">
        <a className="avatar">
          <img src={props.avatar} />
        </a>
        <div className="content">
          <a className="author">{props.author}</a>
          <div className="metadata">
            <span className="date">{props.timeAgo}</span>
          </div>

          <div className="text">
            {props.content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComentDetails;
