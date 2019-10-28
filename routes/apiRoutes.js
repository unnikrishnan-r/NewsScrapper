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
          db.News.create(results)
            .then(insertedData => {
              console.log(`Inserted ${insertedData.length} rows`);
              db.News.find({})
                .then(selectedData => {
                  if (selectedData.length > 0) {
                    console.log("Selected Data Present" + selectedData.length);
                    // res.status(201).render("newstable", { newsItem: selectedData });
                    // res.render("nonews");
                    res.json("Hello")

                  } else {
                    console.log("No Data selected");
                    res.render("nonews");
                  }
                })
                .catch(error => console.error(error));
            })
            .catch(error => console.error(error));
        }
      });
    });
  });
};
