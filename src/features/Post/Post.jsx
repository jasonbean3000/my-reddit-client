import React from "react";
import './Post.css'
import {
    TiMessage,
  } from 'react-icons/ti';

import Comment from '../Comment/Comment';
import Avatar from "../Avatar/Avatar";
export default function Post(props) {
    const { post, onToggleComments } = props;

    const renderComments = () => {
        if (post.errorComments) {
           return (
             <div>
               <h3>Error loading comments</h3>
             </div>
           );
         }
    
        if (post.loadingComments) {
           return (
            <div class="lds-spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            </div>
           );
        }
    
        if (post.showingComments) {
          return (
            <div>
              {post.comments.map((comment) => (
                <Comment comment={comment} key={comment.id} />
              ))}
            </div>
          );
        }
    
        return null;
      };

    return (
        <div className="post" key={post.id}>
            <Avatar name={post.author} />
            <a
                className="post-author" 
                href={post.url} 
                target="_blank" 
                rel="noreferrer"
                >
                Posted by {post.author}
            </a>
            <p className="post-title">{post.title}</p>
            <img src={post.url} alt="" className="post-image" />       
            <span className="post-comments-container">
                <button
                  type="button"
                  className={`icon-action-button ${
                    post.showingComments && 'showing-comments'
                  }`}
                  onClick={() => onToggleComments(post.permalink)}
                  aria-label="Show comments"
                > 
                  <TiMessage className="icon-action" />
                  Show Comments
                </button>
                {/* {shortenNumber(post.num_comments, 1)} */}
              </span>
              {renderComments()}
        </div>
    )

}