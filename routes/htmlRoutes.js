const axios = require("axios");
// const dbFunctions = require("./dbFunctions");
var db = require("../models");

module.exports = function(app) {
  app.get("/", function(req, res) {
    console.log("Landing Page")
    db.News.find({})
      .then(selectedData => {
        if (selectedData.length > 0) {
          console.log("Selected Data Present" + selectedData.length);
          res.render("newstable", { newsItem: selectedData });

        } else {
          console.log("No Data selected");
          res.render("nonews");
        }
      })
      .catch(error => console.error(error));
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.status(404).render("404");
  });
};
