import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import { AuthProvider } from './contexts/JWTContext';
import './index.css';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
);
