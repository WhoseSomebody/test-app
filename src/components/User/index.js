import React, { Component } from 'react';

class User extends Component {
  render() {
    const { user } = this.props;
    return (
      <div className="Person">
        <img src={user.avatar_url} alt="" />
        <div className="textInfo">
          <div className="name">{user.name}</div>
          <div className="location">{user.location}</div>
        </div>
      </div>
    );
  }
}

export default User;
