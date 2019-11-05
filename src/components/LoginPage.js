import React, { useState } from 'react'
import { connect } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { loginThunk } from '../reducers/auth';

const LoginPage = ({ loginThunk, isAuthenticated }) => {
  
  const history = useHistory();
  const location = useLocation();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const { from } = location.state || { from: { pathname: '/'} };

  const handleClick = async () => {
    const result = await loginThunk(id, password);
    if(result) {
      history.push(from);
    } else {
      alert("계정 정보가 일치하지 않습니다.");
    }
  }

  return (
    <div>
      <p>You must log in to view the page at { from.pathname }</p>
      <div>
        <label htmlFor="id">아이디</label><input type="text" id="id" onChange={e => setId(e.target.value)} />
      </div>
      <div>
        <label htmlFor="password">비밀번호</label>
        <input type="text" id="password" onChange={e => setPassword(e.target.value)} />
      </div>
      <button onClick={handleClick}>login</button>
    </div>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

const mapDispatchToProps = dispatch => ({
  loginThunk: (id, password) => dispatch(loginThunk(id, password))
})


export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);