import { Component, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { EtherModuleService } from '../ether-module.service';
import { WalletStateService } from '../wallet-state.service';
import { Coin } from '../coin';

@Component({
  selector: 'app-communities',
  templateUrl: './communities.component.html',
  styleUrls: ['./communities.component.scss']
})
export class CommunitiesComponent implements OnInit {
  coins: Coin[];
  haveCoin: boolean;
  accounts: string[];
  coinbase: string;
  currentWallet: string;

  // CommunityCoin登録用変数
  coinName: string;
  coinAddress: string;

  subscription: Subscription;

  constructor(
    private etherModuleService: EtherModuleService,
    private walletStateService: WalletStateService
  ) { }

  ngOnInit() {
    // this.getCommunities();
    // this._checkCoin();
    this.initWalletAddress();
    this.coinName = "SimpleCommunityCoin";
    this.coinAddress = "0xabc61b1859dd77c6c894e0549358370c79f242a1";
    this.registerCoin();
    this.etherModuleService.setCommunityCoin(this.coinAddress);
  }

  initWalletAddress(): void {
    // Walletアドレスを取得する
    let obj = this.walletStateService.getAccounts();
    for (let key in obj) {
      this.currentWallet = obj[key]
    }
  }

  getCommunities(): void {
    // wallet stateから登録されているコインを取得する
    let obj = this.walletStateService.getContracts()
    // 毎回初期化する.
    this.coins = [];
    for (let key in obj) {
      console.log(this.currentWallet + 'get balance of ' + obj[key]);
      this.etherModuleService.getTokenBalance(this.currentWallet).then(
        (value) => {
          this.coins.push(new Coin(key, obj[key], value));
          console.log('balanceOf: ' + value);
        }
      );
    } 
  }

  /**
   * register new community coin.
   */
  registerCoin(){
    console.log("[CommunitiesComponent]:register new coin to your wallet.");
    this.walletStateService.setNewCoin(this.coinName, this.coinAddress);
    // form initialize
    this.coinName = "";
    this.coinAddress = "";

    this._checkCoin();
  }

  /**
   * reflesh coin list
   */
  refleshList() {
    console.log("coins");
    console.dir(this.coins);

    for (let item in this.coins) {
      // console.log('in the loop!');
      // console.dir(this.coins[item].address);
      this.etherModuleService.setCommunityCoin(this.coins[item].address);
    }
    
    this._checkCoin();
  }

  /**
   * remove coin from app storage.
   * @param coin Coin object to delete
   */
  deleteCoin(coin:Coin) {
    this.walletStateService.removeContract(coin.name);
    console.log("[CommunitiesComponent]:"+coin.name+" is removed from app.");
    this._checkCoin();
  }

  /**
   * check if you have community coin
   * no params
   */
  private _checkCoin(){
    let obj = this.walletStateService.getContracts();
    let num = Object.keys(obj).length;
    if(num == 0) {
      this.haveCoin = false;
    } else {
      this.haveCoin = true;
      this._storeCoinList(obj);
      console.log("[CommunitiesComponent]:update coin list.")
    }
  }
  
  /**
   * store coin name/address into coins.
   * @param obj 
   */
  private _storeCoinList(obj) {
    // 毎回初期化する.
    this.coins = [];
    for (let key in obj) {
      this.getTokenBalance(this.currentWallet).then(
        (value) => {
          this.coins.push(new Coin(key, obj[key], value));
        }
      );  
    }
  }

  /**
   * get token balance
   */
  private getTokenBalance(address: string):Promise<number> {
    return this.etherModuleService.getTokenBalance(address);
  }
}
