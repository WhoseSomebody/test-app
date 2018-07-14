import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Button extends Component {
  render() {
    return <Link to={this.props.linkTo} className="Button">{this.props.children}</Link>;
  }
}

export default Button;
