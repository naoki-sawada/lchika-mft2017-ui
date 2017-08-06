module.exports = {
  clientID: 'EV001',
  socketServer: {
    nameSpace: '/mft2017',
    port: 3001,
  },
  light: {
    // address: 'http://localhost:5255/api/led',
    address: 'http://192.168.179.4:5255/api/led',
  },
  text: {
    address: 'http://localhost:5000/api',
  },
  audio: {
    address: 'http://localhost:5000/api/audio',
  },
  camera: {
    address: 'http://62bc725b.ngrok.io/api/cam',
  },
  video: {
    address: 'http://localhost:5000/api',
  },
};
