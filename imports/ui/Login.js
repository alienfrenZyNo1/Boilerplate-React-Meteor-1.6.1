import React from 'react';
import { Link } from 'react-router-dom';
import { meteor } from 'meteor/meteor';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
  }

//This is needed in React Router 4 instead of onEnter
  // componentWillMount() {
  //      if (Meteor.userId())
  //          this.props.history.replace('/links');
  //  }
//END This is needed in React Router 4 instead of onEnter

  onSubmit(e) {
    e.preventDefault();

    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();

    Meteor.loginWithPassword({email}, password, (err) => {
      //Shows error to screen
      if (err) {
        this.setState({error: 'Unable to login. Check email and password.'});
      } else {
        this.setState({error: ''});
      }
    });
  }

  render() {
    return (
      <div className="boxed-view">
        <div className="boxed-view__box">
          <h1>Login</h1>

          {this.state.error ? <p>{this.state.error}</p> : null}

          <form onSubmit={this.onSubmit.bind(this)} noValidate className="boxed-view__form">
            <input type="email" ref="email" name="email" placeholder="Email"/>
            <input type="password" ref="password" name="password" placeholder="Password"/>
            <button className="button">Login</button>
          </form>

          <Link to="/signup">Sign up here!</Link>
        </div>
      </div>
    );
  }
};
