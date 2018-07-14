import React, { Component } from 'react';
import Header from '../../components/Header';
import Button from '../../components/Button';

class HomePage extends Component {
  render() {
    const headerTitle = this.props.match.path === '/' ? 'Home' : 'Username';
    const topFive = [
      'GrahamCampbell',
      'fabpot',
      'weierophinney',
      'rkh',
      'josh'
    ];
    return (
      <div className="Home">
        <Header title={headerTitle} />
        <h2>Top 5 GitHub Users</h2>
        <span className="description">Tap the username to see more information</span>
        <div className="buttons">
          {topFive.map((user, i) => (
            <Button linkTo={`/user/${user}`} key={i}>
              {user}
            </Button>
          ))}
        </div>
      </div>
    );
  }
}

export default HomePage;
