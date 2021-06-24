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
    let leicht: HTMLElement = document.getElementById("leicht");
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
    var startButtonLeicht: HTMLElement = document.getElementById("StartLeicht");
    var startButtonMittel: HTMLElement = document.getElementById("StartMittel");
    var startButtonSchwierig: HTMLElement = document.getElementById("StartSchwierig");
    //Start Button wurde definiert//

    //Indexzähler wurde definiert//
    var indexzaehler: number = 0;
    var indexzaehlerSpieler: number = 1;
    var indexzaehlerComputer: number = 1;
    var rundenanzahlcounter: number = 2;
    var rundenanzahlcounterMittel: number = 4;
    //Indexzähler wurde definiert//


    function toggleSchwierigkeitsgrad(): void {

        mittel.classList.add("isHidden");
        schwierig.classList.add("isHidden");
    }




    function toggleSchwierigkeitsgradErneut(): void {

        mittel.classList.remove("isHidden");
        schwierig.classList.remove("isHidden");

    }



    leicht.addEventListener("click", function (): void {

        startButtonMittel.classList.add("isHidden");
        startButtonSchwierig.classList.add("isHidden");
        toggleSchwierigkeitsgrad();












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

        startButtonLeicht.addEventListener("click", function (): void { startGame(myArrayButtons[Math.floor(Math.random() * myArrayButtons.length)]); });
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
        //Wenn Spieler Kreuz gesetzt hat, macht Computer seinen Zug und setzt Kreis//


        //Gewinnmöglichkeiten//
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
                    toggleSchwierigkeitsgradErneut();
                    rundenanzahl.innerHTML = "Runden: 3";
                    spielerpunktestand.innerHTML = "Spieler: 0";
                    computerpunktestand.innerHTML = "Computer: 0";
                    indexzaehler = 0;
                    indexzaehlerSpieler = 1;
                    indexzaehlerComputer = 1;
                    rundenanzahlcounter = 2;
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
                    toggleSchwierigkeitsgradErneut();
                    rundenanzahl.innerHTML = "Runden: 3";
                    spielerpunktestand.innerHTML = "Spieler: 0";
                    computerpunktestand.innerHTML = "Computer: 0";
                    indexzaehler = 0;
                    indexzaehlerSpieler = 1;
                    indexzaehlerComputer = 1;
                    rundenanzahlcounter = 2;
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
                    toggleSchwierigkeitsgradErneut();
                    rundenanzahl.innerHTML = "Runden: 3";
                    spielerpunktestand.innerHTML = "Spieler: 0";
                    computerpunktestand.innerHTML = "Computer: 0";
                    indexzaehler = 0;
                    indexzaehlerSpieler = 1;
                    indexzaehlerComputer = 1;
                    rundenanzahlcounter = 2;


                }


            }


        }
        //Gewinnmöglichkeiten//



    });





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







}



//---------------------------------------------------------------------------------------------------------//




namespace EndabgabeMittel {

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
    let leicht: HTMLElement = document.getElementById("leicht");
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
    var startButtonLeicht: HTMLElement = document.getElementById("StartLeicht");
    var startButtonMittel: HTMLElement = document.getElementById("StartMittel");
    var startButtonSchwierig: HTMLElement = document.getElementById("StartSchwierig");
    //Start Button wurde definiert//

    //Indexzähler wurde definiert//
    var indexzaehler: number = 0;
    var indexzaehlerSpieler: number = 1;
    var indexzaehlerComputer: number = 1;
    var rundenanzahlcounter: number = 2;
    var rundenanzahlcounterMittel: number = 3;
    //Indexzähler wurde definiert//


    function toggleSchwierigkeitsgradMittel(): void {

        leicht.classList.add("isHidden");
        schwierig.classList.add("isHidden");
    }

    function toggleSchwierigkeitsgradErneutMittel(): void {

        leicht.classList.remove("isHidden");
        schwierig.classList.remove("isHidden");
        
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
















    mittel.addEventListener("click", function (): void {

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



    });

    mittel.addEventListener("click", function (): void {

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
        function SpielerZugMittel(button: HTMLElement): void {

            if (indexzaehler <= myArrayButtonsMittel.length) {

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

                let indexOfButton: number = myArrayButtonsMittel.indexOf(button);
                myArrayButtonsMittel.splice(indexOfButton, 1);
                /*
                console.log(myArrayButtons);
                */
                computerZugMittel(myArrayButtonsMittel[Math.floor(Math.random() * myArrayButtonsMittel.length)]);
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

                    for (let index: number = 0; index < myArrayButtonsMittel.length; index++) {

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

        button1.addEventListener("click", function (): void { SpielerZugMittel(button1); });
        button2.addEventListener("click", function (): void { SpielerZugMittel(button2); });
        button3.addEventListener("click", function (): void { SpielerZugMittel(button3); });
        button4.addEventListener("click", function (): void { SpielerZugMittel(button4); });
        button5.addEventListener("click", function (): void { SpielerZugMittel(button5); });
        button6.addEventListener("click", function (): void { SpielerZugMittel(button6); });
        button7.addEventListener("click", function (): void { SpielerZugMittel(button7); });
        button8.addEventListener("click", function (): void { SpielerZugMittel(button8); });
        button9.addEventListener("click", function (): void { SpielerZugMittel(button9); });
        button10.addEventListener("click", function (): void { SpielerZugMittel(button10); });
        button11.addEventListener("click", function (): void { SpielerZugMittel(button11); });
        button12.addEventListener("click", function (): void { SpielerZugMittel(button12); });
        button13.addEventListener("click", function (): void { SpielerZugMittel(button13); });
        button14.addEventListener("click", function (): void { SpielerZugMittel(button14); });
        button15.addEventListener("click", function (): void { SpielerZugMittel(button15); });
        button16.addEventListener("click", function (): void { SpielerZugMittel(button16); });
        //Funktion Kreuz in Felder 1-9 setzen, bei Klick auf auf eines der Felder (Spielerzug)//



        //Bei Klick auf Start, fängt das Spiel an und Computer macht seinen Zug//
        function startGameMittel(button: HTMLElement): void {


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

            let indexOfButton: number = myArrayButtonsMittel.indexOf(button);
            myArrayButtonsMittel.splice(indexOfButton, 1);
            /*
            console.log(myArrayButtons);
            */
            /*
            myArrayButtons.pop(button);
            */







        }

        startButtonMittel.addEventListener("click", function (): void { startGameMittel(myArrayButtonsMittel[Math.floor(Math.random() * myArrayButtonsMittel.length)]); });
        //Bei Klick auf Start, fängt das Spiel an und Computer macht seinen Zug//



        //Wenn Spieler Kreuz gesetzt hat, macht Computer seinen Zug und setzt Kreis//
        function computerZugMittel(button: HTMLElement): void {

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

            let indexOfButton: number = myArrayButtonsMittel.indexOf(button);
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
        function gewinnerErmittelnMittel(): void {


            if (SpielerHat([button1, button2, button3, button13]) || SpielerHat([button4, button5, button6, button14]) ||
                SpielerHat([button7, button8, button9, button15]) || SpielerHat([button10, button11, button12, button16]) ||
                SpielerHat([button1, button4, button7, button10]) || SpielerHat([button2, button5, button8, button11]) ||
                SpielerHat([button3, button6, button9, button12]) || SpielerHat([button13, button14, button15, button16]) ||
                SpielerHat([button1, button5, button9, button16]) || SpielerHat([button13, button6, button8, button10])) {

                spielerpunktestand.innerHTML = "Spieler: " + indexzaehlerSpieler++;



                rundenanzahl.innerHTML = "Runden: " + rundenanzahlcounterMittel--;
                alert("Spieler hat gewonnen");
                console.log("Spieler hat gewonnen");


                while (spielerArray.length > 0) {


                    myArrayButtonsMittel.push(spielerArray.pop());





                }



                while (computerArray.length > 0) {

                    myArrayButtonsMittel.push(computerArray.pop());

                }



                console.log(computerArray);
                console.log(spielerArray);
                console.log(myArrayButtonsMittel);

                if (rundenanzahlcounterMittel == -1) {
                    alert("Spiel ist vorbei");
                    toggleSchwierigkeitsgradErneutMittel();
                    rundenanzahl.innerHTML = "Runden: 5";
                    spielerpunktestand.innerHTML = "Spieler: 0";
                    computerpunktestand.innerHTML = "Computer: 0";
                    indexzaehler = 0;
                    indexzaehlerSpieler = 1;
                    indexzaehlerComputer = 1;
                    rundenanzahlcounterMittel = 3;
                }
                




            } else if (ComputerHat([button1, button2, button3, button13]) || ComputerHat([button4, button5, button6, button14]) ||
                ComputerHat([button7, button8, button9, button15]) || ComputerHat([button10, button11, button12, button16]) ||
                ComputerHat([button1, button4, button7, button10]) || ComputerHat([button2, button5, button8, button11]) ||
                ComputerHat([button3, button6, button9, button12]) || ComputerHat([button13, button14, button15, button16]) ||
                ComputerHat([button1, button5, button9, button16]) || ComputerHat([button13, button6, button8, button10])) {

                rundenanzahl.innerHTML = "Runden: " + rundenanzahlcounterMittel--;
                computerpunktestand.innerHTML = "Computer: " + indexzaehlerComputer++;
                alert("Computer hat gewonnen");
                console.log("Computer hat gewonnen");


                while (computerArray.length > 0) {

                    myArrayButtonsMittel.push(computerArray.pop());

                }

                while (spielerArray.length > 0) {


                    myArrayButtonsMittel.push(spielerArray.pop());



                }


                console.log(computerArray);
                console.log(spielerArray);
                console.log(myArrayButtonsMittel);

                if (rundenanzahlcounterMittel == -1) {
                    alert("Spiel ist vorbei");
                    toggleSchwierigkeitsgradErneutMittel();
                    rundenanzahl.innerHTML = "Runden: 5";
                    spielerpunktestand.innerHTML = "Spieler: 0";
                    computerpunktestand.innerHTML = "Computer: 0";
                    indexzaehler = 0;
                    indexzaehlerSpieler = 1;
                    indexzaehlerComputer = 1;
                    rundenanzahlcounterMittel = 3;
                }
                



            } else if (myArrayButtonsMittel.length < 1) {

                alert("Unentschieden");
                console.log("Unentschieden");
                rundenanzahl.innerHTML = "Runden: " + rundenanzahlcounterMittel--;
                computerpunktestand.innerHTML = "Computer: " + indexzaehlerComputer++;
                spielerpunktestand.innerHTML = "Spieler: " + indexzaehlerSpieler++;




                while (computerArray.length > 0) {

                    myArrayButtonsMittel.push(computerArray.pop());

                }

                while (spielerArray.length > 0) {


                    myArrayButtonsMittel.push(spielerArray.pop());



                }



                console.log(computerArray);
                console.log(spielerArray);
                console.log(myArrayButtonsMittel);

                if (rundenanzahlcounterMittel == -1) {

                    alert("Spiel ist vorbei");
                    toggleSchwierigkeitsgradErneutMittel();
                    rundenanzahl.innerHTML = "Runden: 5";
                    spielerpunktestand.innerHTML = "Spieler: 0";
                    computerpunktestand.innerHTML = "Computer: 0";
                    indexzaehler = 0;
                    indexzaehlerSpieler = 1;
                    indexzaehlerComputer = 1;
                    rundenanzahlcounterMittel = 3;

                }
                

            }


        }
        //Gewinnmöglichkeiten//












    });

}




//----------------------------------------------------------------------------------------------------//




namespace EndabgabeSchwierig {

    //Felder 1-25 wurden definiert//
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
    let leicht: HTMLElement = document.getElementById("leicht");
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
    var myArrayButtonsSchwierig: HTMLElement[] = [button17, button18, button19, button20, button21, button22, button23, button24, button25];
    let spielerArray: HTMLElement[] = [];
    var computerArray: HTMLElement[] = [];
    var spielerBoolean: boolean[] = [true, true, true, true, true, true, true, true, true];
    var computerBoolean: boolean[] = [true, true, true, true, true, true, true, true, true];
    //Arrays wurden definiert//

    //Start Button wurde definiert//
    var startButtonLeicht: HTMLElement = document.getElementById("StartLeicht");
    var startButtonMittel: HTMLElement = document.getElementById("StartMittel");
    var startButtonSchwierig: HTMLElement = document.getElementById("StartSchwierig");
    //Start Button wurde definiert//

    //Indexzähler wurde definiert//
    var indexzaehler: number = 0;
    var indexzaehlerSpieler: number = 1;
    var indexzaehlerComputer: number = 1;
    var rundenanzahlcounter: number = 2;
    var rundenanzahlcounterMittel: number = 4;
    var rundenanzahlcounterSchwierig: number = 4;
    //Indexzähler wurde definiert//


    function toggleSchwierigkeitsgradSchwierig(): void {

        leicht.classList.add("isHidden");
        mittel.classList.add("isHidden");
    }

    function toggleSchwierigkeitsgradErneutSchwierig(): void {

        leicht.classList.remove("isHidden");
        mittel.classList.remove("isHidden");
        
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
















    schwierig.addEventListener("click", function (): void {

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

    schwierig.addEventListener("click", function (): void {

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














        //Funktion Kreuz in Felder 1-16 setzen, bei Klick auf eines der Felder (Spielerzug)//
        function SpielerZugSchwierig(button: HTMLElement): void {

            if (indexzaehler <= myArrayButtonsSchwierig.length) {

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

                let indexOfButton: number = myArrayButtonsSchwierig.indexOf(button);
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

                    for (let index: number = 0; index < myArrayButtonsSchwierig.length; index++) {

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

        button1.addEventListener("click", function (): void { SpielerZugSchwierig(button1); });
        button2.addEventListener("click", function (): void { SpielerZugSchwierig(button2); });
        button3.addEventListener("click", function (): void { SpielerZugSchwierig(button3); });
        button4.addEventListener("click", function (): void { SpielerZugSchwierig(button4); });
        button5.addEventListener("click", function (): void { SpielerZugSchwierig(button5); });
        button6.addEventListener("click", function (): void { SpielerZugSchwierig(button6); });
        button7.addEventListener("click", function (): void { SpielerZugSchwierig(button7); });
        button8.addEventListener("click", function (): void { SpielerZugSchwierig(button8); });
        button9.addEventListener("click", function (): void { SpielerZugSchwierig(button9); });
        button10.addEventListener("click", function (): void { SpielerZugSchwierig(button10); });
        button11.addEventListener("click", function (): void { SpielerZugSchwierig(button11); });
        button12.addEventListener("click", function (): void { SpielerZugSchwierig(button12); });
        button13.addEventListener("click", function (): void { SpielerZugSchwierig(button13); });
        button14.addEventListener("click", function (): void { SpielerZugSchwierig(button14); });
        button15.addEventListener("click", function (): void { SpielerZugSchwierig(button15); });
        button16.addEventListener("click", function (): void { SpielerZugSchwierig(button16); });
        button17.addEventListener("click", function (): void { SpielerZugSchwierig(button17); });
        button18.addEventListener("click", function (): void { SpielerZugSchwierig(button18); });
        button19.addEventListener("click", function (): void { SpielerZugSchwierig(button19); });
        button20.addEventListener("click", function (): void { SpielerZugSchwierig(button20); });
        button21.addEventListener("click", function (): void { SpielerZugSchwierig(button21); });
        button22.addEventListener("click", function (): void { SpielerZugSchwierig(button22); });
        button23.addEventListener("click", function (): void { SpielerZugSchwierig(button23); });
        button24.addEventListener("click", function (): void { SpielerZugSchwierig(button24); });
        button25.addEventListener("click", function (): void { SpielerZugSchwierig(button25); });
        //Funktion Kreuz in Felder 1-9 setzen, bei Klick auf auf eines der Felder (Spielerzug)//



        //Bei Klick auf Start, fängt das Spiel an und Computer macht seinen Zug//
        function startGameSchwierig(button: HTMLElement): void {


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

            let indexOfButton: number = myArrayButtonsSchwierig.indexOf(button);
            myArrayButtonsSchwierig.splice(indexOfButton, 1);
            /*
            console.log(myArrayButtons);
            */
            /*
            myArrayButtons.pop(button);
            */







        }

        startButtonSchwierig.addEventListener("click", function (): void { startGameSchwierig(myArrayButtonsSchwierig[Math.floor(Math.random() * myArrayButtonsSchwierig.length)]); });
        //Bei Klick auf Start, fängt das Spiel an und Computer macht seinen Zug//



        //Wenn Spieler Kreuz gesetzt hat, macht Computer seinen Zug und setzt Kreis//
        function computerZugSchwierig(button: HTMLElement): void {

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

            let indexOfButton: number = myArrayButtonsSchwierig.indexOf(button);
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
        function gewinnerErmittelnSchwierig(): void {


            if (SpielerHat([button1, button2, button3, button13, button21]) || SpielerHat([button4, button5, button6, button14, button22]) ||
                SpielerHat([button7, button8, button9, button15, button23]) || SpielerHat([button10, button11, button12, button16, button24]) ||
                SpielerHat([button17, button18, button19, button20, button25]) || SpielerHat([button1, button4, button7, button10, button17]) || SpielerHat([button2, button5, button8, button11, button18]) ||
                SpielerHat([button3, button6, button9, button12, button19]) || SpielerHat([button13, button14, button15, button16, button20]) || SpielerHat([button21, button22, button23, button24, button25]) ||
                SpielerHat([button1, button5, button9, button16, button25]) || SpielerHat([button21, button14, button9, button11, button17])) {

                spielerpunktestand.innerHTML = "Spieler: " + indexzaehlerSpieler++;



                rundenanzahl.innerHTML = "Runden: " + rundenanzahlcounterSchwierig--;
                alert("Spieler hat gewonnen");
                console.log("Spieler hat gewonnen");


                while (spielerArray.length > 0) {


                    myArrayButtonsSchwierig.push(spielerArray.pop());





                }



                while (computerArray.length > 0) {

                    myArrayButtonsSchwierig.push(computerArray.pop());

                }



                console.log(computerArray);
                console.log(spielerArray);
                console.log(myArrayButtonsSchwierig);

                if (rundenanzahlcounterSchwierig == -1) {
                    alert("Spiel ist vorbei");
                    toggleSchwierigkeitsgradErneutSchwierig();
                    rundenanzahl.innerHTML = "Runden: 5";
                    spielerpunktestand.innerHTML = "Spieler: 0";
                    computerpunktestand.innerHTML = "Computer: 0";
                    indexzaehler = 0;
                    indexzaehlerSpieler = 1;
                    indexzaehlerComputer = 1;
                    rundenanzahlcounterSchwierig = 4;
                }
                




            } else if (ComputerHat([button1, button2, button3, button13, button21]) || ComputerHat([button4, button5, button6, button14, button22]) ||
                ComputerHat([button7, button8, button9, button15, button23]) || ComputerHat([button10, button11, button12, button16, button24]) ||
                ComputerHat([button17, button18, button19, button20, button25]) || ComputerHat([button1, button4, button7, button10, button17]) || ComputerHat([button2, button5, button8, button11, button18])
                || ComputerHat([button3, button6, button9, button12, button19]) || ComputerHat([button13, button14, button15, button16, button20]) || ComputerHat([button21, button22, button23, button24, button25]) ||
                ComputerHat([button1, button5, button9, button16, button25]) || ComputerHat([button21, button14, button9, button11, button17])) {

                rundenanzahl.innerHTML = "Runden: " + rundenanzahlcounterSchwierig--;
                computerpunktestand.innerHTML = "Computer: " + indexzaehlerComputer++;
                alert("Computer hat gewonnen");
                console.log("Computer hat gewonnen");


                while (computerArray.length > 0) {

                    myArrayButtonsSchwierig.push(computerArray.pop());

                }

                while (spielerArray.length > 0) {


                    myArrayButtonsSchwierig.push(spielerArray.pop());



                }


                console.log(computerArray);
                console.log(spielerArray);
                console.log(myArrayButtonsSchwierig);

                if (rundenanzahlcounterSchwierig == -1) {
                    alert("Spiel ist vorbei");
                    toggleSchwierigkeitsgradErneutSchwierig();
                    rundenanzahl.innerHTML = "Runden: 5";
                    spielerpunktestand.innerHTML = "Spieler: 0";
                    computerpunktestand.innerHTML = "Computer: 0";
                    indexzaehler = 0;
                    indexzaehlerSpieler = 1;
                    indexzaehlerComputer = 1;
                    rundenanzahlcounterSchwierig = 4;
                }
                



            } else if (myArrayButtonsSchwierig.length < 1) {

                alert("Unentschieden");
                console.log("Unentschieden");
                rundenanzahl.innerHTML = "Runden: " + rundenanzahlcounterSchwierig--;
                computerpunktestand.innerHTML = "Computer: " + indexzaehlerComputer++;
                spielerpunktestand.innerHTML = "Spieler: " + indexzaehlerSpieler++;




                while (computerArray.length > 0) {

                    myArrayButtonsSchwierig.push(computerArray.pop());

                }

                while (spielerArray.length > 0) {


                    myArrayButtonsSchwierig.push(spielerArray.pop());



                }



                console.log(computerArray);
                console.log(spielerArray);
                console.log(myArrayButtonsSchwierig);

                if (rundenanzahlcounterSchwierig == -1) {

                    alert("Spiel ist vorbei");
                    toggleSchwierigkeitsgradErneutSchwierig();
                    rundenanzahl.innerHTML = "Runden: 5";
                    spielerpunktestand.innerHTML = "Spieler: 0";
                    computerpunktestand.innerHTML = "Computer: 0";
                    indexzaehler = 0;
                    indexzaehlerSpieler = 1;
                    indexzaehlerComputer = 1;
                    rundenanzahlcounterSchwierig = 4;

                }
                

            }


        }
        //Gewinnmöglichkeiten//












    });

}