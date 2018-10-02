import { Component, OnInit} from '@angular/core';
import { EtherModuleService } from '../ether-module.service';
import { IdbModuleService } from '../idb-module.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  password: string;
  addr: string;
  yourWallet: string;

  constructor(
    private etherModuleService: EtherModuleService,
    private idbModuleService: IdbModuleService
  ) {}

  ngOnInit(){
    this.xxx();
  }

  xxx(){
    console.log("OnInit fired!")
  }

  test(){
    console.log("(/ω＼)ｲﾔﾝ");
    this.etherModuleService.createAccount(this.password).then(
      // (result, error) => {
      //   this.idbModuleService.set('wallet', result),
      //   this.addr = result
      // }
      function(result) {
        this.idbModuleService.set('wallet', result);
        this.addr = result;
      }.bind(this)
    )
  }

  readWallet(){
    this.yourWallet = JSON.stringify(this.idbModuleService.get('wallet'));
  }

}
