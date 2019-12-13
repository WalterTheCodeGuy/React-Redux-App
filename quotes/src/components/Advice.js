import React from 'react';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner';

import {getAdvice} from '../actions';

const Advice = props => {
  return (
    <div>
      <h1>Random Life Advice</h1>
        {!props.advice && !props.isFetching && <p>Get yourself some random life advice!</p>}
        {props.isFetching && (
          <Loader type="Puff" color='#00BFFF' height={100} width={100} />
        )}
        {props.advice && <p>{props.advice.advice}</p>}
        <button onClick={props.getAdvice}>Get Some Advice</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    advice: state.advice,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, {getAdvice})(Advice);