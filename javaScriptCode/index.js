const express = require('express')
const app = express();
const ethers = require('ethers')

let provider = ethers.getDefaultProvider('ropsten');

var addressUnibac = '0x0AA1640a9b0A868d35675d3aBf1190aE8b087d99';

// Load the wallet to deploy the contract with
let privateKey = 'D1C26B0BA30DF307DF618FE365C98BCBCF1F73D9F84B15982C627A19144CED6A';
let wallet = new ethers.Wallet(privateKey, provider);

var unibacABI = [
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "hash",
				"type": "bytes32"
			}
		],
		"name": "add_acte",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "string",
				"name": "set_validator_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "set_validator_location",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "set_validator_address",
				"type": "address"
			}
		],
		"name": "add_validator",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "set_government_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "set_government_location",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "hash",
				"type": "bytes32"
			}
		],
		"name": "get_acte",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "_validatorAddress",
				"type": "address"
			}
		],
		"name": "is_validator",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "map_hash_acte",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "validators",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "location",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];

var unibacContract = new ethers.Contract(addressUnibac, unibacABI, wallet);

unibacContract.is_validator('0x0b3dE286BE378E98D163dD1Cb753234721d753Da').then(result => console.log(result));

//unibacContract.add_acte('0x111122223333444455556666777788889999AAAABBBBCCCCDDDDEEEEFFFFCCCd').then(result => console.log(result));

unibacContract.get_acte('0x111122223333444455556666777788889999AAAABBBBCCCCDDDDEEEEFFFFCCCd').then(result => console.log(result));

//unibacContract.set('10').then(result => console.log(result));

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});
