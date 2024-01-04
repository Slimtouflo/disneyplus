import { Component } from "react";
import "./App.css";
import disney from "../img/companies/logo-disney.png"
import pixar from "../img/companies/logo-pixar.png"
import marvel from "../img/companies/logo-marvel.png"
import starwars from "../img/companies/logo-starwars.png"

export default class App extends Component {
  state = {
    newMovies: [],
    suggestionMovies: []
  }

  async getMovies(apiEndpoint, limit) {
    const data = await fetch(apiEndpoint).then(response => response.json());
    const limitedMovies = data.slice(0, limit);
    return limitedMovies;
  }

  async componentDidMount() {
    const newMovies = await this.getMovies(`https://elorri.fr/api/disney-plus/movies`, 6);
    const suggestionMovies = await this.getMovies(`https://elorri.fr/api/disney-plus/suggest`, 3);

    this.setState({
      newMovies: newMovies,
      suggestionMovies: suggestionMovies
    });
  }

  render() {
    const listNewMovies = this.state.newMovies.map((movie) => (
      <a key={movie.id} href={`/movie/${movie.id}`}>
        <img key={movie.id} src={movie.poster} alt={movie.title} className="moviePoster" />
      </a>
    ));

    const listSuggestionMovies = this.state.suggestionMovies.map((movie) => (
      <a key={movie.id} href={`/movie/${movie.id}`} className="movieCoverLinks">
        <img key={movie.id} src={movie.cover} alt={movie.title} className="movieCover" />
      </a>
    ));

    return (
      <div>
        <div className="studios">
          <a className="studioLink" href="">
            <img className="logoStudio" src={disney} alt="" />
          </a>
          <a className="studioLink" href="">
            <img className="logoStudio" src={pixar} alt="" />
          </a>
          <a className="studioLink" href="">
            <img className="logoStudio" src={marvel} alt="" />
          </a>
          <a className="studioLink" href="">
            <img className="logoStudio" src={starwars} alt="" />
          </a>
        </div>
        <div className="containerNew">
          <h2>Nouveautés</h2>
          <ul className="movieList">
            {listNewMovies}
          </ul>

          <div>
            <h2>Suggestions</h2>
            <ul className="movieList">
              {listSuggestionMovies}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
