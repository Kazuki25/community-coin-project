export class ContractInfo {
    public communityCoinInfo = {
      "contractName": "CommunityCoin",
      "abi": [
        {
          "constant": true,
          "inputs": [],
          "name": "name",
          "outputs": [
            {
              "name": "",
              "type": "string"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "_spender",
              "type": "address"
            },
            {
              "name": "_value",
              "type": "uint256"
            }
          ],
          "name": "approve",
          "outputs": [
            {
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "totalSupply",
          "outputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "_from",
              "type": "address"
            },
            {
              "name": "_to",
              "type": "address"
            },
            {
              "name": "_value",
              "type": "uint256"
            }
          ],
          "name": "transferFrom",
          "outputs": [
            {
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "decimals",
          "outputs": [
            {
              "name": "",
              "type": "uint256"
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
              "name": "",
              "type": "address"
            },
            {
              "name": "",
              "type": "address"
            }
          ],
          "name": "personCoin",
          "outputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "_spender",
              "type": "address"
            },
            {
              "name": "_subtractedValue",
              "type": "uint256"
            }
          ],
          "name": "decreaseApproval",
          "outputs": [
            {
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "name": "_owner",
              "type": "address"
            }
          ],
          "name": "balanceOf",
          "outputs": [
            {
              "name": "",
              "type": "uint256"
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
              "name": "",
              "type": "address"
            },
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "ownCoins",
          "outputs": [
            {
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "symbol",
          "outputs": [
            {
              "name": "",
              "type": "string"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "_spender",
              "type": "address"
            },
            {
              "name": "_addedValue",
              "type": "uint256"
            }
          ],
          "name": "increaseApproval",
          "outputs": [
            {
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "name": "_owner",
              "type": "address"
            },
            {
              "name": "_spender",
              "type": "address"
            }
          ],
          "name": "allowance",
          "outputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "name": "_name",
              "type": "string"
            },
            {
              "name": "_symbol",
              "type": "string"
            },
            {
              "name": "_decimals",
              "type": "uint256"
            },
            {
              "name": "initialSupply",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "issuer",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "IssuePersonCoin",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "spender",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "to",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "_to",
              "type": "address"
            },
            {
              "name": "_value",
              "type": "uint256"
            }
          ],
          "name": "transfer",
          "outputs": [
            {
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "name": "_owner",
              "type": "address"
            },
            {
              "name": "_issuer",
              "type": "address"
            }
          ],
          "name": "personCoinBalanceOf",
          "outputs": [
            {
              "name": "",
              "type": "uint256"
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
              "name": "_owner",
              "type": "address"
            }
          ],
          "name": "ownPersonCoinList",
          "outputs": [
            {
              "name": "",
              "type": "address[]"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        }
      ],
      "bytecode": "0x60806040526040805190810160405280601281526020017f436f6d6d756e697479436f696e2076302e310000000000000000000000000000815250600390805190602001906200005192919062000185565b506040805190810160405280600381526020017f436f430000000000000000000000000000000000000000000000000000000000815250600490805190602001906200009f92919062000185565b506012600555348015620000b257600080fd5b5060405162001d2f38038062001d2f8339810180604052810190808051820192919060200180518201929190602001805190602001909291908051906020019092919050505083600390805190602001906200011092919062000185565b5082600490805190602001906200012992919062000185565b508160058190555080600181905550806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050505062000234565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620001c857805160ff1916838001178555620001f9565b82800160010185558215620001f9579182015b82811115620001f8578251825591602001919060010190620001db565b5b5090506200020891906200020c565b5090565b6200023191905b808211156200022d57600081600090555060010162000213565b5090565b90565b611aeb80620002446000396000f3006080604052600436106100db576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146100e0578063095ea7b31461017057806318160ddd146101d557806323b872dd14610200578063313ce5671461028557806350181f8e146102b05780635ed610e114610327578063661884631461039e57806370a082311461040357806373e034cb1461045a57806395d89b41146104e7578063a9059cbb14610577578063d73dd623146105dc578063dd62ed3e14610641578063fbdd84c7146106b8575b600080fd5b3480156100ec57600080fd5b506100f5610750565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561013557808201518184015260208101905061011a565b50505050905090810190601f1680156101625780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561017c57600080fd5b506101bb600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506107ee565b604051808215151515815260200191505060405180910390f35b3480156101e157600080fd5b506101ea6108e0565b6040518082815260200191505060405180910390f35b34801561020c57600080fd5b5061026b600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506108ea565b604051808215151515815260200191505060405180910390f35b34801561029157600080fd5b5061029a610ca5565b6040518082815260200191505060405180910390f35b3480156102bc57600080fd5b50610311600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610cab565b6040518082815260200191505060405180910390f35b34801561033357600080fd5b50610388600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610cd0565b6040518082815260200191505060405180910390f35b3480156103aa57600080fd5b506103e9600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610d57565b604051808215151515815260200191505060405180910390f35b34801561040f57600080fd5b50610444600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610fe9565b6040518082815260200191505060405180910390f35b34801561046657600080fd5b506104a5600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611031565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156104f357600080fd5b506104fc61107e565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561053c578082015181840152602081019050610521565b50505050905090810190601f1680156105695780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561058357600080fd5b506105c2600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061111c565b604051808215151515815260200191505060405180910390f35b3480156105e857600080fd5b50610627600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611348565b604051808215151515815260200191505060405180910390f35b34801561064d57600080fd5b506106a2600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611544565b6040518082815260200191505060405180910390f35b3480156106c457600080fd5b506106f9600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506115cb565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561073c578082015181840152602081019050610721565b505050509050019250505060405180910390f35b60038054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156107e65780601f106107bb576101008083540402835291602001916107e6565b820191906000526020600020905b8154815290600101906020018083116107c957829003601f168201915b505050505081565b600081600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b6000600154905090565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561093957600080fd5b600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482111515156109c457600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610a0057600080fd5b610a51826000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461169890919063ffffffff16565b6000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610ae4826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546116b190919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610bb582600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461169890919063ffffffff16565b600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b60055481565b6006602052816000526040600020602052806000526040600020600091509150505481565b6000600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508083101515610e69576000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610efd565b610e7c838261169890919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b8373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a3600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60076020528160005260406000208181548110151561104c57fe5b906000526020600020016000915091509054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60048054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156111145780601f106110e957610100808354040283529160200191611114565b820191906000526020600020905b8154815290600101906020018083116110f757829003601f168201915b505050505081565b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561116b57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156111a757600080fd5b6111f8826000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461169890919063ffffffff16565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061128b826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546116b190919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506112d83384846116cd565b508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b60006113d982600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546116b190919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a36001905092915050565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6060600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080548060200260200160405190810160405280929190818152602001828054801561168c57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611642575b50505050509050919050565b60008282111515156116a657fe5b818303905092915050565b600081830190508281101515156116c457fe5b80905092915050565b600080600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414156117f757600760008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208390806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505b61188682600660008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546116b190919063ffffffff16565b600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061199582600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546116b190919063ffffffff16565b600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055507fe2d704f41ca6632081b1ad37ebf3521636d15b414d923ac8b241c68426c18904848484604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001935050505060405180910390a16001905093925050505600a165627a7a72305820a07d9bf14313eb960a3407283cb89c749b71e92dacc57fb0ae059255c1e0005e0029",
      "deployedBytecode": "0x6080604052600436106100db576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146100e0578063095ea7b31461017057806318160ddd146101d557806323b872dd14610200578063313ce5671461028557806350181f8e146102b05780635ed610e114610327578063661884631461039e57806370a082311461040357806373e034cb1461045a57806395d89b41146104e7578063a9059cbb14610577578063d73dd623146105dc578063dd62ed3e14610641578063fbdd84c7146106b8575b600080fd5b3480156100ec57600080fd5b506100f5610750565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561013557808201518184015260208101905061011a565b50505050905090810190601f1680156101625780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561017c57600080fd5b506101bb600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506107ee565b604051808215151515815260200191505060405180910390f35b3480156101e157600080fd5b506101ea6108e0565b6040518082815260200191505060405180910390f35b34801561020c57600080fd5b5061026b600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506108ea565b604051808215151515815260200191505060405180910390f35b34801561029157600080fd5b5061029a610ca5565b6040518082815260200191505060405180910390f35b3480156102bc57600080fd5b50610311600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610cab565b6040518082815260200191505060405180910390f35b34801561033357600080fd5b50610388600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610cd0565b6040518082815260200191505060405180910390f35b3480156103aa57600080fd5b506103e9600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610d57565b604051808215151515815260200191505060405180910390f35b34801561040f57600080fd5b50610444600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610fe9565b6040518082815260200191505060405180910390f35b34801561046657600080fd5b506104a5600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611031565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156104f357600080fd5b506104fc61107e565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561053c578082015181840152602081019050610521565b50505050905090810190601f1680156105695780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561058357600080fd5b506105c2600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061111c565b604051808215151515815260200191505060405180910390f35b3480156105e857600080fd5b50610627600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611348565b604051808215151515815260200191505060405180910390f35b34801561064d57600080fd5b506106a2600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611544565b6040518082815260200191505060405180910390f35b3480156106c457600080fd5b506106f9600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506115cb565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561073c578082015181840152602081019050610721565b505050509050019250505060405180910390f35b60038054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156107e65780601f106107bb576101008083540402835291602001916107e6565b820191906000526020600020905b8154815290600101906020018083116107c957829003601f168201915b505050505081565b600081600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b6000600154905090565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561093957600080fd5b600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482111515156109c457600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610a0057600080fd5b610a51826000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461169890919063ffffffff16565b6000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610ae4826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546116b190919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610bb582600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461169890919063ffffffff16565b600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b60055481565b6006602052816000526040600020602052806000526040600020600091509150505481565b6000600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508083101515610e69576000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610efd565b610e7c838261169890919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b8373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a3600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60076020528160005260406000208181548110151561104c57fe5b906000526020600020016000915091509054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60048054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156111145780601f106110e957610100808354040283529160200191611114565b820191906000526020600020905b8154815290600101906020018083116110f757829003601f168201915b505050505081565b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561116b57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156111a757600080fd5b6111f8826000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461169890919063ffffffff16565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061128b826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546116b190919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506112d83384846116cd565b508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b60006113d982600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546116b190919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a36001905092915050565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6060600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080548060200260200160405190810160405280929190818152602001828054801561168c57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611642575b50505050509050919050565b60008282111515156116a657fe5b818303905092915050565b600081830190508281101515156116c457fe5b80905092915050565b600080600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414156117f757600760008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208390806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505b61188682600660008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546116b190919063ffffffff16565b600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061199582600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546116b190919063ffffffff16565b600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055507fe2d704f41ca6632081b1ad37ebf3521636d15b414d923ac8b241c68426c18904848484604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001935050505060405180910390a16001905093925050505600a165627a7a72305820a07d9bf14313eb960a3407283cb89c749b71e92dacc57fb0ae059255c1e0005e0029",
      "sourceMap": "234:3450:0:-;;;674:41;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;722:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;780:2;757:25;;1183:261;8:9:-1;5:2;;;30:1;27;20:12;5:2;1183:261:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1287:5;1280:4;:12;;;;;;;;;;;;:::i;:::-;;1312:7;1303:6;:16;;;;;;;;;;;;:::i;:::-;;1341:9;1330:8;:20;;;;1376:13;1361:12;:28;;;;1423:13;1400:8;:20;1409:10;1400:20;;;;;;;;;;;;;;;:36;;;;1183:261;;;;234:3450;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
      "deployedSourceMap": "234:3450:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;674:41;;8:9:-1;5:2;;;30:1;27;20:12;5:2;674:41:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;674:41:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1814:188:5;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1814:188:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;389:83:2;;8:9:-1;5:2;;;30:1;27;20:12;5:2;389:83:2;;;;;;;;;;;;;;;;;;;;;;;726:470:5;;8:9:-1;5:2;;;30:1;27;20:12;5:2;726:470:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;757:25:0;;8:9:-1;5:2;;;30:1;27;20:12;5:2;757:25:0;;;;;;;;;;;;;;;;;;;;;;;912:67;;8:9:-1;5:2;;;30:1;27;20:12;5:2;912:67:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3194:145;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3194:145:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3679:432:5;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3679:432:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1149:99:2;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1149:99:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1128:46:0;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1128:46:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;722:28;;8:9:-1;5:2;;;30:1;27;20:12;5:2;722:28:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;722:28:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1666:445;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1666:445:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2926:296:5;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2926:296:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2321:153;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2321:153:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3564:117:0;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3564:117:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;3564:117:0;;;;;;;;;;;;;;;;;674:41;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1814:188:5:-;1881:4;1925:6;1893:7;:19;1901:10;1893:19;;;;;;;;;;;;;;;:29;1913:8;1893:29;;;;;;;;;;;;;;;:38;;;;1963:8;1942:38;;1951:10;1942:38;;;1973:6;1942:38;;;;;;;;;;;;;;;;;;1993:4;1986:11;;1814:188;;;;:::o;389:83:2:-;433:7;455:12;;448:19;;389:83;:::o;726:470:5:-;832:4;864:8;:15;873:5;864:15;;;;;;;;;;;;;;;;854:6;:25;;846:34;;;;;;;;904:7;:14;912:5;904:14;;;;;;;;;;;;;;;:26;919:10;904:26;;;;;;;;;;;;;;;;894:6;:36;;886:45;;;;;;;;960:1;945:17;;:3;:17;;;;937:26;;;;;;;;988:27;1008:6;988:8;:15;997:5;988:15;;;;;;;;;;;;;;;;:19;;:27;;;;:::i;:::-;970:8;:15;979:5;970:15;;;;;;;;;;;;;;;:45;;;;1037:25;1055:6;1037:8;:13;1046:3;1037:13;;;;;;;;;;;;;;;;:17;;:25;;;;:::i;:::-;1021:8;:13;1030:3;1021:13;;;;;;;;;;;;;;;:41;;;;1097:38;1128:6;1097:7;:14;1105:5;1097:14;;;;;;;;;;;;;;;:26;1112:10;1097:26;;;;;;;;;;;;;;;;:30;;:38;;;;:::i;:::-;1068:7;:14;1076:5;1068:14;;;;;;;;;;;;;;;:26;1083:10;1068:26;;;;;;;;;;;;;;;:67;;;;1162:3;1146:28;;1155:5;1146:28;;;1167:6;1146:28;;;;;;;;;;;;;;;;;;1187:4;1180:11;;726:470;;;;;:::o;757:25:0:-;;;;:::o;912:67::-;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;3194:145::-;3277:7;3304:10;:18;3315:6;3304:18;;;;;;;;;;;;;;;:27;3323:7;3304:27;;;;;;;;;;;;;;;;3297:34;;3194:145;;;;:::o;3679:432:5:-;3785:4;3799:16;3818:7;:19;3826:10;3818:19;;;;;;;;;;;;;;;:29;3838:8;3818:29;;;;;;;;;;;;;;;;3799:48;;3877:8;3857:16;:28;;3853:165;;;3927:1;3895:7;:19;3903:10;3895:19;;;;;;;;;;;;;;;:29;3915:8;3895:29;;;;;;;;;;;;;;;:33;;;;3853:165;;;3981:30;3994:16;3981:8;:12;;:30;;;;:::i;:::-;3949:7;:19;3957:10;3949:19;;;;;;;;;;;;;;;:29;3969:8;3949:29;;;;;;;;;;;;;;;:62;;;;3853:165;4049:8;4028:61;;4037:10;4028:61;;;4059:7;:19;4067:10;4059:19;;;;;;;;;;;;;;;:29;4079:8;4059:29;;;;;;;;;;;;;;;;4028:61;;;;;;;;;;;;;;;;;;4102:4;4095:11;;3679:432;;;;;:::o;1149:99:2:-;1205:7;1227:8;:16;1236:6;1227:16;;;;;;;;;;;;;;;;1220:23;;1149:99;;;:::o;1128:46:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;722:28::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1666:445::-;1729:4;1764:8;:20;1773:10;1764:20;;;;;;;;;;;;;;;;1754:6;:30;;1746:39;;;;;;;;1819:1;1804:17;;:3;:17;;;;1796:26;;;;;;;;1856:32;1881:6;1856:8;:20;1865:10;1856:20;;;;;;;;;;;;;;;;:24;;:32;;;;:::i;:::-;1833:8;:20;1842:10;1833:20;;;;;;;;;;;;;;;:55;;;;1915:25;1933:6;1915:8;:13;1924:3;1915:13;;;;;;;;;;;;;;;;:17;;:25;;;;:::i;:::-;1899:8;:13;1908:3;1899:13;;;;;;;;;;;;;;;:41;;;;1987:45;2008:10;2020:3;2025:6;1987:20;:45::i;:::-;;2069:3;2048:33;;2057:10;2048:33;;;2074:6;2048:33;;;;;;;;;;;;;;;;;;2099:4;2092:11;;1666:445;;;;:::o;2926:296:5:-;3027:4;3081:46;3115:11;3081:7;:19;3089:10;3081:19;;;;;;;;;;;;;;;:29;3101:8;3081:29;;;;;;;;;;;;;;;;:33;;:46;;;;:::i;:::-;3041:7;:19;3049:10;3041:19;;;;;;;;;;;;;;;:29;3061:8;3041:29;;;;;;;;;;;;;;;:87;;;;3160:8;3139:61;;3148:10;3139:61;;;3170:7;:19;3178:10;3170:19;;;;;;;;;;;;;;;:29;3190:8;3170:29;;;;;;;;;;;;;;;;3139:61;;;;;;;;;;;;;;;;;;3213:4;3206:11;;2926:296;;;;:::o;2321:153::-;2420:7;2444;:15;2452:6;2444:15;;;;;;;;;;;;;;;:25;2460:8;2444:25;;;;;;;;;;;;;;;;2437:32;;2321:153;;;;:::o;3564:117:0:-;3628:9;3657:8;:16;3666:6;3657:16;;;;;;;;;;;;;;;3650:23;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3564:117;;;:::o;1060:116:1:-;1120:7;1148:2;1142;:8;;1135:16;;;;;;1169:2;1164;:7;1157:14;;1060:116;;;;:::o;1238:128::-;1298:9;1324:2;1319;:7;1315:11;;1344:2;1339:1;:7;;1332:15;;;;;;1360:1;1353:8;;1238:128;;;;:::o;2332:573:0:-;2429:4;2481:1;2450:10;:18;2461:6;2450:18;;;;;;;;;;;;;;;:27;2469:7;2450:27;;;;;;;;;;;;;;;;:32;2446:214;;;2618:8;:16;2627:6;2618:16;;;;;;;;;;;;;;;2640:7;2618:30;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;2618:30:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2446:214;2700:39;2732:6;2700:10;:18;2711:6;2700:18;;;;;;;;;;;;;;;:27;2719:7;2700:27;;;;;;;;;;;;;;;;:31;;:39;;;;:::i;:::-;2670:10;:18;2681:6;2670:18;;;;;;;;;;;;;;;:27;2689:7;2670:27;;;;;;;;;;;;;;;:69;;;;2780:39;2812:6;2780:10;:19;2791:7;2780:19;;;;;;;;;;;;;;;:27;2800:6;2780:27;;;;;;;;;;;;;;;;:31;;:39;;;;:::i;:::-;2750:10;:19;2761:7;2750:19;;;;;;;;;;;;;;;:27;2770:6;2750:27;;;;;;;;;;;;;;;:69;;;;2835:40;2851:6;2859:7;2868:6;2835:40;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2893:4;2886:11;;2332:573;;;;;:::o",
      "source": "pragma solidity ^0.4.24;\r\n//pragma experimental ABIEncoderV2;\r\n\r\nimport \"../node_modules/openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol\";\r\nimport \"../node_modules/openzeppelin-solidity/contracts/math/SafeMath.sol\";\r\n \r\ncontract CommunityCoin is StandardToken {\r\n    /*\r\n    * @title CommunityCoinContract\r\n    * @auther Kazuki Asa\r\n    * @notice コミュニティ共通のコインと、コミュニティ内で有効な個人コインを発行します。\r\n    * @dev 利子率も実装する\r\n     */\r\n\r\n    using SafeMath for uint256;\r\n\r\n    // events\r\n    event IssuePersonCoin(address owner, address issuer, uint value);\r\n\r\n    // default setting.\r\n    string public name = \"CommunityCoin v0.1\";\r\n    string public symbol = \"CoC\";\r\n    uint public decimals = 18;\r\n\r\n    // 個人コイン台帳:ownerをkeyに、その人が保有している個人コインの保有量を参照する.\r\n    mapping (address => mapping (address => uint256)) public personCoin;\r\n    // 個人コイン保有リスト:ownerをkeyに、その人が保有している個人コインのアドレスリストを参照する.\r\n    mapping (address => address[]) public ownCoins;\r\n\r\n    constructor (string _name, string _symbol, uint _decimals, uint initialSupply) public {\r\n        name = _name;\r\n        symbol = _symbol;\r\n        decimals = _decimals;\r\n        totalSupply_ = initialSupply;\r\n        balances[msg.sender] = initialSupply;\r\n    }\r\n\r\n    /**\r\n    * @dev Transfer token for a specified address and Issue personal coin.\r\n    * @param _to The address to transfer to and issue personal coin.\r\n    * @param _value The amount to be transferred.\r\n    */\r\n    function transfer(address _to, uint256 _value) public returns (bool) {\r\n        require(_value <= balances[msg.sender]);\r\n        require(_to != address(0));\r\n        balances[msg.sender] = balances[msg.sender].sub(_value);\r\n        balances[_to] = balances[_to].add(_value);\r\n        // add for Community Coin.\r\n        transferPersonalCoin(msg.sender, _to, _value);\r\n        emit Transfer(msg.sender, _to, _value);\r\n        return true;\r\n    }\r\n\r\n    /**\r\n    * @dev Issue personal coin.\r\n    * @param _owner The address to recieve personal coin.\r\n    * @param _issuer The address to issue personal coin.\r\n    * @param _value The amount to be issued.\r\n    */\r\n    function transferPersonalCoin(address _owner, address _issuer, uint256 _value) internal returns (bool) {\r\n        if (personCoin[_owner][_issuer] == 0) {\r\n            // その人のコインを持っていなかった場合、ownCoinsに新たなコインを追加する.\r\n            ownCoins[_owner].push(_issuer);\r\n        }\r\n        personCoin[_owner][_issuer] = personCoin[_owner][_issuer].add(_value);\r\n        personCoin[_issuer][_owner] = personCoin[_issuer][_owner].add(_value);\r\n        emit IssuePersonCoin(_owner, _issuer, _value);\r\n        return true;\r\n    }\r\n\r\n    /**\r\n    * @dev Gets the personal coin balance of the specified address.\r\n    * @param _owner The address to query the the balance of.\r\n    * @param _issuer The address to issue coin.\r\n    * @return An uint256[] representing the amount owned by the passed address.\r\n    // */\r\n    function personCoinBalanceOf(address _owner, address _issuer) public view returns (uint256) {\r\n        return personCoin[_owner][_issuer];\r\n    }\r\n\r\n    /**\r\n    * @dev Gets the personal coin balance of the specified address.\r\n    * @param _owner The address to query the the balance of.\r\n    * @return An address[] representing the own personCoin list.\r\n    // */\r\n    function ownPersonCoinList(address _owner) public view returns (address[]) {\r\n        return ownCoins[_owner];\r\n    }\r\n}",
      "sourcePath": "C:\\Users\\Kazuki\\Documents\\コミュニティーコイン\\ethereum\\CommunityCoin\\contracts\\CommunityCoin.sol",
      "ast": {
        "absolutePath": "/C/Users/Kazuki/Documents/コミュニティーコイン/ethereum/CommunityCoin/contracts/CommunityCoin.sol",
        "exportedSymbols": {
          "CommunityCoin": [
            234
          ]
        },
        "id": 235,
        "nodeType": "SourceUnit",
        "nodes": [
          {
            "id": 1,
            "literals": [
              "solidity",
              "^",
              "0.4",
              ".24"
            ],
            "nodeType": "PragmaDirective",
            "src": "0:24:0"
          },
          {
            "absolutePath": "/C/Users/Kazuki/Documents/コミュニティーコイン/ethereum/CommunityCoin/node_modules/openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol",
            "file": "../node_modules/openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol",
            "id": 2,
            "nodeType": "ImportDirective",
            "scope": 235,
            "sourceUnit": 747,
            "src": "65:87:0",
            "symbolAliases": [],
            "unitAlias": ""
          },
          {
            "absolutePath": "/C/Users/Kazuki/Documents/コミュニティーコイン/ethereum/CommunityCoin/node_modules/openzeppelin-solidity/contracts/math/SafeMath.sol",
            "file": "../node_modules/openzeppelin-solidity/contracts/math/SafeMath.sol",
            "id": 3,
            "nodeType": "ImportDirective",
            "scope": 235,
            "sourceUnit": 329,
            "src": "154:75:0",
            "symbolAliases": [],
            "unitAlias": ""
          },
          {
            "baseContracts": [
              {
                "arguments": null,
                "baseName": {
                  "contractScope": null,
                  "id": 4,
                  "name": "StandardToken",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 746,
                  "src": "260:13:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_StandardToken_$746",
                    "typeString": "contract StandardToken"
                  }
                },
                "id": 5,
                "nodeType": "InheritanceSpecifier",
                "src": "260:13:0"
              }
            ],
            "contractDependencies": [
              424,
              467,
              499,
              746
            ],
            "contractKind": "contract",
            "documentation": null,
            "fullyImplemented": true,
            "id": 234,
            "linearizedBaseContracts": [
              234,
              746,
              424,
              467,
              499
            ],
            "name": "CommunityCoin",
            "nodeType": "ContractDefinition",
            "nodes": [
              {
                "id": 8,
                "libraryName": {
                  "contractScope": null,
                  "id": 6,
                  "name": "SafeMath",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 328,
                  "src": "532:8:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_SafeMath_$328",
                    "typeString": "library SafeMath"
                  }
                },
                "nodeType": "UsingForDirective",
                "src": "526:27:0",
                "typeName": {
                  "id": 7,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "545:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                }
              },
              {
                "anonymous": false,
                "documentation": null,
                "id": 16,
                "name": "IssuePersonCoin",
                "nodeType": "EventDefinition",
                "parameters": {
                  "id": 15,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 10,
                      "indexed": false,
                      "name": "owner",
                      "nodeType": "VariableDeclaration",
                      "scope": 16,
                      "src": "598:13:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 9,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "598:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 12,
                      "indexed": false,
                      "name": "issuer",
                      "nodeType": "VariableDeclaration",
                      "scope": 16,
                      "src": "613:14:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 11,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "613:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 14,
                      "indexed": false,
                      "name": "value",
                      "nodeType": "VariableDeclaration",
                      "scope": 16,
                      "src": "629:10:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 13,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "629:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "597:43:0"
                },
                "src": "576:65:0"
              },
              {
                "constant": false,
                "id": 19,
                "name": "name",
                "nodeType": "VariableDeclaration",
                "scope": 234,
                "src": "674:41:0",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 17,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "674:6:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "value": {
                  "argumentTypes": null,
                  "hexValue": "436f6d6d756e697479436f696e2076302e31",
                  "id": 18,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "string",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "695:20:0",
                  "subdenomination": null,
                  "typeDescriptions": {
                    "typeIdentifier": "t_stringliteral_41cfc2c9771803a521b1bd08c6fd3be7eeaf045ed49108da5e5dda8aa124dc91",
                    "typeString": "literal_string \"CommunityCoin v0.1\""
                  },
                  "value": "CommunityCoin v0.1"
                },
                "visibility": "public"
              },
              {
                "constant": false,
                "id": 22,
                "name": "symbol",
                "nodeType": "VariableDeclaration",
                "scope": 234,
                "src": "722:28:0",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 20,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "722:6:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "value": {
                  "argumentTypes": null,
                  "hexValue": "436f43",
                  "id": 21,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "string",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "745:5:0",
                  "subdenomination": null,
                  "typeDescriptions": {
                    "typeIdentifier": "t_stringliteral_a76372847b196c25b96d5e444225845ac1b2985463da7e587e7a7b972e3873d6",
                    "typeString": "literal_string \"CoC\""
                  },
                  "value": "CoC"
                },
                "visibility": "public"
              },
              {
                "constant": false,
                "id": 25,
                "name": "decimals",
                "nodeType": "VariableDeclaration",
                "scope": 234,
                "src": "757:25:0",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 23,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "757:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": {
                  "argumentTypes": null,
                  "hexValue": "3138",
                  "id": 24,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "number",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "780:2:0",
                  "subdenomination": null,
                  "typeDescriptions": {
                    "typeIdentifier": "t_rational_18_by_1",
                    "typeString": "int_const 18"
                  },
                  "value": "18"
                },
                "visibility": "public"
              },
              {
                "constant": false,
                "id": 31,
                "name": "personCoin",
                "nodeType": "VariableDeclaration",
                "scope": 234,
                "src": "912:67:0",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                  "typeString": "mapping(address => mapping(address => uint256))"
                },
                "typeName": {
                  "id": 30,
                  "keyType": {
                    "id": 26,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "921:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "912:49:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                    "typeString": "mapping(address => mapping(address => uint256))"
                  },
                  "valueType": {
                    "id": 29,
                    "keyType": {
                      "id": 27,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "941:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Mapping",
                    "src": "932:28:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                      "typeString": "mapping(address => uint256)"
                    },
                    "valueType": {
                      "id": 28,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "952:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    }
                  }
                },
                "value": null,
                "visibility": "public"
              },
              {
                "constant": false,
                "id": 36,
                "name": "ownCoins",
                "nodeType": "VariableDeclaration",
                "scope": 234,
                "src": "1128:46:0",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_address_$dyn_storage_$",
                  "typeString": "mapping(address => address[])"
                },
                "typeName": {
                  "id": 35,
                  "keyType": {
                    "id": 32,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1137:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "1128:30:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_address_$dyn_storage_$",
                    "typeString": "mapping(address => address[])"
                  },
                  "valueType": {
                    "baseType": {
                      "id": 33,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1148:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 34,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "1148:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  }
                },
                "value": null,
                "visibility": "public"
              },
              {
                "body": {
                  "id": 70,
                  "nodeType": "Block",
                  "src": "1269:175:0",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 49,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "id": 47,
                          "name": "name",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19,
                          "src": "1280:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage",
                            "typeString": "string storage ref"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "id": 48,
                          "name": "_name",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 38,
                          "src": "1287:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        "src": "1280:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      },
                      "id": 50,
                      "nodeType": "ExpressionStatement",
                      "src": "1280:12:0"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 53,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "id": 51,
                          "name": "symbol",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 22,
                          "src": "1303:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage",
                            "typeString": "string storage ref"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "id": 52,
                          "name": "_symbol",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 40,
                          "src": "1312:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        "src": "1303:16:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      },
                      "id": 54,
                      "nodeType": "ExpressionStatement",
                      "src": "1303:16:0"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 57,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "id": 55,
                          "name": "decimals",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 25,
                          "src": "1330:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "id": 56,
                          "name": "_decimals",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 42,
                          "src": "1341:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1330:20:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 58,
                      "nodeType": "ExpressionStatement",
                      "src": "1330:20:0"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 61,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "id": 59,
                          "name": "totalSupply_",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 343,
                          "src": "1361:12:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "id": 60,
                          "name": "initialSupply",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 44,
                          "src": "1376:13:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1361:28:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 62,
                      "nodeType": "ExpressionStatement",
                      "src": "1361:28:0"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 68,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 63,
                            "name": "balances",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 341,
                            "src": "1400:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 66,
                          "indexExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 64,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 761,
                              "src": "1409:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 65,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1409:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": true,
                          "nodeType": "IndexAccess",
                          "src": "1400:20:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "id": 67,
                          "name": "initialSupply",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 44,
                          "src": "1423:13:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1400:36:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 69,
                      "nodeType": "ExpressionStatement",
                      "src": "1400:36:0"
                    }
                  ]
                },
                "documentation": null,
                "id": 71,
                "implemented": true,
                "isConstructor": true,
                "isDeclaredConst": false,
                "modifiers": [],
                "name": "",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 45,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 38,
                      "name": "_name",
                      "nodeType": "VariableDeclaration",
                      "scope": 71,
                      "src": "1196:12:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 37,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "1196:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 40,
                      "name": "_symbol",
                      "nodeType": "VariableDeclaration",
                      "scope": 71,
                      "src": "1210:14:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 39,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "1210:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 42,
                      "name": "_decimals",
                      "nodeType": "VariableDeclaration",
                      "scope": 71,
                      "src": "1226:14:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 41,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1226:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 44,
                      "name": "initialSupply",
                      "nodeType": "VariableDeclaration",
                      "scope": 71,
                      "src": "1242:18:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 43,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1242:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "1195:66:0"
                },
                "payable": false,
                "returnParameters": {
                  "id": 46,
                  "nodeType": "ParameterList",
                  "parameters": [],
                  "src": "1269:0:0"
                },
                "scope": 234,
                "src": "1183:261:0",
                "stateMutability": "nonpayable",
                "superFunction": null,
                "visibility": "public"
              },
              {
                "body": {
                  "id": 137,
                  "nodeType": "Block",
                  "src": "1735:376:0",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 86,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 81,
                              "name": "_value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 75,
                              "src": "1754:6:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "<=",
                            "rightExpression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 82,
                                "name": "balances",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 341,
                                "src": "1764:8:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                  "typeString": "mapping(address => uint256)"
                                }
                              },
                              "id": 85,
                              "indexExpression": {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 83,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 761,
                                  "src": "1773:3:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 84,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "1773:10:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "1764:20:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "1754:30:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          ],
                          "id": 80,
                          "name": "require",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            764,
                            765
                          ],
                          "referencedDeclaration": 764,
                          "src": "1746:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                            "typeString": "function (bool) pure"
                          }
                        },
                        "id": 87,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1746:39:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 88,
                      "nodeType": "ExpressionStatement",
                      "src": "1746:39:0"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "id": 94,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 90,
                              "name": "_to",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 73,
                              "src": "1804:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "!=",
                            "rightExpression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "hexValue": "30",
                                  "id": 92,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "1819:1:0",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  },
                                  "value": "0"
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  }
                                ],
                                "id": 91,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "1811:7:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": "address"
                              },
                              "id": 93,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1811:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "src": "1804:17:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          ],
                          "id": 89,
                          "name": "require",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            764,
                            765
                          ],
                          "referencedDeclaration": 764,
                          "src": "1796:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                            "typeString": "function (bool) pure"
                          }
                        },
                        "id": 95,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1796:26:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 96,
                      "nodeType": "ExpressionStatement",
                      "src": "1796:26:0"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 108,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 97,
                            "name": "balances",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 341,
                            "src": "1833:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 100,
                          "indexExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 98,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 761,
                              "src": "1842:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 99,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1842:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": true,
                          "nodeType": "IndexAccess",
                          "src": "1833:20:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 106,
                              "name": "_value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 75,
                              "src": "1881:6:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 101,
                                "name": "balances",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 341,
                                "src": "1856:8:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                  "typeString": "mapping(address => uint256)"
                                }
                              },
                              "id": 104,
                              "indexExpression": {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 102,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 761,
                                  "src": "1865:3:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 103,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "1865:10:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "1856:20:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 105,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sub",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 303,
                            "src": "1856:24:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 107,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1856:32:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1833:55:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 109,
                      "nodeType": "ExpressionStatement",
                      "src": "1833:55:0"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 119,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 110,
                            "name": "balances",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 341,
                            "src": "1899:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 112,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 111,
                            "name": "_to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 73,
                            "src": "1908:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": true,
                          "nodeType": "IndexAccess",
                          "src": "1899:13:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 117,
                              "name": "_value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 75,
                              "src": "1933:6:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 113,
                                "name": "balances",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 341,
                                "src": "1915:8:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                  "typeString": "mapping(address => uint256)"
                                }
                              },
                              "id": 115,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 114,
                                "name": "_to",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 73,
                                "src": "1924:3:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "1915:13:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 116,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "add",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 327,
                            "src": "1915:17:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 118,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1915:25:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1899:41:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 120,
                      "nodeType": "ExpressionStatement",
                      "src": "1899:41:0"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 122,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 761,
                              "src": "2008:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 123,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "2008:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 124,
                            "name": "_to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 73,
                            "src": "2020:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 125,
                            "name": "_value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 75,
                            "src": "2025:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 121,
                          "name": "transferPersonalCoin",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 204,
                          "src": "1987:20:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (address,address,uint256) returns (bool)"
                          }
                        },
                        "id": 126,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1987:45:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 127,
                      "nodeType": "ExpressionStatement",
                      "src": "1987:45:0"
                    },
                    {
                      "eventCall": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 129,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 761,
                              "src": "2057:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 130,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "2057:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 131,
                            "name": "_to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 73,
                            "src": "2069:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 132,
                            "name": "_value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 75,
                            "src": "2074:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 128,
                          "name": "Transfer",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 498,
                          "src": "2048:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                            "typeString": "function (address,address,uint256)"
                          }
                        },
                        "id": 133,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2048:33:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 134,
                      "nodeType": "EmitStatement",
                      "src": "2043:38:0"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "hexValue": "74727565",
                        "id": 135,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2099:4:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "true"
                      },
                      "functionReturnParameters": 79,
                      "id": 136,
                      "nodeType": "Return",
                      "src": "2092:11:0"
                    }
                  ]
                },
                "documentation": "@dev Transfer token for a specified address and Issue personal coin.\r\n@param _to The address to transfer to and issue personal coin.\r\n@param _value The amount to be transferred.\r",
                "id": 138,
                "implemented": true,
                "isConstructor": false,
                "isDeclaredConst": false,
                "modifiers": [],
                "name": "transfer",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 76,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 73,
                      "name": "_to",
                      "nodeType": "VariableDeclaration",
                      "scope": 138,
                      "src": "1684:11:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 72,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "1684:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 75,
                      "name": "_value",
                      "nodeType": "VariableDeclaration",
                      "scope": 138,
                      "src": "1697:14:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 74,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1697:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "1683:29:0"
                },
                "payable": false,
                "returnParameters": {
                  "id": 79,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 78,
                      "name": "",
                      "nodeType": "VariableDeclaration",
                      "scope": 138,
                      "src": "1729:4:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 77,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "1729:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "1728:6:0"
                },
                "scope": 234,
                "src": "1666:445:0",
                "stateMutability": "nonpayable",
                "superFunction": 411,
                "visibility": "public"
              },
              {
                "body": {
                  "id": 203,
                  "nodeType": "Block",
                  "src": "2435:470:0",
                  "statements": [
                    {
                      "condition": {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 155,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 149,
                              "name": "personCoin",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 31,
                              "src": "2450:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                "typeString": "mapping(address => mapping(address => uint256))"
                              }
                            },
                            "id": 151,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 150,
                              "name": "_owner",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 140,
                              "src": "2461:6:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "2450:18:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 153,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 152,
                            "name": "_issuer",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 142,
                            "src": "2469:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "2450:27:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 154,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2481:1:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "2450:32:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "falseBody": null,
                      "id": 164,
                      "nodeType": "IfStatement",
                      "src": "2446:214:0",
                      "trueBody": {
                        "id": 163,
                        "nodeType": "Block",
                        "src": "2484:176:0",
                        "statements": [
                          {
                            "expression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 160,
                                  "name": "_issuer",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 142,
                                  "src": "2640:7:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 156,
                                    "name": "ownCoins",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 36,
                                    "src": "2618:8:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_address_$dyn_storage_$",
                                      "typeString": "mapping(address => address[] storage ref)"
                                    }
                                  },
                                  "id": 158,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 157,
                                    "name": "_owner",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 140,
                                    "src": "2627:6:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "2618:16:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                    "typeString": "address[] storage ref"
                                  }
                                },
                                "id": 159,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "push",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "2618:21:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_arraypush_nonpayable$_t_address_$returns$_t_uint256_$",
                                  "typeString": "function (address) returns (uint256)"
                                }
                              },
                              "id": 161,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2618:30:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 162,
                            "nodeType": "ExpressionStatement",
                            "src": "2618:30:0"
                          }
                        ]
                      }
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 178,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 165,
                              "name": "personCoin",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 31,
                              "src": "2670:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                "typeString": "mapping(address => mapping(address => uint256))"
                              }
                            },
                            "id": 168,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 166,
                              "name": "_owner",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 140,
                              "src": "2681:6:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "2670:18:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 169,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 167,
                            "name": "_issuer",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 142,
                            "src": "2689:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": true,
                          "nodeType": "IndexAccess",
                          "src": "2670:27:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 176,
                              "name": "_value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 144,
                              "src": "2732:6:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 170,
                                  "name": "personCoin",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 31,
                                  "src": "2700:10:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                    "typeString": "mapping(address => mapping(address => uint256))"
                                  }
                                },
                                "id": 172,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "id": 171,
                                  "name": "_owner",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 140,
                                  "src": "2711:6:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "2700:18:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                  "typeString": "mapping(address => uint256)"
                                }
                              },
                              "id": 174,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 173,
                                "name": "_issuer",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 142,
                                "src": "2719:7:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "2700:27:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 175,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "add",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 327,
                            "src": "2700:31:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 177,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2700:39:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "2670:69:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 179,
                      "nodeType": "ExpressionStatement",
                      "src": "2670:69:0"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 193,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 180,
                              "name": "personCoin",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 31,
                              "src": "2750:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                "typeString": "mapping(address => mapping(address => uint256))"
                              }
                            },
                            "id": 183,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 181,
                              "name": "_issuer",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 142,
                              "src": "2761:7:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "2750:19:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 184,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 182,
                            "name": "_owner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 140,
                            "src": "2770:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": true,
                          "nodeType": "IndexAccess",
                          "src": "2750:27:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 191,
                              "name": "_value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 144,
                              "src": "2812:6:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 185,
                                  "name": "personCoin",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 31,
                                  "src": "2780:10:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                    "typeString": "mapping(address => mapping(address => uint256))"
                                  }
                                },
                                "id": 187,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "id": 186,
                                  "name": "_issuer",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 142,
                                  "src": "2791:7:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "2780:19:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                  "typeString": "mapping(address => uint256)"
                                }
                              },
                              "id": 189,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 188,
                                "name": "_owner",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 140,
                                "src": "2800:6:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "2780:27:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 190,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "add",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 327,
                            "src": "2780:31:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 192,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2780:39:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "2750:69:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 194,
                      "nodeType": "ExpressionStatement",
                      "src": "2750:69:0"
                    },
                    {
                      "eventCall": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 196,
                            "name": "_owner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 140,
                            "src": "2851:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 197,
                            "name": "_issuer",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 142,
                            "src": "2859:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 198,
                            "name": "_value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 144,
                            "src": "2868:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 195,
                          "name": "IssuePersonCoin",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 16,
                          "src": "2835:15:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                            "typeString": "function (address,address,uint256)"
                          }
                        },
                        "id": 199,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2835:40:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 200,
                      "nodeType": "EmitStatement",
                      "src": "2830:45:0"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "hexValue": "74727565",
                        "id": 201,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2893:4:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "true"
                      },
                      "functionReturnParameters": 148,
                      "id": 202,
                      "nodeType": "Return",
                      "src": "2886:11:0"
                    }
                  ]
                },
                "documentation": "@dev Issue personal coin.\r\n@param _owner The address to recieve personal coin.\r\n@param _issuer The address to issue personal coin.\r\n@param _value The amount to be issued.\r",
                "id": 204,
                "implemented": true,
                "isConstructor": false,
                "isDeclaredConst": false,
                "modifiers": [],
                "name": "transferPersonalCoin",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 145,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 140,
                      "name": "_owner",
                      "nodeType": "VariableDeclaration",
                      "scope": 204,
                      "src": "2362:14:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 139,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "2362:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 142,
                      "name": "_issuer",
                      "nodeType": "VariableDeclaration",
                      "scope": 204,
                      "src": "2378:15:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 141,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "2378:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 144,
                      "name": "_value",
                      "nodeType": "VariableDeclaration",
                      "scope": 204,
                      "src": "2395:14:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 143,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2395:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "2361:49:0"
                },
                "payable": false,
                "returnParameters": {
                  "id": 148,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 147,
                      "name": "",
                      "nodeType": "VariableDeclaration",
                      "scope": 204,
                      "src": "2429:4:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 146,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "2429:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "2428:6:0"
                },
                "scope": 234,
                "src": "2332:573:0",
                "stateMutability": "nonpayable",
                "superFunction": null,
                "visibility": "internal"
              },
              {
                "body": {
                  "id": 219,
                  "nodeType": "Block",
                  "src": "3286:53:0",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 213,
                            "name": "personCoin",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 31,
                            "src": "3304:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                              "typeString": "mapping(address => mapping(address => uint256))"
                            }
                          },
                          "id": 215,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 214,
                            "name": "_owner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 206,
                            "src": "3315:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "3304:18:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 217,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 216,
                          "name": "_issuer",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 208,
                          "src": "3323:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "3304:27:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "functionReturnParameters": 212,
                      "id": 218,
                      "nodeType": "Return",
                      "src": "3297:34:0"
                    }
                  ]
                },
                "documentation": "@dev Gets the personal coin balance of the specified address.\r\n@param _owner The address to query the the balance of.\r\n@param _issuer The address to issue coin.\r\n@return An uint256[] representing the amount owned by the passed address.\r\n// ",
                "id": 220,
                "implemented": true,
                "isConstructor": false,
                "isDeclaredConst": true,
                "modifiers": [],
                "name": "personCoinBalanceOf",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 209,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 206,
                      "name": "_owner",
                      "nodeType": "VariableDeclaration",
                      "scope": 220,
                      "src": "3223:14:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 205,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "3223:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 208,
                      "name": "_issuer",
                      "nodeType": "VariableDeclaration",
                      "scope": 220,
                      "src": "3239:15:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 207,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "3239:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "3222:33:0"
                },
                "payable": false,
                "returnParameters": {
                  "id": 212,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 211,
                      "name": "",
                      "nodeType": "VariableDeclaration",
                      "scope": 220,
                      "src": "3277:7:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 210,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3277:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "3276:9:0"
                },
                "scope": 234,
                "src": "3194:145:0",
                "stateMutability": "view",
                "superFunction": null,
                "visibility": "public"
              },
              {
                "body": {
                  "id": 232,
                  "nodeType": "Block",
                  "src": "3639:42:0",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 228,
                          "name": "ownCoins",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 36,
                          "src": "3657:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_address_$dyn_storage_$",
                            "typeString": "mapping(address => address[] storage ref)"
                          }
                        },
                        "id": 230,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 229,
                          "name": "_owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 222,
                          "src": "3666:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "3657:16:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "functionReturnParameters": 227,
                      "id": 231,
                      "nodeType": "Return",
                      "src": "3650:23:0"
                    }
                  ]
                },
                "documentation": "@dev Gets the personal coin balance of the specified address.\r\n@param _owner The address to query the the balance of.\r\n@return An address[] representing the own personCoin list.\r\n// ",
                "id": 233,
                "implemented": true,
                "isConstructor": false,
                "isDeclaredConst": true,
                "modifiers": [],
                "name": "ownPersonCoinList",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 223,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 222,
                      "name": "_owner",
                      "nodeType": "VariableDeclaration",
                      "scope": 233,
                      "src": "3591:14:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 221,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "3591:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "3590:16:0"
                },
                "payable": false,
                "returnParameters": {
                  "id": 227,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 226,
                      "name": "",
                      "nodeType": "VariableDeclaration",
                      "scope": 233,
                      "src": "3628:9:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 224,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "3628:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 225,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "3628:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                          "typeString": "address[]"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "3627:11:0"
                },
                "scope": 234,
                "src": "3564:117:0",
                "stateMutability": "view",
                "superFunction": null,
                "visibility": "public"
              }
            ],
            "scope": 235,
            "src": "234:3450:0"
          }
        ],
        "src": "0:3684:0"
      },
      "legacyAST": {
        "absolutePath": "/C/Users/Kazuki/Documents/コミュニティーコイン/ethereum/CommunityCoin/contracts/CommunityCoin.sol",
        "exportedSymbols": {
          "CommunityCoin": [
            234
          ]
        },
        "id": 235,
        "nodeType": "SourceUnit",
        "nodes": [
          {
            "id": 1,
            "literals": [
              "solidity",
              "^",
              "0.4",
              ".24"
            ],
            "nodeType": "PragmaDirective",
            "src": "0:24:0"
          },
          {
            "absolutePath": "/C/Users/Kazuki/Documents/コミュニティーコイン/ethereum/CommunityCoin/node_modules/openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol",
            "file": "../node_modules/openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol",
            "id": 2,
            "nodeType": "ImportDirective",
            "scope": 235,
            "sourceUnit": 747,
            "src": "65:87:0",
            "symbolAliases": [],
            "unitAlias": ""
          },
          {
            "absolutePath": "/C/Users/Kazuki/Documents/コミュニティーコイン/ethereum/CommunityCoin/node_modules/openzeppelin-solidity/contracts/math/SafeMath.sol",
            "file": "../node_modules/openzeppelin-solidity/contracts/math/SafeMath.sol",
            "id": 3,
            "nodeType": "ImportDirective",
            "scope": 235,
            "sourceUnit": 329,
            "src": "154:75:0",
            "symbolAliases": [],
            "unitAlias": ""
          },
          {
            "baseContracts": [
              {
                "arguments": null,
                "baseName": {
                  "contractScope": null,
                  "id": 4,
                  "name": "StandardToken",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 746,
                  "src": "260:13:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_StandardToken_$746",
                    "typeString": "contract StandardToken"
                  }
                },
                "id": 5,
                "nodeType": "InheritanceSpecifier",
                "src": "260:13:0"
              }
            ],
            "contractDependencies": [
              424,
              467,
              499,
              746
            ],
            "contractKind": "contract",
            "documentation": null,
            "fullyImplemented": true,
            "id": 234,
            "linearizedBaseContracts": [
              234,
              746,
              424,
              467,
              499
            ],
            "name": "CommunityCoin",
            "nodeType": "ContractDefinition",
            "nodes": [
              {
                "id": 8,
                "libraryName": {
                  "contractScope": null,
                  "id": 6,
                  "name": "SafeMath",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 328,
                  "src": "532:8:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_SafeMath_$328",
                    "typeString": "library SafeMath"
                  }
                },
                "nodeType": "UsingForDirective",
                "src": "526:27:0",
                "typeName": {
                  "id": 7,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "545:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                }
              },
              {
                "anonymous": false,
                "documentation": null,
                "id": 16,
                "name": "IssuePersonCoin",
                "nodeType": "EventDefinition",
                "parameters": {
                  "id": 15,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 10,
                      "indexed": false,
                      "name": "owner",
                      "nodeType": "VariableDeclaration",
                      "scope": 16,
                      "src": "598:13:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 9,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "598:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 12,
                      "indexed": false,
                      "name": "issuer",
                      "nodeType": "VariableDeclaration",
                      "scope": 16,
                      "src": "613:14:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 11,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "613:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 14,
                      "indexed": false,
                      "name": "value",
                      "nodeType": "VariableDeclaration",
                      "scope": 16,
                      "src": "629:10:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 13,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "629:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "597:43:0"
                },
                "src": "576:65:0"
              },
              {
                "constant": false,
                "id": 19,
                "name": "name",
                "nodeType": "VariableDeclaration",
                "scope": 234,
                "src": "674:41:0",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 17,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "674:6:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "value": {
                  "argumentTypes": null,
                  "hexValue": "436f6d6d756e697479436f696e2076302e31",
                  "id": 18,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "string",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "695:20:0",
                  "subdenomination": null,
                  "typeDescriptions": {
                    "typeIdentifier": "t_stringliteral_41cfc2c9771803a521b1bd08c6fd3be7eeaf045ed49108da5e5dda8aa124dc91",
                    "typeString": "literal_string \"CommunityCoin v0.1\""
                  },
                  "value": "CommunityCoin v0.1"
                },
                "visibility": "public"
              },
              {
                "constant": false,
                "id": 22,
                "name": "symbol",
                "nodeType": "VariableDeclaration",
                "scope": 234,
                "src": "722:28:0",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 20,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "722:6:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "value": {
                  "argumentTypes": null,
                  "hexValue": "436f43",
                  "id": 21,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "string",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "745:5:0",
                  "subdenomination": null,
                  "typeDescriptions": {
                    "typeIdentifier": "t_stringliteral_a76372847b196c25b96d5e444225845ac1b2985463da7e587e7a7b972e3873d6",
                    "typeString": "literal_string \"CoC\""
                  },
                  "value": "CoC"
                },
                "visibility": "public"
              },
              {
                "constant": false,
                "id": 25,
                "name": "decimals",
                "nodeType": "VariableDeclaration",
                "scope": 234,
                "src": "757:25:0",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 23,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "757:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": {
                  "argumentTypes": null,
                  "hexValue": "3138",
                  "id": 24,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "number",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "780:2:0",
                  "subdenomination": null,
                  "typeDescriptions": {
                    "typeIdentifier": "t_rational_18_by_1",
                    "typeString": "int_const 18"
                  },
                  "value": "18"
                },
                "visibility": "public"
              },
              {
                "constant": false,
                "id": 31,
                "name": "personCoin",
                "nodeType": "VariableDeclaration",
                "scope": 234,
                "src": "912:67:0",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                  "typeString": "mapping(address => mapping(address => uint256))"
                },
                "typeName": {
                  "id": 30,
                  "keyType": {
                    "id": 26,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "921:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "912:49:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                    "typeString": "mapping(address => mapping(address => uint256))"
                  },
                  "valueType": {
                    "id": 29,
                    "keyType": {
                      "id": 27,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "941:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Mapping",
                    "src": "932:28:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                      "typeString": "mapping(address => uint256)"
                    },
                    "valueType": {
                      "id": 28,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "952:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    }
                  }
                },
                "value": null,
                "visibility": "public"
              },
              {
                "constant": false,
                "id": 36,
                "name": "ownCoins",
                "nodeType": "VariableDeclaration",
                "scope": 234,
                "src": "1128:46:0",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_address_$dyn_storage_$",
                  "typeString": "mapping(address => address[])"
                },
                "typeName": {
                  "id": 35,
                  "keyType": {
                    "id": 32,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1137:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "1128:30:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_address_$dyn_storage_$",
                    "typeString": "mapping(address => address[])"
                  },
                  "valueType": {
                    "baseType": {
                      "id": 33,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1148:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 34,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "1148:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  }
                },
                "value": null,
                "visibility": "public"
              },
              {
                "body": {
                  "id": 70,
                  "nodeType": "Block",
                  "src": "1269:175:0",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 49,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "id": 47,
                          "name": "name",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19,
                          "src": "1280:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage",
                            "typeString": "string storage ref"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "id": 48,
                          "name": "_name",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 38,
                          "src": "1287:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        "src": "1280:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      },
                      "id": 50,
                      "nodeType": "ExpressionStatement",
                      "src": "1280:12:0"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 53,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "id": 51,
                          "name": "symbol",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 22,
                          "src": "1303:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage",
                            "typeString": "string storage ref"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "id": 52,
                          "name": "_symbol",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 40,
                          "src": "1312:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        "src": "1303:16:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      },
                      "id": 54,
                      "nodeType": "ExpressionStatement",
                      "src": "1303:16:0"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 57,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "id": 55,
                          "name": "decimals",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 25,
                          "src": "1330:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "id": 56,
                          "name": "_decimals",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 42,
                          "src": "1341:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1330:20:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 58,
                      "nodeType": "ExpressionStatement",
                      "src": "1330:20:0"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 61,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "id": 59,
                          "name": "totalSupply_",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 343,
                          "src": "1361:12:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "id": 60,
                          "name": "initialSupply",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 44,
                          "src": "1376:13:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1361:28:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 62,
                      "nodeType": "ExpressionStatement",
                      "src": "1361:28:0"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 68,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 63,
                            "name": "balances",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 341,
                            "src": "1400:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 66,
                          "indexExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 64,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 761,
                              "src": "1409:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 65,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1409:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": true,
                          "nodeType": "IndexAccess",
                          "src": "1400:20:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "id": 67,
                          "name": "initialSupply",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 44,
                          "src": "1423:13:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1400:36:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 69,
                      "nodeType": "ExpressionStatement",
                      "src": "1400:36:0"
                    }
                  ]
                },
                "documentation": null,
                "id": 71,
                "implemented": true,
                "isConstructor": true,
                "isDeclaredConst": false,
                "modifiers": [],
                "name": "",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 45,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 38,
                      "name": "_name",
                      "nodeType": "VariableDeclaration",
                      "scope": 71,
                      "src": "1196:12:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 37,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "1196:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 40,
                      "name": "_symbol",
                      "nodeType": "VariableDeclaration",
                      "scope": 71,
                      "src": "1210:14:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 39,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "1210:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 42,
                      "name": "_decimals",
                      "nodeType": "VariableDeclaration",
                      "scope": 71,
                      "src": "1226:14:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 41,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1226:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 44,
                      "name": "initialSupply",
                      "nodeType": "VariableDeclaration",
                      "scope": 71,
                      "src": "1242:18:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 43,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1242:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "1195:66:0"
                },
                "payable": false,
                "returnParameters": {
                  "id": 46,
                  "nodeType": "ParameterList",
                  "parameters": [],
                  "src": "1269:0:0"
                },
                "scope": 234,
                "src": "1183:261:0",
                "stateMutability": "nonpayable",
                "superFunction": null,
                "visibility": "public"
              },
              {
                "body": {
                  "id": 137,
                  "nodeType": "Block",
                  "src": "1735:376:0",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 86,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 81,
                              "name": "_value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 75,
                              "src": "1754:6:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "<=",
                            "rightExpression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 82,
                                "name": "balances",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 341,
                                "src": "1764:8:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                  "typeString": "mapping(address => uint256)"
                                }
                              },
                              "id": 85,
                              "indexExpression": {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 83,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 761,
                                  "src": "1773:3:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 84,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "1773:10:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "1764:20:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "1754:30:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          ],
                          "id": 80,
                          "name": "require",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            764,
                            765
                          ],
                          "referencedDeclaration": 764,
                          "src": "1746:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                            "typeString": "function (bool) pure"
                          }
                        },
                        "id": 87,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1746:39:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 88,
                      "nodeType": "ExpressionStatement",
                      "src": "1746:39:0"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "id": 94,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 90,
                              "name": "_to",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 73,
                              "src": "1804:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "!=",
                            "rightExpression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "hexValue": "30",
                                  "id": 92,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "1819:1:0",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  },
                                  "value": "0"
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  }
                                ],
                                "id": 91,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "1811:7:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": "address"
                              },
                              "id": 93,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1811:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "src": "1804:17:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          ],
                          "id": 89,
                          "name": "require",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            764,
                            765
                          ],
                          "referencedDeclaration": 764,
                          "src": "1796:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                            "typeString": "function (bool) pure"
                          }
                        },
                        "id": 95,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1796:26:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 96,
                      "nodeType": "ExpressionStatement",
                      "src": "1796:26:0"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 108,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 97,
                            "name": "balances",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 341,
                            "src": "1833:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 100,
                          "indexExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 98,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 761,
                              "src": "1842:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 99,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1842:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": true,
                          "nodeType": "IndexAccess",
                          "src": "1833:20:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 106,
                              "name": "_value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 75,
                              "src": "1881:6:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 101,
                                "name": "balances",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 341,
                                "src": "1856:8:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                  "typeString": "mapping(address => uint256)"
                                }
                              },
                              "id": 104,
                              "indexExpression": {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 102,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 761,
                                  "src": "1865:3:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 103,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "1865:10:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "1856:20:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 105,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sub",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 303,
                            "src": "1856:24:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 107,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1856:32:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1833:55:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 109,
                      "nodeType": "ExpressionStatement",
                      "src": "1833:55:0"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 119,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 110,
                            "name": "balances",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 341,
                            "src": "1899:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 112,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 111,
                            "name": "_to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 73,
                            "src": "1908:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": true,
                          "nodeType": "IndexAccess",
                          "src": "1899:13:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 117,
                              "name": "_value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 75,
                              "src": "1933:6:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 113,
                                "name": "balances",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 341,
                                "src": "1915:8:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                  "typeString": "mapping(address => uint256)"
                                }
                              },
                              "id": 115,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 114,
                                "name": "_to",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 73,
                                "src": "1924:3:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "1915:13:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 116,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "add",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 327,
                            "src": "1915:17:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 118,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1915:25:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1899:41:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 120,
                      "nodeType": "ExpressionStatement",
                      "src": "1899:41:0"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 122,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 761,
                              "src": "2008:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 123,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "2008:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 124,
                            "name": "_to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 73,
                            "src": "2020:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 125,
                            "name": "_value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 75,
                            "src": "2025:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 121,
                          "name": "transferPersonalCoin",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 204,
                          "src": "1987:20:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (address,address,uint256) returns (bool)"
                          }
                        },
                        "id": 126,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1987:45:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 127,
                      "nodeType": "ExpressionStatement",
                      "src": "1987:45:0"
                    },
                    {
                      "eventCall": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 129,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 761,
                              "src": "2057:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 130,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "2057:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 131,
                            "name": "_to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 73,
                            "src": "2069:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 132,
                            "name": "_value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 75,
                            "src": "2074:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 128,
                          "name": "Transfer",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 498,
                          "src": "2048:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                            "typeString": "function (address,address,uint256)"
                          }
                        },
                        "id": 133,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2048:33:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 134,
                      "nodeType": "EmitStatement",
                      "src": "2043:38:0"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "hexValue": "74727565",
                        "id": 135,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2099:4:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "true"
                      },
                      "functionReturnParameters": 79,
                      "id": 136,
                      "nodeType": "Return",
                      "src": "2092:11:0"
                    }
                  ]
                },
                "documentation": "@dev Transfer token for a specified address and Issue personal coin.\r\n@param _to The address to transfer to and issue personal coin.\r\n@param _value The amount to be transferred.\r",
                "id": 138,
                "implemented": true,
                "isConstructor": false,
                "isDeclaredConst": false,
                "modifiers": [],
                "name": "transfer",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 76,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 73,
                      "name": "_to",
                      "nodeType": "VariableDeclaration",
                      "scope": 138,
                      "src": "1684:11:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 72,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "1684:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 75,
                      "name": "_value",
                      "nodeType": "VariableDeclaration",
                      "scope": 138,
                      "src": "1697:14:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 74,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1697:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "1683:29:0"
                },
                "payable": false,
                "returnParameters": {
                  "id": 79,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 78,
                      "name": "",
                      "nodeType": "VariableDeclaration",
                      "scope": 138,
                      "src": "1729:4:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 77,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "1729:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "1728:6:0"
                },
                "scope": 234,
                "src": "1666:445:0",
                "stateMutability": "nonpayable",
                "superFunction": 411,
                "visibility": "public"
              },
              {
                "body": {
                  "id": 203,
                  "nodeType": "Block",
                  "src": "2435:470:0",
                  "statements": [
                    {
                      "condition": {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 155,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 149,
                              "name": "personCoin",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 31,
                              "src": "2450:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                "typeString": "mapping(address => mapping(address => uint256))"
                              }
                            },
                            "id": 151,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 150,
                              "name": "_owner",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 140,
                              "src": "2461:6:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "2450:18:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 153,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 152,
                            "name": "_issuer",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 142,
                            "src": "2469:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "2450:27:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 154,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2481:1:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "2450:32:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "falseBody": null,
                      "id": 164,
                      "nodeType": "IfStatement",
                      "src": "2446:214:0",
                      "trueBody": {
                        "id": 163,
                        "nodeType": "Block",
                        "src": "2484:176:0",
                        "statements": [
                          {
                            "expression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 160,
                                  "name": "_issuer",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 142,
                                  "src": "2640:7:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 156,
                                    "name": "ownCoins",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 36,
                                    "src": "2618:8:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_address_$dyn_storage_$",
                                      "typeString": "mapping(address => address[] storage ref)"
                                    }
                                  },
                                  "id": 158,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 157,
                                    "name": "_owner",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 140,
                                    "src": "2627:6:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "2618:16:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                    "typeString": "address[] storage ref"
                                  }
                                },
                                "id": 159,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "push",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "2618:21:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_arraypush_nonpayable$_t_address_$returns$_t_uint256_$",
                                  "typeString": "function (address) returns (uint256)"
                                }
                              },
                              "id": 161,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2618:30:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 162,
                            "nodeType": "ExpressionStatement",
                            "src": "2618:30:0"
                          }
                        ]
                      }
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 178,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 165,
                              "name": "personCoin",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 31,
                              "src": "2670:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                "typeString": "mapping(address => mapping(address => uint256))"
                              }
                            },
                            "id": 168,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 166,
                              "name": "_owner",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 140,
                              "src": "2681:6:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "2670:18:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 169,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 167,
                            "name": "_issuer",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 142,
                            "src": "2689:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": true,
                          "nodeType": "IndexAccess",
                          "src": "2670:27:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 176,
                              "name": "_value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 144,
                              "src": "2732:6:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 170,
                                  "name": "personCoin",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 31,
                                  "src": "2700:10:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                    "typeString": "mapping(address => mapping(address => uint256))"
                                  }
                                },
                                "id": 172,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "id": 171,
                                  "name": "_owner",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 140,
                                  "src": "2711:6:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "2700:18:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                  "typeString": "mapping(address => uint256)"
                                }
                              },
                              "id": 174,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 173,
                                "name": "_issuer",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 142,
                                "src": "2719:7:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "2700:27:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 175,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "add",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 327,
                            "src": "2700:31:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 177,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2700:39:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "2670:69:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 179,
                      "nodeType": "ExpressionStatement",
                      "src": "2670:69:0"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 193,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 180,
                              "name": "personCoin",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 31,
                              "src": "2750:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                "typeString": "mapping(address => mapping(address => uint256))"
                              }
                            },
                            "id": 183,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 181,
                              "name": "_issuer",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 142,
                              "src": "2761:7:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "2750:19:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 184,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 182,
                            "name": "_owner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 140,
                            "src": "2770:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": true,
                          "nodeType": "IndexAccess",
                          "src": "2750:27:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 191,
                              "name": "_value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 144,
                              "src": "2812:6:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 185,
                                  "name": "personCoin",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 31,
                                  "src": "2780:10:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                    "typeString": "mapping(address => mapping(address => uint256))"
                                  }
                                },
                                "id": 187,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "id": 186,
                                  "name": "_issuer",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 142,
                                  "src": "2791:7:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "2780:19:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                  "typeString": "mapping(address => uint256)"
                                }
                              },
                              "id": 189,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 188,
                                "name": "_owner",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 140,
                                "src": "2800:6:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "2780:27:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 190,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "add",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 327,
                            "src": "2780:31:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 192,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2780:39:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "2750:69:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 194,
                      "nodeType": "ExpressionStatement",
                      "src": "2750:69:0"
                    },
                    {
                      "eventCall": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 196,
                            "name": "_owner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 140,
                            "src": "2851:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 197,
                            "name": "_issuer",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 142,
                            "src": "2859:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 198,
                            "name": "_value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 144,
                            "src": "2868:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 195,
                          "name": "IssuePersonCoin",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 16,
                          "src": "2835:15:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                            "typeString": "function (address,address,uint256)"
                          }
                        },
                        "id": 199,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2835:40:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 200,
                      "nodeType": "EmitStatement",
                      "src": "2830:45:0"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "hexValue": "74727565",
                        "id": 201,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2893:4:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "true"
                      },
                      "functionReturnParameters": 148,
                      "id": 202,
                      "nodeType": "Return",
                      "src": "2886:11:0"
                    }
                  ]
                },
                "documentation": "@dev Issue personal coin.\r\n@param _owner The address to recieve personal coin.\r\n@param _issuer The address to issue personal coin.\r\n@param _value The amount to be issued.\r",
                "id": 204,
                "implemented": true,
                "isConstructor": false,
                "isDeclaredConst": false,
                "modifiers": [],
                "name": "transferPersonalCoin",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 145,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 140,
                      "name": "_owner",
                      "nodeType": "VariableDeclaration",
                      "scope": 204,
                      "src": "2362:14:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 139,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "2362:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 142,
                      "name": "_issuer",
                      "nodeType": "VariableDeclaration",
                      "scope": 204,
                      "src": "2378:15:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 141,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "2378:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 144,
                      "name": "_value",
                      "nodeType": "VariableDeclaration",
                      "scope": 204,
                      "src": "2395:14:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 143,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2395:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "2361:49:0"
                },
                "payable": false,
                "returnParameters": {
                  "id": 148,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 147,
                      "name": "",
                      "nodeType": "VariableDeclaration",
                      "scope": 204,
                      "src": "2429:4:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 146,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "2429:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "2428:6:0"
                },
                "scope": 234,
                "src": "2332:573:0",
                "stateMutability": "nonpayable",
                "superFunction": null,
                "visibility": "internal"
              },
              {
                "body": {
                  "id": 219,
                  "nodeType": "Block",
                  "src": "3286:53:0",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 213,
                            "name": "personCoin",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 31,
                            "src": "3304:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                              "typeString": "mapping(address => mapping(address => uint256))"
                            }
                          },
                          "id": 215,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 214,
                            "name": "_owner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 206,
                            "src": "3315:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "3304:18:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 217,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 216,
                          "name": "_issuer",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 208,
                          "src": "3323:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "3304:27:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "functionReturnParameters": 212,
                      "id": 218,
                      "nodeType": "Return",
                      "src": "3297:34:0"
                    }
                  ]
                },
                "documentation": "@dev Gets the personal coin balance of the specified address.\r\n@param _owner The address to query the the balance of.\r\n@param _issuer The address to issue coin.\r\n@return An uint256[] representing the amount owned by the passed address.\r\n// ",
                "id": 220,
                "implemented": true,
                "isConstructor": false,
                "isDeclaredConst": true,
                "modifiers": [],
                "name": "personCoinBalanceOf",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 209,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 206,
                      "name": "_owner",
                      "nodeType": "VariableDeclaration",
                      "scope": 220,
                      "src": "3223:14:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 205,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "3223:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 208,
                      "name": "_issuer",
                      "nodeType": "VariableDeclaration",
                      "scope": 220,
                      "src": "3239:15:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 207,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "3239:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "3222:33:0"
                },
                "payable": false,
                "returnParameters": {
                  "id": 212,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 211,
                      "name": "",
                      "nodeType": "VariableDeclaration",
                      "scope": 220,
                      "src": "3277:7:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 210,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3277:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "3276:9:0"
                },
                "scope": 234,
                "src": "3194:145:0",
                "stateMutability": "view",
                "superFunction": null,
                "visibility": "public"
              },
              {
                "body": {
                  "id": 232,
                  "nodeType": "Block",
                  "src": "3639:42:0",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 228,
                          "name": "ownCoins",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 36,
                          "src": "3657:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_address_$dyn_storage_$",
                            "typeString": "mapping(address => address[] storage ref)"
                          }
                        },
                        "id": 230,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 229,
                          "name": "_owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 222,
                          "src": "3666:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "3657:16:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "functionReturnParameters": 227,
                      "id": 231,
                      "nodeType": "Return",
                      "src": "3650:23:0"
                    }
                  ]
                },
                "documentation": "@dev Gets the personal coin balance of the specified address.\r\n@param _owner The address to query the the balance of.\r\n@return An address[] representing the own personCoin list.\r\n// ",
                "id": 233,
                "implemented": true,
                "isConstructor": false,
                "isDeclaredConst": true,
                "modifiers": [],
                "name": "ownPersonCoinList",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 223,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 222,
                      "name": "_owner",
                      "nodeType": "VariableDeclaration",
                      "scope": 233,
                      "src": "3591:14:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 221,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "3591:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "3590:16:0"
                },
                "payable": false,
                "returnParameters": {
                  "id": 227,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 226,
                      "name": "",
                      "nodeType": "VariableDeclaration",
                      "scope": 233,
                      "src": "3628:9:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 224,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "3628:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 225,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "3628:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                          "typeString": "address[]"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "3627:11:0"
                },
                "scope": 234,
                "src": "3564:117:0",
                "stateMutability": "view",
                "superFunction": null,
                "visibility": "public"
              }
            ],
            "scope": 235,
            "src": "234:3450:0"
          }
        ],
        "src": "0:3684:0"
      },
      "compiler": {
        "name": "solc",
        "version": "0.4.24+commit.e67f0147.Emscripten.clang"
      },
      "networks": {
        "5777": {
          "events": {},
          "links": {},
          "address": "0x95b21d071d0c17b4965895ecc66378b67bcf33f3",
          "transactionHash": "0x48fcd4ef4b6e32a17e2d3d463fc8950ec419b9a7fac46b5a9cb5a7817d2a1515"
        }
      },
      "schemaVersion": "2.0.1",
      "updatedAt": "2018-10-21T00:45:19.360Z"
    };

    public simpleCommunityCoinInfo = {
      "contractName": "SimpleCommunityCoin",
      "abi": [
        {
          "constant": true,
          "inputs": [],
          "name": "name",
          "outputs": [
            {
              "name": "",
              "type": "string"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "decimals",
          "outputs": [
            {
              "name": "",
              "type": "int8"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "totalSupply_",
          "outputs": [
            {
              "name": "",
              "type": "int256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "symbol",
          "outputs": [
            {
              "name": "",
              "type": "string"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "name": "_name",
              "type": "string"
            },
            {
              "name": "_symbol",
              "type": "string"
            },
            {
              "name": "_totalSupply",
              "type": "int256"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "to",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "value",
              "type": "int256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "_to",
              "type": "address"
            },
            {
              "name": "_value",
              "type": "int256"
            }
          ],
          "name": "transfer",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "_from",
              "type": "address"
            },
            {
              "name": "_to",
              "type": "address"
            },
            {
              "name": "_value",
              "type": "int256"
            }
          ],
          "name": "transferFrom",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "name": "_owner",
              "type": "address"
            }
          ],
          "name": "balanceOf",
          "outputs": [
            {
              "name": "",
              "type": "int256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "totalSupply",
          "outputs": [
            {
              "name": "",
              "type": "int256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        }
      ],
      "bytecode": "0x60806040526000600260006101000a81548160ff021916908360000b60ff16021790555034801561002f57600080fd5b50604051610850380380610850833981018060405281019080805182019291906020018051820192919060200180519060200190929190505050826000908051906020019061007f9291906100ea565b5081600190805190602001906100969291906100ea565b508060038190555080600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555050505061018f565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061012b57805160ff1916838001178555610159565b82800160010185558215610159579182015b8281111561015857825182559160200191906001019061013d565b5b509050610166919061016a565b5090565b61018c91905b80821115610188576000816000905550600101610170565b5090565b90565b6106b28061019e6000396000f30060806040526004361061008e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde031461009357806318160ddd14610123578063192193b91461014e578063313ce567146101bb578063324536eb146101ec57806370a082311461021757806395d89b411461026e578063a5f7c148146102fe575b600080fd5b34801561009f57600080fd5b506100a861034b565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100e85780820151818401526020810190506100cd565b50505050905090810190601f1680156101155780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561012f57600080fd5b506101386103e9565b6040518082815260200191505060405180910390f35b34801561015a57600080fd5b506101b9600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506103f3565b005b3480156101c757600080fd5b506101d0610403565b604051808260000b60000b815260200191505060405180910390f35b3480156101f857600080fd5b50610201610416565b6040518082815260200191505060405180910390f35b34801561022357600080fd5b50610258600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061041c565b6040518082815260200191505060405180910390f35b34801561027a57600080fd5b50610283610465565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156102c35780820151818401526020810190506102a8565b50505050905090810190601f1680156102f05780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561030a57600080fd5b50610349600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610503565b005b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156103e15780601f106103b6576101008083540402835291602001916103e1565b820191906000526020600020905b8154815290600101906020018083116103c457829003601f168201915b505050505081565b6000600354905090565b6103fe838383610512565b505050565b600260009054906101000a900460000b81565b60035481565b6000600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104fb5780601f106104d0576101008083540402835291602001916104fb565b820191906000526020600020905b8154815290600101906020018083116104de57829003601f168201915b505050505081565b61050e338383610512565b5050565b80600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205403600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555080600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205401600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8b0c34a52f9e28d78caaa7066cd047b398dae74941a208b77777420f492bd7e1836040518082815260200191505060405180910390a35050505600a165627a7a723058208b80f79786330beba27bd873815ba5a1a1ecfcdb7180018a121bf637c22ca7810029",
      "deployedBytecode": "0x60806040526004361061008e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde031461009357806318160ddd14610123578063192193b91461014e578063313ce567146101bb578063324536eb146101ec57806370a082311461021757806395d89b411461026e578063a5f7c148146102fe575b600080fd5b34801561009f57600080fd5b506100a861034b565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100e85780820151818401526020810190506100cd565b50505050905090810190601f1680156101155780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561012f57600080fd5b506101386103e9565b6040518082815260200191505060405180910390f35b34801561015a57600080fd5b506101b9600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506103f3565b005b3480156101c757600080fd5b506101d0610403565b604051808260000b60000b815260200191505060405180910390f35b3480156101f857600080fd5b50610201610416565b6040518082815260200191505060405180910390f35b34801561022357600080fd5b50610258600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061041c565b6040518082815260200191505060405180910390f35b34801561027a57600080fd5b50610283610465565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156102c35780820151818401526020810190506102a8565b50505050905090810190601f1680156102f05780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561030a57600080fd5b50610349600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610503565b005b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156103e15780601f106103b6576101008083540402835291602001916103e1565b820191906000526020600020905b8154815290600101906020018083116103c457829003601f168201915b505050505081565b6000600354905090565b6103fe838383610512565b505050565b600260009054906101000a900460000b81565b60035481565b6000600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104fb5780601f106104d0576101008083540402835291602001916104fb565b820191906000526020600020905b8154815290600101906020018083116104de57829003601f168201915b505050505081565b61050e338383610512565b5050565b80600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205403600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555080600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205401600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8b0c34a52f9e28d78caaa7066cd047b398dae74941a208b77777420f492bd7e1836040518082815260200191505060405180910390a35050505600a165627a7a723058208b80f79786330beba27bd873815ba5a1a1ecfcdb7180018a121bf637c22ca7810029",
      "sourceMap": "28:1235:1:-;;;183:1;160:24;;;;;;;;;;;;;;;;;;;;;;358:210;8:9:-1;5:2;;;30:1;27;20:12;5:2;358:210:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;444:5;437:4;:12;;;;;;;;;;;;:::i;:::-;;469:7;460:6;:16;;;;;;;;;;;;:::i;:::-;;502:12;487;:27;;;;548:12;525:8;:20;534:10;525:20;;;;;;;;;;;;;;;:35;;;;358:210;;;28:1235;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
      "deployedSourceMap": "28:1235:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;108:18;;8:9:-1;5:2;;;30:1;27;20:12;5:2;108:18:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;108:18:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1173:87;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1173:87:1;;;;;;;;;;;;;;;;;;;;;;;929:117;;8:9:-1;5:2;;;30:1;27;20:12;5:2;929:117:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;160:24;;8:9:-1;5:2;;;30:1;27;20:12;5:2;160:24:1;;;;;;;;;;;;;;;;;;;;;;;;;;;191:23;;8:9:-1;5:2;;;30:1;27;20:12;5:2;191:23:1;;;;;;;;;;;;;;;;;;;;;;;1058:103;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1058:103:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;133:20;;8:9:-1;5:2;;;30:1;27;20:12;5:2;133:20:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;133:20:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;814:103;;8:9:-1;5:2;;;30:1;27;20:12;5:2;814:103:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;108:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1173:87::-;1217:3;1240:12;;1233:19;;1173:87;:::o;929:117::-;1009:29;1019:5;1026:3;1031:6;1009:9;:29::i;:::-;929:117;;;:::o;160:24::-;;;;;;;;;;;;;:::o;191:23::-;;;;:::o;1058:103::-;1114:3;1137:8;:16;1146:6;1137:16;;;;;;;;;;;;;;;;1130:23;;1058:103;;;:::o;133:20::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;814:103::-;875:34;885:10;897:3;902:6;875:9;:34::i;:::-;814:103;;:::o;580:222::-;695:6;677:8;:15;686:5;677:15;;;;;;;;;;;;;;;;:24;659:8;:15;668:5;659:15;;;;;;;;;;;;;;;:42;;;;744:6;728:8;:13;737:3;728:13;;;;;;;;;;;;;;;;:22;712:8;:13;721:3;712:13;;;;;;;;;;;;;;;:38;;;;782:3;766:28;;775:5;766:28;;;787:6;766:28;;;;;;;;;;;;;;;;;;580:222;;;:::o",
      "source": "pragma solidity ^0.4.24;\r\n\r\ncontract SimpleCommunityCoin {\r\n    \r\n    // Public variables of the token\r\n    string public name;\r\n    string public symbol;\r\n    int8 public decimals = 0;\r\n    int public totalSupply_;\r\n    \r\n    mapping(address => int) balances;\r\n    \r\n    event Transfer(address indexed from, address indexed to, int value);\r\n    \r\n    \r\n    constructor (string _name, string _symbol, int _totalSupply) public {\r\n        name = _name;\r\n        symbol = _symbol;\r\n        totalSupply_ = _totalSupply;\r\n        balances[msg.sender] = _totalSupply;\r\n    }\r\n    \r\n    function _transfer(address _from, address _to, int _value) internal {\r\n        balances[_from] = balances[_from] - _value;\r\n        balances[_to] = balances[_to] + _value;\r\n        emit Transfer(_from, _to, _value);\r\n    }\r\n    \r\n    function transfer(address _to, int _value) public {\r\n        _transfer(msg.sender, _to, _value);\r\n    }\r\n    \r\n    function transferFrom(address _from, address _to, int _value) public {\r\n        _transfer(_from, _to, _value);\r\n    }\r\n    \r\n    function balanceOf(address _owner) public view returns (int) {\r\n        return balances[_owner];\r\n    }\r\n    \r\n    function totalSupply() public view returns (int) {\r\n        return totalSupply_;\r\n    }\r\n}",
      "sourcePath": "C:\\Users\\Kazuki\\Documents\\コミュニティーコイン\\ethereum\\CommunityCoin\\contracts\\SimpleCommunityCoin.sol",
      "ast": {
        "absolutePath": "/C/Users/Kazuki/Documents/コミュニティーコイン/ethereum/CommunityCoin/contracts/SimpleCommunityCoin.sol",
        "exportedSymbols": {
          "SimpleCommunityCoin": [
            473
          ]
        },
        "id": 474,
        "nodeType": "SourceUnit",
        "nodes": [
          {
            "id": 335,
            "literals": [
              "solidity",
              "^",
              "0.4",
              ".24"
            ],
            "nodeType": "PragmaDirective",
            "src": "0:24:1"
          },
          {
            "baseContracts": [],
            "contractDependencies": [],
            "contractKind": "contract",
            "documentation": null,
            "fullyImplemented": true,
            "id": 473,
            "linearizedBaseContracts": [
              473
            ],
            "name": "SimpleCommunityCoin",
            "nodeType": "ContractDefinition",
            "nodes": [
              {
                "constant": false,
                "id": 337,
                "name": "name",
                "nodeType": "VariableDeclaration",
                "scope": 473,
                "src": "108:18:1",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 336,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "108:6:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "value": null,
                "visibility": "public"
              },
              {
                "constant": false,
                "id": 339,
                "name": "symbol",
                "nodeType": "VariableDeclaration",
                "scope": 473,
                "src": "133:20:1",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 338,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "133:6:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "value": null,
                "visibility": "public"
              },
              {
                "constant": false,
                "id": 342,
                "name": "decimals",
                "nodeType": "VariableDeclaration",
                "scope": 473,
                "src": "160:24:1",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_int8",
                  "typeString": "int8"
                },
                "typeName": {
                  "id": 340,
                  "name": "int8",
                  "nodeType": "ElementaryTypeName",
                  "src": "160:4:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int8",
                    "typeString": "int8"
                  }
                },
                "value": {
                  "argumentTypes": null,
                  "hexValue": "30",
                  "id": 341,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "number",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "183:1:1",
                  "subdenomination": null,
                  "typeDescriptions": {
                    "typeIdentifier": "t_rational_0_by_1",
                    "typeString": "int_const 0"
                  },
                  "value": "0"
                },
                "visibility": "public"
              },
              {
                "constant": false,
                "id": 344,
                "name": "totalSupply_",
                "nodeType": "VariableDeclaration",
                "scope": 473,
                "src": "191:23:1",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_int256",
                  "typeString": "int256"
                },
                "typeName": {
                  "id": 343,
                  "name": "int",
                  "nodeType": "ElementaryTypeName",
                  "src": "191:3:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  }
                },
                "value": null,
                "visibility": "public"
              },
              {
                "constant": false,
                "id": 348,
                "name": "balances",
                "nodeType": "VariableDeclaration",
                "scope": 473,
                "src": "227:32:1",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_int256_$",
                  "typeString": "mapping(address => int256)"
                },
                "typeName": {
                  "id": 347,
                  "keyType": {
                    "id": 345,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "235:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "227:23:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_address_$_t_int256_$",
                    "typeString": "mapping(address => int256)"
                  },
                  "valueType": {
                    "id": 346,
                    "name": "int",
                    "nodeType": "ElementaryTypeName",
                    "src": "246:3:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "anonymous": false,
                "documentation": null,
                "id": 356,
                "name": "Transfer",
                "nodeType": "EventDefinition",
                "parameters": {
                  "id": 355,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 350,
                      "indexed": true,
                      "name": "from",
                      "nodeType": "VariableDeclaration",
                      "scope": 356,
                      "src": "287:20:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 349,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "287:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 352,
                      "indexed": true,
                      "name": "to",
                      "nodeType": "VariableDeclaration",
                      "scope": 356,
                      "src": "309:18:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 351,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "309:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 354,
                      "indexed": false,
                      "name": "value",
                      "nodeType": "VariableDeclaration",
                      "scope": 356,
                      "src": "329:9:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 353,
                        "name": "int",
                        "nodeType": "ElementaryTypeName",
                        "src": "329:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "286:53:1"
                },
                "src": "272:68:1"
              },
              {
                "body": {
                  "id": 384,
                  "nodeType": "Block",
                  "src": "426:142:1",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 367,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "id": 365,
                          "name": "name",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 337,
                          "src": "437:4:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage",
                            "typeString": "string storage ref"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "id": 366,
                          "name": "_name",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 358,
                          "src": "444:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        "src": "437:12:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      },
                      "id": 368,
                      "nodeType": "ExpressionStatement",
                      "src": "437:12:1"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 371,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "id": 369,
                          "name": "symbol",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 339,
                          "src": "460:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage",
                            "typeString": "string storage ref"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "id": 370,
                          "name": "_symbol",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 360,
                          "src": "469:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        "src": "460:16:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      },
                      "id": 372,
                      "nodeType": "ExpressionStatement",
                      "src": "460:16:1"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 375,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "id": 373,
                          "name": "totalSupply_",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 344,
                          "src": "487:12:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "id": 374,
                          "name": "_totalSupply",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 362,
                          "src": "502:12:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "487:27:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 376,
                      "nodeType": "ExpressionStatement",
                      "src": "487:27:1"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 382,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 377,
                            "name": "balances",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 348,
                            "src": "525:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_int256_$",
                              "typeString": "mapping(address => int256)"
                            }
                          },
                          "id": 380,
                          "indexExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 378,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 582,
                              "src": "534:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 379,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "534:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": true,
                          "nodeType": "IndexAccess",
                          "src": "525:20:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "id": 381,
                          "name": "_totalSupply",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 362,
                          "src": "548:12:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "525:35:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 383,
                      "nodeType": "ExpressionStatement",
                      "src": "525:35:1"
                    }
                  ]
                },
                "documentation": null,
                "id": 385,
                "implemented": true,
                "isConstructor": true,
                "isDeclaredConst": false,
                "modifiers": [],
                "name": "",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 363,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 358,
                      "name": "_name",
                      "nodeType": "VariableDeclaration",
                      "scope": 385,
                      "src": "371:12:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 357,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "371:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 360,
                      "name": "_symbol",
                      "nodeType": "VariableDeclaration",
                      "scope": 385,
                      "src": "385:14:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 359,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "385:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 362,
                      "name": "_totalSupply",
                      "nodeType": "VariableDeclaration",
                      "scope": 385,
                      "src": "401:16:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 361,
                        "name": "int",
                        "nodeType": "ElementaryTypeName",
                        "src": "401:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "370:48:1"
                },
                "payable": false,
                "returnParameters": {
                  "id": 364,
                  "nodeType": "ParameterList",
                  "parameters": [],
                  "src": "426:0:1"
                },
                "scope": 473,
                "src": "358:210:1",
                "stateMutability": "nonpayable",
                "superFunction": null,
                "visibility": "public"
              },
              {
                "body": {
                  "id": 420,
                  "nodeType": "Block",
                  "src": "648:154:1",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 402,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 394,
                            "name": "balances",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 348,
                            "src": "659:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_int256_$",
                              "typeString": "mapping(address => int256)"
                            }
                          },
                          "id": 396,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 395,
                            "name": "_from",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 387,
                            "src": "668:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": true,
                          "nodeType": "IndexAccess",
                          "src": "659:15:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 401,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 397,
                              "name": "balances",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 348,
                              "src": "677:8:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_int256_$",
                                "typeString": "mapping(address => int256)"
                              }
                            },
                            "id": 399,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 398,
                              "name": "_from",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 387,
                              "src": "686:5:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "677:15:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 400,
                            "name": "_value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 391,
                            "src": "695:6:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "677:24:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "659:42:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 403,
                      "nodeType": "ExpressionStatement",
                      "src": "659:42:1"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 412,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 404,
                            "name": "balances",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 348,
                            "src": "712:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_int256_$",
                              "typeString": "mapping(address => int256)"
                            }
                          },
                          "id": 406,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 405,
                            "name": "_to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 389,
                            "src": "721:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": true,
                          "nodeType": "IndexAccess",
                          "src": "712:13:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 411,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 407,
                              "name": "balances",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 348,
                              "src": "728:8:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_int256_$",
                                "typeString": "mapping(address => int256)"
                              }
                            },
                            "id": 409,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 408,
                              "name": "_to",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 389,
                              "src": "737:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "728:13:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 410,
                            "name": "_value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 391,
                            "src": "744:6:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "728:22:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "712:38:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 413,
                      "nodeType": "ExpressionStatement",
                      "src": "712:38:1"
                    },
                    {
                      "eventCall": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 415,
                            "name": "_from",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 387,
                            "src": "775:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 416,
                            "name": "_to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 389,
                            "src": "782:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 417,
                            "name": "_value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 391,
                            "src": "787:6:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          ],
                          "id": 414,
                          "name": "Transfer",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 356,
                          "src": "766:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_int256_$returns$__$",
                            "typeString": "function (address,address,int256)"
                          }
                        },
                        "id": 418,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "766:28:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 419,
                      "nodeType": "EmitStatement",
                      "src": "761:33:1"
                    }
                  ]
                },
                "documentation": null,
                "id": 421,
                "implemented": true,
                "isConstructor": false,
                "isDeclaredConst": false,
                "modifiers": [],
                "name": "_transfer",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 392,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 387,
                      "name": "_from",
                      "nodeType": "VariableDeclaration",
                      "scope": 421,
                      "src": "599:13:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 386,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "599:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 389,
                      "name": "_to",
                      "nodeType": "VariableDeclaration",
                      "scope": 421,
                      "src": "614:11:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 388,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "614:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 391,
                      "name": "_value",
                      "nodeType": "VariableDeclaration",
                      "scope": 421,
                      "src": "627:10:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 390,
                        "name": "int",
                        "nodeType": "ElementaryTypeName",
                        "src": "627:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "598:40:1"
                },
                "payable": false,
                "returnParameters": {
                  "id": 393,
                  "nodeType": "ParameterList",
                  "parameters": [],
                  "src": "648:0:1"
                },
                "scope": 473,
                "src": "580:222:1",
                "stateMutability": "nonpayable",
                "superFunction": null,
                "visibility": "internal"
              },
              {
                "body": {
                  "id": 435,
                  "nodeType": "Block",
                  "src": "864:53:1",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 429,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 582,
                              "src": "885:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 430,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "885:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 431,
                            "name": "_to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 423,
                            "src": "897:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 432,
                            "name": "_value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 425,
                            "src": "902:6:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          ],
                          "id": 428,
                          "name": "_transfer",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 421,
                          "src": "875:9:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_int256_$returns$__$",
                            "typeString": "function (address,address,int256)"
                          }
                        },
                        "id": 433,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "875:34:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 434,
                      "nodeType": "ExpressionStatement",
                      "src": "875:34:1"
                    }
                  ]
                },
                "documentation": null,
                "id": 436,
                "implemented": true,
                "isConstructor": false,
                "isDeclaredConst": false,
                "modifiers": [],
                "name": "transfer",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 426,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 423,
                      "name": "_to",
                      "nodeType": "VariableDeclaration",
                      "scope": 436,
                      "src": "832:11:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 422,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "832:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 425,
                      "name": "_value",
                      "nodeType": "VariableDeclaration",
                      "scope": 436,
                      "src": "845:10:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 424,
                        "name": "int",
                        "nodeType": "ElementaryTypeName",
                        "src": "845:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "831:25:1"
                },
                "payable": false,
                "returnParameters": {
                  "id": 427,
                  "nodeType": "ParameterList",
                  "parameters": [],
                  "src": "864:0:1"
                },
                "scope": 473,
                "src": "814:103:1",
                "stateMutability": "nonpayable",
                "superFunction": null,
                "visibility": "public"
              },
              {
                "body": {
                  "id": 451,
                  "nodeType": "Block",
                  "src": "998:48:1",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 446,
                            "name": "_from",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 438,
                            "src": "1019:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 447,
                            "name": "_to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 440,
                            "src": "1026:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 448,
                            "name": "_value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 442,
                            "src": "1031:6:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          ],
                          "id": 445,
                          "name": "_transfer",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 421,
                          "src": "1009:9:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_int256_$returns$__$",
                            "typeString": "function (address,address,int256)"
                          }
                        },
                        "id": 449,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1009:29:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 450,
                      "nodeType": "ExpressionStatement",
                      "src": "1009:29:1"
                    }
                  ]
                },
                "documentation": null,
                "id": 452,
                "implemented": true,
                "isConstructor": false,
                "isDeclaredConst": false,
                "modifiers": [],
                "name": "transferFrom",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 443,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 438,
                      "name": "_from",
                      "nodeType": "VariableDeclaration",
                      "scope": 452,
                      "src": "951:13:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 437,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "951:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 440,
                      "name": "_to",
                      "nodeType": "VariableDeclaration",
                      "scope": 452,
                      "src": "966:11:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 439,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "966:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 442,
                      "name": "_value",
                      "nodeType": "VariableDeclaration",
                      "scope": 452,
                      "src": "979:10:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 441,
                        "name": "int",
                        "nodeType": "ElementaryTypeName",
                        "src": "979:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "950:40:1"
                },
                "payable": false,
                "returnParameters": {
                  "id": 444,
                  "nodeType": "ParameterList",
                  "parameters": [],
                  "src": "998:0:1"
                },
                "scope": 473,
                "src": "929:117:1",
                "stateMutability": "nonpayable",
                "superFunction": null,
                "visibility": "public"
              },
              {
                "body": {
                  "id": 463,
                  "nodeType": "Block",
                  "src": "1119:42:1",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 459,
                          "name": "balances",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 348,
                          "src": "1137:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_int256_$",
                            "typeString": "mapping(address => int256)"
                          }
                        },
                        "id": 461,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 460,
                          "name": "_owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 454,
                          "src": "1146:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1137:16:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "functionReturnParameters": 458,
                      "id": 462,
                      "nodeType": "Return",
                      "src": "1130:23:1"
                    }
                  ]
                },
                "documentation": null,
                "id": 464,
                "implemented": true,
                "isConstructor": false,
                "isDeclaredConst": true,
                "modifiers": [],
                "name": "balanceOf",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 455,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 454,
                      "name": "_owner",
                      "nodeType": "VariableDeclaration",
                      "scope": 464,
                      "src": "1077:14:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 453,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "1077:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "1076:16:1"
                },
                "payable": false,
                "returnParameters": {
                  "id": 458,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 457,
                      "name": "",
                      "nodeType": "VariableDeclaration",
                      "scope": 464,
                      "src": "1114:3:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 456,
                        "name": "int",
                        "nodeType": "ElementaryTypeName",
                        "src": "1114:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "1113:5:1"
                },
                "scope": 473,
                "src": "1058:103:1",
                "stateMutability": "view",
                "superFunction": null,
                "visibility": "public"
              },
              {
                "body": {
                  "id": 471,
                  "nodeType": "Block",
                  "src": "1222:38:1",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 469,
                        "name": "totalSupply_",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 344,
                        "src": "1240:12:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "functionReturnParameters": 468,
                      "id": 470,
                      "nodeType": "Return",
                      "src": "1233:19:1"
                    }
                  ]
                },
                "documentation": null,
                "id": 472,
                "implemented": true,
                "isConstructor": false,
                "isDeclaredConst": true,
                "modifiers": [],
                "name": "totalSupply",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 465,
                  "nodeType": "ParameterList",
                  "parameters": [],
                  "src": "1193:2:1"
                },
                "payable": false,
                "returnParameters": {
                  "id": 468,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 467,
                      "name": "",
                      "nodeType": "VariableDeclaration",
                      "scope": 472,
                      "src": "1217:3:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 466,
                        "name": "int",
                        "nodeType": "ElementaryTypeName",
                        "src": "1217:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "1216:5:1"
                },
                "scope": 473,
                "src": "1173:87:1",
                "stateMutability": "view",
                "superFunction": null,
                "visibility": "public"
              }
            ],
            "scope": 474,
            "src": "28:1235:1"
          }
        ],
        "src": "0:1263:1"
      },
      "legacyAST": {
        "absolutePath": "/C/Users/Kazuki/Documents/コミュニティーコイン/ethereum/CommunityCoin/contracts/SimpleCommunityCoin.sol",
        "exportedSymbols": {
          "SimpleCommunityCoin": [
            473
          ]
        },
        "id": 474,
        "nodeType": "SourceUnit",
        "nodes": [
          {
            "id": 335,
            "literals": [
              "solidity",
              "^",
              "0.4",
              ".24"
            ],
            "nodeType": "PragmaDirective",
            "src": "0:24:1"
          },
          {
            "baseContracts": [],
            "contractDependencies": [],
            "contractKind": "contract",
            "documentation": null,
            "fullyImplemented": true,
            "id": 473,
            "linearizedBaseContracts": [
              473
            ],
            "name": "SimpleCommunityCoin",
            "nodeType": "ContractDefinition",
            "nodes": [
              {
                "constant": false,
                "id": 337,
                "name": "name",
                "nodeType": "VariableDeclaration",
                "scope": 473,
                "src": "108:18:1",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 336,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "108:6:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "value": null,
                "visibility": "public"
              },
              {
                "constant": false,
                "id": 339,
                "name": "symbol",
                "nodeType": "VariableDeclaration",
                "scope": 473,
                "src": "133:20:1",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 338,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "133:6:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "value": null,
                "visibility": "public"
              },
              {
                "constant": false,
                "id": 342,
                "name": "decimals",
                "nodeType": "VariableDeclaration",
                "scope": 473,
                "src": "160:24:1",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_int8",
                  "typeString": "int8"
                },
                "typeName": {
                  "id": 340,
                  "name": "int8",
                  "nodeType": "ElementaryTypeName",
                  "src": "160:4:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int8",
                    "typeString": "int8"
                  }
                },
                "value": {
                  "argumentTypes": null,
                  "hexValue": "30",
                  "id": 341,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "number",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "183:1:1",
                  "subdenomination": null,
                  "typeDescriptions": {
                    "typeIdentifier": "t_rational_0_by_1",
                    "typeString": "int_const 0"
                  },
                  "value": "0"
                },
                "visibility": "public"
              },
              {
                "constant": false,
                "id": 344,
                "name": "totalSupply_",
                "nodeType": "VariableDeclaration",
                "scope": 473,
                "src": "191:23:1",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_int256",
                  "typeString": "int256"
                },
                "typeName": {
                  "id": 343,
                  "name": "int",
                  "nodeType": "ElementaryTypeName",
                  "src": "191:3:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  }
                },
                "value": null,
                "visibility": "public"
              },
              {
                "constant": false,
                "id": 348,
                "name": "balances",
                "nodeType": "VariableDeclaration",
                "scope": 473,
                "src": "227:32:1",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_int256_$",
                  "typeString": "mapping(address => int256)"
                },
                "typeName": {
                  "id": 347,
                  "keyType": {
                    "id": 345,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "235:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "227:23:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_address_$_t_int256_$",
                    "typeString": "mapping(address => int256)"
                  },
                  "valueType": {
                    "id": 346,
                    "name": "int",
                    "nodeType": "ElementaryTypeName",
                    "src": "246:3:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "anonymous": false,
                "documentation": null,
                "id": 356,
                "name": "Transfer",
                "nodeType": "EventDefinition",
                "parameters": {
                  "id": 355,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 350,
                      "indexed": true,
                      "name": "from",
                      "nodeType": "VariableDeclaration",
                      "scope": 356,
                      "src": "287:20:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 349,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "287:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 352,
                      "indexed": true,
                      "name": "to",
                      "nodeType": "VariableDeclaration",
                      "scope": 356,
                      "src": "309:18:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 351,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "309:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 354,
                      "indexed": false,
                      "name": "value",
                      "nodeType": "VariableDeclaration",
                      "scope": 356,
                      "src": "329:9:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 353,
                        "name": "int",
                        "nodeType": "ElementaryTypeName",
                        "src": "329:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "286:53:1"
                },
                "src": "272:68:1"
              },
              {
                "body": {
                  "id": 384,
                  "nodeType": "Block",
                  "src": "426:142:1",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 367,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "id": 365,
                          "name": "name",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 337,
                          "src": "437:4:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage",
                            "typeString": "string storage ref"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "id": 366,
                          "name": "_name",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 358,
                          "src": "444:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        "src": "437:12:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      },
                      "id": 368,
                      "nodeType": "ExpressionStatement",
                      "src": "437:12:1"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 371,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "id": 369,
                          "name": "symbol",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 339,
                          "src": "460:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage",
                            "typeString": "string storage ref"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "id": 370,
                          "name": "_symbol",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 360,
                          "src": "469:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        "src": "460:16:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      },
                      "id": 372,
                      "nodeType": "ExpressionStatement",
                      "src": "460:16:1"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 375,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "id": 373,
                          "name": "totalSupply_",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 344,
                          "src": "487:12:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "id": 374,
                          "name": "_totalSupply",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 362,
                          "src": "502:12:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "487:27:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 376,
                      "nodeType": "ExpressionStatement",
                      "src": "487:27:1"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 382,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 377,
                            "name": "balances",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 348,
                            "src": "525:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_int256_$",
                              "typeString": "mapping(address => int256)"
                            }
                          },
                          "id": 380,
                          "indexExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 378,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 582,
                              "src": "534:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 379,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "534:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": true,
                          "nodeType": "IndexAccess",
                          "src": "525:20:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "id": 381,
                          "name": "_totalSupply",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 362,
                          "src": "548:12:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "525:35:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 383,
                      "nodeType": "ExpressionStatement",
                      "src": "525:35:1"
                    }
                  ]
                },
                "documentation": null,
                "id": 385,
                "implemented": true,
                "isConstructor": true,
                "isDeclaredConst": false,
                "modifiers": [],
                "name": "",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 363,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 358,
                      "name": "_name",
                      "nodeType": "VariableDeclaration",
                      "scope": 385,
                      "src": "371:12:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 357,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "371:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 360,
                      "name": "_symbol",
                      "nodeType": "VariableDeclaration",
                      "scope": 385,
                      "src": "385:14:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 359,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "385:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 362,
                      "name": "_totalSupply",
                      "nodeType": "VariableDeclaration",
                      "scope": 385,
                      "src": "401:16:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 361,
                        "name": "int",
                        "nodeType": "ElementaryTypeName",
                        "src": "401:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "370:48:1"
                },
                "payable": false,
                "returnParameters": {
                  "id": 364,
                  "nodeType": "ParameterList",
                  "parameters": [],
                  "src": "426:0:1"
                },
                "scope": 473,
                "src": "358:210:1",
                "stateMutability": "nonpayable",
                "superFunction": null,
                "visibility": "public"
              },
              {
                "body": {
                  "id": 420,
                  "nodeType": "Block",
                  "src": "648:154:1",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 402,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 394,
                            "name": "balances",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 348,
                            "src": "659:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_int256_$",
                              "typeString": "mapping(address => int256)"
                            }
                          },
                          "id": 396,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 395,
                            "name": "_from",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 387,
                            "src": "668:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": true,
                          "nodeType": "IndexAccess",
                          "src": "659:15:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 401,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 397,
                              "name": "balances",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 348,
                              "src": "677:8:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_int256_$",
                                "typeString": "mapping(address => int256)"
                              }
                            },
                            "id": 399,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 398,
                              "name": "_from",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 387,
                              "src": "686:5:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "677:15:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 400,
                            "name": "_value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 391,
                            "src": "695:6:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "677:24:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "659:42:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 403,
                      "nodeType": "ExpressionStatement",
                      "src": "659:42:1"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 412,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 404,
                            "name": "balances",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 348,
                            "src": "712:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_int256_$",
                              "typeString": "mapping(address => int256)"
                            }
                          },
                          "id": 406,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 405,
                            "name": "_to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 389,
                            "src": "721:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": true,
                          "nodeType": "IndexAccess",
                          "src": "712:13:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 411,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 407,
                              "name": "balances",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 348,
                              "src": "728:8:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_int256_$",
                                "typeString": "mapping(address => int256)"
                              }
                            },
                            "id": 409,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 408,
                              "name": "_to",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 389,
                              "src": "737:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "728:13:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 410,
                            "name": "_value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 391,
                            "src": "744:6:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "728:22:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "712:38:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 413,
                      "nodeType": "ExpressionStatement",
                      "src": "712:38:1"
                    },
                    {
                      "eventCall": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 415,
                            "name": "_from",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 387,
                            "src": "775:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 416,
                            "name": "_to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 389,
                            "src": "782:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 417,
                            "name": "_value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 391,
                            "src": "787:6:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          ],
                          "id": 414,
                          "name": "Transfer",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 356,
                          "src": "766:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_int256_$returns$__$",
                            "typeString": "function (address,address,int256)"
                          }
                        },
                        "id": 418,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "766:28:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 419,
                      "nodeType": "EmitStatement",
                      "src": "761:33:1"
                    }
                  ]
                },
                "documentation": null,
                "id": 421,
                "implemented": true,
                "isConstructor": false,
                "isDeclaredConst": false,
                "modifiers": [],
                "name": "_transfer",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 392,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 387,
                      "name": "_from",
                      "nodeType": "VariableDeclaration",
                      "scope": 421,
                      "src": "599:13:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 386,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "599:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 389,
                      "name": "_to",
                      "nodeType": "VariableDeclaration",
                      "scope": 421,
                      "src": "614:11:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 388,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "614:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 391,
                      "name": "_value",
                      "nodeType": "VariableDeclaration",
                      "scope": 421,
                      "src": "627:10:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 390,
                        "name": "int",
                        "nodeType": "ElementaryTypeName",
                        "src": "627:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "598:40:1"
                },
                "payable": false,
                "returnParameters": {
                  "id": 393,
                  "nodeType": "ParameterList",
                  "parameters": [],
                  "src": "648:0:1"
                },
                "scope": 473,
                "src": "580:222:1",
                "stateMutability": "nonpayable",
                "superFunction": null,
                "visibility": "internal"
              },
              {
                "body": {
                  "id": 435,
                  "nodeType": "Block",
                  "src": "864:53:1",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 429,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 582,
                              "src": "885:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 430,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "885:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 431,
                            "name": "_to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 423,
                            "src": "897:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 432,
                            "name": "_value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 425,
                            "src": "902:6:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          ],
                          "id": 428,
                          "name": "_transfer",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 421,
                          "src": "875:9:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_int256_$returns$__$",
                            "typeString": "function (address,address,int256)"
                          }
                        },
                        "id": 433,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "875:34:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 434,
                      "nodeType": "ExpressionStatement",
                      "src": "875:34:1"
                    }
                  ]
                },
                "documentation": null,
                "id": 436,
                "implemented": true,
                "isConstructor": false,
                "isDeclaredConst": false,
                "modifiers": [],
                "name": "transfer",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 426,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 423,
                      "name": "_to",
                      "nodeType": "VariableDeclaration",
                      "scope": 436,
                      "src": "832:11:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 422,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "832:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 425,
                      "name": "_value",
                      "nodeType": "VariableDeclaration",
                      "scope": 436,
                      "src": "845:10:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 424,
                        "name": "int",
                        "nodeType": "ElementaryTypeName",
                        "src": "845:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "831:25:1"
                },
                "payable": false,
                "returnParameters": {
                  "id": 427,
                  "nodeType": "ParameterList",
                  "parameters": [],
                  "src": "864:0:1"
                },
                "scope": 473,
                "src": "814:103:1",
                "stateMutability": "nonpayable",
                "superFunction": null,
                "visibility": "public"
              },
              {
                "body": {
                  "id": 451,
                  "nodeType": "Block",
                  "src": "998:48:1",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 446,
                            "name": "_from",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 438,
                            "src": "1019:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 447,
                            "name": "_to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 440,
                            "src": "1026:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 448,
                            "name": "_value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 442,
                            "src": "1031:6:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          ],
                          "id": 445,
                          "name": "_transfer",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 421,
                          "src": "1009:9:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_int256_$returns$__$",
                            "typeString": "function (address,address,int256)"
                          }
                        },
                        "id": 449,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1009:29:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 450,
                      "nodeType": "ExpressionStatement",
                      "src": "1009:29:1"
                    }
                  ]
                },
                "documentation": null,
                "id": 452,
                "implemented": true,
                "isConstructor": false,
                "isDeclaredConst": false,
                "modifiers": [],
                "name": "transferFrom",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 443,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 438,
                      "name": "_from",
                      "nodeType": "VariableDeclaration",
                      "scope": 452,
                      "src": "951:13:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 437,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "951:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 440,
                      "name": "_to",
                      "nodeType": "VariableDeclaration",
                      "scope": 452,
                      "src": "966:11:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 439,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "966:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 442,
                      "name": "_value",
                      "nodeType": "VariableDeclaration",
                      "scope": 452,
                      "src": "979:10:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 441,
                        "name": "int",
                        "nodeType": "ElementaryTypeName",
                        "src": "979:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "950:40:1"
                },
                "payable": false,
                "returnParameters": {
                  "id": 444,
                  "nodeType": "ParameterList",
                  "parameters": [],
                  "src": "998:0:1"
                },
                "scope": 473,
                "src": "929:117:1",
                "stateMutability": "nonpayable",
                "superFunction": null,
                "visibility": "public"
              },
              {
                "body": {
                  "id": 463,
                  "nodeType": "Block",
                  "src": "1119:42:1",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 459,
                          "name": "balances",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 348,
                          "src": "1137:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_int256_$",
                            "typeString": "mapping(address => int256)"
                          }
                        },
                        "id": 461,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 460,
                          "name": "_owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 454,
                          "src": "1146:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1137:16:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "functionReturnParameters": 458,
                      "id": 462,
                      "nodeType": "Return",
                      "src": "1130:23:1"
                    }
                  ]
                },
                "documentation": null,
                "id": 464,
                "implemented": true,
                "isConstructor": false,
                "isDeclaredConst": true,
                "modifiers": [],
                "name": "balanceOf",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 455,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 454,
                      "name": "_owner",
                      "nodeType": "VariableDeclaration",
                      "scope": 464,
                      "src": "1077:14:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 453,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "1077:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "1076:16:1"
                },
                "payable": false,
                "returnParameters": {
                  "id": 458,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 457,
                      "name": "",
                      "nodeType": "VariableDeclaration",
                      "scope": 464,
                      "src": "1114:3:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 456,
                        "name": "int",
                        "nodeType": "ElementaryTypeName",
                        "src": "1114:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "1113:5:1"
                },
                "scope": 473,
                "src": "1058:103:1",
                "stateMutability": "view",
                "superFunction": null,
                "visibility": "public"
              },
              {
                "body": {
                  "id": 471,
                  "nodeType": "Block",
                  "src": "1222:38:1",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 469,
                        "name": "totalSupply_",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 344,
                        "src": "1240:12:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "functionReturnParameters": 468,
                      "id": 470,
                      "nodeType": "Return",
                      "src": "1233:19:1"
                    }
                  ]
                },
                "documentation": null,
                "id": 472,
                "implemented": true,
                "isConstructor": false,
                "isDeclaredConst": true,
                "modifiers": [],
                "name": "totalSupply",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 465,
                  "nodeType": "ParameterList",
                  "parameters": [],
                  "src": "1193:2:1"
                },
                "payable": false,
                "returnParameters": {
                  "id": 468,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 467,
                      "name": "",
                      "nodeType": "VariableDeclaration",
                      "scope": 472,
                      "src": "1217:3:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 466,
                        "name": "int",
                        "nodeType": "ElementaryTypeName",
                        "src": "1217:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "1216:5:1"
                },
                "scope": 473,
                "src": "1173:87:1",
                "stateMutability": "view",
                "superFunction": null,
                "visibility": "public"
              }
            ],
            "scope": 474,
            "src": "28:1235:1"
          }
        ],
        "src": "0:1263:1"
      },
      "compiler": {
        "name": "solc",
        "version": "0.4.24+commit.e67f0147.Emscripten.clang"
      },
      "networks": {},
      "schemaVersion": "2.0.1",
      "updatedAt": "2018-10-28T22:33:24.590Z"
    }

    constructor(){};
}