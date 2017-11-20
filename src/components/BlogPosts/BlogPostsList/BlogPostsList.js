// This file is included by /components/root/root_comonent.js

// This is the root of the blog posts section of the application

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
    blogPostsFetch
} from '../../../modules/blog_posts_module'


class BlogPostsList extends Component {

    componentWillMount () {

        // Pulls the blog posts upon load
        this.props.blogPostsFetch()

    }

    renderBodyContent () {

        // If we have a fetch error, show this...
        if (this.props.blog_post_fetch_error !== null) {

            return (
                <div>
                    An error occured: { this.props.blog_post_fetch_error }
                </div>
            )

        }

        // If we are currently fetching blog posts, show this...
        if (this.props.currently_fetching_blog_posts === true) {

            return (
                <div>
                    Fetching blog posts...
                </div>
            )

        }

        // If we have no blog post data, show this...
        if (this.props.blog_post_data === null) {

            return (
                <div>
                    No Blog Posts Have Been Loaded.
                </div>
            )

        }

        // Ok we have blog posts to render, compile them into an array to render
        const blog_post_list_items = []
        for (let i = 0; i < this.props.blog_post_data.length; i++) {

            const link_href = `/blog_posts/${this.props.blog_post_data[i].id}`

            blog_post_list_items.push(
                <li key={i}>
                    <Link to={link_href}>{ this.props.blog_post_data[i].title }</Link>
                </li>
            )

        }

        // Return the complete body content
        return (
            <div>
                <h3>Blog Posts ({ this.props.blog_post_data.length }):</h3>
                <ul>
                    { blog_post_list_items }
                </ul>
            </div>
        )

    }


    // Return the completely assembled component
    render () {

        return (
            <div>
                { this.renderBodyContent() }
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
    blogPostsFetch
}, dispatch)

// Connects the state vars and dispatch functions to the Component and exports it to it's React parent component
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BlogPostsList)
