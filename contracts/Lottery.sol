pragma solidity ^0.4.17;

/**
 * @title Simple Ethereum-based lottery
 * @dev Source of randomness comes from ethereum block hashes.
 * Created to work with a web3 front end.
 *
 */

contract Lottery {

    event LotteryTicketPurchased(address index _purchaser, uint256 _ticketID)
    event LotteryAmountPaid(address index _winner, uint256 _amount);
    event OwnershipTransferred(address _old, address _new);

    mapping(uint16 => address) public ticketMapping;
    uint256 ticketsBought = 0;

    // variables that I may want to change in the future
    var ticketPrice = 10 finney;
    var ticketMax = 100;

    modifier onlyOwner()  {
      require(msg.sender==owner);
      _;
    }

    // greater than to prevent locked funds
    modifier allTicketsSold() {
      require(ticketsBought>=ticketMax);
      _;
    }

    function Lottery(){
      owner = msg.sender;
    }

    function changeState(uint256 _ticketPrice, uint16 _ticketMax) onlyOwner returns (bool) {
      // just because I know I'll mess up
      // doesn't worry about case where sold > new max because owner can change it anyway
      // assumes a benevolent owner, not sure if this can even be malicious though

      require(_ticketPrice > 0);
      require(_ticketMax > 0);

      ticketPrice = _ticketPrice;
      ticketMax = _ticketMax;
      return true;
    }

    function changeOwner(address _replacement) onlyOwner public returns (bool) {
      // adding this because I don't trust myself yet
      require(_replacement != address(0));
      old = owner;
      owner = _replacement;
      OwnershipTransferred(old, owner);
      return true;
    }


    function() payable {
      // for now, have ticket purchasing only through functions
      // for sanity purposes
      revert();
    }

    function buyTicket(uint16 _ticket) payable returns (bool) {
      // I'd prefer all tickets to just be 0.01 ether
      // TODO: buy multiple tickets in one round
      require(msg.value == ticketPrice);
      require(_ticket > 0 && _ticket < ticketMax);
      require(ticketMapping[_ticket]==0);
      require(ticketsBought < ticketMax);

      purchaser = msg.sender;
      ticketsBought += 1;
      ticketMapping[_ticket] = purchaser;

      // not sure if it's okay to unload the gas cost on the poor fellow
      // that bought the last one.
      // TODO: check gas usage with and without function
      if (ticketsBought >= ticketMax) {
        sendReward();
      }

      return true;
    }

    // is this function necessary if ticketsBought == ticketMax?
    function ticketCheck() internal returns (bool);

    // if a bad winner is chosen the first time, it's possible to just run
    // sendReward() again. But can this cause an attack?
    function sendReward() allTicketsSold returns (address) {
      address winner = lotteryPicker();
      // prevent locked funds by sending to bad address
      require(winner != address(0))
      totalAmount = ticketMax*ticketPrice;
      reset();
      winner.transfer(totalAmount);
    }

    function lotteryPicker() private allTicketsSold returns (address) {
      var randomness = uint64(ripemd160(block.coinbase, block.number, block.timestamp));
      uint16 winnerTicket = randomness % ticketMax;
      return ticketMapping[winnerTicket];
    }

    function reset() private allTicketsSold returns (bool) {
      ticketsBought = 0;
      delete ticketMapping;

    }

    function getState() public;

}
