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
    var button10 = document.getElementById("btn10");
    var button11 = document.getElementById("btn11");
    var button12 = document.getElementById("btn12");
    var button13 = document.getElementById("btn13");
    var button14 = document.getElementById("btn14");
    var button15 = document.getElementById("btn15");
    var button16 = document.getElementById("btn16");
    var button17 = document.getElementById("btn17");
    var button18 = document.getElementById("btn18");
    var button19 = document.getElementById("btn19");
    var button20 = document.getElementById("btn20");
    var button21 = document.getElementById("btn21");
    var button22 = document.getElementById("btn22");
    var button23 = document.getElementById("btn23");
    var button24 = document.getElementById("btn24");
    var button25 = document.getElementById("btn25");
    //Felder 1-9 wurden definiert//
    //Schwierigkeitsgrade wurden definiert//
    var leicht = document.getElementById("leicht");
    var mittel = document.getElementById("mittel");
    var schwierig = document.getElementById("schwierig");
    //Schwierigkeitsgrade wurden definiert//
    var spielerpunktestandNumber = 0;
    var computerpunktestandNumber = 0;
    //Punktestand und Rundenanzahl wurden definiert//
    var spielerpunktestand = document.getElementById("Spielerpunktestand");
    var computerpunktestand = document.getElementById("Computerpunktestand");
    var rundenanzahl = document.getElementById("Rundenanzahl");
    //Punktestand und Rundenanzahl wurden definiert//
    //Arrays wurden definiert//
    var myArrayButtons = [button1, button2, button3, button4, button5, button6, button7, button8, button9];
    var myArrayButtonsMittel = [button10, button11, button12, button13, button14, button15, button16];
    var spielerArray = [];
    var computerArray = [];
    var spielerBoolean = [true, true, true, true, true, true, true, true, true];
    var computerBoolean = [true, true, true, true, true, true, true, true, true];
    //Arrays wurden definiert//
    //Start Button wurde definiert//
    var startButtonLeicht = document.getElementById("StartLeicht");
    var startButtonMittel = document.getElementById("StartMittel");
    var startButtonSchwierig = document.getElementById("StartSchwierig");
    //Start Button wurde definiert//
    //Indexzähler wurde definiert//
    var indexzaehler = 0;
    var indexzaehlerSpieler = 1;
    var indexzaehlerComputer = 1;
    var rundenanzahlcounter = 2;
    var rundenanzahlcounterMittel = 4;
    //Indexzähler wurde definiert//
    function toggleSchwierigkeitsgrad() {
        leicht.classList.add("isHidden");
        mittel.classList.add("isHidden");
        schwierig.classList.add("isHidden");
    }
    function toggleSchwierigkeitsgradErneut() {
        leicht.classList.remove("isHidden");
        mittel.classList.remove("isHidden");
        schwierig.classList.remove("isHidden");
    }
    function erstStartDrücken() {
        button1.classList.add("pointerEvents");
        button2.classList.add("pointerEvents");
        button3.classList.add("pointerEvents");
        button4.classList.add("pointerEvents");
        button5.classList.add("pointerEvents");
        button6.classList.add("pointerEvents");
        button7.classList.add("pointerEvents");
        button8.classList.add("pointerEvents");
        button9.classList.add("pointerEvents");
    }
    function erstStartDrückenRemove() {
        button1.classList.remove("pointerEvents");
        button2.classList.remove("pointerEvents");
        button3.classList.remove("pointerEvents");
        button4.classList.remove("pointerEvents");
        button5.classList.remove("pointerEvents");
        button6.classList.remove("pointerEvents");
        button7.classList.remove("pointerEvents");
        button8.classList.remove("pointerEvents");
        button9.classList.remove("pointerEvents");
    }
    leicht.addEventListener("click", function () {
        startButtonMittel.classList.add("isHidden");
        startButtonSchwierig.classList.add("isHidden");
        toggleSchwierigkeitsgrad();
        erstStartDrücken();
        //Funktion Kreuz in Felder 1-9 setzen, bei Klick auf eines der Felder (Spielerzug)//
        function SpielerZug(button) {
            if (indexzaehler <= myArrayButtons.length) {
                var iKreuz = document.createElement("i");
                iKreuz.className = "fas fa-times";
                button.appendChild(iKreuz);
                button.classList.add("pointerEvents");
                startButtonLeicht.classList.add("pointerEvents");
                /*
                button.classList.add("pointerEvents");
                */
                button.setAttribute("data-WerHatGedrückt", "Spieler");
                /*
                console.log(button.getAttribute("data-WerHatGedrückt"));
                */
                button.setAttribute("boolean", "false");
                /*disablen des Button
                button.setAttribute("disabled", "true");
                */
                spielerArray.push(button);
                console.log(spielerArray);
                var indexOfButton = myArrayButtons.indexOf(button);
                myArrayButtons.splice(indexOfButton, 1);
                /*
                console.log(myArrayButtons);
                */
                computerZug(myArrayButtons[Math.floor(Math.random() * myArrayButtons.length)]);
                /*
                myArrayButtons.pop(button);
                */
                gewinnerErmitteln();
                if (myArrayButtons.length == 9) {
                    /*
                    iKreuz.removeAttribute("class");
                    iKreuz.removeAttribute("class");
                    console.log(iKreuz);
                    */
                    for (var index = 0; index < myArrayButtons.length; index++) {
                        document.querySelectorAll("i").forEach(function (b) { return b.removeAttribute("class"); });
                        /*
                        document.querySelectorAll("button").forEach(b => b.removeAttribute("class"));
                        */
                        /*
                        iKreuz.remove();
                        */
                    }
                }
            }
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
        button10.addEventListener("click", function () { SpielerZug(button10); });
        button11.addEventListener("click", function () { SpielerZug(button11); });
        button12.addEventListener("click", function () { SpielerZug(button12); });
        button13.addEventListener("click", function () { SpielerZug(button13); });
        button14.addEventListener("click", function () { SpielerZug(button14); });
        button15.addEventListener("click", function () { SpielerZug(button15); });
        button16.addEventListener("click", function () { SpielerZug(button16); });
        //Funktion Kreuz in Felder 1-9 setzen, bei Klick auf auf eines der Felder (Spielerzug)//
        //Bei Klick auf Start, fängt das Spiel an und Computer macht seinen Zug//
        function startGame(button) {
            var iKreis = document.createElement("i");
            iKreis.className = "far fa-circle";
            button.appendChild(iKreis);
            startButtonLeicht.classList.add("pointerEvents");
            erstStartDrückenRemove();
            button.classList.add("pointerEvents");
            /*
            button.classList.add("pointerEvents");
            */
            button.setAttribute("data-WerHatGedrückt", "Computer");
            /*
            console.log(button.getAttribute("data-WerHatGedrückt"));
            */
            button.setAttribute("boolean", "false");
            /*disablen des Button
            button.setAttribute("disabled", "true");
            */
            computerArray.push(button);
            console.log(computerArray);
            var indexOfButton = myArrayButtons.indexOf(button);
            myArrayButtons.splice(indexOfButton, 1);
            /*
            console.log(myArrayButtons);
            */
            /*
            myArrayButtons.pop(button);
            */
            toggleSchwierigkeitsgrad();
        }
        startButtonLeicht.addEventListener("click", function () { startGame(myArrayButtons[Math.floor(Math.random() * myArrayButtons.length)]); });
        //Bei Klick auf Start, fängt das Spiel an und Computer macht seinen Zug//
        //Wenn Spieler Kreuz gesetzt hat, macht Computer seinen Zug und setzt Kreis//
        function computerZug(button) {
            var iKreis = document.createElement("i");
            iKreis.className = "far fa-circle";
            button.appendChild(iKreis);
            button.classList.add("pointerEvents");
            /*
            button.classList.add("pointerEvents");
            */
            button.setAttribute("boolean", "false");
            button.setAttribute("data-WerHatGedrückt", "Computer");
            /*disablen des Button
            button.setAttribute("disabled", "true");
            */
            computerArray.push(button);
            console.log(computerArray);
            var indexOfButton = myArrayButtons.indexOf(button);
            myArrayButtons.splice(indexOfButton, 1);
            /*
            console.log(myArrayButtons);
            */
            /*
            console.log(indexOfButton);
            */
            /*
            myArrayButtons.pop(button);
            */
            gewinnerErmitteln();
        }
        //Wenn Spieler Kreuz gesetzt hat, macht Computer seinen Zug und setzt Kreis//
        //Gewinnmöglichkeiten//
        function gewinnerErmitteln() {
            if (SpielerHat([button1, button2, button3]) || SpielerHat([button4, button5, button6]) ||
                SpielerHat([button7, button8, button9]) || SpielerHat([button1, button4, button7]) ||
                SpielerHat([button2, button5, button8]) || SpielerHat([button3, button6, button9]) ||
                SpielerHat([button1, button5, button9]) || SpielerHat([button3, button5, button7])) {
                spielerpunktestand.innerHTML = "Spieler: " + indexzaehlerSpieler++;
                rundenanzahl.innerHTML = "Runden: " + rundenanzahlcounter--;
                spielerpunktestandNumber++;
                startButtonLeicht.classList.remove("pointerEvents");
                button1.classList.remove("pointerEvents");
                button2.classList.remove("pointerEvents");
                button3.classList.remove("pointerEvents");
                button4.classList.remove("pointerEvents");
                button5.classList.remove("pointerEvents");
                button6.classList.remove("pointerEvents");
                button7.classList.remove("pointerEvents");
                button8.classList.remove("pointerEvents");
                button9.classList.remove("pointerEvents");
                alert("Spieler hat gewonnen");
                console.log("Spieler hat gewonnen");
                while (spielerArray.length > 0) {
                    myArrayButtons.push(spielerArray.pop());
                }
                while (computerArray.length > 0) {
                    myArrayButtons.push(computerArray.pop());
                }
                erstStartDrücken();
                console.log(computerArray);
                console.log(spielerArray);
                console.log(myArrayButtons);
                console.log(spielerpunktestandNumber);
                console.log(computerpunktestandNumber);
                if (rundenanzahlcounter == -1) {
                    if (spielerpunktestandNumber > computerpunktestandNumber) {
                        alert("Spiel ist vorbei. Spieler hat gewonnen");
                    }
                    if (spielerpunktestandNumber == computerpunktestandNumber) {
                        alert("Spiel ist vorbei. Unentschieden!");
                    }
                    if (computerpunktestandNumber > spielerpunktestandNumber) {
                        alert("Spiel ist vorbei. Computer hat gewonnen!");
                    }
                    toggleSchwierigkeitsgradErneut();
                    rundenanzahl.innerHTML = "Runden: 3";
                    spielerpunktestand.innerHTML = "Spieler: 0";
                    computerpunktestand.innerHTML = "Computer: 0";
                    indexzaehler = 0;
                    indexzaehlerSpieler = 1;
                    indexzaehlerComputer = 1;
                    rundenanzahlcounter = 2;
                    location.reload();
                }
            }
            else if (ComputerHat([button1, button2, button3]) || ComputerHat([button4, button5, button6]) ||
                ComputerHat([button7, button8, button9]) || ComputerHat([button1, button4, button7]) ||
                ComputerHat([button2, button5, button8]) || ComputerHat([button3, button6, button9]) ||
                ComputerHat([button1, button5, button9]) || ComputerHat([button3, button5, button7]) ||
                ComputerHat([button1, button2, button3, button13]) || ComputerHat([button4, button5, button6, button14]) ||
                ComputerHat([button7, button8, button9, button15]) || ComputerHat([button10, button11, button12, button16]) ||
                ComputerHat([button1, button4, button7, button10]) || ComputerHat([button2, button5, button8, button11]) ||
                ComputerHat([button3, button6, button9, button12]) || ComputerHat([button13, button14, button15, button16]) ||
                ComputerHat([button1, button5, button9, button16]) || ComputerHat([button13, button6, button8, button10])) {
                rundenanzahl.innerHTML = "Runden: " + rundenanzahlcounter--;
                computerpunktestand.innerHTML = "Computer: " + indexzaehlerComputer++;
                computerpunktestandNumber++;
                startButtonLeicht.classList.remove("pointerEvents");
                button1.classList.remove("pointerEvents");
                button2.classList.remove("pointerEvents");
                button3.classList.remove("pointerEvents");
                button4.classList.remove("pointerEvents");
                button5.classList.remove("pointerEvents");
                button6.classList.remove("pointerEvents");
                button7.classList.remove("pointerEvents");
                button8.classList.remove("pointerEvents");
                button9.classList.remove("pointerEvents");
                alert("Computer hat gewonnen");
                console.log("Computer hat gewonnen");
                while (computerArray.length > 0) {
                    myArrayButtons.push(computerArray.pop());
                }
                while (spielerArray.length > 0) {
                    myArrayButtons.push(spielerArray.pop());
                }
                erstStartDrücken();
                console.log(computerArray);
                console.log(spielerArray);
                console.log(myArrayButtons);
                console.log(spielerpunktestandNumber);
                console.log(computerpunktestandNumber);
                if (rundenanzahlcounter == -1) {
                    if (computerpunktestandNumber > spielerpunktestandNumber) {
                        alert("Spiel ist vorbei. Computer hat gewonnen");
                    }
                    if (spielerpunktestandNumber > computerpunktestandNumber) {
                        alert("Spiel ist vorbei. Spieler hat gewonnen!");
                    }
                    if (computerpunktestandNumber == spielerpunktestandNumber) {
                        alert("Spiel ist vorbei. Unentschieden!");
                    }
                    toggleSchwierigkeitsgradErneut();
                    rundenanzahl.innerHTML = "Runden: 3";
                    spielerpunktestand.innerHTML = "Spieler: 0";
                    computerpunktestand.innerHTML = "Computer: 0";
                    indexzaehler = 0;
                    indexzaehlerSpieler = 1;
                    indexzaehlerComputer = 1;
                    rundenanzahlcounter = 2;
                    location.reload();
                }
            }
            else if (myArrayButtons.length < 1) {
                alert("Unentschieden");
                console.log("Unentschieden");
                rundenanzahl.innerHTML = "Runden: " + rundenanzahlcounter--;
                computerpunktestand.innerHTML = "Computer: " + indexzaehlerComputer++;
                spielerpunktestand.innerHTML = "Spieler: " + indexzaehlerSpieler++;
                startButtonLeicht.classList.remove("pointerEvents");
                button1.classList.remove("pointerEvents");
                button2.classList.remove("pointerEvents");
                button3.classList.remove("pointerEvents");
                button4.classList.remove("pointerEvents");
                button5.classList.remove("pointerEvents");
                button6.classList.remove("pointerEvents");
                button7.classList.remove("pointerEvents");
                button8.classList.remove("pointerEvents");
                button9.classList.remove("pointerEvents");
                while (computerArray.length > 0) {
                    myArrayButtons.push(computerArray.pop());
                }
                while (spielerArray.length > 0) {
                    myArrayButtons.push(spielerArray.pop());
                }
                erstStartDrücken();
                console.log(computerArray);
                console.log(spielerArray);
                console.log(myArrayButtons);
                console.log(spielerpunktestandNumber);
                console.log(computerpunktestandNumber);
                if (rundenanzahlcounter == -1) {
                    if (spielerpunktestandNumber == computerpunktestandNumber) {
                        alert("Spiel ist vorbei. Unentschieden!");
                    }
                    if (spielerpunktestandNumber > computerpunktestandNumber) {
                        alert("Spiel ist vorbei. Spieler hat gewonnen!");
                    }
                    if (computerpunktestandNumber > spielerpunktestandNumber) {
                        alert("Spiel ist vorbei. Computer hat gewonnen!");
                    }
                    toggleSchwierigkeitsgradErneut();
                    rundenanzahl.innerHTML = "Runden: 3";
                    spielerpunktestand.innerHTML = "Spieler: 0";
                    computerpunktestand.innerHTML = "Computer: 0";
                    indexzaehler = 0;
                    indexzaehlerSpieler = 1;
                    indexzaehlerComputer = 1;
                    rundenanzahlcounter = 2;
                    location.reload();
                }
            }
        }
        //Gewinnmöglichkeiten//
    });
    function SpielerHat(elemente) {
        var ergebnis = true;
        for (var index = 0; index < elemente.length; index++) {
            ergebnis = ergebnis && spielerArray.indexOf(elemente[index]) >= 0;
        }
        return ergebnis;
    }
    function ComputerHat(elemente) {
        var ergebnis = true;
        for (var index = 0; index < elemente.length; index++) {
            ergebnis = ergebnis && computerArray.indexOf(elemente[index]) >= 0;
        }
        return ergebnis;
    }
})(Endabgabe || (Endabgabe = {}));
//---------------------------------------------------------------------------------------------------------//
var EndabgabeMittel;
(function (EndabgabeMittel) {
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
    var button10 = document.getElementById("btn10");
    var button11 = document.getElementById("btn11");
    var button12 = document.getElementById("btn12");
    var button13 = document.getElementById("btn13");
    var button14 = document.getElementById("btn14");
    var button15 = document.getElementById("btn15");
    var button16 = document.getElementById("btn16");
    var button17 = document.getElementById("btn17");
    var button18 = document.getElementById("btn18");
    var button19 = document.getElementById("btn19");
    var button20 = document.getElementById("btn20");
    var button21 = document.getElementById("btn21");
    var button22 = document.getElementById("btn22");
    var button23 = document.getElementById("btn23");
    var button24 = document.getElementById("btn24");
    var button25 = document.getElementById("btn25");
    //Felder 1-9 wurden definiert//
    //Schwierigkeitsgrade wurden definiert//
    var leicht = document.getElementById("leicht");
    var mittel = document.getElementById("mittel");
    var schwierig = document.getElementById("schwierig");
    //Schwierigkeitsgrade wurden definiert//
    var spielerpunktestandNumber = 0;
    var computerpunktestandNumber = 0;
    //Punktestand und Rundenanzahl wurden definiert//
    var spielerpunktestand = document.getElementById("Spielerpunktestand");
    var computerpunktestand = document.getElementById("Computerpunktestand");
    var rundenanzahl = document.getElementById("Rundenanzahl");
    //Punktestand und Rundenanzahl wurden definiert//
    //Arrays wurden definiert//
    var myArrayButtons = [button1, button2, button3, button4, button5, button6, button7, button8, button9];
    var myArrayButtonsMittel = [button10, button11, button12, button13, button14, button15, button16];
    var spielerArray = [];
    var computerArray = [];
    var spielerBoolean = [true, true, true, true, true, true, true, true, true];
    var computerBoolean = [true, true, true, true, true, true, true, true, true];
    //Arrays wurden definiert//
    //Start Button wurde definiert//
    var startButtonLeicht = document.getElementById("StartLeicht");
    var startButtonMittel = document.getElementById("StartMittel");
    var startButtonSchwierig = document.getElementById("StartSchwierig");
    //Start Button wurde definiert//
    //Indexzähler wurde definiert//
    var indexzaehler = 0;
    var indexzaehlerSpieler = 1;
    var indexzaehlerComputer = 1;
    var rundenanzahlcounter = 2;
    var rundenanzahlcounterMittel = 3;
    //Indexzähler wurde definiert//
    function toggleSchwierigkeitsgradMittel() {
        leicht.classList.add("isHidden");
        mittel.classList.add("isHidden");
        schwierig.classList.add("isHidden");
    }
    function toggleSchwierigkeitsgradErneutMittel() {
        leicht.classList.remove("isHidden");
        mittel.classList.remove("isHidden");
        schwierig.classList.remove("isHidden");
    }
    function erstStartDrückenMittel() {
        button1.classList.add("pointerEvents");
        button2.classList.add("pointerEvents");
        button3.classList.add("pointerEvents");
        button4.classList.add("pointerEvents");
        button5.classList.add("pointerEvents");
        button6.classList.add("pointerEvents");
        button7.classList.add("pointerEvents");
        button8.classList.add("pointerEvents");
        button9.classList.add("pointerEvents");
        button10.classList.add("pointerEvents");
        button11.classList.add("pointerEvents");
        button12.classList.add("pointerEvents");
        button13.classList.add("pointerEvents");
        button14.classList.add("pointerEvents");
        button15.classList.add("pointerEvents");
        button16.classList.add("pointerEvents");
    }
    function erstStartDrückenRemoveMittel() {
        button1.classList.remove("pointerEvents");
        button2.classList.remove("pointerEvents");
        button3.classList.remove("pointerEvents");
        button4.classList.remove("pointerEvents");
        button5.classList.remove("pointerEvents");
        button6.classList.remove("pointerEvents");
        button7.classList.remove("pointerEvents");
        button8.classList.remove("pointerEvents");
        button9.classList.remove("pointerEvents");
        button10.classList.remove("pointerEvents");
        button11.classList.remove("pointerEvents");
        button12.classList.remove("pointerEvents");
        button13.classList.remove("pointerEvents");
        button14.classList.remove("pointerEvents");
        button15.classList.remove("pointerEvents");
        button16.classList.remove("pointerEvents");
    }
    function SpielerHat(elemente) {
        var ergebnis = true;
        for (var index = 0; index < elemente.length; index++) {
            ergebnis = ergebnis && spielerArray.indexOf(elemente[index]) >= 0;
        }
        return ergebnis;
    }
    function ComputerHat(elemente) {
        var ergebnis = true;
        for (var index = 0; index < elemente.length; index++) {
            ergebnis = ergebnis && computerArray.indexOf(elemente[index]) >= 0;
        }
        return ergebnis;
    }
    mittel.addEventListener("click", function () {
        myArrayButtonsMittel.push(button1);
        myArrayButtonsMittel.push(button2);
        myArrayButtonsMittel.push(button3);
        myArrayButtonsMittel.push(button4);
        myArrayButtonsMittel.push(button5);
        myArrayButtonsMittel.push(button6);
        myArrayButtonsMittel.push(button7);
        myArrayButtonsMittel.push(button8);
        myArrayButtonsMittel.push(button9);
        rundenanzahl.innerHTML = "Runden: 4";
        console.log(myArrayButtonsMittel);
        erstStartDrückenMittel();
    });
    mittel.addEventListener("click", function () {
        button10.classList.remove("isHidden");
        button11.classList.remove("isHidden");
        button12.classList.remove("isHidden");
        button13.classList.remove("isHidden");
        button14.classList.remove("isHidden");
        button15.classList.remove("isHidden");
        button16.classList.remove("isHidden");
        startButtonMittel.classList.remove("isHidden");
        startButtonLeicht.classList.add("isHidden");
        toggleSchwierigkeitsgradMittel();
        startButtonLeicht.classList.add("isHidden");
        startButtonSchwierig.classList.add("isHidden");
        //Funktion Kreuz in Felder 1-16 setzen, bei Klick auf eines der Felder (Spielerzug)//
        function SpielerZugMittel(button) {
            if (indexzaehler <= myArrayButtonsMittel.length) {
                var iKreuz = document.createElement("i");
                iKreuz.className = "fas fa-times";
                button.appendChild(iKreuz);
                button.classList.add("pointerEvents");
                startButtonMittel.classList.add("pointerEvents");
                /*
                button.classList.add("pointerEvents");
                */
                button.setAttribute("data-WerHatGedrückt", "Spieler");
                /*
                console.log(button.getAttribute("data-WerHatGedrückt"));
                */
                button.setAttribute("boolean", "false");
                /*disablen des Button
                button.setAttribute("disabled", "true");
                */
                spielerArray.push(button);
                console.log(spielerArray);
                var indexOfButton = myArrayButtonsMittel.indexOf(button);
                myArrayButtonsMittel.splice(indexOfButton, 1);
                /*
                console.log(myArrayButtons);
                */
                if (myArrayButtonsMittel.length != 0) {
                    computerZugMittel(myArrayButtonsMittel[Math.floor(Math.random() * myArrayButtonsMittel.length)]);
                }
                /*
                myArrayButtons.pop(button);
                */
                gewinnerErmittelnMittel();
                if (myArrayButtonsMittel.length == 16) {
                    /*
                    iKreuz.removeAttribute("class");
                    iKreuz.removeAttribute("class");
                    console.log(iKreuz);
                    */
                    for (var index = 0; index < myArrayButtonsMittel.length; index++) {
                        document.querySelectorAll("i").forEach(function (b) { return b.removeAttribute("class"); });
                        /*
                        document.querySelectorAll("button").forEach(b => b.removeAttribute("class"));
                        */
                        /*
                        iKreuz.remove();
                        */
                    }
                }
            }
        }
        button1.addEventListener("click", function () { SpielerZugMittel(button1); });
        button2.addEventListener("click", function () { SpielerZugMittel(button2); });
        button3.addEventListener("click", function () { SpielerZugMittel(button3); });
        button4.addEventListener("click", function () { SpielerZugMittel(button4); });
        button5.addEventListener("click", function () { SpielerZugMittel(button5); });
        button6.addEventListener("click", function () { SpielerZugMittel(button6); });
        button7.addEventListener("click", function () { SpielerZugMittel(button7); });
        button8.addEventListener("click", function () { SpielerZugMittel(button8); });
        button9.addEventListener("click", function () { SpielerZugMittel(button9); });
        button10.addEventListener("click", function () { SpielerZugMittel(button10); });
        button11.addEventListener("click", function () { SpielerZugMittel(button11); });
        button12.addEventListener("click", function () { SpielerZugMittel(button12); });
        button13.addEventListener("click", function () { SpielerZugMittel(button13); });
        button14.addEventListener("click", function () { SpielerZugMittel(button14); });
        button15.addEventListener("click", function () { SpielerZugMittel(button15); });
        button16.addEventListener("click", function () { SpielerZugMittel(button16); });
        //Funktion Kreuz in Felder 1-9 setzen, bei Klick auf auf eines der Felder (Spielerzug)//
        //Bei Klick auf Start, fängt das Spiel an und Computer macht seinen Zug//
        function startGameMittel(button) {
            var iKreis = document.createElement("i");
            iKreis.className = "far fa-circle";
            button.appendChild(iKreis);
            startButtonMittel.classList.add("pointerEvents");
            erstStartDrückenRemoveMittel();
            button.classList.add("pointerEvents");
            /*
            button.classList.add("pointerEvents");
            */
            button.setAttribute("data-WerHatGedrückt", "Computer");
            /*
            console.log(button.getAttribute("data-WerHatGedrückt"));
            */
            button.setAttribute("boolean", "false");
            /*disablen des Button
            button.setAttribute("disabled", "true");
            */
            computerArray.push(button);
            console.log(computerArray);
            var indexOfButton = myArrayButtonsMittel.indexOf(button);
            myArrayButtonsMittel.splice(indexOfButton, 1);
            /*
            console.log(myArrayButtons);
            */
            /*
            myArrayButtons.pop(button);
            */
        }
        startButtonMittel.addEventListener("click", function () { startGameMittel(myArrayButtonsMittel[Math.floor(Math.random() * myArrayButtonsMittel.length)]); });
        //Bei Klick auf Start, fängt das Spiel an und Computer macht seinen Zug//
        //Wenn Spieler Kreuz gesetzt hat, macht Computer seinen Zug und setzt Kreis//
        function computerZugMittel(button) {
            var iKreis = document.createElement("i");
            iKreis.className = "far fa-circle";
            button.appendChild(iKreis);
            button.classList.add("pointerEvents");
            /*
            button.classList.add("pointerEvents");
            */
            button.setAttribute("boolean", "false");
            button.setAttribute("data-WerHatGedrückt", "Computer");
            /*disablen des Button
            button.setAttribute("disabled", "true");
            */
            computerArray.push(button);
            console.log(computerArray);
            var indexOfButton = myArrayButtonsMittel.indexOf(button);
            myArrayButtonsMittel.splice(indexOfButton, 1);
            /*
            console.log(myArrayButtons);
            */
            /*
            console.log(indexOfButton);
            */
            /*
            myArrayButtons.pop(button);
            */
            gewinnerErmittelnMittel();
        }
        //Wenn Spieler Kreuz gesetzt hat, macht Computer seinen Zug und setzt Kreis//
        //Gewinnmöglichkeiten - Mittel//
        function gewinnerErmittelnMittel() {
            if (SpielerHat([button1, button2, button3, button13]) || SpielerHat([button4, button5, button6, button14]) ||
                SpielerHat([button7, button8, button9, button15]) || SpielerHat([button10, button11, button12, button16]) ||
                SpielerHat([button1, button4, button7, button10]) || SpielerHat([button2, button5, button8, button11]) ||
                SpielerHat([button3, button6, button9, button12]) || SpielerHat([button13, button14, button15, button16]) ||
                SpielerHat([button1, button5, button9, button16]) || SpielerHat([button13, button6, button8, button10])) {
                spielerpunktestand.innerHTML = "Spieler: " + indexzaehlerSpieler++;
                rundenanzahl.innerHTML = "Runden: " + rundenanzahlcounterMittel--;
                spielerpunktestandNumber++;
                startButtonMittel.classList.remove("pointerEvents");
                button1.classList.remove("pointerEvents");
                button2.classList.remove("pointerEvents");
                button3.classList.remove("pointerEvents");
                button4.classList.remove("pointerEvents");
                button5.classList.remove("pointerEvents");
                button6.classList.remove("pointerEvents");
                button7.classList.remove("pointerEvents");
                button8.classList.remove("pointerEvents");
                button9.classList.remove("pointerEvents");
                button10.classList.remove("pointerEvents");
                button11.classList.remove("pointerEvents");
                button12.classList.remove("pointerEvents");
                button13.classList.remove("pointerEvents");
                button14.classList.remove("pointerEvents");
                button15.classList.remove("pointerEvents");
                button16.classList.remove("pointerEvents");
                alert("Spieler hat gewonnen");
                console.log("Spieler hat gewonnen");
                while (spielerArray.length > 0) {
                    myArrayButtonsMittel.push(spielerArray.pop());
                }
                while (computerArray.length > 0) {
                    myArrayButtonsMittel.push(computerArray.pop());
                }
                erstStartDrückenMittel();
                console.log(computerArray);
                console.log(spielerArray);
                console.log(myArrayButtonsMittel);
                console.log(spielerpunktestandNumber);
                console.log(computerpunktestandNumber);
                if (rundenanzahlcounterMittel == -1) {
                    if (spielerpunktestandNumber > computerpunktestandNumber) {
                        alert("Spiel ist vorbei. Spieler hat gewonnen");
                    }
                    if (spielerpunktestandNumber == computerpunktestandNumber) {
                        alert("Spiel ist vorbei. Unentschieden!");
                    }
                    if (computerpunktestandNumber > spielerpunktestandNumber) {
                        alert("Spiel ist vorbei. Computer hat gewonnen!");
                    }
                    toggleSchwierigkeitsgradErneutMittel();
                    rundenanzahl.innerHTML = "Runden: 5";
                    spielerpunktestand.innerHTML = "Spieler: 0";
                    computerpunktestand.innerHTML = "Computer: 0";
                    indexzaehler = 0;
                    indexzaehlerSpieler = 1;
                    indexzaehlerComputer = 1;
                    rundenanzahlcounterMittel = 3;
                    location.reload();
                }
            }
            else if (ComputerHat([button1, button2, button3, button13]) || ComputerHat([button4, button5, button6, button14]) ||
                ComputerHat([button7, button8, button9, button15]) || ComputerHat([button10, button11, button12, button16]) ||
                ComputerHat([button1, button4, button7, button10]) || ComputerHat([button2, button5, button8, button11]) ||
                ComputerHat([button3, button6, button9, button12]) || ComputerHat([button13, button14, button15, button16]) ||
                ComputerHat([button1, button5, button9, button16]) || ComputerHat([button13, button6, button8, button10])) {
                rundenanzahl.innerHTML = "Runden: " + rundenanzahlcounterMittel--;
                computerpunktestand.innerHTML = "Computer: " + indexzaehlerComputer++;
                computerpunktestandNumber++;
                startButtonMittel.classList.remove("pointerEvents");
                button1.classList.remove("pointerEvents");
                button2.classList.remove("pointerEvents");
                button3.classList.remove("pointerEvents");
                button4.classList.remove("pointerEvents");
                button5.classList.remove("pointerEvents");
                button6.classList.remove("pointerEvents");
                button7.classList.remove("pointerEvents");
                button8.classList.remove("pointerEvents");
                button9.classList.remove("pointerEvents");
                button10.classList.remove("pointerEvents");
                button11.classList.remove("pointerEvents");
                button12.classList.remove("pointerEvents");
                button13.classList.remove("pointerEvents");
                button14.classList.remove("pointerEvents");
                button15.classList.remove("pointerEvents");
                button16.classList.remove("pointerEvents");
                alert("Computer hat gewonnen");
                console.log("Computer hat gewonnen");
                while (computerArray.length > 0) {
                    myArrayButtonsMittel.push(computerArray.pop());
                }
                while (spielerArray.length > 0) {
                    myArrayButtonsMittel.push(spielerArray.pop());
                }
                erstStartDrückenMittel();
                console.log(computerArray);
                console.log(spielerArray);
                console.log(myArrayButtonsMittel);
                console.log(spielerpunktestandNumber);
                console.log(computerpunktestandNumber);
                if (rundenanzahlcounterMittel == -1) {
                    if (spielerpunktestandNumber > computerpunktestandNumber) {
                        alert("Spiel ist vorbei. Spieler hat gewonnen");
                    }
                    if (spielerpunktestandNumber == computerpunktestandNumber) {
                        alert("Spiel ist vorbei. Unentschieden!");
                    }
                    if (computerpunktestandNumber > spielerpunktestandNumber) {
                        alert("Spiel ist vorbei. Computer hat gewonnen!");
                    }
                    toggleSchwierigkeitsgradErneutMittel();
                    rundenanzahl.innerHTML = "Runden: 5";
                    spielerpunktestand.innerHTML = "Spieler: 0";
                    computerpunktestand.innerHTML = "Computer: 0";
                    indexzaehler = 0;
                    indexzaehlerSpieler = 1;
                    indexzaehlerComputer = 1;
                    rundenanzahlcounterMittel = 3;
                    location.reload();
                }
            }
            else if (myArrayButtonsMittel.length < 1) {
                alert("Unentschieden");
                console.log("Unentschieden");
                rundenanzahl.innerHTML = "Runden: " + rundenanzahlcounterMittel--;
                computerpunktestand.innerHTML = "Computer: " + indexzaehlerComputer++;
                spielerpunktestand.innerHTML = "Spieler: " + indexzaehlerSpieler++;
                startButtonMittel.classList.remove("pointerEvents");
                button1.classList.remove("pointerEvents");
                button2.classList.remove("pointerEvents");
                button3.classList.remove("pointerEvents");
                button4.classList.remove("pointerEvents");
                button5.classList.remove("pointerEvents");
                button6.classList.remove("pointerEvents");
                button7.classList.remove("pointerEvents");
                button8.classList.remove("pointerEvents");
                button9.classList.remove("pointerEvents");
                button10.classList.remove("pointerEvents");
                button11.classList.remove("pointerEvents");
                button12.classList.remove("pointerEvents");
                button13.classList.remove("pointerEvents");
                button14.classList.remove("pointerEvents");
                button15.classList.remove("pointerEvents");
                button16.classList.remove("pointerEvents");
                while (computerArray.length > 0) {
                    myArrayButtonsMittel.push(computerArray.pop());
                }
                while (spielerArray.length > 0) {
                    myArrayButtonsMittel.push(spielerArray.pop());
                }
                erstStartDrückenMittel();
                console.log(computerArray);
                console.log(spielerArray);
                console.log(myArrayButtonsMittel);
                console.log(spielerpunktestandNumber);
                console.log(computerpunktestandNumber);
                if (rundenanzahlcounterMittel == -1) {
                    if (spielerpunktestandNumber > computerpunktestandNumber) {
                        alert("Spiel ist vorbei. Spieler hat gewonnen");
                    }
                    if (spielerpunktestandNumber == computerpunktestandNumber) {
                        alert("Spiel ist vorbei. Unentschieden!");
                    }
                    if (computerpunktestandNumber > spielerpunktestandNumber) {
                        alert("Spiel ist vorbei. Computer hat gewonnen!");
                    }
                    toggleSchwierigkeitsgradErneutMittel();
                    rundenanzahl.innerHTML = "Runden: 5";
                    spielerpunktestand.innerHTML = "Spieler: 0";
                    computerpunktestand.innerHTML = "Computer: 0";
                    indexzaehler = 0;
                    indexzaehlerSpieler = 1;
                    indexzaehlerComputer = 1;
                    rundenanzahlcounterMittel = 3;
                    location.reload();
                }
            }
        }
        //Gewinnmöglichkeiten//
    });
})(EndabgabeMittel || (EndabgabeMittel = {}));
//----------------------------------------------------------------------------------------------------//
var EndabgabeSchwierig;
(function (EndabgabeSchwierig) {
    //Felder 1-25 wurden definiert//
    var button1 = document.getElementById("btn1");
    var button2 = document.getElementById("btn2");
    var button3 = document.getElementById("btn3");
    var button4 = document.getElementById("btn4");
    var button5 = document.getElementById("btn5");
    var button6 = document.getElementById("btn6");
    var button7 = document.getElementById("btn7");
    var button8 = document.getElementById("btn8");
    var button9 = document.getElementById("btn9");
    var button10 = document.getElementById("btn10");
    var button11 = document.getElementById("btn11");
    var button12 = document.getElementById("btn12");
    var button13 = document.getElementById("btn13");
    var button14 = document.getElementById("btn14");
    var button15 = document.getElementById("btn15");
    var button16 = document.getElementById("btn16");
    var button17 = document.getElementById("btn17");
    var button18 = document.getElementById("btn18");
    var button19 = document.getElementById("btn19");
    var button20 = document.getElementById("btn20");
    var button21 = document.getElementById("btn21");
    var button22 = document.getElementById("btn22");
    var button23 = document.getElementById("btn23");
    var button24 = document.getElementById("btn24");
    var button25 = document.getElementById("btn25");
    //Felder 1-9 wurden definiert//
    //Schwierigkeitsgrade wurden definiert//
    var leicht = document.getElementById("leicht");
    var mittel = document.getElementById("mittel");
    var schwierig = document.getElementById("schwierig");
    //Schwierigkeitsgrade wurden definiert//
    var spielerpunktestandNumber = 0;
    var computerpunktestandNumber = 0;
    //Punktestand und Rundenanzahl wurden definiert//
    var spielerpunktestand = document.getElementById("Spielerpunktestand");
    var computerpunktestand = document.getElementById("Computerpunktestand");
    var rundenanzahl = document.getElementById("Rundenanzahl");
    //Punktestand und Rundenanzahl wurden definiert//
    //Arrays wurden definiert//
    var myArrayButtons = [button1, button2, button3, button4, button5, button6, button7, button8, button9];
    var myArrayButtonsMittel = [button10, button11, button12, button13, button14, button15, button16];
    var myArrayButtonsSchwierig = [button17, button18, button19, button20, button21, button22, button23, button24, button25];
    var spielerArray = [];
    var computerArray = [];
    var spielerBoolean = [true, true, true, true, true, true, true, true, true];
    var computerBoolean = [true, true, true, true, true, true, true, true, true];
    //Arrays wurden definiert//
    //Start Button wurde definiert//
    var startButtonLeicht = document.getElementById("StartLeicht");
    var startButtonMittel = document.getElementById("StartMittel");
    var startButtonSchwierig = document.getElementById("StartSchwierig");
    //Start Button wurde definiert//
    //Indexzähler wurde definiert//
    var indexzaehler = 0;
    var indexzaehlerSpieler = 1;
    var indexzaehlerComputer = 1;
    var rundenanzahlcounter = 2;
    var rundenanzahlcounterMittel = 4;
    var rundenanzahlcounterSchwierig = 4;
    //Indexzähler wurde definiert//
    function toggleSchwierigkeitsgradSchwierig() {
        leicht.classList.add("isHidden");
        mittel.classList.add("isHidden");
        schwierig.classList.add("isHidden");
    }
    function toggleSchwierigkeitsgradErneutSchwierig() {
        leicht.classList.remove("isHidden");
        mittel.classList.remove("isHidden");
    }
    function erstStartDrückenSchwierig() {
        button1.classList.add("pointerEvents");
        button2.classList.add("pointerEvents");
        button3.classList.add("pointerEvents");
        button4.classList.add("pointerEvents");
        button5.classList.add("pointerEvents");
        button6.classList.add("pointerEvents");
        button7.classList.add("pointerEvents");
        button8.classList.add("pointerEvents");
        button9.classList.add("pointerEvents");
        button10.classList.add("pointerEvents");
        button11.classList.add("pointerEvents");
        button12.classList.add("pointerEvents");
        button13.classList.add("pointerEvents");
        button14.classList.add("pointerEvents");
        button15.classList.add("pointerEvents");
        button16.classList.add("pointerEvents");
        button17.classList.add("pointerEvents");
        button18.classList.add("pointerEvents");
        button19.classList.add("pointerEvents");
        button20.classList.add("pointerEvents");
        button21.classList.add("pointerEvents");
        button22.classList.add("pointerEvents");
        button23.classList.add("pointerEvents");
        button24.classList.add("pointerEvents");
        button25.classList.add("pointerEvents");
    }
    function erstStartDrückenRemoveSchwierig() {
        button1.classList.remove("pointerEvents");
        button2.classList.remove("pointerEvents");
        button3.classList.remove("pointerEvents");
        button4.classList.remove("pointerEvents");
        button5.classList.remove("pointerEvents");
        button6.classList.remove("pointerEvents");
        button7.classList.remove("pointerEvents");
        button8.classList.remove("pointerEvents");
        button9.classList.remove("pointerEvents");
        button10.classList.remove("pointerEvents");
        button11.classList.remove("pointerEvents");
        button12.classList.remove("pointerEvents");
        button13.classList.remove("pointerEvents");
        button14.classList.remove("pointerEvents");
        button15.classList.remove("pointerEvents");
        button16.classList.remove("pointerEvents");
        button17.classList.remove("pointerEvents");
        button18.classList.remove("pointerEvents");
        button19.classList.remove("pointerEvents");
        button20.classList.remove("pointerEvents");
        button21.classList.remove("pointerEvents");
        button22.classList.remove("pointerEvents");
        button23.classList.remove("pointerEvents");
        button24.classList.remove("pointerEvents");
        button25.classList.remove("pointerEvents");
    }
    function SpielerHat(elemente) {
        var ergebnis = true;
        for (var index = 0; index < elemente.length; index++) {
            ergebnis = ergebnis && spielerArray.indexOf(elemente[index]) >= 0;
        }
        return ergebnis;
    }
    function ComputerHat(elemente) {
        var ergebnis = true;
        for (var index = 0; index < elemente.length; index++) {
            ergebnis = ergebnis && computerArray.indexOf(elemente[index]) >= 0;
        }
        return ergebnis;
    }
    schwierig.addEventListener("click", function () {
        myArrayButtonsSchwierig.push(button1);
        myArrayButtonsSchwierig.push(button2);
        myArrayButtonsSchwierig.push(button3);
        myArrayButtonsSchwierig.push(button4);
        myArrayButtonsSchwierig.push(button5);
        myArrayButtonsSchwierig.push(button6);
        myArrayButtonsSchwierig.push(button7);
        myArrayButtonsSchwierig.push(button8);
        myArrayButtonsSchwierig.push(button9);
        myArrayButtonsSchwierig.push(button10);
        myArrayButtonsSchwierig.push(button11);
        myArrayButtonsSchwierig.push(button12);
        myArrayButtonsSchwierig.push(button13);
        myArrayButtonsSchwierig.push(button14);
        myArrayButtonsSchwierig.push(button15);
        myArrayButtonsSchwierig.push(button16);
        rundenanzahl.innerHTML = "Runden: 5";
        console.log(myArrayButtonsSchwierig);
    });
    schwierig.addEventListener("click", function () {
        button10.classList.remove("isHidden");
        button11.classList.remove("isHidden");
        button12.classList.remove("isHidden");
        button13.classList.remove("isHidden");
        button14.classList.remove("isHidden");
        button15.classList.remove("isHidden");
        button16.classList.remove("isHidden");
        button17.classList.remove("isHidden");
        button18.classList.remove("isHidden");
        button19.classList.remove("isHidden");
        button20.classList.remove("isHidden");
        button21.classList.remove("isHidden");
        button22.classList.remove("isHidden");
        button23.classList.remove("isHidden");
        button24.classList.remove("isHidden");
        button25.classList.remove("isHidden");
        startButtonLeicht.classList.add("isHidden");
        startButtonMittel.classList.add("isHidden");
        toggleSchwierigkeitsgradSchwierig();
        erstStartDrückenSchwierig();
        //Funktion Kreuz in Felder 1-16 setzen, bei Klick auf eines der Felder (Spielerzug)//
        function SpielerZugSchwierig(button) {
            if (indexzaehler <= myArrayButtonsSchwierig.length) {
                var iKreuz = document.createElement("i");
                iKreuz.className = "fas fa-times";
                button.appendChild(iKreuz);
                button.classList.add("pointerEvents");
                startButtonSchwierig.classList.add("pointerEvents");
                /*
                button.classList.add("pointerEvents");
                */
                button.setAttribute("data-WerHatGedrückt", "Spieler");
                /*
                console.log(button.getAttribute("data-WerHatGedrückt"));
                */
                button.setAttribute("boolean", "false");
                /*disablen des Button
                button.setAttribute("disabled", "true");
                */
                spielerArray.push(button);
                console.log(spielerArray);
                var indexOfButton = myArrayButtonsSchwierig.indexOf(button);
                myArrayButtonsSchwierig.splice(indexOfButton, 1);
                /*
                console.log(myArrayButtons);
                */
                computerZugSchwierig(myArrayButtonsSchwierig[Math.floor(Math.random() * myArrayButtonsSchwierig.length)]);
                /*
                myArrayButtons.pop(button);
                */
                gewinnerErmittelnSchwierig();
                if (myArrayButtonsSchwierig.length == 25) {
                    /*
                    iKreuz.removeAttribute("class");
                    iKreuz.removeAttribute("class");
                    console.log(iKreuz);
                    */
                    for (var index = 0; index < myArrayButtonsSchwierig.length; index++) {
                        document.querySelectorAll("i").forEach(function (b) { return b.removeAttribute("class"); });
                        /*
                        document.querySelectorAll("button").forEach(b => b.removeAttribute("class"));
                        */
                        /*
                        iKreuz.remove();
                        */
                    }
                }
            }
        }
        button1.addEventListener("click", function () { SpielerZugSchwierig(button1); });
        button2.addEventListener("click", function () { SpielerZugSchwierig(button2); });
        button3.addEventListener("click", function () { SpielerZugSchwierig(button3); });
        button4.addEventListener("click", function () { SpielerZugSchwierig(button4); });
        button5.addEventListener("click", function () { SpielerZugSchwierig(button5); });
        button6.addEventListener("click", function () { SpielerZugSchwierig(button6); });
        button7.addEventListener("click", function () { SpielerZugSchwierig(button7); });
        button8.addEventListener("click", function () { SpielerZugSchwierig(button8); });
        button9.addEventListener("click", function () { SpielerZugSchwierig(button9); });
        button10.addEventListener("click", function () { SpielerZugSchwierig(button10); });
        button11.addEventListener("click", function () { SpielerZugSchwierig(button11); });
        button12.addEventListener("click", function () { SpielerZugSchwierig(button12); });
        button13.addEventListener("click", function () { SpielerZugSchwierig(button13); });
        button14.addEventListener("click", function () { SpielerZugSchwierig(button14); });
        button15.addEventListener("click", function () { SpielerZugSchwierig(button15); });
        button16.addEventListener("click", function () { SpielerZugSchwierig(button16); });
        button17.addEventListener("click", function () { SpielerZugSchwierig(button17); });
        button18.addEventListener("click", function () { SpielerZugSchwierig(button18); });
        button19.addEventListener("click", function () { SpielerZugSchwierig(button19); });
        button20.addEventListener("click", function () { SpielerZugSchwierig(button20); });
        button21.addEventListener("click", function () { SpielerZugSchwierig(button21); });
        button22.addEventListener("click", function () { SpielerZugSchwierig(button22); });
        button23.addEventListener("click", function () { SpielerZugSchwierig(button23); });
        button24.addEventListener("click", function () { SpielerZugSchwierig(button24); });
        button25.addEventListener("click", function () { SpielerZugSchwierig(button25); });
        //Funktion Kreuz in Felder 1-9 setzen, bei Klick auf auf eines der Felder (Spielerzug)//
        //Bei Klick auf Start, fängt das Spiel an und Computer macht seinen Zug//
        function startGameSchwierig(button) {
            var iKreis = document.createElement("i");
            iKreis.className = "far fa-circle";
            button.appendChild(iKreis);
            startButtonSchwierig.classList.add("pointerEvents");
            erstStartDrückenRemoveSchwierig();
            button.classList.add("pointerEvents");
            /*
            button.classList.add("pointerEvents");
            */
            button.setAttribute("data-WerHatGedrückt", "Computer");
            /*
            console.log(button.getAttribute("data-WerHatGedrückt"));
            */
            button.setAttribute("boolean", "false");
            /*disablen des Button
            button.setAttribute("disabled", "true");
            */
            computerArray.push(button);
            console.log(computerArray);
            var indexOfButton = myArrayButtonsSchwierig.indexOf(button);
            myArrayButtonsSchwierig.splice(indexOfButton, 1);
            /*
            console.log(myArrayButtons);
            */
            /*
            myArrayButtons.pop(button);
            */
        }
        startButtonSchwierig.addEventListener("click", function () { startGameSchwierig(myArrayButtonsSchwierig[Math.floor(Math.random() * myArrayButtonsSchwierig.length)]); });
        //Bei Klick auf Start, fängt das Spiel an und Computer macht seinen Zug//
        //Wenn Spieler Kreuz gesetzt hat, macht Computer seinen Zug und setzt Kreis//
        function computerZugSchwierig(button) {
            var iKreis = document.createElement("i");
            iKreis.className = "far fa-circle";
            button.appendChild(iKreis);
            button.classList.add("pointerEvents");
            /*
            button.classList.add("pointerEvents");
            */
            button.setAttribute("boolean", "false");
            button.setAttribute("data-WerHatGedrückt", "Computer");
            /*disablen des Button
            button.setAttribute("disabled", "true");
            */
            computerArray.push(button);
            console.log(computerArray);
            var indexOfButton = myArrayButtonsSchwierig.indexOf(button);
            myArrayButtonsSchwierig.splice(indexOfButton, 1);
            /*
            console.log(myArrayButtons);
            */
            /*
            console.log(indexOfButton);
            */
            /*
            myArrayButtons.pop(button);
            */
            gewinnerErmittelnSchwierig();
        }
        //Wenn Spieler Kreuz gesetzt hat, macht Computer seinen Zug und setzt Kreis//
        //Gewinnmöglichkeiten - Mittel//
        function gewinnerErmittelnSchwierig() {
            if (SpielerHat([button1, button2, button3, button13, button21]) || SpielerHat([button4, button5, button6, button14, button22]) ||
                SpielerHat([button7, button8, button9, button15, button23]) || SpielerHat([button10, button11, button12, button16, button24]) ||
                SpielerHat([button17, button18, button19, button20, button25]) || SpielerHat([button1, button4, button7, button10, button17]) || SpielerHat([button2, button5, button8, button11, button18]) ||
                SpielerHat([button3, button6, button9, button12, button19]) || SpielerHat([button13, button14, button15, button16, button20]) || SpielerHat([button21, button22, button23, button24, button25]) ||
                SpielerHat([button1, button5, button9, button16, button25]) || SpielerHat([button21, button14, button9, button11, button17])) {
                spielerpunktestand.innerHTML = "Spieler: " + indexzaehlerSpieler++;
                rundenanzahl.innerHTML = "Runden: " + rundenanzahlcounterSchwierig--;
                spielerpunktestandNumber++;
                startButtonSchwierig.classList.remove("pointerEvents");
                button1.classList.remove("pointerEvents");
                button2.classList.remove("pointerEvents");
                button3.classList.remove("pointerEvents");
                button4.classList.remove("pointerEvents");
                button5.classList.remove("pointerEvents");
                button6.classList.remove("pointerEvents");
                button7.classList.remove("pointerEvents");
                button8.classList.remove("pointerEvents");
                button9.classList.remove("pointerEvents");
                button10.classList.remove("pointerEvents");
                button11.classList.remove("pointerEvents");
                button12.classList.remove("pointerEvents");
                button13.classList.remove("pointerEvents");
                button14.classList.remove("pointerEvents");
                button15.classList.remove("pointerEvents");
                button16.classList.remove("pointerEvents");
                button17.classList.remove("pointerEvents");
                button18.classList.remove("pointerEvents");
                button19.classList.remove("pointerEvents");
                button20.classList.remove("pointerEvents");
                button21.classList.remove("pointerEvents");
                button22.classList.remove("pointerEvents");
                button23.classList.remove("pointerEvents");
                button24.classList.remove("pointerEvents");
                button25.classList.remove("pointerEvents");
                alert("Spieler hat gewonnen");
                console.log("Spieler hat gewonnen");
                while (spielerArray.length > 0) {
                    myArrayButtonsSchwierig.push(spielerArray.pop());
                }
                while (computerArray.length > 0) {
                    myArrayButtonsSchwierig.push(computerArray.pop());
                }
                erstStartDrückenSchwierig();
                console.log(computerArray);
                console.log(spielerArray);
                console.log(myArrayButtonsSchwierig);
                if (rundenanzahlcounterSchwierig == -1) {
                    if (spielerpunktestandNumber > computerpunktestandNumber) {
                        alert("Spiel ist vorbei. Spieler hat gewonnen");
                    }
                    if (spielerpunktestandNumber == computerpunktestandNumber) {
                        alert("Spiel ist vorbei. Unentschieden!");
                    }
                    if (computerpunktestandNumber > spielerpunktestandNumber) {
                        alert("Spiel ist vorbei. Computer hat gewonnen!");
                    }
                    toggleSchwierigkeitsgradErneutSchwierig();
                    rundenanzahl.innerHTML = "Runden: 5";
                    spielerpunktestand.innerHTML = "Spieler: 0";
                    computerpunktestand.innerHTML = "Computer: 0";
                    indexzaehler = 0;
                    indexzaehlerSpieler = 1;
                    indexzaehlerComputer = 1;
                    rundenanzahlcounterSchwierig = 4;
                    location.reload();
                }
            }
            else if (ComputerHat([button1, button2, button3, button13, button21]) || ComputerHat([button4, button5, button6, button14, button22]) ||
                ComputerHat([button7, button8, button9, button15, button23]) || ComputerHat([button10, button11, button12, button16, button24]) ||
                ComputerHat([button17, button18, button19, button20, button25]) || ComputerHat([button1, button4, button7, button10, button17]) || ComputerHat([button2, button5, button8, button11, button18])
                || ComputerHat([button3, button6, button9, button12, button19]) || ComputerHat([button13, button14, button15, button16, button20]) || ComputerHat([button21, button22, button23, button24, button25]) ||
                ComputerHat([button1, button5, button9, button16, button25]) || ComputerHat([button21, button14, button9, button11, button17])) {
                rundenanzahl.innerHTML = "Runden: " + rundenanzahlcounterSchwierig--;
                computerpunktestand.innerHTML = "Computer: " + indexzaehlerComputer++;
                computerpunktestandNumber++;
                startButtonSchwierig.classList.remove("pointerEvents");
                button1.classList.remove("pointerEvents");
                button2.classList.remove("pointerEvents");
                button3.classList.remove("pointerEvents");
                button4.classList.remove("pointerEvents");
                button5.classList.remove("pointerEvents");
                button6.classList.remove("pointerEvents");
                button7.classList.remove("pointerEvents");
                button8.classList.remove("pointerEvents");
                button9.classList.remove("pointerEvents");
                button10.classList.remove("pointerEvents");
                button11.classList.remove("pointerEvents");
                button12.classList.remove("pointerEvents");
                button13.classList.remove("pointerEvents");
                button14.classList.remove("pointerEvents");
                button15.classList.remove("pointerEvents");
                button16.classList.remove("pointerEvents");
                button17.classList.remove("pointerEvents");
                button18.classList.remove("pointerEvents");
                button19.classList.remove("pointerEvents");
                button20.classList.remove("pointerEvents");
                button21.classList.remove("pointerEvents");
                button22.classList.remove("pointerEvents");
                button23.classList.remove("pointerEvents");
                button24.classList.remove("pointerEvents");
                button25.classList.remove("pointerEvents");
                alert("Computer hat gewonnen");
                console.log("Computer hat gewonnen");
                while (computerArray.length > 0) {
                    myArrayButtonsSchwierig.push(computerArray.pop());
                }
                while (spielerArray.length > 0) {
                    myArrayButtonsSchwierig.push(spielerArray.pop());
                }
                erstStartDrückenSchwierig();
                console.log(computerArray);
                console.log(spielerArray);
                console.log(myArrayButtonsSchwierig);
                if (rundenanzahlcounterSchwierig == -1) {
                    if (spielerpunktestandNumber > computerpunktestandNumber) {
                        alert("Spiel ist vorbei. Spieler hat gewonnen");
                    }
                    if (spielerpunktestandNumber == computerpunktestandNumber) {
                        alert("Spiel ist vorbei. Unentschieden!");
                    }
                    if (computerpunktestandNumber > spielerpunktestandNumber) {
                        alert("Spiel ist vorbei. Computer hat gewonnen!");
                    }
                    toggleSchwierigkeitsgradErneutSchwierig();
                    rundenanzahl.innerHTML = "Runden: 5";
                    spielerpunktestand.innerHTML = "Spieler: 0";
                    computerpunktestand.innerHTML = "Computer: 0";
                    indexzaehler = 0;
                    indexzaehlerSpieler = 1;
                    indexzaehlerComputer = 1;
                    rundenanzahlcounterSchwierig = 4;
                    location.reload();
                }
            }
            else if (myArrayButtonsSchwierig.length < 1) {
                alert("Unentschieden");
                console.log("Unentschieden");
                rundenanzahl.innerHTML = "Runden: " + rundenanzahlcounterSchwierig--;
                computerpunktestand.innerHTML = "Computer: " + indexzaehlerComputer++;
                spielerpunktestand.innerHTML = "Spieler: " + indexzaehlerSpieler++;
                startButtonSchwierig.classList.remove("pointerEvents");
                button1.classList.remove("pointerEvents");
                button2.classList.remove("pointerEvents");
                button3.classList.remove("pointerEvents");
                button4.classList.remove("pointerEvents");
                button5.classList.remove("pointerEvents");
                button6.classList.remove("pointerEvents");
                button7.classList.remove("pointerEvents");
                button8.classList.remove("pointerEvents");
                button9.classList.remove("pointerEvents");
                button10.classList.remove("pointerEvents");
                button11.classList.remove("pointerEvents");
                button12.classList.remove("pointerEvents");
                button13.classList.remove("pointerEvents");
                button14.classList.remove("pointerEvents");
                button15.classList.remove("pointerEvents");
                button16.classList.remove("pointerEvents");
                button17.classList.remove("pointerEvents");
                button18.classList.remove("pointerEvents");
                button19.classList.remove("pointerEvents");
                button20.classList.remove("pointerEvents");
                button21.classList.remove("pointerEvents");
                button22.classList.remove("pointerEvents");
                button23.classList.remove("pointerEvents");
                button24.classList.remove("pointerEvents");
                button25.classList.remove("pointerEvents");
                while (computerArray.length > 0) {
                    myArrayButtonsSchwierig.push(computerArray.pop());
                }
                while (spielerArray.length > 0) {
                    myArrayButtonsSchwierig.push(spielerArray.pop());
                }
                erstStartDrückenSchwierig();
                console.log(computerArray);
                console.log(spielerArray);
                console.log(myArrayButtonsSchwierig);
                if (rundenanzahlcounterSchwierig == -1) {
                    if (spielerpunktestandNumber > computerpunktestandNumber) {
                        alert("Spiel ist vorbei. Spieler hat gewonnen");
                    }
                    if (spielerpunktestandNumber == computerpunktestandNumber) {
                        alert("Spiel ist vorbei. Unentschieden!");
                    }
                    if (computerpunktestandNumber > spielerpunktestandNumber) {
                        alert("Spiel ist vorbei. Computer hat gewonnen!");
                    }
                    toggleSchwierigkeitsgradErneutSchwierig();
                    rundenanzahl.innerHTML = "Runden: 5";
                    spielerpunktestand.innerHTML = "Spieler: 0";
                    computerpunktestand.innerHTML = "Computer: 0";
                    indexzaehler = 0;
                    indexzaehlerSpieler = 1;
                    indexzaehlerComputer = 1;
                    rundenanzahlcounterSchwierig = 4;
                    location.reload();
                }
            }
        }
        //Gewinnmöglichkeiten//
    });
})(EndabgabeSchwierig || (EndabgabeSchwierig = {}));
//# sourceMappingURL=script.js.map