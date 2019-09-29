import SmsListener from 'react-native-android-sms-listener';

import React, { Component } from 'react';
import { Text, View, Alert } from 'react-native';
import { ethers } from 'ethers';

   export default class SimpleSmsListener extends Component {

	
  	constructor(props){
      super(props);
      this.state ={ isLoading: true}
	  SmsListener.addListener(message => {
			try{
				let request = message.body;
				request.phoneNumber = message.originatingAddress;
				let jsonString = JSON.stringify(request).toString();
				// Alert.alert('Received JSON Message !', jsonString);
				 
				 var SHA256 = require("crypto-js/sha256");
				
				 var crypterString = SHA256(jsonString);
				 var crypterBytes32 = '0x' + crypterString.toString();
				 
				 Alert.alert(crypterBytes32)
				// var ether = require("ethers")
				
				//config contract
				let overrides = {gasLimit: 800000, gasPrice: ethers.utils.parseUnits('9.0', 'gwei')};

				 let provider = ethers.getDefaultProvider('ropsten');

				 var addressUnibac = '0xa1e250F729565D719C75a393a7e993D6A62D2d13';
				let unibacABI = [
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
				 // Load the wallet to deploy the contract with
				 let privateKey = 'D1C26B0BA30DF307DF618FE365C98BCBCF1F73D9F84B15982C627A19144CED6A';
				 let wallet = new ethers.Wallet(privateKey, provider);
				 var unibacContract = new ethers.Contract(addressUnibac, unibacABI, wallet);
				 //call contract
				  unibacContract.add_acte(crypterBytes32, overrides).then(result => {
				  Alert.alert("ADD TO BLOCKCHAIN");
				  });
				
				
			}catch(e){
				Alert.alert("Unknown message format",e);
			}
			
		});
    }


     render() {
       return (
         <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
           <Text>Hello, world!</Text>
         </View>
       );
     }
   }
