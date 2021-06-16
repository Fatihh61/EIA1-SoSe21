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

    //Array mit allen Feldern 1-9 wurde definiert//
    var myArrayButtons: HTMLElement [] = [button1, button2, button3, button4, button5, button6, button7, button8, button9];
    //Array mit allen Feldern 1-9 wurde definiert//

    //Start Button wurde definiert//
    var startButton: HTMLElement = document.getElementById("Start");
    //Start Button wurde definiert//

    //Indexzähler wurden definiert//
    var indexzaehler: number = 0;
    //Indexzähler wurden definiert//


    //Funktion Kreuz in Felder 1-9 setzen, bei Klick auf auf eines der Felder//
    function SpielerZug(button: HTMLElement): void {
        
        let iKreuz: HTMLElement = document.createElement("i");
        iKreuz.className = "fas fa-times";
        button.appendChild(iKreuz);
        button.setAttribute("data-WerHatGedrückt", "Spieler");
        console.log(button.getAttribute("data-WerHatGedrückt"));
        

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
    //Funktion Kreuz in Felder 1-9 setzen, bei Klick auf auf eines der Felder//






    function startGame(button: HTMLElement): void {

        let iKreis: HTMLElement = document.createElement("i");
        iKreis.className = "far fa-circle";
        button.appendChild(iKreis);
        /* Disablen des Button
        button.setAttribute("disabled", "true");
        console.log(button);
        */
        
        
    }

    startButton.addEventListener("click", function(): void {startGame(myArrayButtons[Math.floor(Math.random() * myArrayButtons.length)]); });
    





}