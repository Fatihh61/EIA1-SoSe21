namespace Aufgabe10 {







    interface toDoObject {

        todosText: string;
        todosChecked: boolean;

    }


    let myArray: toDoObject[] = [];




    var inputDOMElement: HTMLInputElement;
    var addButtonDOMElement: HTMLElement;
    var todosDOMElement: HTMLElement;
    var counterDOMElement: HTMLElement;


    window.addEventListener("load", function (): void {


        inputDOMElement = document.querySelector("#inputTodo");
        addButtonDOMElement = document.querySelector("#addButton");
        todosDOMElement = document.querySelector("#todos");
        counterDOMElement = document.querySelector("#counter");


        addButtonDOMElement.addEventListener("click", addTodo);

        drawListToDOM();
    });

    function drawListToDOM(): void {

        todosDOMElement.innerHTML = "";


        for (let index: number = 0; index < myArray.length; index++) {


            let todo: HTMLElement = document.createElement("div");
            todo.classList.add("todo");


            todo.innerHTML = "<span class='check " + myArray[index].todosChecked + "'><i class='fas fa-check'></i></span>"
                + myArray[index].todosText +
                "<span class='trash fas fa-trash-alt'></span>";


            todo.querySelector(".check").addEventListener("click", function (): void {

                toggleCheckState(index);
            });
            todo.querySelector(".trash").addEventListener("click", function (): void {

                deleteTodo(index);
            });


            todosDOMElement.appendChild(todo);

        }

        updateCounter();
        openCounter();
        doneCounter();
    }

    function updateCounter(): void {
        counterDOMElement.innerHTML = myArray.length + " in total";
    }


    var open: HTMLElement = document.querySelector("#counterOpen");
    var done: HTMLElement = document.querySelector("#counterDone");




    function openCounter(): void {
        var indexzaehleropen: number = 0;
        for (let index: number = 0; index < myArray.length; index++) {
            if (myArray[index].todosChecked == false) {
                indexzaehleropen++;
                open.innerHTML = indexzaehleropen + " open";

            }

        }


    }


    function doneCounter(): void {
        var indexzaehlerdone: number = 0;
        for (let index: number = 0; index < myArray.length; index++) {
            if (myArray[index].todosChecked == true) {
                indexzaehlerdone++;
                done.innerHTML = indexzaehlerdone + " done";


            }

        }



    }


    function addTodo(): void {

        if (inputDOMElement.value != "") {

            myArray.unshift({

                todosText: inputDOMElement.value,
                todosChecked: false

            });


            inputDOMElement.value = "";




            drawListToDOM();
        }
    }

    function toggleCheckState(index: number): void {


        myArray[index].todosChecked = !myArray[index].todosChecked;


        drawListToDOM();
    }


    function deleteTodo(index: number): void {

        myArray.splice(index, 1);


        drawListToDOM();
    }


    var voicebutton: HTMLElement = document.querySelector("#voicebutton");


    declare var Artyom: any;

    voicebutton.addEventListener("click", function (): void {
        const artyom: any = new Artyom();

        artyom.addCommands({
            indexes: ["erstelle Aufgabe *"],
            smart: true,
            action: function (i: any, wildcard: string): void {
                myArray.unshift({
                    todosText: wildcard,
                    todosChecked: false
                });

                inputDOMElement.value = "";




                drawListToDOM();

                console.log("Neue Aufgabe wird erstellt: " + wildcard);
            }
        });

        function startContinuousArtyom(): void {
            artyom.fatality();

            setTimeout(
                function (): void {
                    artyom.initialize({
                        lang: "de-DE",
                        continuous: true,
                        listen: true,
                        interimResults: true,
                        debug: true
                    }).then(function (): void {
                        console.log("Ready!");
                    });
                },
                250);
        }

        startContinuousArtyom();

    });







}