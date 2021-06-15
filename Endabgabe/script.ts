namespace Endabgabe {


    var Button1: HTMLElement = document.getElementById("btn1");
    var Button2: HTMLElement = document.getElementById("btn2");
    var Button3: HTMLElement = document.getElementById("btn3");
    var Button4: HTMLElement = document.getElementById("btn4");
    var Button5: HTMLElement = document.getElementById("btn5");
    var Button6: HTMLElement = document.getElementById("btn6");
    var Button7: HTMLElement = document.getElementById("btn7");
    var Button8: HTMLElement = document.getElementById("btn8");
    var Button9: HTMLElement = document.getElementById("btn9");




    function fontSetzen(button: HTMLElement): void {

        let iKreuz: HTMLElement = document.createElement("i");
        iKreuz.className = "fas fa-times";
        button.appendChild(iKreuz);
        console.log(Button1);
        
    }


    Button1.addEventListener("click", function (): void { fontSetzen(Button1); });
    Button2.addEventListener("click", function (): void { fontSetzen(Button2); });
    Button3.addEventListener("click", function (): void { fontSetzen(Button3); });
    Button4.addEventListener("click", function (): void { fontSetzen(Button4); });
    Button5.addEventListener("click", function (): void { fontSetzen(Button5); });
    Button6.addEventListener("click", function (): void { fontSetzen(Button6); });
    Button7.addEventListener("click", function (): void { fontSetzen(Button7); });
    Button8.addEventListener("click", function (): void { fontSetzen(Button8); });
    Button9.addEventListener("click", function (): void { fontSetzen(Button9); });





}
