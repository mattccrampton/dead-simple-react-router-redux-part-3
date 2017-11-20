// This file is included by modules/all_modules.js (For the reducers)
// This file is also included by components/BlogPosts/BlogPostsList/BlogPostsList.js (For the actions)

// This file contains the actions and reducers for the blog posts functionality

import axios from 'axios'


// Initial Module State
const initialState = {
    currently_fetching_blog_posts: false,
    blog_post_fetch_error: null,
    blog_post_data: null
}


// Redux Actions - Payloads of information that send data from your application to your store.
// http://redux.js.org/docs/basics/Actions.html
export const FETCH_BLOGPOSTS_REQUESTED = 'blog_posts/FETCH_BLOGPOSTS_REQUESTED'
export const FETCH_BLOGPOSTS_SUCCESS = 'blog_posts/FETCH_BLOGPOSTS_SUCCESS'
export const FETCH_BLOGPOSTS_ERROR = 'blog_posts/FETCH_BLOGPOSTS_ERROR'


// Redux Action Creators - Functions that create actions
// http://redux.js.org/docs/basics/Actions.html#action-creators
export const blogPostsFetch = () => {

    // console.log("blogPostsFetch called");

    return (dispatch) => {

        // console.log("blogPostsFetch start");

        dispatch({
            type: FETCH_BLOGPOSTS_REQUESTED
        })

        return axios.get(`https://jsonplaceholder.typicode.com/posts`)

            .then((response) => {

                // console.log("blogPostsFetch success:", response.data);
                dispatch({
                    type: FETCH_BLOGPOSTS_SUCCESS,
                    payload: response.data
                })

            })

            .catch((error) => {

                // console.log("blogPostsFetch error:", error);
                dispatch({
                    type: FETCH_BLOGPOSTS_ERROR,
                    payload: error
                })

            })

    }

}


// Redux Reducers - Specify how the application's state changes in response to actions
// http://redux.js.org/docs/basics/Reducers.html
export default (state = initialState, action = {}) => {

    switch (action.type) {

        case FETCH_BLOGPOSTS_REQUESTED:
            return {
                ...state,
                currently_fetching_blog_posts: true,
                blog_post_fetch_error: null
            }

        case FETCH_BLOGPOSTS_SUCCESS:
            return {
                ...state,
                currently_fetching_blog_posts: false,
                blog_post_fetch_error: null,
                blog_post_data: action.payload // loading the blog posts into the state
            }

        case FETCH_BLOGPOSTS_ERROR:
            return {
                ...state,
                currently_fetching_blog_posts: false,
                blog_post_fetch_error: action.payload, // Loading error text
                blog_post_data: null
            }

        default:
            return state

    }

}
