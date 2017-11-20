// This file is included by /components/root/root_comonent.js

// This is the root of the blog posts section of the application

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
    blogPostFetch
} from '../../../modules/blog_post_module'


class BlogPost extends Component {

    componentWillMount () {

        // Pulls the blog posts upon load
        this.props.blogPostFetch(this.props.match.params.blog_post_id)

    }

    render () {

        // console.log("blog_post_data", this.props.blog_post_data)

        let blog_title = ""
        let blog_body = ""

        if (this.props.blog_post_data !== null) {

            blog_title = this.props.blog_post_data.title
            blog_body = this.props.blog_post_data.body

        }

        return (
            <div>
                <p>Blog post ID: {this.props.match.params.blog_post_id}</p>
                <p><Link to="/blog_posts">Back</Link></p>
                <h1>{ blog_title }</h1>
                <p>{ blog_body }</p>
            </div>
        )

    }

}

// Makes the following data available in the Component's this.props object
const mapStateToProps = (state) => ({
    root_state: state,
    blog_post_data: state.blog_post.blog_post_data,
    currently_fetching_blog_posts: state.blog_post.currently_fetching_blog_post,
    blog_post_fetch_error: state.blog_post.blog_post_fetch_error
})

// Makes the following dispatch functions (defined in various modules) available in the Component's this.props object
const mapDispatchToProps = (dispatch) => bindActionCreators({
    blogPostFetch
}, dispatch)

// Connects the state vars and dispatch functions to the Component and exports it to it's React parent component
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BlogPost)
