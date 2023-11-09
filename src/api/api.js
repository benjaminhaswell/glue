import apiKey from './key.js';

const API_BASE_URL = 'https://us-east-2.aws.data.mongodb-api.com/app/data-vyyho/endpoint/data/v1';

const fetchWithApiKey = (path, method = 'GET', body) => {
  
  const key = apiKey;

  return fetch(`${API_BASE_URL}${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': key,
    },
    body: JSON.stringify(body),
  })
    .then(response => response.json())
    .catch(error => {
      console.error('Error:', error);
      throw error;
    });
};

export const findOne = (collection, database, dataSource, projection) => {
  return fetchWithApiKey('/action/findOne', 'POST', {
    collection,
    database,
    dataSource,
    projection,
  });
};
