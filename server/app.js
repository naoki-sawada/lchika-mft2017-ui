const config = require('config');
const httpPost = require('./lib/httpPost');
const SocketIO = require('./lib/SocketIO');
const socket = new SocketIO(config.socketServer);

socket.on('message', payload => {
  console.log(payload);

  const { type, options } = payload;
  switch (type) {
      case 'light':
      const { rgb } = options;
      console.log(rgb);
      httpPost.post(httpPost.optMake({
        address: config.light.address,
        data: {
          text: rgb,
          clientID: config.clientID,
        },
      }));
      break;

    case 'text':
      const { text } = options;
      httpPost.post(httpPost.optMake({
        address: config.text.address,
        data: {
          text: text,
          clientID: config.clientID,
        },
      }));
      break;

    case 'audio':
      const { bgm } = options;
      httpPost.post(httpPost.optMake({
        address: config.audio.address,
        data: {
          audio: bgm,
          clientID: config.clientID,
        },
      }));
      break;

    case 'camera':
      httpPost.post(httpPost.optMake({
        address: config.camera.address,
        data: {
          camera: '',
          clientID: config.clientID,
        },
      }))
      .then(res => {
        socket.send({ type: 'camera', payload: res })
      })
      .catch(e => {
        console.log(e);
      });
      break;

    case 'video':
      break;

    default:
      break;
  }
});
