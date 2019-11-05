import React from 'react'
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logout } from '../reducers/auth';

const AuthButton = ({ isAuthenticated, logout }) => {

  let history = useHistory();

  const handleClick = () => {
    logout();
    history.push('/');
  }

  return isAuthenticated ? (
    <p>
      Welcome!{" "}
      <button
        onClick={handleClick}
      >logout</button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  )

}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthButton);
