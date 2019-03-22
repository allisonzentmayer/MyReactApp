import React, { Component } from 'react';

const imageBaseUrl = 'https://image.tmdb.org/t/p/w200';

export class MoviePoster extends Component {
    render() {
        return (
            <img src={`${imageBaseUrl}${this.props.path}`} alt={`${this.props.title}`}></img>
        )
    }
}