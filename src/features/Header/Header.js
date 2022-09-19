import { React }from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useState, useEffect } from "react";
import { /*selectSubreddits*/ } from "../../app/subRedditSlice";
import { setSelectedSubreddit, /*selectSelectedSubreddit*/ } from "../../app/redditSlice";
import { HiOutlineSearch } from 'react-icons/hi';
import './Header.css'
import greenbean from '../../resources/images/greenbeans.jpg'
import { setSearchTerm } from "../../app/redditSlice";



export default function Header() {

    const [searchTermLocal, setSearchTermLocal] = useState('');

    const searchTerm = useSelector((state) => state.reddit.searchTerm);

    const dispatch = useDispatch();
    // const subreddits = useSelector(selectSubreddits);
    // const selectedSubreddit = useSelector(selectSelectedSubreddit);

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
    
    const onSearchTermSubmit = (e) => {
        e.preventDefault();
        // dispatches setSearchTerm with searchTermLocal as action argument
        // this will dispatch our searchTerm on submit
        dispatch(setSearchTerm(searchTermLocal));
      };

    return (
        <div className="subreddit">
        
            <div
                className="header-title-container"
                onClick={() => dispatch(setSelectedSubreddit('/r/soccer'))}>
                <img src={greenbean} alt='' className="green-bean-logo"/>
                <h3 className="header-title">Reddit<span>Bean</span></h3>
            </div>
            <form className="search" onSubmit={onSearchTermSubmit}>
                <input
                    type="text"
                    placeholder="Search"
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