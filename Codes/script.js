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
//# sourceMappingURL=script.js.map