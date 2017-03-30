// core
import React from 'react';
import PropTypes from 'react';

// data
import Graph from 'fb-react-sdk';

// components
import NewsFeed from '../../components/newsFeed/NewsFeed';
import Loading from '../../components/loading/Loading';
import PostGraphStatus from '../../components/postGraphStatus/PostGraphStatus';
import { Button, Icon, Label, Feed } from 'semantic-ui-react';

// styles
import './_index.scss';

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
    console.log('cwm');
  },
  handleLoginClick: function(){
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
      Graph.setAccessToken(response.authResponse.accessToken);
      this.setUserData();
    } else {
      // window.alert("There was an error!");
      this.setState({
        loggedIn: false
      });
    }
  },
  // get graph data here bleolw
  setUserData: function(){
    FB.api('/me?fields=name,picture', function(response){
      this.setState({
        name: response.name,
        pictureUrl: response.picture.data.url,
        loggedIn: true
      });
    }.bind(this));
    this.getGraphFeed();
  },
  getGraphFeed: function(){
    var feedId = '270326020090570/feed';
    var fields = "?fields=from{picture,name},shares,picture,message,updated_time";
    // Give time for async to finish
    setTimeout(function () {
      Graph.get(feedId + fields, function(err, response){
        // console.log(response);
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
      this.setState({
        loggedIn: false
      })
    }.bind(this));
  },
  postGraphStatus: function(message){
    Graph.post("270326020090570/feed", message, function(err, response){
      console.log(response);
    });
    // console.log('all good to go ' + message);
  },
  // NOTE render based on logged in status
  render: function(){
    if(this.state.loggedIn === true){
      if(this.state.data[0] === undefined){
        return (
          <Loading />
        )
      } else if(this.state.data[0]){
        return (
          <div>
            <NewsFeed
              className='NewsFeed'
              postsArray={this.state.data} />
            <Button onClick={this.handleClickLogout}>Logout</Button>
              <PostGraphStatus shouldUpdateStatus={this.postGraphStatus}/>
          </div>
        )
      } else {
        return (
          <div>Something wonky is going on</div>
        )
      }
    } else if(this.state.loggedIn === false){
      return (
        <Button onClick={this.handleLoginClick}>Login</Button>
      )
    }
  }

    // render: function() {
  //   if(this.state.data[0] === undefined){
  //     return(
  //       <Button onClick={this.handleClick}>Log in</Button>
  //     )
  //   } else if(this.state.loggedIn === false){
  //     return (
  //       <Button onClick={this.handleClick}>Log in</Button>
  //     )
  //   }
  //   return (
  //     <div>
  //       <NewsFeed
  //         className='NewsFeed'
  //         postsArray={this.state.data} />
  //       <PostGraphStatus shouldUpdateStatus={this.postGraphStatus}/>
  //       <Button onClick={this.handleClickLogout}>Logout</Button>
  //     </div>
  //
  //   )
  // }
});

export default FBGraph;
