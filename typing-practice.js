document.addEventListener("keydown", oli);
let KEY = "";
const letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"];
let letterran = "";
let score = 0;
let seconds = 10;
function startTimer() {
  const display = document.getElementById('timer-display');

  const timer = setInterval(() => {
    seconds--;
    
    // Formatting to keep the 00:00 style
    display.textContent = `00:${seconds < 10 ? '0' : ''}${seconds}`;

    if (seconds <= 0) {
      clearInterval(timer);
      alert("Timer finished!");
    }
  }, 1000);
}
function oli2(){
    const p = document.getElementById("p");
    letterran = letters[Math.floor(Math.random() * letters.length)];
    p.textContent = letterran.toUpperCase();
}
oli2();
let s = 20;
function oli(e){
    KEY = e.key;
    const p2 = document.getElementById("p2");
    const p3 = document.getElementById("p3");
    const h1 = document.getElementById("h1");
    if( KEY == letterran ){
        p2.textContent = "yes";
        score++;
        oli2();
        document.getElementById(KEY.toUpperCase()).style.opacity = "1"
        s=s+20;
        if(s <= 100){
            h1.style.fontSize = s+"px"
        }
    }else{
        score--;
        p2.textContent = "no";
    }
    if(score >= 10){h1.textContent = "good!";};
    if(score >= 20){h1.textContent = "very good!";};
    if(score >= 30){h1.textContent = "amazing!";};
    if(score >= 40){h1.textContent = "very amazing!";};
    if(score >= 50){h1.textContent = "you're obviously very good at typing!";};
    if(score >= 60){h1.textContent = "that's nearly impossible!";};
    if(score >= 70){h1.textContent = "that is impossible!";};
    if(score >= 80){h1.textContent = "that is very impossible!";};
    if(score >= 90){h1.textContent = "you are much too good!";};
    if(score >= 100){h1.textContent = "you can't get any better!";};
    p3.textContent = score;
}
