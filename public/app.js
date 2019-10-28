
$("#scrapeButton").click(function() {
    // $( "#results tbody" ).empty();
    event.preventDefault();
    console.log("Clicked Scrape Button")
    $.getJSON("/api/scrape", function(data) {
      // Call our function to generate a table body
      console.log(data)
      location.reload();
    });
    
  });
  
  // $("#clear-news").click(function() {
  //   $( "#results tbody" ).empty();
  //   $.getJSON("/name", function(data) {
  //     // Call our function to generate a table body
  //     // displayResults(data);
  //   });
    
  // });
  
  // We'll be rewriting the table's data frequently, so let's make our code more DRY
  // by writing a function that takes in data (JSON) and creates a table body
  // function displayResults(data) {
  //   // Add to the table here...
  //   // console.log(data);
  //   data.forEach(element => {
  //     $("#results")
  //       .find("tbody")
  //       .append($("<tr>")
  //       .append($("<td>").append($("<h5>").text(element.title)))
  //       .append($("<td>").append($("<a>", {href:element.link,text:element.link})))
  //       .append($("<td>").append($('<img>',{src:element.image, class:"news-image"})))
  //       );
  //   });
  // }
  
  // $.getJSON("/all", function(data) {
  //   console.log("Invoking all route")
  //   console.log(data)
  //   // Call our function to generate a table body
  //   displayResults(data);
  // });
  