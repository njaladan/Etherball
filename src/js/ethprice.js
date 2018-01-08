
$.getJSON(
  "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD",
  function(json) {
    console.log(json['USD']);
    $('#poolPrice').text(0.125*json['USD']);
    $('#ticketPrice').text(0.005*json['USD']);
  }
);
