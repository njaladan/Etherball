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
      App.web3Provider = new Web3.providers.HttpProvider('http://127.0.0.1:8545');
      //App.web3Provider = new Web3.providers.HttpProvider('https://ropsten.infura.io/cpokRXa96X1xQ48pv841');
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
      return App.getTicketPrice();
    });
    return App.bindEvents();
  },

  bindEvents: function() {
    $(document).on('click', '#buyTicket1', App.handleBuyTicket1);
    $(document).on('click', '#buyTicket2', App.handleBuyTicket2);
    $(document).on('click', '#buyTicket3', App.handleBuyTicket3);
    $(document).on('click', '#buyTicket4', App.handleBuyTicket4);
    $(document).on('click', '#buyTicket5', App.handleBuyTicket5);
  },

  handleBuyTicket1: function send() {
    App.contracts.Lottery.deployed().then(function(instance) {
      lottery = instance;
      var lotteryContractAddress = lottery.address;
      lottery.ticketPrice().then(function(ticketPrice){
        var ticketPrice = ticketPrice;
        console.log(ticketPrice);

        //lottery.buyTicket(1, {value:10000000000000000, from:web3.eth.coinbase});

        lottery.buyTicket(1, {
          from: web3.eth.coinbase,
          to: lotteryContractAddress,
          value: 10000000000000000,
          gas: 56000

        });
      })
    })
  },

  handleBuyTicket2: function send() {
    App.contracts.Lottery.deployed().then(function(instance) {
      lottery = instance;
      var lotteryContractAddress = lottery.address;
      lottery.ticketPrice().then(function(ticketPrice){
        var ticketPrice = ticketPrice;
        console.log(ticketPrice);

        //lottery.buyTicket(1, {value:10000000000000000, from:web3.eth.coinbase});

        lottery.buyTicket(2, {
          from: web3.eth.coinbase,
          to: lotteryContractAddress,
          value: 10000000000000000,
          gas: 56000

        });
      })
    })
  },

  handleBuyTicket3: function send() {
    App.contracts.Lottery.deployed().then(function(instance) {
      lottery = instance;
      var lotteryContractAddress = lottery.address;
      lottery.ticketPrice().then(function(ticketPrice){
        var ticketPrice = ticketPrice;
        console.log(ticketPrice);

        //lottery.buyTicket(1, {value:10000000000000000, from:web3.eth.coinbase});

        lottery.buyTicket(3, {
          from: web3.eth.coinbase,
          to: lotteryContractAddress,
          value: 10000000000000000,
          gas: 56000

        });
      })
    })
  },

  handleBuyTicket4: function send() {
    App.contracts.Lottery.deployed().then(function(instance) {
      lottery = instance;
      var lotteryContractAddress = lottery.address;
      lottery.ticketPrice().then(function(ticketPrice){
        var ticketPrice = ticketPrice;
        console.log(ticketPrice);

        //lottery.buyTicket(1, {value:10000000000000000, from:web3.eth.coinbase});

        lottery.buyTicket(4, {
          from: web3.eth.coinbase,
          to: lotteryContractAddress,
          value: 10000000000000000,
          gas: 56000

        });
      })
    })
  },

  handleBuyTicket5: function send() {
    App.contracts.Lottery.deployed().then(function(instance) {
      lottery = instance;
      var lotteryContractAddress = lottery.address;
      lottery.ticketPrice().then(function(ticketPrice){
        var ticketPrice = ticketPrice;
        console.log(ticketPrice);

        //lottery.buyTicket(1, {value:10000000000000000, from:web3.eth.coinbase});

        lottery.buyTicket(5, {
          from: web3.eth.coinbase,
          to: lotteryContractAddress,
          value: 10000000000000000,
          gas: 56000

        });
      })
    })
  },

  getTicketPrice: function(){
    console.log('Getting ticket price...');
    App.contracts.Lottery.deployed().then(function(instance) {
        lottery = instance;
        return lottery.ticketPrice();
    }).then(function(result){
      EthPrice = Math.round(1000*result/1000000000000000000)/1000; // Result is returned in wei (10^18 per 1 ETH), so divide by 10^18. Also using a technique to "multiply and divide" by 1000 for rounding up to 3 decimals.
      $('#EthPrice').text(EthPrice.toString(10));
      }).catch(function(err) {
          console.log(err.message);
        });
  }

};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
