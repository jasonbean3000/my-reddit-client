import { React }from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { /*selectSubreddits*/ } from "../../app/subRedditSlice";
import { setSelectedSubreddit, fetchPosts } from "../../app/redditSlice";
import { HiOutlineSearch } from 'react-icons/hi';
import './Header.css'
import greenbean from '../../resources/images/greenbeans.jpg'

import { useHistory } from 'react-router-dom';



export default function Header() {

    const history = useHistory();
  
    const [searchTermLocal, setSearchTermLocal] = useState('');

    const searchTerm = useSelector((state) => state.reddit.searchTerm);

    const dispatch = useDispatch();
    // const subreddits = useSelector(selectSubreddits);
    // const selectedSubreddit = useSelector(selectSelectedSubreddit);
    const onSearchTermSubmit = (e) => {
        e.preventDefault();
        if (searchTermLocal) {
          const subredditUrl = `/r/${searchTermLocal}`;
          dispatch(setSelectedSubreddit(subredditUrl));
          dispatch(fetchPosts(subredditUrl));
          // If you want to fetch comments as well
          // dispatch(fetchComments(subredditUrl));
          history.push(subredditUrl);
        }
      }

    const onSearchTermChange = (e) => {
        setSearchTermLocal(e.target.value);
      };

    // useEffect calls two args
    // first is a callback function that we want React to call after each render
    useEffect(() => {
        // call back function uses setSearchTermLocal to set searchTerm to e.target.value 
        setSearchTermLocal(searchTerm);
        // second arg tells when to effect needs to be re-run
        // passing serchTerm as second arg
        // will run everytime a variable in searchTerm changes
        }, [searchTerm]);
    
    

    return (
        <div className="subreddit">
        
            <div className="header-title-container">
                    <NavLink to='/r/soccer'>
                        <img 
                            src={greenbean} 
                            alt='' className="green-bean-logo" 
                            onClick={() => dispatch(setSelectedSubreddit('/r/soccer'))}/>
                    </NavLink>
                    <NavLink to='/r/soccer' className="header-title">
                        <h3 onClick={() => dispatch(setSelectedSubreddit('/r/soccer'))}>Reddit<span>Bean</span></h3>
                    </NavLink>
            </div>
            <form className="search" onSubmit={onSearchTermSubmit}>
                <input
                    type="text"
                    placeholder="Search for a subreddit"
                    onChange={onSearchTermChange}
                    aria-label="Search posts"
                    />
                <button type="submit" onClick={onSearchTermSubmit} aria-label="Search">
                    <HiOutlineSearch />
                </button>    
            </form>
        </div>
    )
};