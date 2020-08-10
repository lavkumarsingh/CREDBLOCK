
// CLIENT SIDE
const Web3 = require('web3');
let web3;

if(typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // On the browser with Web3
  web3 = new Web3(window.web3.currentProvider);
} else {
  // On the server OR browser without Web3
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/7c8e4345050d4a65a35554f6e95250de'
  );
  web3 = new Web3(provider);
}

export default web3;
