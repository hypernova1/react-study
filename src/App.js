import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AuthButton from './components/AuthButton'
import PublicPage from './components/PublicPage';
import ProtectedPage from './components/ProtectedPage';
import PrivateRoute from './components/PrivateRoute';
import LoginPage from './components/LoginPage';

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
        </ul>
        
        <Switch>
          <Route path="/public">
            <PublicPage />
          </Route>
          <PrivateRoute path="/protected">
            <ProtectedPage />
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
