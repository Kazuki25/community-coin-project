import { Injectable } from '@angular/core';
import Web3 from 'web3';
import { Tx } from 'ethereumjs-tx';
import { ContractInfo } from "./contract/contract-abi";
import { Buffer } from 'buffer';


declare let window: any;
@Injectable({
  providedIn: 'root'
})
export class EtherModuleService {
  private web3Provider;
  private token: ContractInfo;
  private contractObj;

  private privateKey;
  private account;

  constructor() {
    if (typeof window.web3 !== 'undefined') {
      this.web3Provider = window.web3.currentProvider;
    } else {
      // Local provider
      // this.web3Provider = new Web3.providers.HttpProvider("http://127.0.0.1:7545");

      // Ropsten Testnet
      // this.web3Provider = new Web3.providers.HttpProvider("http://coc0by-dns-reg1.japaneast.cloudapp.azure.com:8545");
  
      // kovan Testnet through infura.io
      this.web3Provider = new Web3.providers.HttpProvider("https://kovan.infura.io/v3/7fff365433294ad089e4ce49ed9b24a5");
    }

    window.web3 = new Web3(this.web3Provider);
    this.token = new ContractInfo();

    // this.privateKey = "080A535BADB103F734F0C1581E1A2EA954A918D089BD752690C2E02F47E27C01";
    // this.account = window.web3.eth.accounts.privateKeyToAccount(this.privateKey);
  }

  /**
   * Create new wallet account.
   * @param password 
   */
  createAccount(password:string): Promise<string> {
    return window.web3.eth.personal.newAccount(password);
  }

  /**
   * get coinbase address.
   */
  getCoinBaseAddress():Promise<string> {
    return window.web3.eth.getCoinbase();
  }

  /**
   * get ether balance.
   * @param addr address to get balance info
   */
  getBalance(addr:string):Promise<number> {
    return window.web3.eth.getBalance(addr);
  }

  /**
   * get 1 lovelace.
   * @param addr address to recieve 1 lovelace.
   */
  get1lovelace(addr:string):Promise<object> {
    // let transaction = {
    //   from: "0xeceC49e7056ed6d3700FD49C3C436940459EF1df",
    //   to: addr,
    //   value: window.web3.utils.unitMap.lovelace
    // }
    // return window.web3.eth.sendTransaction(transaction);
    const parameter = {
      from: this.account.address,
      to: addEventListener,
      value: window.web3.utils.unitMap.lovelace,
      gasLimit: undefined,
      gasPrice: undefined,
      nonce: undefined
    };

    window.web3.eth.estimateGas(parameter)
      .then((gasLimit) => {
        // estimateGasを実行した瞬間とトランザクションを送信する瞬間で変化が
        // 起きるため、余裕を持っておく。
        parameter.gasLimit = window.web3.utils.toHex(gasLimit + 10000);
        return window.web3.eth.getGasPrice();
      })
      .then((gasPrice) => {
        parameter.gasPrice = window.web3.utils.toHex(gasPrice);
        return window.web3.eth.getGasPrice();
      })
      .then((count)=> {
        parameter.nonce = count;
        const transaction = new Tx(parameter);
        transaction.sign(Buffer.from(this.account.privateKey, 'hex'));
        return window.web3.eth.sendSignedTransaction('0x' + transaction.serialize().toString('hex'))
          .once('transactionHash', (hash) => {
            console.info('transactionHash', 'https://etherscan.io/tx/' + hash);
          })
          // .once('receipt', (receipt) => {
          //   console.info('receipt', receipt);
          // })
          // .on('confirmation', (confirmationNumber, receipt) => {
          //   console.info('confirmation', confirmationNumber, receipt);
          // })
          // .on('error', console.error);
      })
      // .catch(console.error);
  }

  /**
   * get account
   */
  getAccounts():Promise<string[]> {
    console.log("[ehter-module] Get accounts");
    return window.web3.eth.getAccounts();
  }; 

  setCommunityCoin() {
    console.log(this.token.simpleCommunityCoinInfo)
    this.contractObj = new window.web3.eth.Contract(this.token.simpleCommunityCoinInfo.abi, "0xabc61b1859dd77c6c894e0549358370c79f242a1");
    console.log(this.contractObj.options);
  }

  /**
   * set contract object.
   * @param _addr
   */
  switchCoin(_addr:string):void {
    this.contractObj = new window.web3.eth.Contract(this.token.simpleCommunityCoinInfo, _addr);
  }
  
  /**
   * Get community coin balance.Not ether.
   * @param walletAddress 
   */
  getTokenBalance(walletAddress:string): number{
    let balance = 0;
    // 引数にウォレットのアドレスを渡して、balanceOf 関数を呼ぶ
    this.contractObj.balanceOf(walletAddress, (error, result) => {
      balance = result;
      // console.log(balance.toString());
    });
    return balance;
  }

  /**
   * generate account from privatekey.
   * @param externalPrivateKey
   */
  setWalletFromPrivateKey(externalPrivateKey: string): string {
    // const key = Buffer.from(externalPrivateKey, 'hex');
    const key = '0x' + externalPrivateKey;
    this.account = window.web3.eth.accounts.privateKeyToAccount(key);
    console.dir(this.account);
    return this.account.address;
  }
}
