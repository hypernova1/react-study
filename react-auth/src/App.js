import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AuthButton from './components/AuthButton'
import PublicPage from './components/PublicPage';
import ProtectedPage from './components/ProtectedPage';
import PrivateRoute from './components/PrivateRoute';
import LoginPage from './components/LoginPage';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <div>
        <AuthButton />
        <ul>
          <li>
            <Link to="/public">Public Page</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
          <li>
            <Link to="/profile">Profile Page</Link>
          </li>
        </ul>
        
        <Switch>
          <Route path="/public">
            <PublicPage />
          </Route>
          <PrivateRoute path="/protected">
            <ProtectedPage />
          </PrivateRoute>
          <PrivateRoute path="/profile">
            <Profile />
          </PrivateRoute>
          <Route path="/login">
            <LoginPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
