import React, {Component} from 'react';
import './Jokes.css';

class Jokes extends Component {

    state = {
      jokes: []
    };

    async componentDidMount() {
        this.NewJoke();
    }

    NewJoke = async () => {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        if (response.ok) {
            let arr = [...this.state.jokes];
            const joke = await response.json();
            console.log(typeof joke);
            arr.push(joke);
            this.setState({jokes : arr});
        } else {
            throw new Error('Something went wrong with network request');
        }
    };

    render() {

        return (
            <div className='Jokes'>
                <button className='newBtn' onClick={this.NewJoke}>New Joke</button>
                {this.state.jokes.map((post,index) => (
                    <div key={index} className='joke'>
                        <p>{post.value}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default Jokes;