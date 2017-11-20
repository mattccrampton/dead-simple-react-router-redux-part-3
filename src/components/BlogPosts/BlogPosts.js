// This file is included by /components/root/root_comonent.js

// This is the root of the blog posts section of the application

import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import BlogPostsList from './BlogPostsList/BlogPostsList'
import BlogPost from './BlogPost/BlogPost'
// import {
//     blogPostFetch
// } from '../../modules/blog_posts_module'


class BlogPosts extends Component {

    // Return the completely assembled component
    render () {

        return (
            <div>
                <p>
                    <Link to="/">Homepage</Link> | Blog Posts (requires login) | <Link to="/login">Login</Link>
                </p>

                <h2>This is the Blog Posts page</h2>

                <p>
                    (The content below is loaded dynamically upon page load)
                </p>

                <Route exact path="/blog_posts" component={BlogPostsList} />
                <Route path="/blog_posts/:blog_post_id" component={BlogPost} />


            </div>
        )

    }

}

// Makes the following data available in the Component's this.props object
const mapStateToProps = (state) => ({
    root_state: state,
    blog_post_data: state.blog_posts.blog_post_data,
    currently_fetching_blog_posts: state.blog_posts.currently_fetching_blog_posts,
    blog_post_fetch_error: state.blog_posts.blog_post_fetch_error
})

// Makes the following dispatch functions (defined in various modules) available in the Component's this.props object
const mapDispatchToProps = (dispatch) => bindActionCreators({
    // blogPostFetch
}, dispatch)

// Connects the state vars and dispatch functions to the Component and exports it to it's React parent component
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BlogPosts)
