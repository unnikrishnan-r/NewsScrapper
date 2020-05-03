$("#scrapeButton").click(function(event) {
  event.preventDefault();
  console.log("Clicked Scrape Button");
  // $.getJSON("/api/scrape", function(data) {
  //   // Call our function to generate a table body
  //   console.log(data);
  //   var bodyContent = response.match(/<body>(.*)<\/body>/)[1];
  //   $("body").html(bodyContent);
  //   // location.reload();
  // });

  $.ajax("/api/scrape", {
    type: "GET"
  }).then(function(response) {
    console.log("Scrape Succesful");
    console.log(response)
    // var bodyContent = response.match(/<body>(.*)<\/body>/)[1];
    // var bodyContent = response.replace(/^.*?<body[^>]*>(.*?)<\/body>.*?$/i,"$1");
    // console.log(bodyContent)
    // $("body").html(bodyContent);

    //   location.reload();
  });
});
