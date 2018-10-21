import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IdbModuleService } from './idb-module.service';
import { EtherModuleService } from './ether-module.service';

@Injectable({
  providedIn: 'root'
})
export class WalletStateService {
  private wallet;
  private registerkey = 'wallet';

  // Observable sources
  private accountCreatedSource = new Subject<boolean>();
  private coinRegisteredSource = new Subject<boolean>();

  // Observable streams
  accountCreated$ = this.accountCreatedSource.asObservable();
  coinRegistered$ = this.coinRegisteredSource.asObservable();

  constructor(
    private idbModuleService: IdbModuleService,
    private etherModuleService: EtherModuleService
  ) {
    let localWallet = this.idbModuleService.get(this.registerkey);
    if(localWallet===null) {
      // create new wallet data.
      this.wallet = { "Accounts":{},"Contracts":{}};
      this.idbModuleService.set(this.registerkey, this.wallet);
      console.log("[walletStateService]:You didn't have wallet. I created your wallet.")
    } else {
      // read wallet data.
      this.wallet = localWallet;
      console.log("[walletStateService]:You have your wallet. I use it");
    }
  }

  /**
   * save wallet data on localstorage.
   * no params
   */
  saveState(): boolean {
    this.idbModuleService.set(this.registerkey, this.wallet);
    console.log('[walletStateService]:save current wallet state.');
    return true;
  }

  /**
   * get own wallet addresses.
   * no params
   */
  getAccounts() {
    return this.wallet.Accounts;
  }

  /**
   * get community coin contracts.
   * no params
   */
  getContracts() {
    return this.wallet.Contracts;
  }

  /**
   * set new Wallet with name.
   * @param _name wallet name
   * @param _passward wallet password
   * @return exec result(true/excption)
   */
  createNewAccount(_name:string, _password:string) {
    this.etherModuleService.createAccount(_password).then(
      function(result, error) {
        this.wallet.Accounts[_name] = result;
        this.saveState();
        this.accountCreatedSource.next(true);
        console.log("[WalletStateService]:Complete to create new account!");
      }.bind(this)
    )
  }

  /**
   * remove a wallet data from app storage.(Not blockchain!)
   * @param _name wallet name
   */
  removeAccount(_name:string) {
    delete this.wallet.Accounts[_name];
    console.log("[WalletStateService]:Complete to delete the wallet<"+_name+"> from app.");
    this.saveState();
  }

  /**
   * set new account *this method is only called in prototype
   * @param _name 
   * @param _addr 
   */
  setAccount(_name: string, _addr: string) {
    this.wallet.Accounts[_name] = _addr;
    this.saveState();
    console.log("[WalletStateService]:Set account you choosed!")
  }
  /**
   * remove a contract data from app storage.(Not blockchain!)
   * @param _name contract name
   */
  removeContract(_name:string) {
    delete this.wallet.Contracts[_name];
    console.log("[WalletStateService]:Complete to delete the coin<"+_name+"> from app.");
    this.saveState();
  }

  /**
   * set new CommunityCoin contract with name.
   * @param _name coin name
   * @param _addr contract address
   * @return exec result(true/excption)
   */
  setNewCoin(_name:string, _addr:string) {
    this.wallet.Contracts[_name] = _addr;
    // TODO: add communication to block chain.
    // TODO close
    this.saveState();
    this.coinRegisteredSource.next(true);
    console.log("[WalletStateService]:Complete to register new coin!");
  }
}
