// core
import React from 'react';
import PropTypes from 'react';
import { Link } from 'react-router';

// components
import Header from '../../components/header/Header';
import Twitter from '../../components/twitter/Twitter';
import FBGraph from '../../components/fbgraph/FBGraph';
import Loading from '../../components/loading/Loading';
import NavButton from '../../components/navbutton/NavButton';
import { Button, Icon } from 'semantic-ui-react';

// styles
import './_index.scss';

var ShareContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function(){
    return {
      isLoading: true
    }
  },
  render: function() {
    return (
      <div className="share-container">
        <Header text={"Let's do this!"} />
          <Link to={'/home'}>
            <Button animated color="violet" className='btn'>
              <Button.Content visible>Return Home</Button.Content>
              <Button.Content hidden>
                <Icon name="left arrow" />
                <span>Pack it up</span>
              </Button.Content>
            </Button>
          </Link>
        <FBGraph />
      </div>
    )
  }

});

export default ShareContainer;
