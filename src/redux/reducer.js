import _posts from '../data/posts'
import {combineReducers} from 'redux'

const comments = function comments(state=[], action) {
    switch(action.type) {
        case 'ADD_COMMENT': 
            if (!state[action.postID]) 
                return {...state, [action.postID]: [action.comment]}
            else 
                return {...state, [action.postID]: [...state[action.postID], action.comment]}
        case 'LOAD_COMMENTS': return action.comments
        default: 
            return state;
    }
}

const posts = function posts(state = _posts, action) {
    switch (action.type) {
        case 'REMOVE_POST': return [...state.slice(0, action.index), ...state.slice(action.index + 1)]
        case 'ADD_POST': return [...state, action.post]
        case 'LOAD_PHOTOS': return action.posts
        default: return state
    }
}

const rootReducer = combineReducers({comments, posts})

export default rootReducer