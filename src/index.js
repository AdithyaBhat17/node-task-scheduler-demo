const express = require("express"),
  cron = require("node-cron");

const app = express();

let date = "Wed Jan 15 2020 13:53:54 GMT+0530 (India Standard Time)";

let endDate = "Wed Jan 15 2021 14:06:00 GMT+0530 (India Standard Time)";

// run a task every 5 seconds till the end date specified.
let task = cron.schedule(
  "*/5 * * * * *",
  () => {
    console.log("hello", new Date());
    if (Date.parse(new Date()) > Date.parse(endDate)) {
      console.log("stopping", new Date());
      task.stop();
    }
  },
  {
    scheduled: false
  }
);

// start the task if the current date is within the start_date and end_date
if (
  Date.parse(new Date()) > Date.parse(date) &&
  Date.parse(new Date()) < Date.parse(endDate)
)
  task.start();

app.listen(8080);
