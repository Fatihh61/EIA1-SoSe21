var Aufgabe10;
(function (Aufgabe10) {
    var myArray = [];
    var inputDOMElement;
    var addButtonDOMElement;
    var todosDOMElement;
    var counterDOMElement;
    window.addEventListener("load", function () {
        inputDOMElement = document.querySelector("#inputTodo");
        addButtonDOMElement = document.querySelector("#addButton");
        todosDOMElement = document.querySelector("#todos");
        counterDOMElement = document.querySelector("#counter");
        addButtonDOMElement.addEventListener("click", addTodo);
        drawListToDOM();
    });
    //Meine Hauptfunktion, bei der ein Task hinzugefügt wird//
    function drawListToDOM() {
        todosDOMElement.innerHTML = "";
        var _loop_1 = function (index) {
            var todo = document.createElement("div");
            todo.classList.add("todo");
            todo.innerHTML = "<span class='check " + myArray[index].todosChecked + "'><i class='fas fa-check'></i></span>"
                + myArray[index].todosText +
                "<span class='trash fas fa-trash-alt'></span>";
            todo.querySelector(".check").addEventListener("click", function () {
                toggleCheckState(index);
            });
            todo.querySelector(".trash").addEventListener("click", function () {
                deleteTodo(index);
            });
            todosDOMElement.appendChild(todo);
        };
        for (var index = 0; index < myArray.length; index++) {
            _loop_1(index);
        }
        updateCounter();
        openCounter();
        doneCounter();
    }
    //Anzahl an Task wird angezeigt//
    function updateCounter() {
        counterDOMElement.innerHTML = myArray.length + " in total";
    }
    var open = document.querySelector("#counterOpen");
    var done = document.querySelector("#counterDone");
    //Anzahl offener Tasks wird angezeigt//
    function openCounter() {
        var indexzaehleropen = 0;
        for (var index = 0; index < myArray.length; index++) {
            if (myArray[index].todosChecked == false) {
                indexzaehleropen++;
                open.innerHTML = indexzaehleropen + " open";
            }
        }
        open.innerHTML = indexzaehleropen + " open";
    }
    //Anzahl fertiger Tasks wird angezeigt//
    function doneCounter() {
        var indexzaehlerdone = 0;
        for (var index = 0; index < myArray.length; index++) {
            if (myArray[index].todosChecked == true) {
                indexzaehlerdone++;
                console.log(myArray);
            }
        }
        done.innerHTML = indexzaehlerdone + " done";
    }
    //Aus dem Interface wird abgegriffen und der Text zum Task eingefügt//
    function addTodo() {
        if (inputDOMElement.value != "") {
            myArray.unshift({
                todosText: inputDOMElement.value,
                todosChecked: false
            });
            inputDOMElement.value = "";
            drawListToDOM();
        }
    }
    //Check Kreis wird getoggled//
    function toggleCheckState(index) {
        myArray[index].todosChecked = !myArray[index].todosChecked;
        drawListToDOM();
    }
    //Task wird gelöscht bei Klick auf Trash//
    function deleteTodo(index) {
        myArray.splice(index, 1);
        drawListToDOM();
    }
    var voicebutton = document.querySelector("#voicebutton");
    voicebutton.addEventListener("click", function () {
        var artyom = new Artyom();
        artyom.addCommands({
            indexes: ["erstelle Aufgabe *"],
            smart: true,
            action: function (i, wildcard) {
                myArray.unshift({
                    todosText: wildcard,
                    todosChecked: false
                });
                inputDOMElement.value = "";
                drawListToDOM();
                console.log("Neue Aufgabe wird erstellt: " + wildcard);
            }
        });
        function startContinuousArtyom() {
            artyom.fatality();
            setTimeout(function () {
                artyom.initialize({
                    lang: "de-DE",
                    continuous: true,
                    listen: true,
                    interimResults: true,
                    debug: true
                }).then(function () {
                    console.log("Ready!");
                });
            }, 250);
        }
        startContinuousArtyom();
    });
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=script.js.map