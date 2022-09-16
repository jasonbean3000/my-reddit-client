import React from "react";
import './Post.css'

export default function Post(props) {
    const { post, index } = props;

    return (
        <div className="post" key={post.id}>
            <section>
                <div className="post-container">
                    <div className="post-header">
                        <p className="post-title">{post.title}</p>
                        
                    </div>
                    <img src={post.url} alt="" className="post-image" />       
                    
                    <a className="post-author" href={post.url} target="_blank" rel="noreferrer">
                                by {post.author}
                    </a>
                </div>
                
            </section>

        </div>
    )

}