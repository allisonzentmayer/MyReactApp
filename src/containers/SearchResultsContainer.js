import React, { Component } from 'react';
import { MovieResults } from '../components/MovieResults';

const searchBaseUrl = `http://localhost:8080/movies/search`

export class SearchResultsContainer extends Component {
    state = { movies: [] };

    getMovies = () => {
        var url = `${searchBaseUrl}?searchString=${this.props.searchString}`;
        fetch(url)
        .then(d => d.json())
        .then (d => {
            this.setState({
                movies: d.results
            })
        })
    }

    componentDidMount() {
        this.getMovies()
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.getMovies()
        }
    }

    render() {
      return <MovieResults movies={this.state.movies} viewDetails={this.props.viewDetails} />;
    }
  }