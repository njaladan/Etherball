App = {
  web3Provider: null,
  contracts: {},

  init: function() {
    return App.initWeb3();
  },

  initWeb3: function() {
    // Initialize web3 and set the provider to the testRPC.
    if (typeof web3 !== 'undefined') {
      App.web3Provider = web3.currentProvider;
      web3 = new Web3(web3.currentProvider);
    } else {
      // set the provider you want from Web3.providers
      // App.web3Provider = new Web3.providers.HttpProvider('http://127.0.0.1:8545');
      App.web3Provider = new Web3.providers.HttpProvider('https://mainnet.infura.io/GjyHpPqLZffsizIx6ieH');
      web3 = new Web3(App.web3Provider);
    }

    return App.initContract();
  },

  initContract: function() {
    $.getJSON('Lottery.json', function(data) {
      // Get the necessary contract artifact file and instantiate it with truffle-contract.
      var LotteryArtifact = data;
      App.contracts.Lottery = TruffleContract(LotteryArtifact);

      // Set the provider for our contract.
      App.contracts.Lottery.setProvider(App.web3Provider);
      return App.getTicketPrice(), App.getTicketMapping(), App.getLotteryAddress();
    });
    return App.bindEvents();
  },

  bindEvents: function() {
    for(var i = 1; i <= 25; i++) {
      $(document).on('click', '#buyTicket' + i, App.handleBuyTicket(i));
    }
  },

  handleBuyTicket: function(ticketNumber) {
    function buyTicketNumber() {
      App.contracts.Lottery.deployed().then(function(instance) {
        lottery = instance;
        var lotteryContractAddress = lottery.address;
        lottery.ticketPrice().then(function(ticketPrice){
          var ticketPrice = ticketPrice;
          lottery.buyTicket(
            ticketNumber,
            {
              from: web3.eth.coinbase,
              to: lotteryContractAddress,
              value: 5000000000000000,
              gas: 70000
            });
        })
      })
    }
    return buyTicketNumber
  },

  getTicketPrice: function() {
    console.log('Getting ticket price...');
    App.contracts.Lottery.deployed().then(function(instance) {
      lottery = instance;
      return lottery.ticketPrice();
    }).then(function(result) {
      // Result is returned in wei (10^18 per 1 ETH), so divide by 10^18.
      EthPrice = Math.round(1000 * result / 500000000000000000) / 1000;
      $('#EthPrice').text(EthPrice.toString(10));
    }).catch(function(err) {
      console.log(err.message);
    });
  },

  getLotteryAddress: function() {
    console.log('Getting lottery address...');
    App.contracts.Lottery.deployed().then(function(instance) {
      lottery = instance;
      return lottery.address;
    }).then(function(result){
      $('#lotteryAddress').text(result);
    }).catch(function(err) {
      console.log(err.message);
    });
  },

  getTicketMapping: function() {
    console.log('Getting ticket mapping...');
    App.contracts.Lottery.deployed().then(function(instance) {
        lottery = instance;
        return lottery.getTicketsPurchased();
    }).then(function(result){
      for(var i = 0; i < result.length; i++){
        // Check if a ticket has been purchased
        if(result[i] == "0x0000000000000000000000000000000000000000"){
          result[i] = 0;
        } else {
          result[i] = 1;
          $("#buyTicket" + String(i)).prop('disabled', true);
        }
      }
      console.log(result);
    }).catch(function(err) {
      console.log(err.message);
    });
  },

};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
