import React from "react";
import './Post.css'

export default function Post(props) {
    const { post, index } = props;

    return (
        <div className="post" key={post.id}>
            
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
            
        </div>
    )

}