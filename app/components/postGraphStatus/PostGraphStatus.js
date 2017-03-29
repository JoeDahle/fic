import React, { PropTypes } from 'react';
import { Input, Icon, Label, Button } from 'semantic-ui-react';

var PostGraphStatus = React.createClass({

  handleInput: function(message){
    this.props.shouldUpdateStatus(message);
  },
  testHandle: function(){
    console.log('works');
  },
  render: function(){
    return (
      <Input fluid icon='facebook square'
        iconPosition='left'
        placeholder='Post to your timeline...'
        action={<Button color='facebook' icon='send' content='Post' onClick={this.testHandle}/>}
         />
    )
  }
});

export default PostGraphStatus;
