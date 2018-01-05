var GreensparcCrowdsale = artifacts.require("GreensparcCrowdsale.sol");
module.exports = function(deployer, network, accounts) {
    const startTime = Date.now()/1000|0 + 60;
    const endTime = startTime + (60*3); // 3 minute test deploy for demonstration
    const ethRate = new web3.BigNumber(200);
    const wallet = accounts[0];
deployer.deploy(GreensparcCrowdsale, startTime, endTime, ethRate, 40000000000000000000, 200000000000000000000, wallet);
};

// min tokens = 250k -> 1000 eth
// max tokens = 50mil -> 237500 eth
