// core
import React from 'react';
import PropTypes from 'react';

// data
import Graph from 'fb-react-sdk';

// components
import NewsFeed from '../../components/newsFeed/NewsFeed';
import { Button, Icon, Label, Feed } from 'semantic-ui-react';

// styles
import './_index.scss';

var NAME = '';
var PICTURE_URL = '';
var TOKEN = '';

/**
 * React component to handle login, and page feed request and rendering
 * TODO move logic outside core component
 *
 */
var FBGraph = React.createClass({
  getInitialState: function(){
    return {
      loggedIn: false,
      name: '',
      pictureUrl: '',
      token: '',
      isLoading: false
    }
  },
  componentWillMount: function(){
    window.fbAsyncInit = function() {
      FB.init({
        appId: '267552053697671',
        cookie: true,
        xfbml: true,
        version: 'v2.8'
      });
      FB.getLoginStatus(function(response) {
        this.statusChangeCallback(response);
      }.bind(this));
    }.bind(this);

    // Load the SDK asynchronously
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  },
  statusChangeCallback: function(response){
    if (response.status === 'connected') {
      this.setState({
        loggedIn: true
      });
      console.log(response.authResponse.accessToken);
      Graph.setAccessToken(response.authResponse.accessToken);

      this.setUserData();
    } else {
      window.alert("There was an error!");
    }
  },
  setUserData: function(){
    FB.api('/me?fields=name,picture', function(response){
      this.setState({
        name: response.name,
        pictureUrl: response.picture.data.url,
      });
    }.bind(this));
  },
  componentDidMount: function(){
    this.setState({
      isLoading: true
    });
    this.getGraphFeed();
  },
  getGraphFeed: function(){
    var feedId = '270326020090570/feed';
    var fields = "?fields=from,shares,picture,message,updated_time";
    var limit = '?limit'
    // Give time for async to finish
    setTimeout(function () {
      Graph.get(feedId + fields, function(err, response){
        console.log(response);
      })
    }, 3000);
  },

  // NOTE render based on logged in status
  render: function() {
    return (
      <div>
        // <h2 onClick={this.getGraphSearchData}>get data</h2>
        <div className="facebook-container">
          <Button
            onClick={this.handleClick}
            color='facebook'>
            <Icon name='facebook' />
            {this.state.name}
          </Button>
          <div className='fb-feed'>
            <Feed>
              <Feed.Event>
                <Feed.Label>
                  <img src={this.state.picture} />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Summary>
                    <Feed.User>{this.state.username}</Feed.User>
                    <Feed.Extra>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliq</Feed.Extra>
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>
            </Feed>
          </div>
        </div>
      </div>
    );
  }

});

export default FBGraph;
