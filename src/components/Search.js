import React, { Component } from 'react';
import './Search.css';

export class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString: ''
        };
    }

    handleChange = (e) => {
        this.setState({
            searchString: e.target.value
        })
    }

    enterPressed(event) {
      var code = event.keyCode || event.which;
      if(code === 13) {
        this.props.onClick(this.state.searchString)
      } 
    }

    render() {
      return (
        <div className="search">
          <div className="popular-movies">
              <div className="search-title">What are you looking for?</div>
              <input className="search-box" onChange={e => this.handleChange(e)} onKeyPress={this.enterPressed.bind(this)}></input>
              <button className="search-button" onClick={() => this.props.onClick(this.state.searchString)}>Go</button>
          </div>
        </div>
      );
    }
  }
