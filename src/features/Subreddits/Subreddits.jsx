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
            <article className="subreddits-header">FEATURED SUBREDDITS</article>
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
                            <div className="navlink-img">
                                <img className="icon-image" src={subreddit.icon_img} alt=""/>
                            </div>    
                            <div className="navlink-info">
                                <span activeClassName="active-link">{subreddit.title}</span>
                                <article className="subscribers">{subreddit.subscribers} subscribers</article>
                            </div>
                        </NavLink>  
                        
                    </div>
                ))}
            </div>
        </div>
    )
};
