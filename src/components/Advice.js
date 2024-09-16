import React from 'react';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner';

import {getAdvice} from '../actions';

let today = new Date().toLocaleDateString();

const Advice = props => {
  return (
    <div className='wrapper'>
      <div className='paper'>
        <div className='padder'>
          <h1>Random Advice Slip</h1>
            {!props.advice && !props.isFetching && <p className='advice'>Get a random advice slip!</p>}
            {props.isFetching && (
              <Loader type="Puff" color='#00BFFF' height={100} width={100} />
            )}
            {props.advice && 
              <div className='slip'>
                <p className='advice'>{props.advice.advice}</p> 
                <p className='datetime'><span className='time'>#{props.advice.slip_id}</span> <span className='date'>{today}</span></p>
              </div>
            }
        </div>     
      </div>
      <button onClick={props.getAdvice}>Get Some Advice</button>
    </div>
    
  );
};

const mapStateToProps = state => {
  return {
    advice: state.advice,
    slip_id: state.slip_id,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, {getAdvice})(Advice);