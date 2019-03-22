import React, { Component } from 'react';
import './Header.css'
export class Header extends Component {
    render() {
      return (
          // add home button
        <header className="header">
            <div className="header-text" onClick={() => this.props.clearState()}>
                Home
            </div>
        </header>
      );
    }
  }
