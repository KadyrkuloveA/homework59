import React, {Component} from 'react';

class Jokes extends Component {

    async componentDidMount() {

        const response = await fetch('https://api.chucknorris.io/jokes/random');

        if (response.ok) {
            const joke = await response.json();
            this.setState({joke});
            console.log(joke);
        } else {
            throw new Error('Something went wrong with network request');
        }
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default Jokes;