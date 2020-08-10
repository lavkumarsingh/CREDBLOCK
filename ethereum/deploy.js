
// PRODUCTION SIDE
const HDWalletProvider = require('truffle-hdwallet-provider');
const certificate = require('./build/BlockCert.json');
const Web3 = require('web3');

  const provider = new HDWalletProvider(
    '92d1925bb13a4f909670904ed655df1f',
    'https://rinkeby.infura.io/v3/7c8e4345050d4a65a35554f6e95250de'
  );

  const web3 = new Web3(provider);

  const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from: ' + accounts[0]);
  const deployment = await new web3.eth.Contract(
    JSON.parse(certificate.interface)
  ).deploy({ data: certificate.bytecode })
     .send({ gas: '1000000', from: accounts[0] });

  console.log('Contract deployed at: ' + deployment.options.address);

};

deploy();
