pragma solidity ^0.4.17;

/**
  * @title Ethereum-Lottery
  * @author Nagaganesh Jaladanki
  * @license MIT
  * @dev Simple lottery smart contract to run on the Ethereum
  * chain. Designed to work well with a web3 front-end.
  * Source of randomness comes from Ethereum block hashes.
  */
  
contract Lottery {

    event LotteryTicketPurchased(address indexed _purchaser, uint256 _ticketID);
    event LotteryAmountPaid(address indexed _winner, uint64 _ticketID, uint256 _amount);

    // Note: prone to change
    uint64 public ticketPrice = 5 finney;
    uint64 public ticketMax = 25;

    // Initialize mapping
    address[26] public ticketMapping;
    uint256 public ticketsBought = 0;

    // Prevent potential locked funds by checking greater than
    modifier allTicketsSold() {
      require(ticketsBought >= ticketMax);
      _;
    }

    /* @dev Empty constructor - nothing needed here */
    function Lottery() public {

    }

    /* @dev Tickets may only be purchased through the buyTickets function */
    function() payable public {
      revert();
    }

    /**
      * @dev Purchase ticket and send reward if necessary
      * @param _ticket Ticket number to purchase
      * @return bool Validity of transaction
      */
    function buyTicket(uint16 _ticket) payable public returns (bool) {
      require(msg.value == ticketPrice);
      require(_ticket > 0 && _ticket < ticketMax + 1);
      require(ticketMapping[_ticket] == address(0));
      require(ticketsBought < ticketMax);

      // Avoid reentrancy attacks
      address purchaser = msg.sender;
      ticketsBought += 1;
      ticketMapping[_ticket] = purchaser;
      LotteryTicketPurchased(purchaser, _ticket);

      /** Placing the "burden" of sendReward() on the last ticket
        * buyer is okay, because the refund from destroying the
        * arrays decreases net gas cost
        */
      if (ticketsBought>=ticketMax) {
        sendReward();
      }

      return true;
    }

    /**
      * @dev Send lottery winner their reward
      * @return address of winner
      */
    function sendReward() public allTicketsSold returns (address) {
      uint64 winningNumber = lotteryPicker();
      address winner = ticketMapping[winningNumber];
      uint256 totalAmount = ticketMax * ticketPrice;

      // Prevent locked funds by sending to bad address
      require(winner != address(0));

      // Prevent reentrancy
      reset();
      winner.transfer(totalAmount);
      LotteryAmountPaid(winner, winningNumber, totalAmount);
      return winner;
    }

    /* @return a random number based off of current block information */
    function lotteryPicker() public allTicketsSold returns (uint64) {
      return uint64(sha256(block.timestamp, block.number)) % ticketMax;
    }

    /* @dev Reset lottery mapping once a round is finished */
    function reset() private allTicketsSold returns (bool) {
      ticketsBought = 0;
      for(uint x = 0; x < ticketMax+1; x++) {
        delete ticketMapping[x];
      }
      return true;
    }

    /** @dev Returns ticket map array for front-end access.
      * Using a getter method is ineffective since it allows
      * only element-level access
      */
    function getTicketsPurchased() public view returns(address[26]) {
      return ticketMapping;
    }
}
