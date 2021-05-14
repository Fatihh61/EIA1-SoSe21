/* Variablen
var myVar: number = 5;
var myVar2: string = "Hello";

Diese kann man mit "+", "-", "/", "*" kombinieren
*/
/* Funktionen:

function myFunction() {

    var myVar: number = 7;
    var myVar2: number = 5;
    var myVarAddiert = myVar + myVar2;

    var result = "Mein Resultat beträgt:" myVarAddiert;

    console.log (result);

}

myFunction();



function myFunction2(kilometer: number, Name: string) {

    var myVar: number = 7;
    var myVar2: number = 5;
    var myVarAddiert = myVar + myVar2 * kilometer + "und heiße" Name;

    var result = "Mein Resultat beträgt:" myVarAddiert + kilometer + "und" Name;

    

}

myFunction2(5, "Fatih");
*/
/* Events:


function myFunction() {

    var myVar: number = 7;
    var myVar2: number = 5;
    var myVarAddiert = myVar + myVar2;

    var result = "Mein Resultat beträgt:" myVarAddiert;

    console.log (result);

}

document.queryselector("h1").addEventListener("click", myFunction);
document.queryselector("#meineID").addEventListener("click", myFunction);
document.queryselector(".meine Klasse").addEventListener("click", myFunction);

querySelector = Nur für ein einziges Element
querySelectorAll - Man selektiert mehrere Elemente (jedoch mit Array verwenden?)




Patricks Video

var myButton = document.getElementByID("myBTN")

ODER

var myButton = document.querySelector("#myBTN");

myButton.addEventListener("click", function() {

    document.getElementById("myText");
    document.getElementById("myText").innerHTML = "Hello World";
    ODER
    document.querySelector("#myText");
    document.querySelector("#myText").innerHTML = "Hello World"
    

});

ODER

document.queryselector("#myBTN").addEventlistener

document.queryselector("#myBTN").addEventListener("click", function() {

    document.getElementById("myText");
    document.getElementById("myText").innerHTML = "Hello World";
    ODER
    document.querySelector("#myText");
    document.querySelector("#myText").innerHTML = "Hello World";
    

});


ODER

document.queryselector("#myBTN").addEventListener("click", function() {

    document.queryselector("#myText").innerHTML = "Hello World";


}):
*/
/* Ladereihenfolge:

function myFunction() {

    var myVar: number = 7;
    var myVar2: number = 5;
    var myVarAddiert = myVar + myVar2;

    console.log (myVarAddiert);

}


window.addEventListener("load", function() {

        document.querySelector("h1").addEventListener("click", myFunction);
});
*/
/* DOM Manipulation

"h1" wird überschrieben

document.querySelector("h1").innerHTML = "Meine neue <i>Überschrift</i>";

"h1" bekommt die class "active"

document.querySelector("h1").settAttribute = ("attributeName", "value");
document.querySelector("h1").settAttribute = ("class", "active");


"h1" gegriffen und als var deklariert und dieses bar dann verändert

var d = document.getElementById("h1");

d.setAttribute("align", "center");


Neue Elemente erschaffen und bearbeiten können

var newElement = document.createElement("h2");
document.body.appendChild(newElement);
newElement.innerHTML = "Eine neues Element";

Patricks Video

var newElement: HTMLDIVelement = document.createElement("div");

newElement.innerHTML = "Hello";  <div>Hello</div>
newElement.className = "myClass";   <div class="myClass">Hello</div>

var hello = document.querySelector("#content");
var hello = document.querySelector(".mehrereclasses";

ODER

document.getElementById("content").appendchild(myDiv)

ODER

var myParentDiv = document.getElementById("content");   (so heißt die ID in HTML)

myParentDiv.appendChild(myDiv)
*/
/*Arrays

var sample: HTMLAudioElement[] = [new Audio("assets/musik/A.mp3"), new Audio("assets/musik/C.mp3"), new Audio("assets/musik/F.mp3"), new Audio("assets/musik/G.mp3"), new Audio("assets/musik/hihat.mp3"), new Audio("assets/musik/kick.mp3"), new Audio("assets/musik/laugh-1.mp3"), new Audio("assets/musik/laugh-2.mp3"), new Audio("assets/musik/snare.mp3")];

var beat: HTMLAudioElement[] = [sample[5], sample[8], sample[4]];

document.querySelector('#btn1').addEventListener('click', function() {playSample(sample[0])});

function playSample(musik: HTMLAudioElement) {

    
    musik.play()


};
*/
/*If Bedingungen und Operatoren

var hallo1: string = "Hello";
var hallo2: string = "Hello";
var hallo3: number = 5;
var hallo4: number = 7;


if (hallo1 == hallo2) {

    console.log("hallo1 ist gleich hallo2")


}

if (hallo1 != hallo2) {

    console.log("hallo1 ist nicht gleich hallo2")


}

if (hallo1 > hallo2) {

    console.log("hallo1 ist größer als hallo2")


}


if (hallo1 < hallo2) {

    console.log("hallo1 ist kleiner als hallo2")


}

if (hallo1 >= hallo2) {

    console.log("hallo1 ist größer gleich als hallo2")


}
*/
/*If Bedingungen mit logischen Operatoren
var hallo1: string = "Hello";
var hallo2: string = "Hello";
var hallo3: number = 5;
var hallo4: number = 7;



if (hallo3 < hallo4 && hallo3 == 5) {

    console.log("hallo3 ist kleiner als hallo4 und hallo3 ist gleich 5")


}


if (hallo3 > 1 || hallo4 == 2) {

    console.log("hallo3 ist größer als 1 oder hallo4 ist gleich 2")


}


if (hallo3 !== hallo4) {

    console.log("hallo3 ist nicht gleich hallo4 also ist es wahr?")


}
*/
/*If else und If - else If - else
var hallo1: string = "Hello";
var hallo2: string = "Hello";
var hallo3: number = 5;
var hallo4: number = 7;

if (hallo3 == hallo4) {

    console.log("hallo3 ist gleich hallo4")

}

else {

    console.log("hallo3 ist nicht gleich hallo4")

}




if (hallo3 > 10){

    console.log("hallo3 ist kleiner als 10")

}

else if(hallo3 == 10){

    console.log("hallo3 ist gleich 10")


}

else{

    console.log("hallo3 ist weder kleiner als 10 noch gleich 10")

}
*/
/* Switch case
var hallo1: string = "Hello";
var hallo2: string = "Hello";
var hallo3: number = 5;
var hallo4: number = 7;


switch (hallo3) {

    case 2:
        console.log("hallo3 ist A")
        break;

    case 4:
        console.log("hallo3 ist B")
        break;

    case 5:
        console.log("hallo3 ist C")
        break;

    default:
        console.log("hallo3 ist was anderes")
}
*/
/* If Bedingung mit DOM-Manipulation
var hallo1: string = "Hello";
var hallo2: string = "Hello";
var hallo3: number = 5;
var hallo4: number = 7;

var btn1: HTMLElement = document.querySelector("#btn1");


function hello() {
    if (btn1.getAttribute("class") == "class1") {

        btn1.setAttribute("class", "class2");

    } else {

        btn1.setAttribute("class", "classgeben");


    }
};





btn1.addEventListener("click", function () {



    if (btn1.getAttribute("id") == "class1") {

        btn1.setAttribute("id", "");

    } else {

        btn1.setAttribute("id", "class1");


    }
});
*/
/*while-Schleife und do-schleife
var pinguin1: number = 0;
var pinguintotal: number = 5;

while (pinguin1 <= pinguintotal) {

    console.log("Hallo, ich bin Pinguin Nummer " + pinguin1);
    pinguin1++;



};





do {

    console.log("Hallo, ich bin Pinguin Nummer " +pinguin1)
    pinguin1++;
}


while (pinguin1 <= pinguintotal)
*/
/*
var penguinNumber: number = 8;

for (var index = 0; index <=penguinNumber; index++) {

    console.log("Hallo, ich bin Pinguin Nummer " + index);

}


for (var index2 = 1; index2 <= penguinNumber; index2++){

    document.querySelector("#btn" + index2).innerHTML = "Index ist" + index2;


}




var myArray: string [] = ["Hans", "Peter", "Ralf"];


for  (var index3: number = 0; index3 <= 2; index3++) {

    console.log(myArray[index3])
    


}
*/
/*For-Schleife
var myArray: string [] = ["Hans", "Peter", "Ralf"];


for  (var index3: number = 0; index3 <= 2; index3++) {

    if (myArray[index3] == "Peter") {

        console.log(index3)


    }
    


}
*/
/* SetInterval in einer for Schleife
for (var indexzaehler: number = 0; indexzaehler <= 3 ; indexzaehler++) {
    setInterval(function() {
        beat[indexzaehler].play();

    }, 1500);
    */
/*
var min: number = 1;
var max: number = 10;

var remixbtnn: HTMLElement = document.getElementById("demo");
remixbtnn.addEventListener("click", function () {
getRndInteger(min, max);
});

function getRndInteger(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;

} console.log(getRndInteger);
*/ 
//# sourceMappingURL=script.js.map