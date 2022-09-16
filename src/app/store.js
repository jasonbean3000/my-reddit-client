import { combineReducers, configureStore } from '@reduxjs/toolkit';
import subRedditReducer from './subRedditSlice'
import redditReducer from './redditSlice';


export const store = configureStore({
  reducer: combineReducers({
    reddit: redditReducer,
    subreddits: subRedditReducer,
  }),
});


