import React from 'react'
import { connect } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { login } from '../reducers/auth';

const LoginPage = ({ login }) => {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: '/'} };

  const handleClick = () => {
    login();
    history.replace(from);
  }

  return (
    <div>
      <p>You must log in to view the page at { from.pathname }</p>
      <button onClick={handleClick}>login</button>
    </div>
  )
}


const mapDispatchToProps = dispatch => ({
  login: () => dispatch(login())
});

export default connect(null, mapDispatchToProps)(LoginPage);