/**---movie search --------*/
let key = "PAste API Here";
let search = document.getElementById("search");
search.addEventListener("keyup", (e)=>{
    if(e.keyCode === 13){
        var searchKey= e.target.value; //block scope
        SearchMovies(searchKey);
    }
});

//if you need async callback start with async keboard
async function SearchMovies(searchKey){
    let BASE_URL = `http://www.omdbapi.com/?s=${searchKey}&apikey=${key}`;
    
    try{
        let response = await window.fetch(BASE_URL);
        let movies = await response.json();
        let output =[];
        console.log(movies);
    
        for(let movie of movies.Search){
            let setDefaultPoster = movie.Poster === "N/A" ? "../images/download.png" : movie.Poster;
            output += `
                <div class= "card col-md-3 p-0 custom_card">
                <img src = "${setDefaultPoster}" class= "img-card-top" alt="${movie.Title} /">
                <div class="card-body">
                    <h4>${movie.Title}</h4>
                    <h4>${movie.Year}</h4>
                </div>
                </div>
            `;
        }
        document.getElementById("template").innerHTML = output;
    } catch(error){
        console.error(error);
    }
}
