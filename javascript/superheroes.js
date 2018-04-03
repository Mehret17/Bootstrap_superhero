console.log ('hi!');

const printToDom = (domString, divId) => {
    document.getElementById(divId).innerHTML = domString;
};

const domString = (superheroesArray) => {
    let domString = "";
    superheroesArray.forEach((superheroes) =>{
        //domString +=    `<h1></h1>`;  
        
        domString += `<div class ="col-sm-3">`; 
        domString += `<div class="panel panel-default">`;
        domString +=   `<div class="panel-heading">`;
        domString +=     `<h3 class="panel-title">${superheroes.name}</h3>`;
        domString += `</div>`;
        domString += `<div class="panel-body">`;
        if (superheroes.gender==="Male"){
            domString +=    `<img class= "charImage maleImage" src="${superheroes.image}">`;
        } else {
            domString +=    `<img class= "charImage femaleImage" src="${superheroes.image}">`;
        }
        
        domString +=     `<p class ='charDescription'>${superheroes.description}</p>`;
        domString += `</div>`;
        domString += `</div>`;
        domString += `</div>`
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
