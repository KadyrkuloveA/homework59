import React from 'react';
import './Input.css';

const Input = props => {
    return (
        <div className='inputContainer'>
            <input type="text" value={props.stringValue} onChange={props.stringChange} className='input'/>
            <button onClick={props.addFilm} className='btn'>Add</button>
        </div>
    );
};

export default Input;