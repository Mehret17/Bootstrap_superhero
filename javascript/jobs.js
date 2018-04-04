console.log ('hi!');
console.log ('hi!');

const printToDom = (domString, divId) => {
    document.getElementById(divId).innerHTML = domString;
};

const domString = (superheroesArray) => {
    let domString = "";
    superheroesArray.forEach((superheroes) =>{
        //domString +=    `<h1></h1>`;  
        
        domString += `<li>`;
        domString += `<a href ='#' data-hero-id="${superheroes.id}">${superheroes.name}</a>`;
        domString +=  `</li>`;
        
    });
    printToDom (domString, 'awesome-dropdown');
};

function executeThisFunctionAfterFileLoads () {
    const data = JSON.parse(this.responseText);
    console.log ("data",data);
    domString (data.superheroes);
}

function WIW () {
    console.log("something went wrong");
}

const startApplication = () => {
    let myRequest = new XMLHttpRequest ();
    myRequest.addEventListener("load",executeThisFunctionAfterFileLoads);
    myRequest.addEventListener("error",WIW);
    myRequest.open("GET","/db/superheroes.json");
    myRequest.send();
    console.log ("myrequest", myRequest);
}

startApplication ();
