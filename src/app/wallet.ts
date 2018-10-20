export class Wallet {
    name: string;
    address: string;
    wei: number;

    constructor(_name:string, _address:string, _wei:number) {
        this.name = _name;
        this.address = _address;
        this.wei = _wei;
    }
}