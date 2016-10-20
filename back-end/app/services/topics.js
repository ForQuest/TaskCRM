import request from 'axios';

const service = {
  getTopics: () => request['get']('/api/topic')
};

export default service;

