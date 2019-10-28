var db = require("../models");
var mongoose = require("mongoose");

module.exports = {
  selectAll: () => {
    console.log("Called Select All");
    return new Promise(function(resolve, reject) {
      db.News.find({})
        .then(fetchedData => {
          resolve(fetchedData);
        })
        .catch(function(error) {
          //error handling
          reject(error);
        });
    });
  },
  createNew: dataToInsert => {
    return new Promise(function(resolve, reject) {
      db.News.create(dataToInsert)
        .then(insertedData => {
          resolve(insertedData);
        })
        .catch(err => {
          reject(error);
        });
    });
  }
};
