var axios = require("axios");
var db = require("../models");
var mongoose = require("mongoose");
var cheerio = require("cheerio");
var Handlebars = require("handlebars");
Handlebars.registerHelper("inc", function(value, options) {
  return parseInt(value) + 1;
});
module.exports = function(app) {
  // Route 2
  // =======
  // When you visit this route, the server will
  // scrape data from the site of your choice, and save it to
  // MongoDB.
  app.get("/api/scrape", function(req, res) {
    // An empty array to save the data that we'll scrape\
    console.log("Scrape API");
    var results = [];
    var count = 0;
    // res.render("scrappednews")
    axios.get("https://www.insauga.com/news").then(function(response) {
      console.log("got axios back");
      var $ = cheerio.load(response.data);
      $(".view-content table td").each(function(i, element) {
        var title = $(element)
          .find(".views-field-title a")
          .text();
        var link = $(element)
          .find(".views-field-title a")
          .attr("href");
        var image = $(element)
          .find("img")
          .attr("src");
        //     //     // Save these results in an object that we'll push into the results array we defined earlier
        results.push({
          title: title,
          link: "https://www.insauga.com" + link,
          image: image
        });
        count++;
        if (count == 7) {
          console.log("Hit 7");
          // res.json(results)
          res.json(results);
          // db.News.create(results)
          //   .then(insertedData => {
          //     console.log(`Inserted ${insertedData.length} rows`);
          //     res.json(insertedData)
          //   })
          //   .catch(error => console.error(error));
        }
      });
    });
    res.sendStatus(200);
  });

};
