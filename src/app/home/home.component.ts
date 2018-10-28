import { Component, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { EtherModuleService } from '../ether-module.service';
import { IdbModuleService } from '../idb-module.service';
import { WalletStateService } from '../wallet-state.service';
import { Wallet } from "../wallet";

// プロトタイプ用
import { CommunityService } from '../community.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // Wallet作成用変数
  password: string;
  walletName: string;
  // Wallet登録用変数
  walletNameExist: string;
  address: string;

  // CommunityCoin登録用変数
  coinName: string;
  coinAddress: string;
  
  haveWallet = false;
  wallets: Wallet[];
  subscription: Subscription;

  // プロトタイプ用
  walletList: Wallet[];

  constructor(
    private etherModuleService: EtherModuleService,
    private idbModuleService: IdbModuleService,
    private walletStateService: WalletStateService,
    // プロトタイプ用
    private communityService: CommunityService
  ) {}

  ngOnInit(){ 
    this._checkWallet();

    // for prototype
    this.communityService.getWallets()
      .subscribe(wallets => this.walletList = wallets);
  }

  createWallet(){
    console.log("[homeComponent]:create your wallet.");
    this.walletStateService.createNewAccount(this.walletName, this.password);
    // form initialize
    this.walletName = "";
    this.password = "";
    this.subscription = this.walletStateService.accountCreated$.subscribe(
      (result) => {
        if(result === true){
          this._checkWallet();
        }
      }
    )
  }

  registerWallet(){
    console.log("[homeComponent]:register wallet.");
    this.walletStateService.setAccount(this.walletName, this.address);
    this._checkWallet();
  }

  /**
   * delete chosed wallet.
   * @param wallet wallet object to delete
   */
  deleteWallet(wallet:Wallet) {
    this.walletStateService.removeAccount(wallet.name);
    console.log("[HomeComponent]:"+wallet.name+" is removed from app.");
    this._checkWallet();
  }

  /**
   * get 1,000,0000 wei (= 1 lovelace)
   * @param wallet wallet object to recieve wai.
   */
  getWeis(wallet) {
    this.etherModuleService.get1lovelace(wallet.address).then(
      function(receipt) {
        this._checkWallet();
      }.bind(this)
    )
  }

  /**
   * reflesh wallet state.
   */
  reflesh(){
    this._checkWallet();
  }

  /**
   * only prototype
   * set wallet choosed
   * @param wallet
   */
  setWallet(wallet: Wallet) {
    this.walletStateService.setAccount(wallet.name, wallet.address);
    this._checkWallet();
  }

  /**
   * check if you have your wallet address
   * no params
   */
  private _checkWallet(){
    let obj = this.walletStateService.getAccounts();
    let num = Object.keys(obj).length;
    // console.log("You have "+num+" wallets.");
    if(num == 0) {
      this.haveWallet = false;
    } else {
      this.haveWallet = true;
      this._storeWallet(obj);
      console.log("[HomeComponent]:update wallets")
    }
  }

  /**
   * store account name/address/ether into wallets.
   * @param obj 
   */
  private _storeWallet(obj) {
    // 毎回初期化する.
    this.wallets = [];
    for (let key in obj) {
      this.etherModuleService.getBalance(obj[key]).then(
        function(result, error) {
          console.log("Having wei is "+result)
          this.wallets.push(new Wallet(key, obj[key],result));
        }.bind(this)
      )
    } 
  }

}
