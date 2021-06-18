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
    //Felder 1-9 wurden definiert//

    //Arrays wurden definiert//
    var myArrayButtons: HTMLElement[] = [button1, button2, button3, button4, button5, button6, button7, button8, button9];
    var spielerArray: HTMLElement[] = [];
    var computerArray: HTMLElement[] = [];
    var spielerBoolean: boolean[] = [true, true, true, true, true, true, true, true, true];
    var computerBoolean: boolean[] = [true, true, true, true, true, true, true, true, true];
    //Arrays wurden definiert//

    //Start Button wurde definiert//
    var startButton: HTMLElement = document.getElementById("Start");
    //Start Button wurde definiert//

    //Indexzähler wurde definiert//
    var indexzaehler: number = 0;
    //Indexzähler wurde definiert//


    //Funktion Kreuz in Felder 1-9 setzen, bei Klick auf eines der Felder (Spielerzug)//
    function SpielerZug(button: HTMLElement): void {

        

        let iKreuz: HTMLElement = document.createElement("i");
        iKreuz.className = "fas fa-times";
        button.appendChild(iKreuz);
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
        console.log(myArrayButtons);
        computerZug(myArrayButtons[Math.floor(Math.random() * myArrayButtons.length)]);
        /*
        myArrayButtons.pop(button);
        */

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
    //Funktion Kreuz in Felder 1-9 setzen, bei Klick auf auf eines der Felder (Spielerzug)//





    //Bei Klick auf Start, fängt das Spiel an und Computer macht seinen Zug//
    function startGame(button: HTMLElement): void {

        let iKreis: HTMLElement = document.createElement("i");
        iKreis.className = "far fa-circle";
        button.appendChild(iKreis);
        button.setAttribute("data-WerHatGedrückt", "Computer");
        /*
        console.log(button.getAttribute("data-WerHatGedrückt"));
        */
        button.setAttribute("boolean", "false");
        /*disablen des Button
        button.setAttribute("disabled", "true");
        */
        computerArray.push(button);
        let indexOfButton: number = myArrayButtons.indexOf(button);
        myArrayButtons.splice(indexOfButton, 1);
        console.log(myArrayButtons);

        /*
        myArrayButtons.pop(button);
        */
        /*
         console.log(computerArray);
         */

    }

    startButton.addEventListener("click", function (): void { startGame(myArrayButtons[Math.floor(Math.random() * myArrayButtons.length)]); });
    //Bei Klick auf Start, fängt das Spiel an und Computer macht seinen Zug//




    //Wenn Spieler Kreuz gesetzt hat, macht Computer seinen Zug und setzt Kreis//
    function computerZug(button: HTMLElement): void {

        console.log("Hallo");

        /* Methode 2---------------
        if (myArrayButtons == true) {
            
        }
        */

        let iKreis: HTMLElement = document.createElement("i");
        iKreis.className = "far fa-circle";
        button.appendChild(iKreis);
        button.setAttribute("boolean", "false");
        button.setAttribute("data-WerHatGedrückt", "Computer");
        /*disablen des Button
        button.setAttribute("disabled", "true");
        */
        computerArray.push(button);
        console.log(computerArray);

        /* Methode3-------------
        myArrayButtons.filter(function (value) {

            return value == button;

        });
        */

        let indexOfButton: number = myArrayButtons.indexOf(button);
        myArrayButtons.splice(indexOfButton, 1);
        console.log(myArrayButtons);
        console.log(indexOfButton);


        /*
        myArrayButtons.pop(button);
        */



    }


    //Wenn Spieler Kreuz gesetzt hat, macht Computer seinen Zug und setzt Kreis//






}