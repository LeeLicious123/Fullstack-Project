import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000',
});

export default api;


axios.get('/api/some-endpoint')
  .then(response => {
    // Handle successful response
    console.log(response.data);
  })
  .catch(error => {
    // Handle error
    if (error.response) {
      // The request was made and the server responded with a status code
      console.log('Error status:', error.response.status);
      console.log('Response data:', error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      console.log('No response received from server');
    } else {
      // Something else happened while setting up the request
      console.log('Error:', error.message);
    }
  });


api.get('/some-endpoint')
    .then(response => {
        // Handle successful response
        console.log(response.data);
    })
    .catch(error => {
        // Handle error
        if (error.response) {
            // The request was made and the server responded with a status code
            console.error('Server responded with error status:', error.response.status);
            console.error('Response data:', error.response.data);
        } else if (error.request) {
            // The request was made but no response was received
            console.error('No response received from server:', error.request);
        } else {
            // Something else happened while setting up the request
            console.error('Error setting up request:', error.message);
        }
        console.error('Error config:', error.config);
    });
