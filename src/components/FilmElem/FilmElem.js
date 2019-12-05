import React, {Component} from 'react';
import './FilmElem.css';

class FilmElem extends Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.filmName !== this.props.filmName;
    };

    render() {
        return (
            <div className='filmContainer'>
                <input type="text" value={this.props.filmName} onChange={this.props.nameChange} className='filmInput'/>
                <button onClick={this.props.filmDel} className='delBtn'>✖</button>
            </div>
        );
    }
}

export default FilmElem;