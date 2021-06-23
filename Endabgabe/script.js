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
    //Felder 1-9 wurden definiert//
    //Schwierigkeitsgrade wurden definiert//
    var mittel = document.getElementById("mittel");
    var schwierig = document.getElementById("schwierig");
    //Punktestand und Rundenanzahl wurden definiert//
    var spielerpunktestand = document.getElementById("Spielerpunktestand");
    var computerpunktestand = document.getElementById("Computerpunktestand");
    var rundenanzahl = document.getElementById("Rundenanzahl");
    //Punktestand und Rundenanzahl wurden definiert//
    //Arrays wurden definiert//
    var myArrayButtons = [button1, button2, button3, button4, button5, button6, button7, button8, button9];
    var spielerArray = [];
    var computerArray = [];
    var spielerBoolean = [true, true, true, true, true, true, true, true, true];
    var computerBoolean = [true, true, true, true, true, true, true, true, true];
    //Arrays wurden definiert//
    //Start Button wurde definiert//
    var startButton = document.getElementById("Start");
    //Start Button wurde definiert//
    //Indexzähler wurde definiert//
    var indexzaehler = 0;
    var indexzaehlerSpieler = 1;
    var indexzaehlerComputer = 1;
    var rundenanzahlcounter = 2;
    //Indexzähler wurde definiert//
    //Funktion Kreuz in Felder 1-9 setzen, bei Klick auf eines der Felder (Spielerzug)//
    function SpielerZug(button) {
        if (indexzaehler <= myArrayButtons.length) {
            var iKreuz = document.createElement("i");
            iKreuz.className = "fas fa-times";
            button.appendChild(iKreuz);
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
    //Funktion Kreuz in Felder 1-9 setzen, bei Klick auf auf eines der Felder (Spielerzug)//
    //Bei Klick auf Start, fängt das Spiel an und Computer macht seinen Zug//
    function startGame(button) {
        var iKreis = document.createElement("i");
        iKreis.className = "far fa-circle";
        button.appendChild(iKreis);
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
    startButton.addEventListener("click", function () { startGame(myArrayButtons[Math.floor(Math.random() * myArrayButtons.length)]); });
    //Bei Klick auf Start, fängt das Spiel an und Computer macht seinen Zug//
    //Wenn Spieler Kreuz gesetzt hat, macht Computer seinen Zug und setzt Kreis//
    function computerZug(button) {
        var iKreis = document.createElement("i");
        iKreis.className = "far fa-circle";
        button.appendChild(iKreis);
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
    function gewinnerErmitteln() {
        if (SpielerHat([button1, button2, button3]) || SpielerHat([button4, button5, button6]) ||
            SpielerHat([button7, button8, button9]) || SpielerHat([button1, button4, button7]) ||
            SpielerHat([button2, button5, button8]) || SpielerHat([button3, button6, button9]) ||
            SpielerHat([button1, button5, button9]) || SpielerHat([button3, button5, button7])) {
            spielerpunktestand.innerHTML = "Spieler: " + indexzaehlerSpieler++;
            rundenanzahl.innerHTML = "Runden: " + rundenanzahlcounter--;
            alert("Spieler hat gewonnen");
            console.log("Spieler hat gewonnen");
            while (spielerArray.length > 0) {
                myArrayButtons.push(spielerArray.pop());
            }
            while (computerArray.length > 0) {
                myArrayButtons.push(computerArray.pop());
            }
            console.log(computerArray);
            console.log(spielerArray);
            console.log(myArrayButtons);
            if (rundenanzahlcounter == -1) {
                alert("Spiel ist vorbei");
                toggleSchwierigkeitsgrad();
            }
        }
        else if (ComputerHat([button1, button2, button3]) || ComputerHat([button4, button5, button6]) ||
            ComputerHat([button7, button8, button9]) || ComputerHat([button1, button4, button7]) ||
            ComputerHat([button2, button5, button8]) || ComputerHat([button3, button6, button9]) ||
            ComputerHat([button1, button5, button9]) || ComputerHat([button3, button5, button7])) {
            rundenanzahl.innerHTML = "Runden: " + rundenanzahlcounter--;
            computerpunktestand.innerHTML = "Computer: " + indexzaehlerComputer++;
            alert("Computer hat gewonnen");
            console.log("Computer hat gewonnen");
            while (computerArray.length > 0) {
                myArrayButtons.push(computerArray.pop());
            }
            while (spielerArray.length > 0) {
                myArrayButtons.push(spielerArray.pop());
            }
            console.log(computerArray);
            console.log(spielerArray);
            console.log(myArrayButtons);
            if (rundenanzahlcounter == -1) {
                alert("Spiel ist vorbei");
            }
        }
        else if (myArrayButtons.length < 1) {
            alert("Unentschieden");
            console.log("Unentschieden");
            rundenanzahl.innerHTML = "Runden: " + rundenanzahlcounter--;
            computerpunktestand.innerHTML = "Computer: " + indexzaehlerComputer++;
            spielerpunktestand.innerHTML = "Spieler: " + indexzaehlerSpieler++;
            while (computerArray.length > 0) {
                myArrayButtons.push(computerArray.pop());
            }
            while (spielerArray.length > 0) {
                myArrayButtons.push(spielerArray.pop());
            }
            console.log(computerArray);
            console.log(spielerArray);
            console.log(myArrayButtons);
            if (rundenanzahlcounter == -1) {
                alert("Spiel ist vorbei");
            }
            toggleSchwierigkeitsgradErneut();
        }
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
    function toggleSchwierigkeitsgrad() {
        mittel.classList.add("isHidden");
        schwierig.classList.add("isHidden");
    }
    function toggleSchwierigkeitsgradErneut() {
        mittel.classList.remove("isHidden");
        schwierig.classList.remove("isHidden");
    }
    mittel.addEventListener("click", function () {
        button10.classList.remove("isHidden");
        button11.classList.remove("isHidden");
        button12.classList.remove("isHidden");
        button13.classList.remove("isHidden");
        button14.classList.remove("isHidden");
        button15.classList.remove("isHidden");
        button16.classList.remove("isHidden");
    });
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=script.js.map