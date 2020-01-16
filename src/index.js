const express = require("express"),
  cron = require('cron');
  // cron = require("node-cron");

const app = express();

let date = "Wed Jan 15 2020 13:53:54 GMT+0530 (India Standard Time)";

let endDate = "Thu Jan 16 2020 20:15:00 GMT+0530 (India Standard Time)";

function cronJ(i) {
  new cron.CronJob(
    `*/${i} * * * * *`, 
    function () {
      if(Date.parse(endDate) < Date.parse(Date())) {
        console.log('stopping');
        this.stop();
        return;
      }

      if(Date.parse(Date()) > Date.parse(date))
        console.log('hello', Date(), i)
    },
    () => {},
    true,
    'Asia/Kolkata'
  )
}

cronJ(1)
cronJ(2)

app.listen(8080);
