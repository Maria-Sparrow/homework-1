const wookiee = document.querySelector(".translate");
const getCharacters = document.querySelector(".open-characters");
const getListOfPlanets = document.querySelector(".planets");
const nextPage = document.querySelector(".nextPlanets");
const prevPage = document.querySelector(".prevPlanets");
const heroesContainer = document.querySelector(".heroes");

let baseURL = "https://swapi.dev/api/planets/";
const baseUrlFilm = "https://swapi.dev/api/films/";
const peopleURL = "https://swapi.dev/api/people/";

// async function getListOfAllPlanets(){
//     let fetchPlanets = await fetch(baseURL);
//     let getPlanets = await fetchPlanets.json();
//     let info = inner
// }

const characterImgURLS = {
  "Luke Skywalker":
    "https://i.pinimg.com/550x/70/62/f8/7062f8ace037f344cad1d568ea72cbbe.jpg",
};

async function getInfoAboutCharacters() {
  let charactersInfo = [];
  let filmInfo = await fetch(`${baseUrlFilm}2`)
    .then((data) => {
      return data.json();
    })

    let heroesInfo = await filmInfo.characters.map((characterURL) =>
     fetch(characterURL).then((value) => {
      charactersInfo.push(value.url);
      console.log(value);
      return value.url;
    })
  ); 
   return heroesInfo;
}

function displayCharacters() {
  let charactersInfo = getInfoAboutCharacters();
    console.log(charactersInfo,"charactersInfo")
  let data =
    charactersInfo.length &&
    charactersInfo.map(({ name, birth_year, gender }) => {
      `
            <div class="card">
            <img src="${
              characterImgURLS[name] ? characterImgURLS[name] : "no_img.jpg"
            }" alt="Avatar" style="width:100%">
            <div class="container">
              <h4><b>Name: ${name}</b></h4>
              <h4><b>Gender: ${gender}</b></h4>
              <h4><b>Birthday: ${birth_year}</b></h4>
            </div>
          </div>`;
    });
  heroesContainer.innerHTML = "data";
  console.log(data);
}

displayCharacters();

// for(let i = 0; i<parsedCharacters.characters.length; i++){
//     let infoAboutCharacter = fetch(parsedCharacters.characters[i]).then((value)=>{
//         return value.json();
//     });
//     arrayPromises.push(infoAboutCharacter);
// }

// Promise.all(
//     arrayPromises
// ).then((value)=>{
//     console.log(value)
//     let data = arrayPromises.map(({name, birth_year, gender}) =>{
//         `
//         <div class="card">
//         <img src="${chracterImgURLS[name] ? chracterImgURLS[name] : "no_img.jpg"}" alt="Avatar" style="width:100%">
//         <div class="container">
//           <h4><b>Name: ${name}</b></h4>
//           <h4><b>Gender: ${gender}</b></h4>
//           <h4><b>Birthday: ${birth_year}</b></h4>
//         </div>
//       </div>`
//     })
//     console.log(getCharacters.innerHTML= data.join());

// });
