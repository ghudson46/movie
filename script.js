// does not start until document is ready
$(document).ready(function(event) {
  let movieContainer = '';
  // when enter is hit in the search form function runs
  $("#searchForm").on("submit", function(event) {
    event.preventDefault();
    // stores the user's input
    
    clearContainer();

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
      let moviePlot = response.Plot;
      let movieScore = response.Ratings[1].Value;
      let movieContainer = document.getElementById("movieContainer");
      let posterDiv = document.getElementById("movieImg");
      let titleDiv = document.getElementById("movieTitle");
      let dateDiv = document.getElementById("movieYear");
      let timeDiv = document.getElementById("movieTime");
      let directorDiv = document.getElementById("movieDirector");
      let castDiv = document.getElementById("movieCast");
      let plotDiv = document.getElementById("moviePlot");
      let scoreDiv = document.getElementById("movieScore");
      // let linebreak = document.createElement("br");
      
      posterDiv.innerHTML += "<img src='" + moviePoster + "'>";
      // movieContainer.appendChild(linebreak);
      titleDiv.innerHTML += "<h5 class='title'>" + movieTitle + "</h5>";
      // movieContainer.appendChild(linebreak);
      titleDiv.innerHTML += "<h5 class='year'>(" + movieYear + ")</h5>";
      // movieContainer.appendChild(linebreak);
      timeDiv.innerHTML += "<h5 class='time'>Run Time: " + movieRuntime + "</h5>";
      // movieContainer.appendChild(linebreak);
      directorDiv.innerHTML += "<h5 class='director'> Directed By: " + movieDirector + "</h5>";
      // movieContainer.appendChild(linebreak);
      castDiv.innerHTML += "<h5 class='actors'> Starring: " + movieActors + "</h5>";
      // movieContainer.appendChild(linebreak);
      plotDiv.innerHTML += "<h5 class='plot'>" + moviePlot + "</h5>";
      // movieContainer.appendChild(linebreak);
      scoreDiv.innerHTML += "<h5 id='score'>Score: " + movieScore + "</h5>";

      console.log(movieScore);
        
      let score = document.getElementById('score');
      if (movieScore == '100%' || movieScore == '99%' || movieScore == '98%' || movieScore == '97%' || movieScore == '96%' || movieScore == '95%' || movieScore == '94%' || movieScore == '93%' || movieScore == '92%' || movieScore == '91%' || movieScore == '90%') {
        score.classList.add("green");
      } else if (movieScore == '89%' || movieScore == '88%' || movieScore == '87%' || movieScore == '86%' || movieScore == '85%' || movieScore == '84%' || movieScore == '83%' || movieScore == '82%' || movieScore == '81%' || movieScore == '80%') {
        score.classList.add("yellow");
      } else if (movieScore == '79%' || movieScore == '78%' || movieScore == '77%' || movieScore == '76%' || movieScore == '75%' || movieScore == '74%' || movieScore == '73%' || movieScore == '72%' || movieScore == '71%' || movieScore == '70%') {
        score.classList.add("orange");
      } else {
        score.classList.add("red");
      }

    }).catch(function(error) {
      alert("We didn't recognize that movie. Please check your spelling and try again!");
      console.log(error);
    })
  });

  function clearContainer() {
    movieContainer.innerHTML = '';
  }
 })