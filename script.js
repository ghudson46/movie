// does not start until document is ready
$(document).ready(function(event) {
  // when enter is hit in the search form function runs
  $("#searchForm").on("submit", function(event) {
    event.preventDefault();
    // stores the user's input
    var searchValue = $("#searchText").val();
    // creates our url used for api call
    var queryURL = "https://www.omdbapi.com/?s=" + searchValue + "&apikey=db8b059d";
    // calls the api
    $.ajax({
      url: queryURL,
      method: "GET"
      // if call is successful run this function
    }).then(function(response) {
      console.log(response);
      let movies = response.Search; // stores every movie that the search returns
      let output = ''; // leave it empty so we can add output dynamically

      // jquery each function loops through each item in the movies variable 
      $.each(movies, function(index, movie) {
        // output is dynamically added to HTML for each movie
        output += `
          <div class="col-md-3>
            <div class="well text-center">
              <img src="${movie.Poster}">
              <h5>${movie.Title}</h5>
              <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Movie Details</a>
            </div>
          </div>
        `;
      });
      // output is added as html into the div with ID movies
      $('#movies').html(output);
      // if call is unsuccessful run this function
    }).catch(function(error) {
      console.log(error);
    })
  });
 })