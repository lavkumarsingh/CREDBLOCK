
// CLIENT SIDE
import certificate from './build/BlockCert.json';
import web3 from './web3';

const instance = new web3.eth.Contract(
  JSON.parse(certificate.interface),
  '0xf9CA707d65d3f2B31D8F716BAcE303E4574D9F90'
);

export default instance;

// ADDRESS: 0xf9CA707d65d3f2B31D8F716BAcE303E4574D9F90
