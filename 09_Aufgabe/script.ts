namespace Aufgabe9 {


    let h2: HTMLElement = document.querySelector("h2");



    let indexzaehler: number = 1;
    let indexzaehler2: number = 0;
    let input: HTMLInputElement = document.querySelector("#input");











    input.addEventListener("keypress", function (event: KeyboardEvent): void {
        if ((event as KeyboardEvent).key == "Enter") {
            var div2: HTMLDivElement = document.createElement("div");
            div2.className = "Aufgabenblock";
            document.querySelector(".furtherTasks").appendChild(div2);
            indexzaehler++;
            document.querySelector("#inTotal").innerHTML = indexzaehler + " in total";
            let i1: HTMLElement = document.createElement("i");
            i1.className = "far fa-circle notChecked";
            let i2: HTMLElement = document.createElement("i");
            i2.className = "far fa-check-circle isHidden checked";
            i1.addEventListener("click", function (): void {

                i1.classList.add("isHidden");
                i2.classList.remove("isHidden");

            });
            i2.addEventListener("click", function (): void {

                i1.classList.remove("isHidden");
                i2.classList.add("isHidden");

            });
            let text: Text = new Text(input.value);
            let trashbtn: HTMLElement = document.createElement("i");
            trashbtn.className = "fas fa-trash-alt";
            trashbtn.addEventListener("click", function (): void {

                div2.classList.add("isHidden");
                indexzaehler--;
                document.querySelector("h2").innerHTML = indexzaehler + " in total";



            });
            div2.appendChild(i1);
            div2.appendChild(i2);
            div2.appendChild(text);
            div2.appendChild(trashbtn);


        }
    }


    );













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




    let checked: HTMLElement = document.querySelector(".checked");
    let notChecked: HTMLElement = document.querySelector(".notChecked");
    let trashButton: HTMLElement = document.querySelector(".trash");


    trashButton.addEventListener("click", function (): void {

        indexzaehler--;
        document.querySelector("h2").innerHTML = indexzaehler + " in total";
        document.querySelector(".Aufgabenblock").classList.add("isHidden");


    });




    notChecked.addEventListener("click", function (): void {

        document.querySelector("#notChecked").classList.add("isHidden");
        document.querySelector("#checked").classList.remove("isHidden");
        indexzaehler2++;
        document.querySelector("#open").innerHTML = indexzaehler2 + " open";


    });


    checked.addEventListener("click", function (): void {

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








}