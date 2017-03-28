import React, { PropTypes } from 'react';

import { Feed } from 'semantic-ui-react';

var NewsFeed = React.createClass({

  getDefaultProps: function(){
    return {
      postsArray: [
        {
          username: 'Joe Dahle2',
          message: '2How now brown cow, we sure do want some fried ice cream!',
          time: '2011-07-02T05:00:00+0000',
          id: 1
        }, {
          username: 'Joe Dahle2',
          message: '2How now brown cow, we sure do want some fried ice cream!',
          time: '2011-07-02T05:00:00+0000',
          id: 2
        }
      ]
    }
  },
  render: function(){
    console.log(this.props);
    var posts = this.props.postsArray.map(function(post){
      return (
        <div key={post.id}>
          <span>{post.message}</span>
        </div>
      )
    });
    return <div>{posts}</div>
  }
});

export default NewsFeed;
