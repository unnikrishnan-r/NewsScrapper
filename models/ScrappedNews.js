var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new ScrapppedNews object
// This is similar to a Sequelize model
var ScrapppedNewsSchema = new Schema({
  postedDate: Date,
  title: String,
  link: String,
  image: String,
});

// This creates our model from the above schema, using mongoose's model method
var ScrapppedNews = mongoose.model("ScrapppedNews", ScrapppedNewsSchema);

// Export the ScrapppedNews model
module.exports = ScrapppedNews;
