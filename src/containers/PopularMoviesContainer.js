import React, { Component } from 'react';
import { MovieResults } from '../components/MovieResults';

const popularMoviesUrl = `http://localhost:8080/movies/popular`

export class PopularMoviesContainer extends Component {
    state = { movies: [] };
    
    componentDidMount() {
        fetch(popularMoviesUrl)
        .then(d => d.json())
        .then (d => {
            this.setState({
                movies: d.results
            })
        })
    }

    render() {
      return <MovieResults movies={this.state.movies} viewDetails={this.props.viewDetails} />;
    }
  }