var Aufgabe5;
(function (Aufgabe5) {
    function runden(zahl) {
        return Math.round(zahl * 100) / 100;
    }
    var countryAfrica = "Africa";
    var Africa2008 = 1028;
    var Africa2018 = 1235.5;
    var countrySouthAmerica = "Southamerica";
    var SouthAmerica2008 = 1132.6;
    var SouthAmerica2018 = 1261.5;
    var countryEurope = "Europe";
    var Europe2008 = 4965.7;
    var Europe2018 = 4209.3;
    var countryNorhAmerica = "Northamerica";
    var NorthAmerica2008 = 6600.4;
    var NorthAmerica2018 = 6035.6;
    var countryAsia = "Asia";
    var Asia2008 = 12954.7;
    var Asia2018 = 16274.1;
    var countryAustralia = "Australia";
    var Australia2008 = 1993;
    var Australia2018 = 2100.5;
    var everything2018 = Africa2018 + SouthAmerica2018 + NorthAmerica2018 + Asia2018 + Australia2018 + Europe2018;
    function emission(continentName, continent2018, continent2008) {
        document.querySelector("#titleRegion").innerHTML = continentName;
        document.querySelector(".firstH2").innerHTML = continent2018 + "";
        document.querySelector("P").innerHTML = "Emission absolute of " + continentName + " in 2018";
        document.querySelector(".secondH2").innerHTML = runden(continent2018 / everything2018 * 100) + "%";
        document.querySelector(".thirdH2").innerHTML = runden((continent2018 - continent2008) / continent2008 * 100) + "%";
        document.querySelector(".fourthH2").innerHTML = runden(continent2018 - continent2008) + "";
        document.querySelector(".chart").setAttribute("style", "height:" + runden(continent2018 / everything2018 * 100) + "%");
    }
    document.querySelector(".europe").addEventListener("click", function () {
        emission(countryEurope, Europe2018, Europe2008);
    });
    document.querySelector(".northamerica").addEventListener("click", function () { emission(countryNorhAmerica, NorthAmerica2018, NorthAmerica2008); });
    document.querySelector(".southamerica").addEventListener("click", function () { emission(countrySouthAmerica, SouthAmerica2018, SouthAmerica2008); });
    document.querySelector(".africa").addEventListener("click", function () { emission(countryAfrica, Africa2018, Africa2008); });
    document.querySelector(".asia").addEventListener("click", function () { emission(countryAsia, Asia2018, Asia2008); });
    document.querySelector(".australia").addEventListener("click", function () { emission(countryAustralia, Australia2018, Australia2008); });
})(Aufgabe5 || (Aufgabe5 = {}));
/*
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
*/
//# sourceMappingURL=script.js.map