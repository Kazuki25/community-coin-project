export class Coin {
    name: string;
    address: string;
    balanceOf: number;

    constructor(_name:string, _address:string, _balanceOf:number) {
        this.name = _name;
        this.address = _address;
        this.balanceOf = _balanceOf;
    }
}