var HDWalletProvider = require("truffle-hdwallet-provider");

const Web3 = require("web3");
const web3 = new Web3();

/*
var keystore = require('fs').readFileSync('keystore/eth_keystore.txt').toString();
console.log(keystore);

var kovanProvider = new HDWalletProvider(keystore, "https://kovan.infura.io/GjyHpPqLZffsizIx6ieH");
var ropstenProvider = new HDWalletProvider(keystore, "https://ropsten.infura.io/GjyHpPqLZffsizIx6ieH");
var rinkebyProvider = new HDWalletProvider(keystore, "https://rinkeby.infura.io/GjyHpPqLZffsizIx6ieH");
*/

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    }/*,
    kovan: {
      provider: kovanProvider,
      network_id: 3,
      gas: 4600000,
      gasPrice: web3.toWei("20", "gwei")
    },
    ropsten: {
      provider: ropstenProvider,
      network_id: 2,
      gas: 4600000,
      gasPrice: web3.toWei("120", "gwei")
    },
    rinkeby: {
      provider: rinkebyProvider,
      network_id: 1,
      gas: 4600000,
      gasPrice: web3.toWei("20", "gwei")
    }*/
  },

  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
};
