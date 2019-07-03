const axios = require("axios");
const request = require("request");
const http = require("http");
const cheerio = require("cheerio");
const url =
  "https://www.premierleague.com/stats/top/players/goals?se=-1&cl=-1&iso=-1&po=-1?se=-1";

axios(url)
  .then(response => {
    const html = response.data;
    const $ = cheerio.load(html);
    const statsTable = $(".statsTableContainer > tr");
    console.log(statsTable);
  })
  .catch(console.error);
//https://thawing-bayou-32780.herokuapp.com/nature
var server = http.createServer(function(request, response) {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Hello World\n");
  console.log("hhheheh");
});
server.listen(7000);
