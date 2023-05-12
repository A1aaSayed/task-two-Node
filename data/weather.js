const request = require('request');

const forecast = (latitude, longitude, callback) => {
     const url = 'https://api.weatherapi.com/v1/current.json?key=8095cf9840cb4643800180852231005&q=' +
     latitude + ',' + longitude;

request({ url, json: true }, (error, response) => { 
     if (error) {
          callback('Unable to connect weather service', undefined);
     } else if (response.body.error) {
          callback(response.body.error.message, undefined);
     } else {
          callback(
               undefined, response.body.location.country + ' The weather is: ' + response.body.current.condition.text
          );
     }
     });
};

module.exports = forecast;
