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
      return App.getTicketPrice(), App.getTicketMapping(), App.getLotteryAddress();
    });
    return App.bindEvents();
  },

  // the following is probably the ugliest code i've ever written; be warned.

  bindEvents: function() {
    $(document).on('click', '#buyTicket1', App.handleBuyTicket1);
    $(document).on('click', '#buyTicket2', App.handleBuyTicket2);
    $(document).on('click', '#buyTicket3', App.handleBuyTicket3);
    $(document).on('click', '#buyTicket4', App.handleBuyTicket4);
    $(document).on('click', '#buyTicket5', App.handleBuyTicket5);
    $(document).on('click', '#buyTicket6', App.handleBuyTicket6);
    $(document).on('click', '#buyTicket7', App.handleBuyTicket7);
    $(document).on('click', '#buyTicket8', App.handleBuyTicket8);
    $(document).on('click', '#buyTicket9', App.handleBuyTicket9);
    $(document).on('click', '#buyTicket10', App.handleBuyTicket10);
    $(document).on('click', '#buyTicket11', App.handleBuyTicket11);
    $(document).on('click', '#buyTicket12', App.handleBuyTicket12);
    $(document).on('click', '#buyTicket13', App.handleBuyTicket13);
    $(document).on('click', '#buyTicket14', App.handleBuyTicket14);
    $(document).on('click', '#buyTicket15', App.handleBuyTicket15);
    $(document).on('click', '#buyTicket16', App.handleBuyTicket16);
    $(document).on('click', '#buyTicket17', App.handleBuyTicket17);
    $(document).on('click', '#buyTicket18', App.handleBuyTicket18);
    $(document).on('click', '#buyTicket19', App.handleBuyTicket19);
    $(document).on('click', '#buyTicket20', App.handleBuyTicket20);
    $(document).on('click', '#buyTicket21', App.handleBuyTicket21);
    $(document).on('click', '#buyTicket22', App.handleBuyTicket22);
    $(document).on('click', '#buyTicket23', App.handleBuyTicket23);
    $(document).on('click', '#buyTicket24', App.handleBuyTicket24);
    $(document).on('click', '#buyTicket25', App.handleBuyTicket25);

  },

  handleBuyTicket1: function send() {
    App.contracts.Lottery.deployed().then(function(instance) {
      lottery = instance;
      var lotteryContractAddress = lottery.address;
      lottery.ticketPrice().then(function(ticketPrice){
        var ticketPrice = ticketPrice;
        console.log(ticketPrice);

        lottery.buyTicket(1, {
          from: web3.eth.coinbase,
          to: lotteryContractAddress,
          value: 5000000000000000,
          gas: 70000

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

        lottery.buyTicket(2, {
          from: web3.eth.coinbase,
          to: lotteryContractAddress,
          value: 5000000000000000,
          gas: 70000

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

        lottery.buyTicket(3, {
          from: web3.eth.coinbase,
          to: lotteryContractAddress,
          value: 5000000000000000,
          gas: 70000

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

        lottery.buyTicket(4, {
          from: web3.eth.coinbase,
          to: lotteryContractAddress,
          value: 5000000000000000,
          gas: 70000

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

        lottery.buyTicket(5, {
          from: web3.eth.coinbase,
          to: lotteryContractAddress,
          value: 5000000000000000,
          gas: 70000

        });
      })
    })
  },

  handleBuyTicket6: function send() {
    App.contracts.Lottery.deployed().then(function(instance) {
      lottery = instance;
      var lotteryContractAddress = lottery.address;
      lottery.ticketPrice().then(function(ticketPrice){
        var ticketPrice = ticketPrice;
        console.log(ticketPrice);

        lottery.buyTicket(6, {
          from: web3.eth.coinbase,
          to: lotteryContractAddress,
          value: 5000000000000000,
          gas: 70000

        });
      })
    })
  },

  handleBuyTicket7: function send() {
    App.contracts.Lottery.deployed().then(function(instance) {
      lottery = instance;
      var lotteryContractAddress = lottery.address;
      lottery.ticketPrice().then(function(ticketPrice){
        var ticketPrice = ticketPrice;
        console.log(ticketPrice);

        lottery.buyTicket(7, {
          from: web3.eth.coinbase,
          to: lotteryContractAddress,
          value: 5000000000000000,
          gas: 70000

        });
      })
    })
  },

  handleBuyTicket8: function send() {
    App.contracts.Lottery.deployed().then(function(instance) {
      lottery = instance;
      var lotteryContractAddress = lottery.address;
      lottery.ticketPrice().then(function(ticketPrice){
        var ticketPrice = ticketPrice;
        console.log(ticketPrice);

        lottery.buyTicket(8, {
          from: web3.eth.coinbase,
          to: lotteryContractAddress,
          value: 5000000000000000,
          gas: 70000

        });
      })
    })
  },

  handleBuyTicket9: function send() {
    App.contracts.Lottery.deployed().then(function(instance) {
      lottery = instance;
      var lotteryContractAddress = lottery.address;
      lottery.ticketPrice().then(function(ticketPrice){
        var ticketPrice = ticketPrice;
        console.log(ticketPrice);

        lottery.buyTicket(9, {
          from: web3.eth.coinbase,
          to: lotteryContractAddress,
          value: 5000000000000000,
          gas: 70000

        });
      })
    })
  },

  handleBuyTicket10: function send() {
    App.contracts.Lottery.deployed().then(function(instance) {
      lottery = instance;
      var lotteryContractAddress = lottery.address;
      lottery.ticketPrice().then(function(ticketPrice){
        var ticketPrice = ticketPrice;
        console.log(ticketPrice);

        lottery.buyTicket(10, {
          from: web3.eth.coinbase,
          to: lotteryContractAddress,
          value: 5000000000000000,
          gas: 70000

        });
      })
    })
  },

  handleBuyTicket11: function send() {
    App.contracts.Lottery.deployed().then(function(instance) {
      lottery = instance;
      var lotteryContractAddress = lottery.address;
      lottery.ticketPrice().then(function(ticketPrice){
        var ticketPrice = ticketPrice;
        console.log(ticketPrice);

        lottery.buyTicket(11, {
          from: web3.eth.coinbase,
          to: lotteryContractAddress,
          value: 5000000000000000,
          gas: 70000

        });
      })
    })
  },

  handleBuyTicket12: function send() {
    App.contracts.Lottery.deployed().then(function(instance) {
      lottery = instance;
      var lotteryContractAddress = lottery.address;
      lottery.ticketPrice().then(function(ticketPrice){
        var ticketPrice = ticketPrice;
        console.log(ticketPrice);

        lottery.buyTicket(12, {
          from: web3.eth.coinbase,
          to: lotteryContractAddress,
          value: 5000000000000000,
          gas: 70000

        });
      })
    })
  },

  handleBuyTicket13: function send() {
    App.contracts.Lottery.deployed().then(function(instance) {
      lottery = instance;
      var lotteryContractAddress = lottery.address;
      lottery.ticketPrice().then(function(ticketPrice){
        var ticketPrice = ticketPrice;
        console.log(ticketPrice);

        lottery.buyTicket(13, {
          from: web3.eth.coinbase,
          to: lotteryContractAddress,
          value: 5000000000000000,
          gas: 70000

        });
      })
    })
  },

  handleBuyTicket14: function send() {
    App.contracts.Lottery.deployed().then(function(instance) {
      lottery = instance;
      var lotteryContractAddress = lottery.address;
      lottery.ticketPrice().then(function(ticketPrice){
        var ticketPrice = ticketPrice;
        console.log(ticketPrice);

        lottery.buyTicket(14, {
          from: web3.eth.coinbase,
          to: lotteryContractAddress,
          value: 5000000000000000,
          gas: 70000

        });
      })
    })
  },

  handleBuyTicket15: function send() {
    App.contracts.Lottery.deployed().then(function(instance) {
      lottery = instance;
      var lotteryContractAddress = lottery.address;
      lottery.ticketPrice().then(function(ticketPrice){
        var ticketPrice = ticketPrice;
        console.log(ticketPrice);

        lottery.buyTicket(15, {
          from: web3.eth.coinbase,
          to: lotteryContractAddress,
          value: 5000000000000000,
          gas: 70000

        });
      })
    })
  },

  handleBuyTicket16: function send() {
    App.contracts.Lottery.deployed().then(function(instance) {
      lottery = instance;
      var lotteryContractAddress = lottery.address;
      lottery.ticketPrice().then(function(ticketPrice){
        var ticketPrice = ticketPrice;
        console.log(ticketPrice);

        lottery.buyTicket(16, {
          from: web3.eth.coinbase,
          to: lotteryContractAddress,
          value: 5000000000000000,
          gas: 70000

        });
      })
    })
  },

  handleBuyTicket17: function send() {
    App.contracts.Lottery.deployed().then(function(instance) {
      lottery = instance;
      var lotteryContractAddress = lottery.address;
      lottery.ticketPrice().then(function(ticketPrice){
        var ticketPrice = ticketPrice;
        console.log(ticketPrice);

        lottery.buyTicket(17, {
          from: web3.eth.coinbase,
          to: lotteryContractAddress,
          value: 5000000000000000,
          gas: 70000

        });
      })
    })
  },

  handleBuyTicket18: function send() {
    App.contracts.Lottery.deployed().then(function(instance) {
      lottery = instance;
      var lotteryContractAddress = lottery.address;
      lottery.ticketPrice().then(function(ticketPrice){
        var ticketPrice = ticketPrice;
        console.log(ticketPrice);

        lottery.buyTicket(18, {
          from: web3.eth.coinbase,
          to: lotteryContractAddress,
          value: 5000000000000000,
          gas: 70000

        });
      })
    })
  },

  handleBuyTicket19: function send() {
    App.contracts.Lottery.deployed().then(function(instance) {
      lottery = instance;
      var lotteryContractAddress = lottery.address;
      lottery.ticketPrice().then(function(ticketPrice){
        var ticketPrice = ticketPrice;
        console.log(ticketPrice);

        lottery.buyTicket(19, {
          from: web3.eth.coinbase,
          to: lotteryContractAddress,
          value: 5000000000000000,
          gas: 70000

        });
      })
    })
  },

  handleBuyTicket20: function send() {
    App.contracts.Lottery.deployed().then(function(instance) {
      lottery = instance;
      var lotteryContractAddress = lottery.address;
      lottery.ticketPrice().then(function(ticketPrice){
        var ticketPrice = ticketPrice;
        console.log(ticketPrice);

        lottery.buyTicket(20, {
          from: web3.eth.coinbase,
          to: lotteryContractAddress,
          value: 5000000000000000,
          gas: 70000

        });
      })
    })
  },

  handleBuyTicket21: function send() {
    App.contracts.Lottery.deployed().then(function(instance) {
      lottery = instance;
      var lotteryContractAddress = lottery.address;
      lottery.ticketPrice().then(function(ticketPrice){
        var ticketPrice = ticketPrice;
        console.log(ticketPrice);

        lottery.buyTicket(21, {
          from: web3.eth.coinbase,
          to: lotteryContractAddress,
          value: 5000000000000000,
          gas: 70000

        });
      })
    })
  },

  handleBuyTicket22: function send() {
    App.contracts.Lottery.deployed().then(function(instance) {
      lottery = instance;
      var lotteryContractAddress = lottery.address;
      lottery.ticketPrice().then(function(ticketPrice){
        var ticketPrice = ticketPrice;
        console.log(ticketPrice);

        lottery.buyTicket(22, {
          from: web3.eth.coinbase,
          to: lotteryContractAddress,
          value: 5000000000000000,
          gas: 70000

        });
      })
    })
  },

  handleBuyTicket23: function send() {
    App.contracts.Lottery.deployed().then(function(instance) {
      lottery = instance;
      var lotteryContractAddress = lottery.address;
      lottery.ticketPrice().then(function(ticketPrice){
        var ticketPrice = ticketPrice;
        console.log(ticketPrice);

        lottery.buyTicket(23, {
          from: web3.eth.coinbase,
          to: lotteryContractAddress,
          value: 5000000000000000,
          gas: 70000

        });
      })
    })
  },

  handleBuyTicket24: function send() {
    App.contracts.Lottery.deployed().then(function(instance) {
      lottery = instance;
      var lotteryContractAddress = lottery.address;
      lottery.ticketPrice().then(function(ticketPrice){
        var ticketPrice = ticketPrice;
        console.log(ticketPrice);

        lottery.buyTicket(24, {
          from: web3.eth.coinbase,
          to: lotteryContractAddress,
          value: 5000000000000000,
          gas: 70000

        });
      })
    })
  },

  handleBuyTicket25: function send() {
    App.contracts.Lottery.deployed().then(function(instance) {
      lottery = instance;
      var lotteryContractAddress = lottery.address;
      lottery.ticketPrice().then(function(ticketPrice){
        var ticketPrice = ticketPrice;
        console.log(ticketPrice);

        lottery.buyTicket(25, {
          from: web3.eth.coinbase,
          to: lotteryContractAddress,
          value: 5000000000000000,
          gas: 70000

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
      EthPrice = Math.round(1000*result/500000000000000000)/1000; // Result is returned in wei (10^18 per 1 ETH), so divide by 10^18. Also using a technique to "multiply and divide" by 1000 for rounding up to 3 decimals.
      $('#EthPrice').text(EthPrice.toString(10));
      }).catch(function(err) {
          console.log(err.message);
        });
  },

  getLotteryAddress: function(){
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

  getTicketMapping: function(){
    console.log('Getting ticket mapping...');
    App.contracts.Lottery.deployed().then(function(instance) {
        lottery = instance;
        console.log()
        return lottery.getTicketsPurchased();
    }).then(function(result){
      console.log(result);
      var i;
      var button;
      for(i = 0; i< result.length; i++){
        if(result[i]=="0x0000000000000000000000000000000000000000"){
          result[i]=0;
        } else {
          result[i]=1;
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
