const forecast = require("./data/weather");

const [latitude, longitude] = process.argv[2];

forecast(latitude, longitude, (error, data) => {
    console.log("ERROR: ", error);
    console.log("DATA: ", data);
});