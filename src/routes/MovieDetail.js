import { Component } from "react";
import "./MovieDetail.css";

export default class MovieDetail extends Component {
    state = {
        movie: {}
    }

    async getMovie(id) {
        const data = await fetch(`https://elorri.fr/api/disney-plus/movie/${id}`).then(response => response.json());

        this.setState({
            movie: data
        });
    }

    componentDidMount() {
        this.getMovie(this.props.match.params.id)
    }

    render() {
        return (
            <div className="containerDetail">
                <img src={this.state.movie.poster} alt="" />
                <div>
                    <h1>{this.state.movie.title}</h1>
                    <button>{this.state.movie.company}</button>
                    <p>{this.state.movie.description}</p>
                </div>
            </div>
        )
    }
}