import React, { Component } from 'react';
import { MovieSnippet } from './MovieSnippet';
import './MovieResults.css';

export class MovieResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: null
        };
    }

    displayMovies = () => {
      return(
        <div className="popular-movies row">
          {this.props.movies.map(m => <MovieSnippet movie={m} key={m.id} viewDetails={this.props.viewDetails}/>)}
        </div>
      )
    };

    render() {
      return (
            this.props.movies ? this.displayMovies() : "Loading..."
      );
    }
  }

  // define proptypes