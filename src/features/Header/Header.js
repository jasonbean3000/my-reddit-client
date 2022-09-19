import { React }from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { selectSubreddits } from "../../app/subRedditSlice";
import { setSelectedSubreddit, selectSelectedSubreddit } from "../../app/redditSlice";
import { HiOutlineSearch } from 'react-icons/hi';
import './Header.css'
import greenbean from '../../resources/images/greenbeans.jpg'



export default function Header() {

    const dispatch = useDispatch();
    const subreddits = useSelector(selectSubreddits);
    const selectedSubreddit = useSelector(selectSelectedSubreddit);
    
    

    return (
        <div className="subreddit">
        
            <div
                className="header-title-container"
                onClick={() => dispatch(setSelectedSubreddit('/r/soccer'))}>
                <img src={greenbean} alt='' className="green-bean-logo"/>
                <h3 className="header-title">Reddit<span>Bean</span></h3>
            </div>
            <form className="search">
                <input
                    type="text"
                    placeholder="Search"
                    aria-label="Search posts"
                    />
                <button type="submit" aria-label="Search">
                    <HiOutlineSearch />
                </button>    
            </form>
        </div>
    )
};