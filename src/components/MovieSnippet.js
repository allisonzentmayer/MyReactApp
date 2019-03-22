import React, { Component } from 'react';
import './MovieSnippet.css';
import { MoviePoster } from './MoviePoster';

export class MovieSnippet extends Component {
    render() {
        return (
            <a key={`movie-${this.props.id}`} onClick={() => this.props.viewDetails(this.props.movie.id)} className="movie-padding col-xs-3">
                <MoviePoster path={this.props.movie.poster_path} title={this.props.movie.title}/>
                <div className="row movie-title">{this.props.movie.title}</div>
                <br/>
                <div className="row movie-rating">Rating: {`${this.props.movie.vote_average}/10`}</div>
            </a>
        )
    }
}