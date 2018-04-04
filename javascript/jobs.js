console.log ('hi!');


const printToDom = (domString, divId) => {
    document.getElementById(divId).innerHTML = domString;
};

const domString = (superheroesArray) => {
    let domString = "";
    superheroesArray.forEach((superheroes) =>{
        //domString +=    `<h1></h1>`;  
        
        domString += `<li>`;
        domString += `<a class="hero-name" = data-hero-id="${superheroes.id}">${superheroes.name}</a>`;
        domString +=  `</li>`;
        
    });
    printToDom (domString, 'awesome-dropdown');
};

//for the second bullet point - on the ticket
const selectHero = (e) => {
    console.log ("clicked a hero", e);
    console.log ('go!'); // just to try console is working

    selectedHero = e.target.dataset.heroId;
    genericHeroRequest(loadFilesForSingleHero);
    document.getElementById('awesome-button').classList.add('hide');
}

// event listner function
const addheroSelectionEventlistners = () =>{
    const heroNames = document.getElementsByClassName('hero-name');
    for (let i = 0; i < heroNames.length; i++){
        heroNames[i].addEventListener('click', selectHero)
    }
};

// const displaySuperhero = (superheroesArray) => {
//     let domString ="";
//     superheroesArray.forEach((superheroes) =>{
//       if(superheroes.id === selectedHero) {
//          domString += `<h2>Selected Hero: ${superheroes.name}</h2>`;
//     })

// }

const displaySuperhero = superheroesArray=> {
    let domString = "";
    superheroesArray.forEach((superheroes) => {
      if (superheroes.id === selectedHero) {
        domString += `<div class="row">`;
        domString += `<div class="col-sm-4">`;
        if (superheroes.gender === "Male") {
          domString += `<img class="charImage maleImage" src="${superheroes.image}">`;
        } else {
          domString += `<img class="charImage femaleImage" src="${superheroes.image}">`;
        }
        domString += `</div>`;
        domString += `<div class="col-sm-6">`;
        domString += `<h2>Selected Hero: ${superheroes.name}</h2>`;
        domString +=     `<p class='charDescription'>${superheroes.description}</p>`;
        domString += `</div>`;
      }
    });
    printToDom(domString, "selected-heroes");
  };


function loadFilesForSingleHero () {
    const data = JSON.parse(this.responseText);
    console.log ("data",data);
    displaySuperhero (data.superheroes);
}


function executeThisFunctionAfterFileLoads () {
    const data = JSON.parse(this.responseText);
    console.log ("data",data);
    domString (data.superheroes);
    addheroSelectionEventlistners();
}

function WIW () {
    console.log("something went wrong");
}

const genericHeroRequest = (successFunction) =>{
    let myRequest = new XMLHttpRequest ();
    myRequest.addEventListener("load",successFunction);
    myRequest.addEventListener("error",WIW);
    myRequest.open("GET","/db/superheroes.json");
    myRequest.send();
   
}

const startApplication = () =>{
    genericHeroRequest(executeThisFunctionAfterFileLoads);
 };

 startApplication();

