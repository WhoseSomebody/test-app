import React, { Component } from 'react';
import Header from '../../components/Header';
import User from '../../components/User';
import { getUser } from '../../utils/api';

class UserPage extends Component {
  state = { user: {}, userName: this.props.match.params.username };
  componentDidMount() {
    getUser(this.state.userName).then(res => {
      this.setState({
        user: res.data
      });
    });
  }
  render() {
    return (
      <div className="User">
        <Header
          withBack
          history={this.props.history}
          // title={this.state.userName}
          title="Person"
        />
        {this.state.user && <User user={this.state.user} />}
      </div>
    );
  }
}

export default UserPage;
