document.addEventListener("keydown", oli);
let KEY = "";
const letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"];
let letterran = "";
let score = 0;
function oli2(){
    const p = document.getElementById("p");
    letterran = letters[Math.floor(Math.random() * letters.length)];
    p.textContent = letterran;
}
oli2();
function oli(e){
    KEY = e.key;
    const p2 = document.getElementById("p2");
    const p3 = document.getElementById("p3");
    if( KEY == letterran ){
        p2.textContent = "yes";
        score++;
        oli2();
    }else{
        score--;
        p2.textContent = "no";
    }
    p3.textContent = score;
}
