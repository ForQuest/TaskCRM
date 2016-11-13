import axios from 'axios';
import { host, port, basicauth } from 'config/app';
import pageRenderer from 'utils/pageRenderer';

// configure baseURL for axios requests (for serverside API calls)
axios.defaults.baseURL = `http://${host}:${port}`;
axios.defaults.headers.common['Authorization'] = 'Basic ' + basicauth;

export default function render(req, res) {
  const initialState = {
    user: {
      authenticated: false,
      isWaiting: false,
      message: ''
    }
  };
  
  res.status(200).send(pageRenderer(initialState));
}
