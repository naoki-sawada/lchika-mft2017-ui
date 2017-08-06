const request = require('request');

const httpOptMake = ({ address, data }) => {
  return {
    uri: address,
    headers: {
      "Content-type": "application/json",
    },
    json: data,
  };
};

const httpPost = (options) => {
  return new Promise((resolve, reject) => {
    request.post(options, (error, response, body) => {
      if (error) {
        console.error(error);
        reject();
      } else {
        console.log(body);
        resolve(body);
      }
    });
  });
};

module.exports = {
  optMake: httpOptMake,
  post: httpPost,
};
