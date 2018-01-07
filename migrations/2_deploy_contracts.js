var lottery = artifacts.require("Lottery.sol");

module.exports = function(deployer) {
    deployer.deploy(lottery);
}
