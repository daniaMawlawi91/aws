'use strict';

module.exports.hello = async (event, context, callback) => {
  let message = 'Hello World';
  const name = event.queryStringParameters && event.queryStringParameters.name;
  if (name !== null) {
    message = 'Hello ' + name;

  }
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: message,
      input: event,
    }),
  };
  callback(null, response);
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
