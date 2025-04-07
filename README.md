# Voting Contract – Decentralized Voting System (Solidity + Web3.js)

This project is a decentralized voting platform based on smart contracts developed in Solidity. It allows for the creation of voting questions and secure vote casting using Ethereum. A basic frontend connects to the blockchain via Web3.js and Metamask.

## 🧠 Features

- Create voting questions with two options.
- Vote securely using Metamask wallet.
- View vote counts in real-time.
- Simple frontend using HTML + JavaScript (Web3.js).

## 📄 Smart Contract (Solidity)

- Allows creating a voting question with two options.
- Users vote by calling `vote(questionId, optionNumber)`.
- Vote counts are tracked on-chain.
- All questions are stored in a `mapping`.

## 🧠 Frontend (Web3.js)

Below is a simplified overview of how the frontend connects with the blockchain:

```javascript
if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    await window.ethereum.enable();
}

const contract = new web3.eth.Contract(contractABI, contractAddress);
await contract.methods.vote(1, selectedOption).send({ from: userAddress });
```

- Users connect their wallet via Metamask.
- The form sends votes directly to the blockchain.
- Another form allows reading real-time vote results.

## 🛠 Technologies Used

- Solidity `^0.8.0`
- Node.js
- Express.js
- Web3.js
- Metamask
- HTML / JS

## ▶️ How to Run

### 1. Deploy Contract

You can deploy the contract using Remix IDE or Hardhat. Copy the deployed contract address and ABI.

### 2. Clone the Project

```bash
git clone https://github.com/sbrunomello/voting-contract.git
cd voting-contract
npm install
node app.js
```

### 3. Open the Frontend

Open the `index.html` in your browser. Make sure Metamask is installed and connected to the correct network.

## 📦 Project Structure

```
/contracts
    Voting.sol
/public
    index.html
    voting.js
/routes
    voting.js
app.js
```

## 💡 Improvements Planned

- Add UI feedback with voting history
- Prevent double voting
- Support for more than two options
- Better form validation and feedback

## 🤝 Contributing

Pull requests and issues are welcome. Feel free to suggest improvements or add new features!

## 📬 Contact

- [GitHub Profile](https://github.com/sbrunomello)
- Built with 💡 by Mello
