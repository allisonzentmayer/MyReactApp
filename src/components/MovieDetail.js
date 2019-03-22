import React, { Component } from 'react';
import './MovieDetail.css';
import { MoviePoster } from './MoviePoster';
import moment from 'moment';
const movieDetailsUrl = `http://localhost:8080/movies`

export class MovieDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: '',
            credits: ''
        };
    }

    componentDidMount() {
        Promise.all([
            fetch(`${movieDetailsUrl}/${this.props.id}/details`),
            fetch(`${movieDetailsUrl}/${this.props.id}/credits`)
        ]).then((results) => 
            Promise.all(results.map(r => r.json()))
        ).then(([res1, res2]) => {
            this.setState({movie: res1, credits: res2})
        })
    }

    renderCast = () => {
        return(
            <div className="cast">
                <div className="detail-heading">Cast</div>
                {this.state.credits.cast.map(castMember => {
                    return <div key={castMember.id} className="detail-value">{castMember.name}</div>
                })}
            </div>
        );
    }

    render() {
        return (
            <div className="movie-detail">
                {this.state.movie && <MoviePoster path={this.state.movie.poster_path} title={this.state.movie.title}/>}
                <div className="detail-heading">Overview</div>
                <div className="detail-value">{this.state.movie.overview}</div>
                <div className="detail-heading">Tagline</div>
                <div className="detail-value">{this.state.movie.tagline}</div>
                <div className="detail-heading">Rating</div>
                <div className="detail-value">{this.state.movie.vote_average}</div>
                <div className="detail-heading">Release Date</div>
                <div className="detail-value">{this.state.movie && moment.utc(new Date(this.state.movie.release_date)).format('MMMM Do YYYY')}</div>
                {this.state.credits && this.renderCast()}
            </div>
        )
    }
}