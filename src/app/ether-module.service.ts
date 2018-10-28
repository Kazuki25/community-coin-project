import { Injectable, InjectionToken } from '@angular/core';
import Web3 from 'web3';
import { NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StaticInjector } from '@angular/core/src/di/injector';
import { ContractInfo } from "./contract/contract-abi";

declare let window: any;
@Injectable({
  providedIn: 'root'
})
export class EtherModuleService {
  private web3Provider;
  private token: ContractInfo;
  private contractObj;

  constructor() {
    if (typeof window.web3 !== 'undefined') {
      this.web3Provider = window.web3.currentProvider;
    } else {
      // Local provider
      this.web3Provider = new Web3.providers.HttpProvider("http://127.0.0.1:7545");

      // Ropsten Testnet
      // this.web3Provider = new Web3.providers.HttpProvider("http://coc0by-dns-reg1.japaneast.cloudapp.azure.com:8545");
    }

    window.web3 = new Web3(this.web3Provider);
    this.token = new ContractInfo();
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
    let transaction = {
      from: "0xeceC49e7056ed6d3700FD49C3C436940459EF1df",
      to: addr,
      value: window.web3.utils.unitMap.lovelace
    }
    return window.web3.eth.sendTransaction(transaction);
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
}
