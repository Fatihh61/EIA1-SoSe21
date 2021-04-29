function aufrunde(zahl: number): number {
    return Math.round(zahl * 100) / 100

}


var countryAfrica: string = "Africa";
var Africa2008: number = 1028;
var Africa2018: number = 1235.5;


var countrySouthAmerica: string = "South America";
var SouthAmerica2008: number = 1132.6;
var SouthAmerica2018: number = 1261.5;


var countryEurope: string = "Europe";
var Europe2008: number = 4965.7;
var Europe2018: number = 4209.3;


var countryNorhAmerica: string = "North America";
var NorthAmerica2008: number = 6600.4;
var NorthAmerica2018: number = 6035.6;


var countryAsia: string = "Asia";
var Asia2008: number = 12954.7;
var Asia2018: number = 16274.1;


var countryAustralia: string = "Australia";
var Australia2008: number = 1993;
var Australia2018: number = 2100.5;


var everything2018: number = Africa2018 + SouthAmerica2018 + NorthAmerica2018 + Asia2018 + Australia2018 + Europe2018;



document.querySelector("h2").id = "Text";


/*
var Europaa: HTMLElement = document.querySelector(".europe");

Europaa.addEventListener("click", function() {
    console.log("lol");




});
*/


//Europa//
function Europe() {

    document.querySelector("#titleRegion").innerHTML = "Europe";
    document.querySelector(".firstH2").innerHTML = + Europe2018 + "";
    document.querySelector(".secondH2").innerHTML = + aufrunde(Europe2018 / everything2018 *100) + "%";
    document.querySelector(".thirdH2").innerHTML = + aufrunde((Europe2018 - Europe2008) / Europe2008 * 100) + "%";
    document.querySelector(".fourthH2").innerHTML = + aufrunde(Europe2018 - Europe2008) + "";
    document.querySelector(".chart").setAttribute("style", "height: 13.53%");
    document.querySelector("body").setAttribute("style", "color: red");
    

}


document.querySelector(".europe").addEventListener("click", Europe);



//North America//
function titleNorthAmerica() {

    document.querySelector("#titleRegion").innerHTML = "North America";
    document.querySelector(".firstH2").innerHTML = + NorthAmerica2018 + "";
    document.querySelector(".secondH2").innerHTML = + aufrunde(NorthAmerica2018 / everything2018 *100) + "%";
    document.querySelector(".thirdH2").innerHTML = + aufrunde((NorthAmerica2018 - NorthAmerica2008) / NorthAmerica2008 * 100) + "%";
    document.querySelector(".fourthH2").innerHTML = + aufrunde(NorthAmerica2018 - NorthAmerica2008) + "";
    document.querySelector(".chart").setAttribute("style", "height: 19.4%");
    document.querySelector("body").setAttribute("style", "color: red");

}


document.querySelector(".northamerica").addEventListener("click", titleNorthAmerica);


//South America//
function titleSouthAmerica() {

    document.querySelector("#titleRegion").innerHTML = "South America";
    document.querySelector(".firstH2").innerHTML = + SouthAmerica2018 + "";
    document.querySelector(".secondH2").innerHTML = + aufrunde(SouthAmerica2018 / everything2018 *100) + "%";
    document.querySelector(".thirdH2").innerHTML = + aufrunde((SouthAmerica2018 - SouthAmerica2008) / SouthAmerica2008 * 100) + "%";
    document.querySelector(".fourthH2").innerHTML = + aufrunde(SouthAmerica2018 - SouthAmerica2008) + "";
    document.querySelector(".chart").setAttribute("style", "height: 4.05%");
    document.querySelector("body").setAttribute("style", "color: blue");


}


document.querySelector(".southamerica").addEventListener("click", titleSouthAmerica);


//Africa//
function titleAfrica() {

    document.querySelector("#titleRegion").innerHTML = "Africa";
    document.querySelector(".firstH2").innerHTML = + NorthAmerica2018 + "";
    document.querySelector(".secondH2").innerHTML = + aufrunde(Africa2018 / everything2018 *100) + "%";
    document.querySelector(".thirdH2").innerHTML = + aufrunde((Africa2018 - Africa2008) / Africa2008 * 100) + "%";
    document.querySelector(".fourthH2").innerHTML = + aufrunde(Africa2018 - Africa2008) + "";
    document.querySelector(".chart").setAttribute("style", "height: 3.97%");


}


document.querySelector(".africa").addEventListener("click", titleAfrica);


//Asia//
function titleAsia() {

    document.querySelector("#titleRegion").innerHTML = "Asia";
    document.querySelector(".firstH2").innerHTML = + Asia2018 + "";
    document.querySelector(".secondH2").innerHTML = + aufrunde(Asia2018 / everything2018 *100) + "%";
    document.querySelector(".thirdH2").innerHTML = + aufrunde((Asia2018 - Asia2008) / Asia2008 * 100) + "%";
    document.querySelector(".fourthH2").innerHTML = + aufrunde(Asia2018 - Asia2008) + "";
    document.querySelector(".chart").setAttribute("style", "height: 52.3%");


}


document.querySelector(".asia").addEventListener("click", titleAsia);


//Australia//
function titleAustralia() {

    document.querySelector("#titleRegion").innerHTML = "Australia";
    document.querySelector(".firstH2").innerHTML = + Australia2018 + "";
    document.querySelector(".secondH2").innerHTML = + aufrunde(Australia2018 / everything2018 *100) + "%";
    document.querySelector(".thirdH2").innerHTML = + aufrunde((Australia2018 - Australia2008) / Australia2008 * 100) + "%";
    document.querySelector(".fourthH2").innerHTML = + aufrunde(Australia2018 - Australia2008) + "";
    document.querySelector(".chart").setAttribute("style", "height: 6.75%");
    document.querySelector("body").setAttribute("style", "color: blue");


}


document.querySelector(".australia").addEventListener("click", titleAustralia);
