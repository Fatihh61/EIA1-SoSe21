var Endabgabe;
(function (Endabgabe) {
    var Button1 = document.getElementById("btn1");
    var Button2 = document.getElementById("btn2");
    var Button3 = document.getElementById("btn3");
    var Button4 = document.getElementById("btn4");
    var Button5 = document.getElementById("btn5");
    var Button6 = document.getElementById("btn6");
    var Button7 = document.getElementById("btn7");
    var Button8 = document.getElementById("btn8");
    var Button9 = document.getElementById("btn9");
    function fontSetzen(button) {
        var iKreuz = document.createElement("i");
        iKreuz.className = "fas fa-times";
        button.appendChild(iKreuz);
        console.log(Button1);
    }
    Button1.addEventListener("click", function () { fontSetzen(Button1); });
    Button2.addEventListener("click", function () { fontSetzen(Button2); });
    Button3.addEventListener("click", function () { fontSetzen(Button3); });
    Button4.addEventListener("click", function () { fontSetzen(Button4); });
    Button5.addEventListener("click", function () { fontSetzen(Button5); });
    Button6.addEventListener("click", function () { fontSetzen(Button6); });
    Button7.addEventListener("click", function () { fontSetzen(Button7); });
    Button8.addEventListener("click", function () { fontSetzen(Button8); });
    Button9.addEventListener("click", function () { fontSetzen(Button9); });
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=script.js.map