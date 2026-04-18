import { useState } from 'react';
import './FactLogin.css';

const FactLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Handle login logic here
      console.log('Login attempt:', { email, password, rememberMe });
    }, 1500);
  };

  return (
    <div className="facts-container">
      <div className="facts-background-overlay"></div>
      
      <div className="facts-content">
        <div className="facts-left-panel">
          <div className="facts-branding">
            <h1>School Admissions Portal</h1>
            <p>Access your application status and important information</p>
          </div>

          <div className="facts-features">
            <div className="feature-item">
              <div className="feature-icon">📋</div>
              <h3>Application Status</h3>
              <p>Track your application progress in real-time</p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">📝</div>
              <h3>Submit Documents</h3>
              <p>Upload required documents securely</p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">💬</div>
              <h3>Communicate</h3>
              <p>Message with admissions team</p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">📅</div>
              <h3>Event Calendar</h3>
              <p>View campus visit and event dates</p>
            </div>
          </div>
        </div>

        <div className="facts-right-panel">
          <div className="facts-login-box">
            <div className="login-header">
              <h2>Parent & Student Login</h2>
              <p>Sign in to your account</p>
            </div>

            {error && <div className="error-message">{error}</div>}

            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-input"
                />
              </div>

              <div className="form-options">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  Remember me
                </label>
                <a href="#" className="forgot-password">Forgot password?</a>
              </div>

              <button
                type="submit"
                className="login-button"
                disabled={isLoading}
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
              </button>
            </form>

            <div className="divider">or</div>

            <button className="external-login google-login">
              <span>Continue with Google</span>
            </button>

            <div className="login-footer">
              <p>Don't have an account? <a href="#">Create one here</a></p>
              <div className="help-section">
                <p>Need help? <a href="#">Contact Support</a></p>
              </div>
            </div>
          </div>

          <div className="security-badge">
            <span>🔒</span> Secure & FERPA Compliant
          </div>
        </div>
      </div>
    </div>
  );
};

export default FactLogin;
