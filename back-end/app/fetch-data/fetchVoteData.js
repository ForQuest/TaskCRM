import { makeRequest } from 'services';

const fetchData = () => makeRequest('get','/api/topic')
  .then(res => res.data)
  .catch(res => Array(res.response && res.response.data && res.response.data.message));

export default fetchData;