import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdbModuleService {

    constructor() {}

    set(key, val):void {
      localStorage.setItem(key, JSON.stringify(val));
    }

    get(key):object {
      return JSON.parse(localStorage.getItem(key));
    }

    remove(key):void {
      localStorage.removeItem(key);
    }

    initiate():void {
      localStorage.clear();
    }


}
