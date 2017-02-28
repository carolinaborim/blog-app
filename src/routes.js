import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';
import PostsIndex from './components/postsIndex';
import NewPosts from './components/newPosts';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostsIndex} />
    <Route path="posts/new" component={NewPosts} />
  </Route>
);
