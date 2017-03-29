import React, { PropTypes } from 'react';
import moment from 'moment';

import { Feed } from 'semantic-ui-react';
import './_index.scss';

var NewsFeed = React.createClass({
  parseTime: function(time){
    return moment(time).calendar();
  },
  render: function(){
    // console.log(this.props);
    var posts = this.props.postsArray.map(function(post, index){
      return (
          <Feed.Event key={index}>
            <Feed.Label>
              <img src={post.from.picture.data.url} />
            </Feed.Label>
            <Feed.Content>
              <Feed.Summary>
                <Feed.User as='span'>{post.from.name}</Feed.User>
                <Feed.Date>{this.parseTime(post.updated_time)}</Feed.Date>
              </Feed.Summary>
              <Feed.Extra text>{post.message}</Feed.Extra>
              <Feed.Extra images>
                <img src={post.picture} />
              </Feed.Extra>
            </Feed.Content>
          </Feed.Event>
      )
    }.bind(this));
    return <Feed className="feed-container">{posts}</Feed>
  }
});

export default NewsFeed;
