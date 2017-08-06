const server = require('http').createServer();
const io = require('socket.io')(server);
const EventEmitter = require('events');

class SocketIO extends EventEmitter {
  constructor({ nameSpace, port }) {
    super();

    this.io = io;
    this.io = io.of(nameSpace);

    this.io.on('connection', client => {
      client.on('message', data => {
        this.emit('message', data);
      });

      client.on('extra', data => {
        this.emit('extra', data);
      });

      client.on('disconnect', () => {
        console.log('disconnect');
      });

      console.log('connected');
      this.emit('connection');
    });

    server.listen(port, () => {
      console.log(`server start: { port: ${port}, NameSpace: ${nameSpace} }`);
    });
  }

  send(text) {
    this.io.send(text);
  }

  ioemit(evt, cb) {
    this.io.emit(evt, cb);
  }
}

module.exports = SocketIO;
