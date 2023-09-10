import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';

@Injectable()
export class ChatWebSocketService {
  constructor(private socket: Socket) {}

  sendMessage(msg: string) {
    console.log('sendMessage');
    this.socket.emit('events', { test: 'test' });
  }
  getMessage() {
    return this.socket.fromEvent('events').pipe(map((data: any) => data));
  }
}