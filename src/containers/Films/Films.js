import React, {Component} from 'react';
import nanoid from 'nanoid';
import Input from "../../components/Input/Input";
import FilmElem from "../../components/FilmElem/FilmElem";
import './Films.css';

class Films extends Component {

    state = {
        film: '',
        films: [],
        joke: ''
    };

    reversal = (event) => {
        let film = event.target.value;
        this.setState({film});
    };

    addFilm = () => {
        let films = [...this.state.films];
        let name = this.state.film;
        let film = {name, id: nanoid()};
        films.push(film);
        this.setState({films});
    };

    filmDel = (filmId) => {
        let films = [...this.state.films];
        let id = films.findIndex(t => t.id === filmId);
        films.splice(id, 1);
        this.setState({films});
    };

    nameChange = (event, filmId) => {
        let films = [...this.state.films];
        let index = films.findIndex(t => t.id === filmId);
        let film = {...films[index]};
        film.name = event.target.value;
        films[index] = film;
        this.setState({films});
    };

    render() {
        return (
            <div className='Films'>
                <Input
                    stringChange={(event) => this.reversal(event)}
                    filmName={this.state.film}
                    addFilm={this.addFilm}
                />
                {this.state.films.map(film => (
                    <FilmElem
                        filmName={film.name}
                        key={film.id}
                        filmDel={() => this.filmDel(film.id)}
                        nameChange={(event) => this.nameChange(event, film.id)}
                    />
                ))}
            </div>
        );
    }
}

export default Films;