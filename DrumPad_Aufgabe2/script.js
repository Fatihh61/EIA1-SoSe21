var Aufgabe8;
(function (Aufgabe8) {
    // Indexzähler als Array für meinen Beat
    var indexzaehler = 0;
    // Alle Audioelemente als Variable deklariert
    var sample = [new Audio("assets/musik/A.mp3"), new Audio("assets/musik/C.mp3"), new Audio("assets/musik/F.mp3"), new Audio("assets/musik/G.mp3"), new Audio("assets/musik/hihat.mp3"), new Audio("assets/musik/kick.mp3"), new Audio("assets/musik/laugh-1.mp3"), new Audio("assets/musik/laugh-2.mp3"), new Audio("assets/musik/snare.mp3")];
    // Mein Beat als Array
    var beat = [sample[5], sample[8], sample[4]];
    // Musik Argument wird abgespielt
    function playSample(musik) {
        musik.play();
    }
    document.querySelector("#btn1").addEventListener("click", function () { playSample(sample[0]); });
    document.querySelector("#btn2").addEventListener("click", function () { playSample(sample[1]); });
    document.querySelector("#btn3").addEventListener("click", function () { playSample(sample[2]); });
    document.querySelector("#btn4").addEventListener("click", function () { playSample(sample[3]); });
    document.querySelector("#btn5").addEventListener("click", function () { playSample(sample[4]); });
    document.querySelector("#btn6").addEventListener("click", function () { playSample(sample[5]); });
    document.querySelector("#btn7").addEventListener("click", function () { playSample(sample[6]); });
    document.querySelector("#btn8").addEventListener("click", function () { playSample(sample[7]); });
    document.querySelector("#btn9").addEventListener("click", function () { playSample(sample[8]); });
    document.querySelector("#btn10").addEventListener("click", function () {
        var myInterval = setInterval(function () {
            // Beat wird wiederholt
            beat[indexzaehler].play();
            indexzaehler++;
            if (indexzaehler == 3) {
                indexzaehler = 0;
            }
            document.querySelector("#stopbtn").addEventListener("click", function () {
                clearInterval(myInterval);
                indexzaehler = 0;
            });
        }, 1000);
        console.log(beat[indexzaehler]);
    });
    // Toggle Funktion Play-Button
    var playbtn = document.getElementById("playbtn");
    playbtn.addEventListener("click", function () {
        document.querySelector("#btn10").classList.add("hidden");
        document.querySelector("#btn11").classList.remove("hidden");
        /*if (beat.length == 0) {
    
        beat.push(sample[5], sample[8], sample[4]);*/
    });
    // Toggle Funktion Stop-Button
    var stopbtn = document.getElementById("stopbtn");
    stopbtn.addEventListener("click", function () {
        document.querySelector("#btn11").classList.add("hidden");
        document.querySelector("#btn10").classList.remove("hidden");
        /*beat.length = 0;
        console.log(beat);*/
    });
    // Delete-button
    var deletebtn = document.getElementById("deletebtn");
    deletebtn.addEventListener("click", function () {
        beat.length = 0;
        console.log(deletebtn);
        if (beat.length == 0) {
            document.querySelector("#btn10").classList.remove("hidden");
            document.querySelector("#btn11").classList.add("hidden");
        }
    });
    /*
    var min: number = 1;
    var max: number = 9;
    */
    // Remix-Button
    var remixbtn = document.getElementById("remixbtn");
    remixbtn.addEventListener("click", function () {
        beat.length = 0;
        console.log(beat);
        while (beat.length < 3) {
            var r = sample[Math.floor(Math.random() * sample.length)];
            if (beat.indexOf(r) === -1)
                beat.push(r);
            console.log(beat);
        }
        /* random funkt nicht
        do { random(1, 9);
        console.log(random(1, 9));
        } while (beat.length <= 3 );
        */
    });
    /* random funkt nicht
    function random(min, max) {
        
        do { return Math.floor(Math.random() * (max - min + 1)) + min;
           } while (beat.push(sample[5], sample[8], sample[4]));
               
           
        
        
    
    }
    */
})(Aufgabe8 || (Aufgabe8 = {}));
//# sourceMappingURL=script.js.map