import { Injectable } from '@angular/core';
import Web3 from 'web3';
import EthereumTx from 'ethereumjs-tx';
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

  private admin;

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
    this.admin = window.web3.eth.accounts.privateKeyToAccount(
      '0x' + '080A535BADB103F734F0C1581E1A2EA954A918D089BD752690C2E02F47E27C01'
    );
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
    console.dir(this.admin);
    const parameter = {
      from: this.admin.address,
      to: addr,
      value: window.web3.utils.unitMap.lovelace,
      gasLimit: undefined,
      gasPrice: undefined,
      nonce: undefined
    };

    return window.web3.eth.estimateGas(parameter)
      .then((gasLimit) => {
        // estimateGasを実行した瞬間とトランザクションを送信する瞬間で変化が
        // 起きるため、余裕を持っておく。
        parameter.gasLimit = window.web3.utils.toHex(gasLimit + 10000);
        console.info("first step")
        console.dir(parameter);
        return window.web3.eth.getGasPrice();
      })
      .then((gasPrice) => {
        parameter.gasPrice = window.web3.utils.toHex(gasPrice);
        console.info("send step")
        console.dir(parameter);
        return window.web3.eth.getGasPrice();
      })
      .then((count)=> {
        parameter.nonce = count;
        console.info("third step")
        console.dir(parameter);
        const transaction = new EthereumTx(parameter);
        // 管理者アカウントのプライベートキーで署名する: そのままだとエラーとなるので、'0x'を除く.
        transaction.sign(Buffer.from(this.admin.privateKey.slice(2),'hex'));
        window.web3.eth.sendSignedTransaction('0x' + transaction.serialize().toString('hex'))
          .once('transactionHash', (hash) => {
            console.info('transactionHash', 'https://kovan.etherscan.io/tx/' + hash);
          })
          .once('receipt', (receipt) => {
            console.info('receipt', receipt);
          })
          .on('confirmation', (confirmationNumber, receipt) => {
            console.info('confirmation', confirmationNumber, receipt);
          })
          .on('error', console.error);
      })
      .catch(console.error);
  }

  /**
   * send ether
   * @param _to address to recieve ether
   */
  sendEther(_from: string, _to: string) {
    const parameter = {
      from: _from,
      to: _to,
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
        console.info("first step")
        console.dir(parameter);
        return window.web3.eth.getGasPrice();
      })
      .then((gasPrice) => {
        parameter.gasPrice = window.web3.utils.toHex(gasPrice);
        console.info("second step")
        console.dir(parameter);
        return window.web3.eth.getGasPrice();
      })
      .then((count)=> {
        parameter.nonce = count;
        console.info("third step")
        console.dir(parameter);
        const transaction = new EthereumTx(parameter);
        // 管理者アカウントのプライベートキーで署名する: そのままだとエラーとなるので、'0x'を除く.
        transaction.sign(Buffer.from(this.admin.privateKey.slice(2),'hex'));
        window.web3.eth.sendSignedTransaction('0x' + transaction.serialize().toString('hex'))
          .once('transactionHash', (hash) => {
            console.info('transactionHash', 'https://kovan.etherscan.io/tx/' + hash);
          })
          .once('receipt', (receipt) => {
            console.info('receipt', receipt);
          })
          .on('confirmation', (confirmationNumber, receipt) => {
            console.info('confirmation', confirmationNumber, receipt);
          })
          .on('error', console.error);
      })
      .catch(console.error);
  }  


  /**
   * get account
   */
  getAccounts():Promise<string[]> {
    console.log("[ehter-module] Get accounts");
    return window.web3.eth.getAccounts();
  }; 

  setCommunityCoin(_addr: string) {
    // console.log(this.token.simpleCommunityCoinInfo)
    this.contractObj = new window.web3.eth.Contract(this.token.simpleCommunityCoinInfo.abi, _addr);
    // console.log(this.contractObj.options);
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
  getTokenBalance(walletAddress:string): Promise<number>{
    // コントラクトを実行し、トークン残高を取得する.
    return this.contractObj.methods.balanceOf(walletAddress).call();
  }

  /**
   * generate account from privatekey.
   * @param externalPrivateKey
   */
  setWalletFromPrivateKey(externalPrivateKey: string): string {
    // const key = Buffer.from(externalPrivateKey, 'hex');
    const key = '0x' + externalPrivateKey;
    let account = window.web3.eth.accounts.privateKeyToAccount(key);
    // console.dir(account);
    return account.address;
  }
}
