var indexzaehler = 0;
var sample = [new Audio("assets/musik/A.mp3"), new Audio("assets/musik/C.mp3"), new Audio("assets/musik/F.mp3"), new Audio("assets/musik/G.mp3"), new Audio("assets/musik/hihat.mp3"), new Audio("assets/musik/kick.mp3"), new Audio("assets/musik/laugh-1.mp3"), new Audio("assets/musik/laugh-2.mp3"), new Audio("assets/musik/snare.mp3")];
var beat = [sample[5], sample[8], sample[4]];
function playSample(musik) {
    musik.play();
}
;
document.querySelector('#btn1').addEventListener('click', function () { playSample(sample[0]); });
document.querySelector('#btn2').addEventListener('click', function () { playSample(sample[1]); });
document.querySelector('#btn3').addEventListener('click', function () { playSample(sample[2]); });
document.querySelector('#btn4').addEventListener('click', function () { playSample(sample[3]); });
document.querySelector('#btn5').addEventListener('click', function () { playSample(sample[4]); });
document.querySelector('#btn6').addEventListener('click', function () { playSample(sample[5]); });
document.querySelector('#btn7').addEventListener('click', function () { playSample(sample[6]); });
document.querySelector('#btn8').addEventListener('click', function () { playSample(sample[7]); });
document.querySelector('#btn9').addEventListener('click', function () { playSample(sample[8]); });
var interval;
document.querySelector("#btn10").addEventListener("click", function () {
    interval = setInterval(function () {
        beat[indexzaehler].play();
        indexzaehler = indexzaehler + 1;
        if (indexzaehler >= 3) {
            clearInterval(interval);
            indexzaehler = 0;
        }
    }, 1500);
});
/*
var AMP3: HTMLAudioElement = new Audio("assets/musik/A.mp3");
var CMP3: HTMLAudioElement = new Audio("assets/musik/C.mp3");
var FMP3: HTMLAudioElement = new Audio("assets/musik/F.mp3");
var GMP3: HTMLAudioElement = new Audio("assets/musik/G.mp3");
var hihat: HTMLAudioElement = new Audio("assets/musik/hihat.mp3");
var kick: HTMLAudioElement = new Audio("assets/musik/kick.mp3");
var laugh1: HTMLAudioElement = new Audio("assets/musik/laugh-1.mp3");
var laugh2: HTMLAudioElement = new Audio("assets/musik/laugh-2.mp3");
var snare: HTMLAudioElement = new Audio("assets/musik/snare.mp3");




document.querySelector("#btn1").addEventListener("click", function () { playSample(AMP3) });

document.querySelector("#btn2").addEventListener("click", function () { playSample(CMP3) });
document.querySelector("#btn3").addEventListener("click", function () { playSample(FMP3) });
document.querySelector(".Button4").addEventListener("click", function () { playSample(GMP3) });
document.querySelector(".Button5").addEventListener("click", function () { playSample(hihat) });
document.querySelector(".Button6").addEventListener("click", function () { playSample(kick) });
document.querySelector(".Button7").addEventListener("click", function () { playSample(laugh1) });
document.querySelector(".Button8").addEventListener("click", function () { playSample(laugh2) });
document.querySelector(".Button9").addEventListener("click", function () { playSample(snare) });
document.querySelector(".Button10").addEventListener("click", function () { setInterval });

var arraySound: HTMLAudioElement [] = [AMP3, CMP3, FMP3, GMP3, hihat, kick, laugh1, laugh2, snare];

var indexzaehler = 0;

function playSample(sound: HTMLAudioElement) {


    


    sound.play()


}

setInterval(function () {

    arraySound[indexzaehler].play()

    indexzaehler = indexzaehler + 1;




}, 2000);
*/
//# sourceMappingURL=script.js.map