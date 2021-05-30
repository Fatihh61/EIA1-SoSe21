var Aufgabe9;
(function (Aufgabe9) {
    var h2 = document.querySelector("h2");
    var indexzaehler = 1;
    var indexzaehler2 = 0;
    var input = document.querySelector("#input");
    input.addEventListener("keypress", function (event) {
        if (event.key == "Enter") {
            var div2 = document.createElement("div");
            div2.className = "Aufgabenblock";
            document.querySelector(".furtherTasks").appendChild(div2);
            indexzaehler++;
            document.querySelector("#inTotal").innerHTML = indexzaehler + " in total";
            var i1_1 = document.createElement("i");
            i1_1.className = "far fa-circle notChecked";
            var i2_1 = document.createElement("i");
            i2_1.className = "far fa-check-circle isHidden checked";
            i1_1.addEventListener("click", function () {
                i1_1.classList.add("isHidden");
                i2_1.classList.remove("isHidden");
            });
            i2_1.addEventListener("click", function () {
                i1_1.classList.remove("isHidden");
                i2_1.classList.add("isHidden");
            });
            var text = new Text(input.value);
            var trashbtn = document.createElement("i");
            trashbtn.className = "fas fa-trash-alt";
            trashbtn.addEventListener("click", function () {
                div2.classList.add("isHidden");
                indexzaehler--;
                document.querySelector("h2").innerHTML = indexzaehler + " in total";
            });
            div2.appendChild(i1_1);
            div2.appendChild(i2_1);
            div2.appendChild(text);
            div2.appendChild(trashbtn);
        }
    });
    /*
    function createTask(): void {
    
        let i1: HTMLElement = document.createElement("i");
        i1.className = "far fa-circle notChecked";
    
        let i2: HTMLElement = document.createElement("i");
        i2.className = "far fa-check-circle isHidden checked";
       
        let t3: HTMLElement = document.createElement("i");
        t3.className = "fas fa-trash-alt";
    
    
        var div2: HTMLDivElement = document.createElement("div");
        div2.className = "Aufgabenblock";
        document.querySelector(".furtherTasks").appendChild(div2);
        div2.innerHTML = input.value;
    
    
        div2.appendChild(i1);
        div2.appendChild(i2);
        div2.appendChild(t3);
    
    
    
    }
    */
    var checked = document.querySelector(".checked");
    var notChecked = document.querySelector(".notChecked");
    var trashButton = document.querySelector(".trash");
    trashButton.addEventListener("click", function () {
        indexzaehler--;
        document.querySelector("h2").innerHTML = indexzaehler + " in total";
        document.querySelector(".Aufgabenblock").classList.add("isHidden");
    });
    notChecked.addEventListener("click", function () {
        document.querySelector("#notChecked").classList.add("isHidden");
        document.querySelector("#checked").classList.remove("isHidden");
        indexzaehler2++;
        document.querySelector("#open").innerHTML = indexzaehler2 + " open";
    });
    checked.addEventListener("click", function () {
        document.querySelector("#checked").classList.add("isHidden");
        document.querySelector("#notChecked").classList.remove("isHidden");
        indexzaehler2--;
        document.querySelector("#open").innerHTML = indexzaehler2 + " open";
    });
    /*
    document.querySelector("#btn").addEventListener("click", function(): void {
    
    var div: HTMLDivElement = document.createElement("div");
    div.className = "Aufgabenblock";
    document.querySelector("#Aufgabenblock").appendChild(div);
    
    console.log(div);
    */
    /*
    if (div == btn ) {
    div.className = "Aufgabenblock";
    document.getElementById("Aufgabenblock").appendChild(div);
    }
    */
    /*versuch text zu kopieren auf die neuen div aufgabenblöcke
    var text: HTMLElement = document.getElementById("text");
    
    text = div;
    */
    /*
    function Hinzufügen(): void {
    var div: HTMLDivElement = document.createElement("div");
    div.innerHTML = "Hallo";
    
    
    }
    */
    /*
    const div: HTMLDivElement = document.createElement("div");
    
    div.innerHTML = "Hallo";
    div.className = "div1";
    
    console.log(div);
    
    
    const aufgabenblock: HTMLElement = document.getElementById("Aufgabenblock");
    
    console.log(aufgabenblock);
    */
})(Aufgabe9 || (Aufgabe9 = {}));
//# sourceMappingURL=script.js.map