import React, { Component } from 'react';
import './App.css';
import { PopularMoviesContainer } from './containers/PopularMoviesContainer';
import { SearchResultsContainer } from './containers/SearchResultsContainer';
import { Header } from './components/Header';
import { Search } from './components/Search';
import { MovieDetail } from './components/MovieDetail';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        movieId: '',
        searchString: ''
    };
  }

  viewMovieDetails = (movieId) => {
    this.setState({
      movieId: movieId
    })
  };

  searchMovies = (searchString) => {
    this.setState({
      searchString: searchString
    })
  };

  clearState = () => {
    this.setState({
      movieId: '',
      searchString: ''
    })
  };

  displayDetailsOrSearch = () => {
    if (this.state.movieId) {
      return <MovieDetail id={this.state.movieId}/>
    } else {
      return (<div>
        <Search onClick={this.searchMovies}/>
        {this.state.searchString ?
          <SearchResultsContainer searchString={this.state.searchString} viewDetails={this.viewMovieDetails}/> :
          <PopularMoviesContainer viewDetails={this.viewMovieDetails}/>}
      </div>);
    }
  };

  render() {
    return (
      <div className="App">
        <Header clearState={this.clearState}/>
        {this.displayDetailsOrSearch()}
      </div>
    );
  }
}

export default App;
