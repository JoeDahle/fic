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
          <NavButton />
        <FBGraph />
      </div>
    )
  }

});

export default ShareContainer;
