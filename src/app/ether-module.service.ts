import { Injectable, InjectionToken } from '@angular/core';
import Web3 from 'web3';
import { NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StaticInjector } from '@angular/core/src/di/injector';
declare let window: any;
@Injectable({
  providedIn: 'root'
})
export class EtherModuleService {
  private web3Provider;

  constructor() {
    if (typeof window.web3 !== 'undefined') {
      this.web3Provider = window.web3.currentProvider;
    } else {
      this.web3Provider = new Web3.providers.HttpProvider("http://127.0.0.1:7545");
    }

    window.web3 = new Web3(this.web3Provider);
  }

  createAccount(password:string) {
    window.web3.eth.newAccount(password).then(function(e){
      console.log(e);
    });
  }

  getCoinBaseAddress():String {
    // console.log(window.web3);
    console.log(window.web3.net.listening)
    return window.web3.coinbase;
  }

  getAccounts():string[] {
    console.log("[ehter-module] Get accounts");
    return window.web3.eth.accounts;
  };   
  
  getTokenBalance(tokenAddress, walletAddress): number{
    let balance = 0;
    let minABI = [
      // balanceOf
      {
        "constant":true,
        "inputs":[{"name":"_owner","type":"address"}],
        "name":"balanceOf",
        "outputs":[{"name":"balance","type":"uint256"}],
        "type":"function"
      },
      // decimals
      {
        "constant":true,
        "inputs":[],
        "name":"decimals",
        "outputs":[{"name":"","type":"uint8"}],
        "type":"function"
      }
    ];

    //  ABI とコントラクト（ERC20トークン）のアドレスから、コントラクトのインスタンスを取得 
    let contract = window.web3.eth.contract(minABI).at(tokenAddress);
    // 引数にウォレットのアドレスを渡して、balanceOf 関数を呼ぶ
    contract.balanceOf(walletAddress, (error, balance) => {
      // ERC20トークンの decimals を取得
      contract.decimals((error, decimals) => {
        // 残高を計算
        // balance = balance/(10**decimals);
        console.log(balance.toString());
      });
    });
    return balance;
  }
}
