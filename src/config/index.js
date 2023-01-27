const {
  REACT_APP_API = 'http://localhost:8080',
  REACT_API_KEY = 'key',
  REACT_APP_ADDRESS = '0x73C2BB90f6a110d363976d4D2528d5Ab1Df1465c'
} = process.env;

module.exports = {
  hostUri: REACT_APP_API,
  apiKey: REACT_API_KEY,
  address: REACT_APP_ADDRESS
};