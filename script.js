// does not start until document is ready
$(document).ready(function(event) {
  // when enter is hit in the search form function runs
  $("#searchForm").on("submit", function(event) {
    event.preventDefault();
    // stores the user's input
    var movie = $("#searchText").val();
    // creates our url used for api call
    var queryURL = "https://www.omdbapi.com/?s=" + movie + "&apikey=db8b059d";
    // calls the api
    $.ajax({
      url: queryURL,
      method: "GET"
      // if call is successful run this function
    }).then(function(response) {
      console.log(response);
      // if call is unsuccessful run this function
    }).catch(function(error) {
      console.log(error);
    })
  });
 })