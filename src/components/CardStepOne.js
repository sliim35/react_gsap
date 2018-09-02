import React from 'react';
import { Link } from 'react-router-dom';

import BottomBar from './BottomBar';

const CardStepOne = () => {
  return (
    <div className="card">
      <div className="content">
        <h1>Let's get started and find you a greate invest!</h1>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">How much do you invest?</label>
          <input
            type="number"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter a sum"
          />
        </div>
      </div>
      <BottomBar>
        <Link to="/" className="btn btn-prev">
          Prev
        </Link>
        <Link to="/" className="btn">
          Next
        </Link>
      </BottomBar>
    </div>
  );
};

export default CardStepOne;
