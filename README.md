# Etherball 🎟
Etherball is a simple lottery system composed of a back-end built with Node.js, Solidity, and Truffle to run on the Ethereum blockchain, and a front-end created using Bootstrap, Web3, and HTML+CSS. I made Etherball to try to get a grasp of the full-stack process behind creating Ethereum DApps.

### Features
Etherball features:
 • Integration with all major Ethereum testnets
 • Works with the Metamask wallet and Mist browser
 • Easy to purchase ticket interface (and prevention of duplicate tickets)
 • A simple but functional interface built with Bootstrap
 • A blockchain-based nondeterministic randomness generator

### Visit
The current link to use Etherball is https://lottery-ccadyzdork.now.sh, though this link is subject to change.

### Installation
Installing Etherball to use on your machine is simple. First,
`git clone`
the repository to get the files onto your system. Next, install the necessary Node.js modules with
`npm install`
Create and place your mnemonic private key at the location
`keystore/eth_keystore.txt`
If you plan on changing the `Lottery.sol` source code, you'll want to
`truffle migrate`
Finally, to initialize and open the Node server,
`npm run dev`

### Other
 • The majority of the code powering the app is located in `contracts/Lottery.sol` and `src/js/app.js` - if you'd like to see how I edit it in any way, that's probably the place to go.
 • The source of randomness for this lottery system comes from a SHA-256 hash taken from the blockchain timestamp and number.

### Technologies Used
 • Truffle
 • Node.js
 • HTML/CSS
 • TestRPC
 • Bootstrap
 • Web3
