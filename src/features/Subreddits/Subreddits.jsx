import { React }from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { fetchSubreddits, selectSubreddits } from "../../app/subRedditSlice";
import { setSelectedSubreddit, selectSelectedSubreddit } from "../../app/redditSlice";
import './Subreddits.css'
import greenbean from '../../resources/images/greenbeans.jpg'
import { NavLink } from "react-router-dom";
import ScrollToTop from "../../utilities/ScrollToTop";

export default function Subreddits() {

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
            
            <div className="button-container">
            
                {subreddits.map((subreddit) => (
                    <div
                        key={subreddit.id}
                        className={`${
                            selectedSubreddit === subreddit.url && `selected-subreddit`
                          }`}
                        >
                        <NavLink to={subreddit.url}
                            className='navlink'
                            
                            type="button"
                            onClick={() => dispatch(setSelectedSubreddit(subreddit.url))}
                            >
                            <span activeClassName="active-link">{subreddit.title}</span>
                        </NavLink>  
                    </div>
                ))};
            </div>
        </div>
    )
};
