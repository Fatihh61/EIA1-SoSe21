namespace Aufgabe8 {

    // Indexzähler als Array für meinen Beat
    var indexzaehler: number = 0;

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
    var myInterval: number;
    document.querySelector("#btn10").addEventListener("click", function (): void {

        myInterval = setInterval(function (): void {


            // Beat wird wiederholt



            beat[indexzaehler].play();
            indexzaehler++;




            if (indexzaehler == 3) {
                indexzaehler = 0;
            }

            document.querySelector("#stopbtn").addEventListener("click", function (): void {


                clearInterval(myInterval);
                indexzaehler = 0;

            });

        },                       300);
        console.log(beat[indexzaehler]);








    });



    // Toggle Funktion Play-Button
    var playbtn: HTMLElement = document.getElementById("playbtn");


    playbtn.addEventListener("click", function (): void {

        document.querySelector("#btn10").classList.add("hidden");
        document.querySelector("#btn11").classList.remove("hidden");


        /*if (beat.length == 0) {
    
        beat.push(sample[5], sample[8], sample[4]);*/

    });



    // Toggle Funktion Stop-Button
    var stopbtn: HTMLElement = document.getElementById("stopbtn");

    stopbtn.addEventListener("click", function (): void {

        document.querySelector("#btn11").classList.add("hidden");
        document.querySelector("#btn10").classList.remove("hidden");
        
    });




    // Delete-button
    var deletebtn: HTMLElement = document.getElementById("deletebtn");
    deletebtn.addEventListener("click", function (): void {
        clearInterval(myInterval);
        beat.length = 0;
        console.log(deletebtn);
        if (beat.length == 0) {
            document.querySelector("#btn10").classList.remove("hidden");
            document.querySelector("#btn11").classList.add("hidden");
        }
    });

   



    // Remix-Button
    var remixbtn: HTMLElement = document.getElementById("remixbtn");
    remixbtn.addEventListener("click", function (): void {
        beat.length = 0;
        console.log(beat);


        while (beat.length < 3) {
            var audioElement: HTMLAudioElement = sample[Math.floor(Math.random() * sample.length)];
            if (beat.indexOf(audioElement) === -1) beat.push(audioElement);
            console.log(beat);
        }






      




    });




}











