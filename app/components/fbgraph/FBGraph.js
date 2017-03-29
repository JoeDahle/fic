// core
import React from 'react';
import PropTypes from 'react';

// data
import Graph from 'fb-react-sdk';

// components
import NewsFeed from '../../components/newsFeed/NewsFeed';
import Loading from '../../components/loading/Loading';
import { Button, Icon, Label, Feed } from 'semantic-ui-react';

// styles
import './_index.scss';

var NAME = '';
var PICTURE_URL = '';
var TOKEN = '';
var posts = {};

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
      isLoading: false,
      data: {}
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
      // Enable for production
      Graph.setAccessToken(response.authResponse.accessToken);
      // ONLY FOR DEV, IS A TEST USER
      // Graph.setAccessToken('EAADzVlEenIcBAHYpjnfotUj1lRu7xG2bJPnuYJVlF8YjlfmyagSEqLpai5bWZB5Xcmg7GIngZCynmF1b9WEgL8EL1V9xGaZCSJ79thcaZBmZAvLzqUIRkLjjZBxj7fFY7Dkkz3w4DJG0WNOxPIZCP4O3UWrD25wFe3mqY6MlrZBl0kYOpkED6qovLj2QVJCljJfzvZBRIh8W3ZBpf5MF5v199pLrdgDM2ISiQ8cZBWhRzayJQZDZD')

      this.setUserData();
    } else {
      // window.alert("There was an error!");
      console.log('not logged in');
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
    var fields = "?fields=from{picture,name},shares,picture,message,updated_time";
    // Give time for async to finish
    setTimeout(function () {
      Graph.get(feedId + fields, function(err, response){
        console.log(response);
        this.setState({
          data: response.data
        });
      }.bind(this))
    }.bind(this), 3000);
  },
  handleClick: function(e){
    FB.login(function(){
      FB.getLoginStatus(function(response){
        console.log("get login status");
        console.log(response);
      }.bind(this))
      // TODO Refresh the page to update
    });
  },
  handleClickLogout: function(e){
    FB.logout(function(response){
      console.log(response);
      // TODO refresh page
    })
  },
  // NOTE render based on logged in status
  render: function() {
    if(this.state.data[0] === undefined){
      return(
        <Loading />
      )
    }
    return (
      <NewsFeed className='NewsFeed' postsArray={this.state.data}/>
    )
  }
});

export default FBGraph;
