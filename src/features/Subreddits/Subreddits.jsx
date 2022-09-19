import { React }from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { selectSubreddits } from "../../app/subRedditSlice";
import { setSelectedSubreddit, selectSelectedSubreddit } from "../../app/redditSlice";
import './Subreddits.css'
import { NavLink } from "react-router-dom";


export default function Subreddits() {

    const dispatch = useDispatch();
    const subreddits = useSelector(selectSubreddits);
    const selectedSubreddit = useSelector(selectSelectedSubreddit);
    
    

    return (
        <div className="subreddit">
        
            
            
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
                            <img className="icon-image" src={subreddit.icon_img} alt=""/>
                            <span activeClassName="active-link">{subreddit.title}</span>
                            
                        </NavLink>  
                        
                    </div>
                ))}
            </div>
        </div>
    )
};
