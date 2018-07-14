import React, { Component } from 'react';
import { Icon } from 'react-fa';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        {this.props.withBack && (
          <button className="goBack" onClick={() => this.props.history.goBack()}>
            <Icon name="chevron-left" /> Back
          </button>
        )}
        {this.props.title}
      </div>
    );
  }
}

export default Header;
