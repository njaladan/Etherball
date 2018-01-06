var lottery = artifacts.require("Lottery.sol");

module.exports = function() {
  deployer.deploy(lottery);
};
