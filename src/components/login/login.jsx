import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom'; // Import useLocation hook
import './login.css';
const authEndpoint = 'https://accounts.spotify.com/authorize?';
const redirectUri = 'http://localhost:5173/'; // Change the redirect URI to your callback route
const scopes = ['user-library-read', 'playlist-read-private'];
export const loginEndpoint = `${authEndpoint}client_id=${import.meta.env.VITE_SPOTIFY_CLIENT_ID}&redirect_uri=${redirectUri}&scope=${scopes.join(
  '%20'
)}&response_type=token&show_dialog=true`;
const apiClient = axios.create({
  baseURL: 'https://api.spotify.com/v1/',
});
export const setClientToken = (token) => {
  apiClient.interceptors.request.use(async function (config) {
    config.headers.Authorization = 'Bearer ' + token;
    return config;
  });
};
const Login = () => {
  const [token, setToken] = useState('');
  const location = useLocation(); // Get current location
  useEffect(() => {
    const handleCallback = () => {
      const hash = window.location.hash;
      if (hash) {
        const token = hash.substring(1).split('&').find((elem) => elem.startsWith('access_token'));
        if (token) {
          const accessToken = token.split('=')[1];
          window.localStorage.setItem('token', accessToken);
          setToken(accessToken);
          setClientToken(accessToken); // Set token for API requests
        } else {
          console.error('Access token not found in hash:', hash);
        }
      }
    };
    // Check for callback hash when location changes
    if (location.pathname === '/callback') {
      handleCallback();
    }
  }, [location]);
  return (
    <div className="login-page">
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt="logo-spotify"
        className="logo"
      />
      <a href={loginEndpoint}>
        <div className="login-btn">LOG IN</div>
      </a>
    </div>
  );
};
export default Login;
export { apiClient };