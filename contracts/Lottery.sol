pragma solidity ^0.4.17;

/**
 * @title Simple Ethereum-based lottery
 * @dev Source of randomness comes from ethereum block hashes.
 * Created to work with a web3 front end.
 *
 */

contract Lottery {

    event LotteryTicketPurchased(address indexed _purchaser, uint256 _ticketID);
    event LotteryAmountPaid(address indexed _winner, uint256 _amount);
    event OwnershipTransferred(address _old, address _new);


    // variables that I may want to change in the future
    uint64 ticketPrice = 10 finney;
    uint64 ticketMax = 10;

    // number of tickets is set to a hard 100, I hope I don't regret this
    address[10] public ticketMapping;
    uint256 ticketsBought = 0;

    address owner;

    modifier onlyOwner()  {
      require(msg.sender==owner);
      _;
    }

    // greater than to prevent locked funds
    modifier allTicketsSold() {
      require(ticketsBought>=ticketMax);
      _;
    }

    function Lottery() public{
      owner = msg.sender;
    }

    function changeOwner(address _replacement) onlyOwner public returns (bool) {
      // adding this because I don't trust myself yet
      require(_replacement != address(0));
      address old = owner;
      owner = _replacement;
      OwnershipTransferred(old, owner);
      return true;
    }


    function() payable public {
      // for now, have ticket purchasing only through functions
      // for sanity purposes
      revert();
    }

    function buyTicket(uint16 _ticket) payable public returns (bool) {
      // I'd prefer all tickets to just be 0.01 ether
      // require(msg.value == ticketPrice);
      require(_ticket > 0 && _ticket < ticketMax+1);
      require(ticketMapping[_ticket-1]==address(0));
      require(ticketsBought < ticketMax);

      address purchaser = msg.sender;
      ticketsBought += 1;
      ticketMapping[9] = purchaser;
      ticketMapping[_ticket-1] = purchaser;
      LotteryTicketPurchased(purchaser, _ticket);

      return true;
    }

    // if a bad winner is chosen the first time, it's possible to just run
    // sendReward() again. But can this cause an attack?
    function sendReward() public allTicketsSold returns (address) {
      //address winner = lotteryPicker();
      // prevent locked funds by sending to bad address
      address winner = address(1);
      require(winner != address(0));
      uint256 totalAmount = ticketMax*ticketPrice;
      reset();
      winner.transfer(totalAmount);
      LotteryAmountPaid(winner, totalAmount);
      return winner;
    }

    function lotteryPicker() public view returns (bytes32) {
      uint256 hello = 12*ticketMax;

      return block.blockhash(block.number);
    }

    function reset() private allTicketsSold returns (bool) {
      ticketsBought = 0;
      for(uint x = 0; x < ticketMax; x++) {
        delete ticketMapping[x];
      }
      return true;
    }
}
