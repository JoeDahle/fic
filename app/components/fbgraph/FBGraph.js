// core
var React = require('react');
var PropTypes = React.PropTypes;

// data
var Graph = require('fb-react-sdk');

// components
var SignInButton = require('../../components/signinbutton/SignInButton');
var GraphView = require('../../components/graphview/GraphView');

// styles
var style = require('./_index.scss');

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
      username: '',
      buttonText: 'Continue using Facebook',
      picture: ''
    }
  },
  /**
   * Set headers for Graph session, retrieve a logged in state
   * @return [type] [description]
   */
  componentDidMount: function() {
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
    }(document, 'script', 'facebook-jssdk')
  )},
  /**
   * Check Facebook login status
   * @param  {obj} response Object returned by Graph API
   *
   * If connected, set the auth token for the users device
   */
  statusChangeCallback: function(response){
    if(response.status === 'connected'){
      this.setUsername();
      this.setState({
        loggedIn: true,
      });
      this.setGraphAuthToken(response.authResponse.accessToken);
    } else if(response.status === 'not_authorized'){
      console.warn('//DEV// statusChangeCallback is not authorized');
    } else {
      console.warn('//DEV// statusChangeCallback not logged in');
    }
  },
  /**
   * Check if user is logged into app
   */
  checkLoginState: function(){
    FB.getLoginStatus(function(response){
      console.log(response, "getloginstate");
      this.getUsername(response.authResponse.userID);
      this.statusChangeCallback(response);
    }.bind(this))
  },
  setUsername: function() {
    FB.api('/me?fields=picture,name', function(response) {
      console.log('//DEV// setUsername ', response);
      this.setState({
        username: response.name,
        picture: response.picture,
        buttonText: "Hello " + response.name
      })
      console.log(this.state);
    }.bind(this));
  },
  /**
   * event handler for login component
   */
  handleClick: function(){
    FB.login(this.checkLoginState())
  },
  /**
   * fb-react-sdk set session access token
   * @param  {string} token Token received from Graph API login response
   *
   */
  setGraphAuthToken: function(token){
    Graph.setAccessToken(token);
  },
  /**
   * Options for querying Graph.facebook...
   * @return {object} JSON Page Feed object of posts
   *
   * Not quite returning all needed information.
   * NOTE update the query URL maybe?
   */
  getGraphSearchData: function(){
    Graph.get('270326020090570/feed?fields=from,shares,picture,message,updated_time', function(err, response){
      console.log(response);
      posts = response;
    });
  },
  // NOTE render based on logged in status
  render: function() {
    if(this.state.loggedIn === 'true'){
      return (
        <div className="fb">
          {for(post in posts){
            <GraphView username={post.username}
              picture={post.picture}
              timeStamp={post.timeStamp}
              message={post.message}
          }}
        </div>
      )
    } else {
      <div>need to sign in</div>
    }

    return (
      <div>
        <h2 onClick={this.getGraphSearchData}>get data</h2>
        <div className="facebook-container">
          <SignInButton onClick={this.handleClick} text={this.state.buttonText} active={this.state.loggedin} />
        </div>
      </div>
    );
  }

});

module.exports = FBGraph;
