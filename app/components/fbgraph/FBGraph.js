var React = require('react');
var PropTypes = React.PropTypes;
var Graph = require('fb-react-sdk');

var FBGraph = React.createClass({
  options: {
    timeout: 3000,
    pool: {
      maxSockets: Infinity
    },
    headers: {
      connection: 'keep-alive'
    }
  },
  searchOptions: {
    q: 'puppy',
    type: 'post'
  },
  onCall: function(){
    Graph.search(this.searchOptions, function(err, res){
      console.log(res, err);
    });
  },
  render: function() {
    return (
      <p onClick={this.onCall}>Hello world</p>
    );
  }

});

module.exports = FBGraph;
