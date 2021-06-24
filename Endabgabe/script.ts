namespace Endabgabe {

    //Felder 1-9 wurden definiert//
    var button1: HTMLElement = document.getElementById("btn1");
    var button2: HTMLElement = document.getElementById("btn2");
    var button3: HTMLElement = document.getElementById("btn3");
    var button4: HTMLElement = document.getElementById("btn4");
    var button5: HTMLElement = document.getElementById("btn5");
    var button6: HTMLElement = document.getElementById("btn6");
    var button7: HTMLElement = document.getElementById("btn7");
    var button8: HTMLElement = document.getElementById("btn8");
    var button9: HTMLElement = document.getElementById("btn9");
    var button10: HTMLElement = document.getElementById("btn10");
    var button11: HTMLElement = document.getElementById("btn11");
    var button12: HTMLElement = document.getElementById("btn12");
    var button13: HTMLElement = document.getElementById("btn13");
    var button14: HTMLElement = document.getElementById("btn14");
    var button15: HTMLElement = document.getElementById("btn15");
    var button16: HTMLElement = document.getElementById("btn16");
    var button17: HTMLElement = document.getElementById("btn17");
    var button18: HTMLElement = document.getElementById("btn18");
    var button19: HTMLElement = document.getElementById("btn19");
    var button20: HTMLElement = document.getElementById("btn20");
    var button21: HTMLElement = document.getElementById("btn21");
    var button22: HTMLElement = document.getElementById("btn22");
    var button23: HTMLElement = document.getElementById("btn23");
    var button24: HTMLElement = document.getElementById("btn24");
    var button25: HTMLElement = document.getElementById("btn25");
    //Felder 1-9 wurden definiert//

    //Schwierigkeitsgrade wurden definiert//
    let mittel: HTMLElement = document.getElementById("mittel");
    let schwierig: HTMLElement = document.getElementById("schwierig");

    //Punktestand und Rundenanzahl wurden definiert//
    var spielerpunktestand: HTMLElement = document.getElementById("Spielerpunktestand");
    var computerpunktestand: HTMLElement = document.getElementById("Computerpunktestand");
    var rundenanzahl: HTMLElement = document.getElementById("Rundenanzahl");
    //Punktestand und Rundenanzahl wurden definiert//

    //Arrays wurden definiert//
    var myArrayButtons: HTMLElement[] = [button1, button2, button3, button4, button5, button6, button7, button8, button9];
    var myArrayButtonsMittel: HTMLElement[] = [button10, button11, button12, button13, button14, button15, button16];
    let spielerArray: HTMLElement[] = [];
    var computerArray: HTMLElement[] = [];
    var spielerBoolean: boolean[] = [true, true, true, true, true, true, true, true, true];
    var computerBoolean: boolean[] = [true, true, true, true, true, true, true, true, true];
    //Arrays wurden definiert//

    //Start Button wurde definiert//
    var startButton: HTMLElement = document.getElementById("Start");
    //Start Button wurde definiert//

    //Indexzähler wurde definiert//
    var indexzaehler: number = 0;
    var indexzaehlerSpieler: number = 1;
    var indexzaehlerComputer: number = 1;
    var rundenanzahlcounter: number = 2;
    //Indexzähler wurde definiert//


    //Funktion Kreuz in Felder 1-9 setzen, bei Klick auf eines der Felder (Spielerzug)//
    function SpielerZug(button: HTMLElement): void {

        if (indexzaehler <= myArrayButtons.length) {

            let iKreuz: HTMLElement = document.createElement("i");
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

            let indexOfButton: number = myArrayButtons.indexOf(button);
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

                for (let index: number = 0; index < myArrayButtons.length; index++) {

                    document.querySelectorAll("i").forEach(b => b.removeAttribute("class"));
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

    button1.addEventListener("click", function (): void { SpielerZug(button1); });
    button2.addEventListener("click", function (): void { SpielerZug(button2); });
    button3.addEventListener("click", function (): void { SpielerZug(button3); });
    button4.addEventListener("click", function (): void { SpielerZug(button4); });
    button5.addEventListener("click", function (): void { SpielerZug(button5); });
    button6.addEventListener("click", function (): void { SpielerZug(button6); });
    button7.addEventListener("click", function (): void { SpielerZug(button7); });
    button8.addEventListener("click", function (): void { SpielerZug(button8); });
    button9.addEventListener("click", function (): void { SpielerZug(button9); });
    button10.addEventListener("click", function (): void { SpielerZug(button10); });
    button11.addEventListener("click", function (): void { SpielerZug(button11); });
    button12.addEventListener("click", function (): void { SpielerZug(button12); });
    button13.addEventListener("click", function (): void { SpielerZug(button13); });
    button14.addEventListener("click", function (): void { SpielerZug(button14); });
    button15.addEventListener("click", function (): void { SpielerZug(button15); });
    button16.addEventListener("click", function (): void { SpielerZug(button16); });
    //Funktion Kreuz in Felder 1-9 setzen, bei Klick auf auf eines der Felder (Spielerzug)//





    //Bei Klick auf Start, fängt das Spiel an und Computer macht seinen Zug//
    function startGame(button: HTMLElement): void {


        let iKreis: HTMLElement = document.createElement("i");
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

        let indexOfButton: number = myArrayButtons.indexOf(button);
        myArrayButtons.splice(indexOfButton, 1);
        /*
        console.log(myArrayButtons);
        */
        /*
        myArrayButtons.pop(button);
        */
        toggleSchwierigkeitsgrad();






    }

    startButton.addEventListener("click", function (): void { startGame(myArrayButtons[Math.floor(Math.random() * myArrayButtons.length)]); });
    //Bei Klick auf Start, fängt das Spiel an und Computer macht seinen Zug//




    //Wenn Spieler Kreuz gesetzt hat, macht Computer seinen Zug und setzt Kreis//
    function computerZug(button: HTMLElement): void {

        let iKreis: HTMLElement = document.createElement("i");
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

        let indexOfButton: number = myArrayButtons.indexOf(button);
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


    function gewinnerErmitteln(): void {


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





        } else if (ComputerHat([button1, button2, button3]) || ComputerHat([button4, button5, button6]) ||
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



        } else if (myArrayButtons.length < 1) {

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




    function SpielerHat(elemente: HTMLElement[]): boolean {

        let ergebnis: boolean = true;

        for (let index: number = 0; index < elemente.length; index++) {
            ergebnis = ergebnis && spielerArray.indexOf(elemente[index]) >= 0;

        }


        return ergebnis;


    }

    function ComputerHat(elemente: HTMLElement[]): boolean {

        let ergebnis: boolean = true;

        for (let index: number = 0; index < elemente.length; index++) {
            ergebnis = ergebnis && computerArray.indexOf(elemente[index]) >= 0;

        }

        return ergebnis;


    }



    function toggleSchwierigkeitsgrad(): void {

        mittel.classList.add("isHidden");
        schwierig.classList.add("isHidden");
    }


    function toggleSchwierigkeitsgradErneut(): void {

        mittel.classList.remove("isHidden");
        schwierig.classList.remove("isHidden");

    }




//---------------------------------------------------------------------------------------------------------//



    mittel.addEventListener("click", function (): void {

        myArrayButtons.push(button10);
        myArrayButtons.push(button11);
        myArrayButtons.push(button12);
        myArrayButtons.push(button13);
        myArrayButtons.push(button14);
        myArrayButtons.push(button15);
        myArrayButtons.push(button16);
        console.log(myArrayButtons);



    });



















    mittel.addEventListener("click", function (): void {

        button10.classList.remove("isHidden");
        button11.classList.remove("isHidden");
        button12.classList.remove("isHidden");
        button13.classList.remove("isHidden");
        button14.classList.remove("isHidden");
        button15.classList.remove("isHidden");
        button16.classList.remove("isHidden");


    });


}