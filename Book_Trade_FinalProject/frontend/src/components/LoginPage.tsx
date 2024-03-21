import React, { useState } from 'react';
import './LoginPage.css';

type LoginPageProps = {
  onLogin: () => void;
};

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = (event: React.FormEvent) => {
    event.preventDefault();
    if (username == 'admin' && password == 'password') {
      setError('');
      onLogin();
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div>
      <div className="sidenav">
        <div className="login-main-text">
          <h1>The Next Chapter </h1> 
          <p>Login or register from here to access your future chapters.</p>
        </div>
      </div>
      <div className="main">
        <div className="col-md-6 col-sm-12">
          <div className="login-form">
            <form onSubmit={handleSignIn}>
              <div className="form-group">
                <label htmlFor="username">User Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="User Name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {error && <p style={{ color: 'skyblue' }}>{error}</p>}
              <button type="submit" className="btn btn-black">Login</button>
              <button type="button" className="btn btn-secondary">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
