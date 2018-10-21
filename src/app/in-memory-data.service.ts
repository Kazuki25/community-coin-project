import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const wallets = [
      { name: 'coinbase', address: '0xeceC49e7056ed6d3700FD49C3C436940459EF1df', wei: 0},
      { name: 'カワウソ', address: '0x8861561752c71edAde8Bbd10F02c9E6059D66F03', wei: 0},
      { name: 'コウテイペンギン', address: '0xF047e99A124f5aA2e9733526a3B4A75E000A56CF', wei: 0},
      { name: 'バンドウイルカ', address: '0x34C4e847C2D827632e21CD7A6A6097aDD676d9a2', wei: 0},
      { name: 'シャチ', address: '0xe0ee6F27373F30098b38A453501037133E6E1b6d', wei: 0},
      { name: 'オットセイ', address: '0x3Ca4d02e9B35bcFdAD45bd1E1C65C243fBe012A3', wei: 0},
      { name: 'カピバラ', address: '0x6B2CF84207a1067803412C931b25a7ddaDb77480', wei: 0},
      { name: 'チンアナゴ', address: '0x2e959c2b949B9bc8f67206E6F5549053c8d3627F', wei: 0},
      { name: 'ミズクラゲ', address: '0xb7841064B0764DFB00c735369c9AF713d137A7e2', wei: 0},
      { name: 'イワシ', address: '0x456cA7452D08E14AcB2Ab08832420440c5f862bC', wei: 0}
    ]
    return {wallets};
  }
}