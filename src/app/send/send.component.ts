import { Component, OnInit } from '@angular/core';
import { EtherModuleService } from '../ether-module.service';
import { WalletStateService } from '../wallet-state.service';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.scss']
})
export class SendComponent implements OnInit {

  public sendto: string;
  public amount: number;

  constructor(
    private etherModuleService: EtherModuleService,
    private walletStateService: WalletStateService
  ) { }

  ngOnInit() {
    this.clearInput();
  }

  /**
   * コインを送る
   */
  public exec() {
    console.info('Exec: ' + this.amount + ' coins to address[' + this.sendto + '].');
    const privateKey = this.walletStateService.getPrivateKey();
    console.info('get private key: ' + privateKey);
    this.etherModuleService.sendCoin(privateKey, this.sendto, this.amount);
    this.clearInput();
  }

  /**
   * パラメータを初期化
   */
  private clearInput() {
    this.sendto = '';
    this.amount = 0;
  }
}
