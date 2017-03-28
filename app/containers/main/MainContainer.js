// Core
import React from 'react';

// components
import HomeContainer from '../../containers/home/HomeContainer';

// styles
import './_index.scss';

function MainContainer(props) {
    return (
      <div className='main-container'>
        {props.children}
      </div>
    );
  }

export default MainContainer;
