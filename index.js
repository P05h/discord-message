const fetch = require('node-fetch');

const url = 'https://discord.com/api/v9/channels/933182459208683530/messages&limit=5000';
const token = 'your-authorization-token'; // Replace with your actual token

fetch(url, {
  headers: {
    Authorization: `${token}`,
  },
})
  .then((response) => response.text())
  .then((data) => {
    console.log('Fetch Response:', data);
  })
  .catch((error) => {
    console.error('Fetch Error:', error.message);
  });
