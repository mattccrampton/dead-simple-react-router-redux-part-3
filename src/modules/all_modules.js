// This file is included by store.js

// Combines all the reducers together to be pushed into the Redux store.

import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import blog_posts from './blog_posts_module'
import blog_post from './blog_post_module'
import login from './login_module'
// Include other reducers from other modules here.


export default combineReducers({
    router: routerReducer,
    blog_posts,
    blog_post,
    login
    // Add other reducers included above here.
})
