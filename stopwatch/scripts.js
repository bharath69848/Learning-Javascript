let seconds = 0;
let interval = null;
const sec = document.getElementById("seconds")
const min = document.getElementById("minutes")
const hr = document.getElementById("hours")

function format(value){
    return String(value).padStart(2,"0")
}

function settime(){
    const houry = Math.floor(seconds/3600)
    const mini = Math.floor(seconds/60)%60
    const seco = seconds%60
    sec.innerHTML = format(seco);
    min.innerHTML = format(mini);
    hr.innerHTML = format(houry);
}

function timeadder(){
    seconds++;
    settime();
}
function timer(){
    if(interval) stoptimer()
    interval = setInterval(timeadder,1000)
}
function stoptimer(){
    clearInterval(interval)
}
function resetimer(){
    stoptimer()
    seconds = 0;
    settime()
}
