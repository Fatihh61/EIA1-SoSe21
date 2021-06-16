var Endabgabe;
(function (Endabgabe) {
    //Felder 1-9 wurden definiert//
    var button1 = document.getElementById("btn1");
    var button2 = document.getElementById("btn2");
    var button3 = document.getElementById("btn3");
    var button4 = document.getElementById("btn4");
    var button5 = document.getElementById("btn5");
    var button6 = document.getElementById("btn6");
    var button7 = document.getElementById("btn7");
    var button8 = document.getElementById("btn8");
    var button9 = document.getElementById("btn9");
    //Felder 1-9 wurden definiert//
    //Array mit allen Feldern 1-9 wurde definiert//
    var myArrayButtons = [button1, button2, button3, button4, button5, button6, button7, button8, button9];
    //Array mit allen Feldern 1-9 wurde definiert//
    //Start Button wurde definiert//
    var startButton = document.getElementById("Start");
    //Start Button wurde definiert//
    //Indexzähler wurden definiert//
    var indexzaehler = 0;
    //Indexzähler wurden definiert//
    //Funktion Kreuz in Felder 1-9 setzen, bei Klick auf auf eines der Felder//
    function SpielerZug(button) {
        var iKreuz = document.createElement("i");
        iKreuz.className = "fas fa-times";
        button.appendChild(iKreuz);
        button.setAttribute("data-WerHatGedrückt", "Spieler");
        console.log(button.getAttribute("data-WerHatGedrückt"));
    }
    button1.addEventListener("click", function () { SpielerZug(button1); });
    button2.addEventListener("click", function () { SpielerZug(button2); });
    button3.addEventListener("click", function () { SpielerZug(button3); });
    button4.addEventListener("click", function () { SpielerZug(button4); });
    button5.addEventListener("click", function () { SpielerZug(button5); });
    button6.addEventListener("click", function () { SpielerZug(button6); });
    button7.addEventListener("click", function () { SpielerZug(button7); });
    button8.addEventListener("click", function () { SpielerZug(button8); });
    button9.addEventListener("click", function () { SpielerZug(button9); });
    //Funktion Kreuz in Felder 1-9 setzen, bei Klick auf auf eines der Felder//
    function startGame(button) {
        var iKreis = document.createElement("i");
        iKreis.className = "far fa-circle";
        button.appendChild(iKreis);
        /* Disablen des Button
        button.setAttribute("disabled", "true");
        console.log(button);
        */
    }
    startButton.addEventListener("click", function () { startGame(myArrayButtons[Math.floor(Math.random() * myArrayButtons.length)]); });
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=script.js.map