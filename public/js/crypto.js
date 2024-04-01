document.addEventListener("DOMContentLoaded", async function() {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
    } else {
        alert('O metamask não está instalado!')
    }

    const contractAddress = '0x2Fcf8882e0aA2fC7fC3201D636c39038160f5f66'
    const contractABI = [
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_questionText",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_option1",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_option2",
                    "type": "string"
                }
            ],
            "name": "createQuestion",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_questionId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_option",
                    "type": "uint256"
                }
            ],
            "name": "vote",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_questionId",
                    "type": "uint256"
                }
            ],
            "name": "getQuestion",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_questionId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_option",
                    "type": "uint256"
                }
            ],
            "name": "getVotes",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "questionCount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "questions",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "questionText",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "option1",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "option2",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "votesOption1",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "votesOption2",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]

    const nftContract = new web3.eth.Contract(contractABI, contractAddress);

    const accounts = await web3.eth.getAccounts();
    const fromAddress = accounts[0];

    const options = {
        "Sim" : 1,
        "Não" : 2
    };
    const selectType = document.getElementById('votingOption');

    for (const key in options) {
        const option = document.createElement("option");
        option.value = options[key];
        option.textContent = options[key];
        selectType.appendChild(option);
    }

    document.getElementById('connectMetamaskButton').addEventListener('click', async function() {
        const accounts = await web3.eth.getAccounts();
        const accountInput = document.getElementById('account').value;
        accountInput = accounts[0];
        alert("Metamask conectado com sucesso! Conta: " + accounts[0])
        if (accounts) {
            document.getElementById('connectMetamaskButton').style.display = "none";
        }
    })

    document.getElementById('voteForm').addEventListener('submit', async function(event) {
        event.preventDefault();
        const vote = document.getElementById('votingOption').value;
        console.log(vote);

        await nftContract.methods.vote(1, vote).send({ from: fromAddress });

        alert('Voto enviado!')
    })


    document.getElementById('getVotingForm').addEventListener('submit', async function(event) {
        event.preventDefault();

        const resultOp1 = await nftContract.methods.getVotes(1, 1).call();
        const resultOp2 = await nftContract.methods.getVotes(1, 2).call();

        const voto1 = document.getElementById('voto1');
        const voto2 = document.getElementById('voto2');
        voto1.value = resultOp1;
        voto2.value = resultOp2;

    })
})