import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import BottomBar from './BottomBar';
import pig from '../svg/pig.svg';

class CardBegin extends Component {
  
  render() {
    return (
      <div className="card">
        <div className="content">
          <img src={pig} alt="" className="pig-icon" height="50" width="50" />
          <h1>Hey! Ready to invest some money?</h1>
          <p>Before you begin, make sure you're clear on:</p>
          <ul>
            <li>How much you want to invest</li>
            <li>Basic financial information about your company</li>
            <li>What kind of property</li>
          </ul>
        </div>
        <BottomBar>
          <Link to="/step-1" className="btn" onClick={this.onClickHandler}>
            Start
          </Link>
        </BottomBar>
      </div>
    );
  }
}

export default CardBegin;
