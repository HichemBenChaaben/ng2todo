import { Injectable } from '@angular/core';

@Injectable()
export class LocalstorageService {

  constructor() {}

  getData(key) {
    return localStorage.getItem(key) ? localStorage.getItem(key).split(','): [];
  }

  setData(key, data) {
    let serialised = JSON.stringify(data);
    localStorage.setItem(key, data);
  }
}
