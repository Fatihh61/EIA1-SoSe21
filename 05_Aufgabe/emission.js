var Aufgabe5;
(function (Aufgabe5) {
    function aufrunden(zahl) {
        return Math.round(zahl * 100) / 100;
    }
    var countryAfrica = "Africa";
    var Africa2008 = 1028;
    var Africa2018 = 1235.5;
    var countrySouthAmerica = "South America";
    var SouthAmerica2008 = 1132.6;
    var SouthAmerica2018 = 1261.5;
    var countryEurope = "Europe";
    var Europe2008 = 4965.7;
    var Europe2018 = 4209.3;
    var countryNorhAmerica = "North America";
    var NorthAmerica2008 = 6600.4;
    var NorthAmerica2018 = 6035.6;
    var countryAsia = "Asia";
    var Asia2008 = 12954.7;
    var Asia2018 = 16274.1;
    var countryAustralia = "Australia";
    var Australia2008 = 1993;
    var Australia2018 = 2100.5;
    var everything2018 = Africa2018 + SouthAmerica2018 + NorthAmerica2018 + Asia2018 + Australia2018 + Europe2018;
    console.log("Die Emission von " + countryAfrica + " 2018 ist: " + Africa2018 + "kg CO2");
    console.log("Für " + countryAfrica + " hat sich 2018 im Vergleich zu 2008 die Emission um " + aufrunden((Africa2018 - Africa2008) / Africa2008 * 100) + "% verändert");
    console.log("2018 im Vergleich zu 2008 sind das " + aufrunden(Africa2018 - Africa2008) + "kg CO2");
    console.log("Relativ zur Gesamtemission der Welt verursacht " + countryAfrica + " damit " + aufrunden(Africa2018 / everything2018 * 100) + "%");
    console.log("Die Emission von " + countrySouthAmerica + " 2018 ist: " + SouthAmerica2018 + "kg CO2");
    console.log("Für " + countrySouthAmerica + " hat sich 2018 im Vergleich zu 2008 die Emission um " + aufrunden((SouthAmerica2018 - SouthAmerica2008) / SouthAmerica2008 * 100) + "% verändert");
    console.log("2018 im Vergleich zu 2008 sind das " + aufrunden(SouthAmerica2018 - SouthAmerica2008) + "kg CO2");
    console.log("Relativ zur Gesamtemission der Welt verursacht " + countrySouthAmerica + " damit " + aufrunden(SouthAmerica2018 / everything2018 * 100) + "%");
    console.log("Die Emission von " + countryEurope + " 2018 ist: " + Europe2018 + "kg CO2");
    console.log("Für " + countryEurope + " hat sich 2018 im Vergleich zu 2008 die Emission um " + aufrunden((Europe2018 - Europe2008) / Europe2008 * 100) + "% verändert");
    console.log("2018 im Vergleich zu 2008 sind das " + aufrunden(Europe2018 - Europe2008) + "kg CO2");
    console.log("Relativ zur Gesamtemission der Welt verursacht" + countryEurope + " damit " + aufrunden(Europe2018 / everything2018 * 100) + "%");
    console.log("Die Emission von " + countryNorhAmerica + " 2018 ist: " + NorthAmerica2018 + "kg CO2");
    console.log("Für " + countryNorhAmerica + " hat sich 2018 im Vergleich zu 2008 die Emission um " + aufrunden((NorthAmerica2018 - NorthAmerica2008) / NorthAmerica2008 * 100) + "% verändert");
    console.log("2018 im Vergleich zu 2008 sind das " + aufrunden(NorthAmerica2018 - NorthAmerica2008) + "kg CO2");
    console.log("Relativ zur Gesamtemission der Welt verursacht " + countryNorhAmerica + " damit " + aufrunden(NorthAmerica2018 / everything2018 * 100) + "%");
    console.log("Die Emission von " + countryAsia + " 2018 ist: " + Asia2018 + "kg CO2");
    console.log("Für " + countryAsia + " hat sich 2018 im Vergleich zu 2008 die Emission um " + aufrunden((Asia2018 - Asia2008) / Asia2008 * 100) + "% verändert");
    console.log("2018 im Vergleich zu 2008 sind das " + aufrunden(Asia2018 - Asia2008) + "kg CO2");
    console.log("Relativ zur Gesamtemission der Welt verursacht " + countryAsia + " damit " + aufrunden(Asia2018 / everything2018 * 100) + "%");
    console.log("Die Emission von " + countryAustralia + " 2018 ist: " + Australia2018 + "kg CO2");
    console.log("Für " + countryAustralia + " hat sich 2018 im Vergleich zu 2008 die Emission um " + aufrunden((Australia2018 - Australia2008) / Australia2008 * 100) + "% verändert");
    console.log("2018 im Vergleich zu 2008 sind das " + aufrunden(Australia2018 - Australia2008) + "kg CO2");
    console.log("Relativ zur Gesamtemission der Welt verursacht " + countryAustralia + " damit " + aufrunden(Australia2018 / everything2018 * 100) + "%");
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=emission.js.map