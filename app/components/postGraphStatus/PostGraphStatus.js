import React, { PropTypes } from 'react';
import { Input, Icon, Label, Button } from 'semantic-ui-react';

var PostGraphStatus = React.createClass({
  getInitialState: function(){
    return {
      message: ''
    }
  },
  handleInputChange: function(input){
    this.setState({
      message: input.target.value
    });
  },
  handleClick: function(e){
    console.log(this.state.message);
    this.props.shouldUpdateStatus(this.state.message);
  },
  render: function(){
    // Not passing input data
    return (
      <Input fluid icon='facebook square'
        iconPosition='left'
        placeholder='Post to your timeline...'
        onChange={this.handleInputChange}
        action={<Button color='facebook'
          icon='send'
          content='Post'
          onClick={this.handleClick}/>}
         ></Input>
    )
  }
});

export default PostGraphStatus;
