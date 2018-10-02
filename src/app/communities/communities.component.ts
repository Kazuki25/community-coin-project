import { Component, OnInit } from '@angular/core';
import { Community } from '../community';
import { CommunityService } from '../community.service';
import { EtherModuleService } from '../ether-module.service';
import { IdbModuleService } from '../idb-module.service';

@Component({
  selector: 'app-communities',
  templateUrl: './communities.component.html',
  styleUrls: ['./communities.component.scss']
})
export class CommunitiesComponent implements OnInit {
  communities: Community[];
  accounts: string[];
  coinbase: String;
  addr: string;

  constructor(
    private communityService: CommunityService,
    private etherModuleService: EtherModuleService,
    private idbModuleService: IdbModuleService
  ) { }

  ngOnInit() {
    this.getCommunities();
    this.getEtherAccounts();
    this.getCoinBaseAddress();
    this.getBalance();
    this.testidb();
  }

  getCommunities(): void {
    this.communityService.getCommunities()
        .subscribe(communities => this.communities = communities);
  }

  getCoinBaseAddress(): void {
    this.etherModuleService.getCoinBaseAddress().then(
      // (result, error) => {
      //   this.coinbase = result;
      // };
      function(result) {
        this.coinbase = result;
      }.bind(this)
    )
  }

  getEtherAccounts(): void {
    this.accounts = this.etherModuleService.getAccounts();
    console.log(this.accounts);
  }

  getBalance():void {
    let accounts = this.accounts;
    let contractAddress = "0x3b66b335fa28c1d2a391d23db872e041a9024443";
    for(var i=0; i<accounts.length; i++){
      console.log("Account:",accounts[i]," => ",this.etherModuleService.getTokenBalance(contractAddress,accounts[i]));
      // this.etherModuleService.getTokenBalance(accounts[i],console.log);
    }
    
  }

  testidb():void {
    let user = { firstName: 'Henri', lastName: 'Bergson' };
    let array = { suji: [1,2,3,4,5] };

    this.idbModuleService.set('user', user);
    this.idbModuleService.set('hairetsu', array);
    let result = this.idbModuleService.get('user');
    console.log(result['firstName']);
    console.log(result['lastName'])

    console.log(this.idbModuleService.get('hairetsu')['suji']);

    console.log('[Eth-Module]: create account')
    this.etherModuleService.createAccount('password').then(
      // (result, error) => {
      //   this.addr = result;
      // };
      function(result) {
        this.addr = result;
      }.bind(this)
    )
  }



}
