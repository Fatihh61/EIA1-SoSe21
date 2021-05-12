
// Indexzähler als Array für meinen Beat
/*
var indexzaehler: number = 0;
*/
// Alle Audioelemente als Variable deklariert
var sample: HTMLAudioElement[] = [new Audio("assets/musik/A.mp3"), new Audio("assets/musik/C.mp3"), new Audio("assets/musik/F.mp3"), new Audio("assets/musik/G.mp3"), new Audio("assets/musik/hihat.mp3"), new Audio("assets/musik/kick.mp3"), new Audio("assets/musik/laugh-1.mp3"), new Audio("assets/musik/laugh-2.mp3"), new Audio("assets/musik/snare.mp3")];

// Mein Beat als Array
var beat: HTMLAudioElement[] = [sample[5], sample[8], sample[4]];

// Musik Argument wird abgespielt
function playSample(musik: HTMLAudioElement): void {


    musik.play();


}

document.querySelector("#btn1").addEventListener("click", function (): void { playSample(sample[0]); });
document.querySelector("#btn2").addEventListener("click", function (): void { playSample(sample[1]); });
document.querySelector("#btn3").addEventListener("click", function (): void { playSample(sample[2]); });
document.querySelector("#btn4").addEventListener("click", function (): void { playSample(sample[3]); });
document.querySelector("#btn5").addEventListener("click", function (): void { playSample(sample[4]); });
document.querySelector("#btn6").addEventListener("click", function (): void { playSample(sample[5]); });
document.querySelector("#btn7").addEventListener("click", function (): void { playSample(sample[6]); });
document.querySelector("#btn8").addEventListener("click", function (): void { playSample(sample[7]); });
document.querySelector("#btn9").addEventListener("click", function (): void { playSample(sample[8]); });
document.querySelector("#btn10").addEventListener("click", function (): void { setInterval(function (): void {

        /*beat[indexzaehler].play();*/

        

        for (var indexzaehler: number = 0; indexzaehler <= 3 ; indexzaehler++) {
            setInterval(function() {
                beat[indexzaehler].play();

            }, 1500);
            
        }
/*
        indexzaehler++;
       
        if (indexzaehler >= 3) {

            indexzaehler = 0;

        }
        */
/*
        while (playButtonIsHidden,playBeat,IfStopButtonIsHiddenSetIntervalBZWReset) {
            
        }
        */

        






    },1500 );
});


document.querySelector("#btn10").addEventListener("click", function (): void {

    document.querySelector("#btn10").classList.add("hidden");
    document.querySelector("#btn11").classList.remove("hidden");





});

/*
var stopButton: HTMLElement = document.getElementsByClassName("fas fa-stop-circle");
*/


document.querySelector("#btn11").addEventListener("click", function (): void {

    document.querySelector("#btn11").classList.add("hidden");
    document.querySelector("#btn10").classList.remove("hidden");
    






});



 /* 
    var interval: number;
    interval =
                if (indexzaehler >= 3) {
                    clearInterval(interval)
        
                    indexzaehler = 0
        
                }
        
        */



/* for (indexzaehler; indexzaehler > 4;) {

            beat[indexzaehler].play();





        }
        */