console.log ('hi!');

const printToDom = (domString, divId) => {
    document.getElementById(divId).innerHTML = domString;
};

const domString = (superheroesArray) => {
    let domString = "";
    superheroesArray.forEach((superheroes) =>{
        domString += `<div class="card">`;
        domString +=    `<h1>${superheroes.name}</h1>`;   
        domString += `</div>`;
    });
    printToDom (domString, 'superheroes-card');
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
