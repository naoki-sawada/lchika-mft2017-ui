import io from 'socket.io-client';
import conf from 'conf';

export default class Socket {
  constructor() {
    this.socket = io(conf.server.address);
    this.socket.on('connect', socket => {
      console.log('socket coneccted!');
    });
    // this.socket.on('disconn', socket => {
    //   console.log('socket coneccted!');
    // });
  }

  send(text) {
    this.socket.send(text);
  }

  emit(event, payload) {
    this.socket.emit(event, payload);
  }
}
