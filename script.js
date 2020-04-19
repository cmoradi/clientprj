$("#searchButton").click(function(){
    const query = $("#searchBar").val();
    findMovies(query);
});


function findMovies(query){
    const url = `http://www.omdbapi.com/?apikey=8e9ded79&y=2016&s=${query}`
    fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data.Search);
            $("#results").empty();
            data.Search.forEach(function(movie){
                $("#results").append(`
                <div class="col-4">
                <div class="card" style="width: 18rem;">
                <img src="${movie.Poster}" class="card-img-top" alt="...">
                <div class="card-body">
                <h4 class="card-title">${movie.Title}</h4>
                <p class="card-text">Released: ${movie.Year}</p>
                </div>
                </div>
                </div>
                `)
            });
        })
}