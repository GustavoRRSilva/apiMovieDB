fetch(
  "https://api.themoviedb.org/3/movie/popular?api_key=506fadb0256c13349acc05dabebf9604&language=en-US&page=1",
  {
    method: "GET",
  }
)
  .then((response) => response.json())
  .then(function (json) {
    var container = document.querySelector(".container");
    console.log(json.results[0]);
    json.results.map(function (val) {
      container.innerHTML += `
      <div class = "tituloFilme"> ${val.title} <img src = "https://cdn-icons-png.flaticon.com/512/271/271228.png" alt = "" class = "seta">
        <p class = "description" style = "display:none;">${val.overview}</p>
        </div>
        `;
    });

    let titulos = document.querySelectorAll(".tituloFilme");
    titulos.forEach(element => {
     
        element.addEventListener("click",()=>{
            if(element.querySelector('.description').style.display =="block"){
                element.querySelector('.description').style.display = "none"
                element.querySelector(".seta").style.rotate = "90deg";
            }
            else{
                element.querySelector('.description').style.display = "block"
                element.querySelector(".seta").style.rotate = "0deg";
            }
        })
    });
  });


  