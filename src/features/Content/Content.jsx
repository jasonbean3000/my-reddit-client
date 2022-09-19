import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { fetchPosts, selectFilteredPosts, /*setSearchTerm,*/ fetchComments } from "../../app/redditSlice";
import Post from "../Post/Post";
import './Content.css'

export default function Content() {

    const reddit = useSelector((state) => state.reddit);

    const { isLoading, error, /* searchTerm,*/ selectedSubreddit } = reddit;

    const posts = useSelector(selectFilteredPosts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts(selectedSubreddit));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedSubreddit]);

    const onToggleComments = (index) => {
        const getComments = (permalink) => {
          dispatch(fetchComments(index, permalink));
        };
    
        return getComments;
      };

    if (isLoading) {
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

    if (error) {
      return (
        <div className="error">
          <h2>Failed to load posts.</h2>
          <button
            type="button"
            onClick={() => dispatch(fetchPosts(selectedSubreddit))}
          >
            Try again
          </button>
        </div>
      );
    }
    
    return (
      
        <>
        {posts.map((post, index) => (
          <Post
            key={post.id}
            post={post}
            onToggleComments={onToggleComments(index)}
          />
        ))}
      </>
    )
};