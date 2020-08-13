// does not start until document is ready
$(document).ready(function(event) {
  // when enter is hit in the search form function runs
  $("#searchForm").on("submit", function(event) {
    event.preventDefault();
    // stores the user's input
    var searchValue = $("#searchText").val();
    // creates our url used for api call
    var queryURL = "https://www.omdbapi.com/?t=" + searchValue +"&apikey=db8b059d";
    // calls the api
    $.ajax({
      url: queryURL,
      method: "GET"
      // if call is successful run this function
    }).then(function(response) {
      console.log(response);
      let movieTitle = response.Title;
      let movieYear = response.Year;
      let movieRuntime = response.Runtime;
      let movieDirector = response.Director;
      let movieActors = response.Actors;
      let moviePoster = response.Poster;
      let movieScore = response.Ratings[1].Value;
      console.log(movieTitle);
      console.log("Score: " + movieScore);
    }).catch(function(error) {
      console.log(error);
    })
  });
 })