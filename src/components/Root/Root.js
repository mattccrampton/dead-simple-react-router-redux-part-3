// This file is included by /index.js

// Exports the main "ROOT" of the react application

import React from 'react'
import { Route } from 'react-router-dom'
import Homepage from '../Homepage/Homepage'
import BlogPosts from '../BlogPosts/BlogPosts'
import Login from '../Login/Login'
import PrivateRoute from '../shared/PrivateRoute/PrivateRoute'


const Root = () => (
    <div>
        <main>
            <PrivateRoute path="/blog_posts" component={BlogPosts} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Homepage} />
        </main>
    </div>
)

export default Root
