const clock = document.querySelector("#clock");

function CurrentTime(){
    const date = new Date();
    const hours = String(date.getHours()).padStart("2",0);
    const minutes = String(date.getMinutes()).padStart("2",0);
    const sec = String(date.getSeconds()).padStart("2",0);
    clock.innerText = `${hours}:${minutes}:${sec}`;
}

CurrentTime();
setInterval(CurrentTime, 1000);