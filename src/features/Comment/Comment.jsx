import React from 'react';
import moment from 'moment';

import './Comment.css';


export default function Comment(props) {
  const { comment } = props;
  return (
    <div className="comment">
      <div className="comment-metadata">
        
        <p className="comment-author">{comment.author}</p>
        <p className="comment-created-time">
          {moment.unix(comment.created_utc).fromNow()}
        </p>
      </div>
        <p className='comment-body'>
          {comment.body}
        </p>
    </div>
  );
};

