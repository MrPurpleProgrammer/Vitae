import React from 'react';

const Controls = (props) => (
  <div className='controls'>
    <button
      onClick={props.shuffle} disabled={props.playing}
    ><i className="fas fa-random"></i></button>
    <button onClick={props.clear}><i className="fas fa-eraser"></i></button>
    <button onClick={props.next}><i className="fas fa-step-forward"></i></button>
    {props.playing ?
      <button onClick={props.stop}><i className="fas fa-stop"></i></button> :
      <button onClick={props.play}><i className="fas fa-play"></i></button>
    }
  </div>
);

export default Controls;