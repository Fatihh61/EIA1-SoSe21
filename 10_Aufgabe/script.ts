/**
 * Die ToDos werden in dem Array todosText gespeichert
 * Jedes ToDo hat aber, neben dem ToDo-Text, einen zweiten
 * Wert, nämlich ob es erledigt ist oder nicht
 * (checked / unchecked). Der Einsatz von einem eindimensionalen
 * Array ermöglicht aber nur, dass wir ein Wert nach dem anderen auflisten.
 * Den zweiten Wert zu einem ToDo speichern wir also in einem
 * zweiten Array. Beide Arrays beinhalten also Infos zu einem ToDo,
 * den ToDo-Text und den Erledigtstatus eines ToDos. Die entsprechende
 * Stelle eines ToDos zeigt jetzt in den Arrays auf die entsprechenden
 * Werte, bspw. Stelle 0 im Array todosText und Stelle 0 im Array
 * todosChecked gehören zusammen zu einem ToDo.
 */


interface toDoObject {

    todosText: string;
    todosChecked: boolean;

}


let myArray: toDoObject [] = [];




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
}

function updateCounter(): void {
    counterDOMElement.innerHTML = myArray.length + " in total";
}


function addTodo(): void {

    if (inputDOMElement.value != "") {

         myArray.unshift ({

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