import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppserService {

  constructor() { }

  title = new EventEmitter();
  login = new EventEmitter();

  setvalue(){
    this.title.emit('');
    this.login.emit('login');
  }

}
