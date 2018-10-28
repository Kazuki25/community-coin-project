import { Component, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { CommunityService } from '../community.service';
import { EtherModuleService } from '../ether-module.service';
import { IdbModuleService } from '../idb-module.service';
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
    private communityService: CommunityService,
    private etherModuleService: EtherModuleService,
    private idbModuleService: IdbModuleService,
    private walletStateService: WalletStateService
  ) { }

  ngOnInit() {
    // this.getCommunities();
    // this._checkCoin();
    this.initWalletAddress();
    this.coinName = "SimpleCommunityCoin";
    this.coinAddress = "0xabc61b1859dd77c6c894e0549358370c79f242a1";
    this.registerCoin();
    this.etherModuleService.setCommunityCoin();
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
      let value = this.etherModuleService.getTokenBalance(this.currentWallet);
      this.coins.push(new Coin(key, obj[key], value));
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
    // this.subscription = this.walletStateService.coinRegistered$.subscribe(
    //   (result) => {
    //     if(result === true){
    //       // this._checkCoin();
    //     }
    //   }
    // )
    this._checkCoin();
  }

  /**
   * reflesh coin list
   */
  refleshList() {
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
      let value = this.getTokenBalance(this.currentWallet);
      this.coins.push(new Coin(key, obj[key], value));
    }
  }

  /**
   * get token balance
   */
  private getTokenBalance(address: string):number {
    return this.etherModuleService.getTokenBalance(this.currentWallet);
  }
}
