import React from "react";
import './Post.css'
import {
    TiMessage,
  } from 'react-icons/ti';

import Comment from '../Comment/Comment';
import moment from "moment/moment";

export default function Post(props) {
    const { post, onToggleComments } = props;

    const formatText = (text) => {
      const regex = /\[(.*?)\]\((https?:\/\/[^\s)]+)\)/g;
  
      const paragraphs = text.split("\n").map((paragraph, index) => (
        <p key={index} dangerouslySetInnerHTML={{ __html: paragraph.replace(regex, '<a target="blank" href="$2">$1</a>') }} />
      ));
  
      return paragraphs;
    };
  
  

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
            <div className="lds-spinner">
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
            
            <h2 className="post-author">
                Posted by <b>{post.author}</b> ({moment.unix(post.created_utc).fromNow()})
            </h2>
            <article className="post-title">{post.title}</article>
            <a href={post.url} className="post-url" target="blank">{post.url}</a>
            <article className="post-content"><p>{formatText(post.selftext)}</p></article>

            {post.media && post.media.reddit_video && (
              <video controls className="post-video">
              <source src={post.media.reddit_video.fallback_url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}

           

            <p>{post.comment}</p>
            
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