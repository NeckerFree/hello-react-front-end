import apiConnection from './apiConnection';

const getRandomGreeting = () => apiConnection.get('/greetings');
const ApiServices = {
  getRandomGreeting,
};
export default ApiServices;
