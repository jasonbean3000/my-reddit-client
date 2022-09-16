import { createSlice } from "@reduxjs/toolkit";
import { getSubreddits } from "../api/reddit"; 
import { REDDITS } from "../utilities/reddits";

const initialState = {
    subreddits: REDDITS,
    error: false,
    isLoading: false,
};

const subRedditSlice = createSlice({
    // name: string used as the prefix for generated action types
    name: 'subreddits',
    // initialState the initial state value for the reducer
    initialState,
    // reducers: an object of methods, where keys determine the action type strings that can update the state
    // and whose mothods are reducers that will be executed when that action type is dispatched
    reducers: {
        startGetSubreddits(state) {
            state.isLoading = true;
            state.error = false;
        },
        getSubredditsSuccess(state, action) {
            state.isLoading = false;
            state.subreddits = action.payload;
        },
        getSubRedditsFailed(state) {
            state.isLoading = false;
            state.error = true;
        }
    }
});


// export reducers as subRedditSlice.actions;
export const {
    getSubRedditsFailed,
    getSubredditsSuccess,
    startGetSubreddits,
} = subRedditSlice.actions;

export default subRedditSlice.reducer;

// redux thunk to get subreddits

export const fetchSubreddits = () => async (dispatch) => {
    try {
        dispatch(startGetSubreddits());
        const subreddits = await getSubreddits();
        dispatch(getSubredditsSuccess(subreddits));
    } catch (error) {
        dispatch(getSubRedditsFailed());
    }
};

export const selectSubreddits = (state) => state.subreddits.subreddits;