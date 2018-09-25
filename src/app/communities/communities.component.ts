import { Component, OnInit } from '@angular/core';
import { Community } from '../community';
import { CommunityService } from '../community.service';
import { EtherModuleService } from '../ether-module.service';

@Component({
  selector: 'app-communities',
  templateUrl: './communities.component.html',
  styleUrls: ['./communities.component.scss']
})
export class CommunitiesComponent implements OnInit {
  communities: Community[];
  accounts: string[];
  coinbase: String;

  constructor(
    private communityService: CommunityService,
    private etherModuleService: EtherModuleService
  ) { }

  ngOnInit() {
    this.getCommunities();
    this.getEtherAccounts();
    this.getCoinBaseAddress();
    this.getBalance();
  }

  getCommunities(): void {
    this.communityService.getCommunities()
        .subscribe(communities => this.communities = communities);
  }

  getCoinBaseAddress(): void {
    this.coinbase = this.etherModuleService.getCoinBaseAddress();
  }

  getEtherAccounts(): void {
    this.accounts = this.etherModuleService.getAccounts();
    console.log(this.accounts);
  }

  getBalance():void {
    this.etherModuleService.getTokenBalance();
  }



}
