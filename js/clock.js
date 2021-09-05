const clock = document.querySelector("h2#clock"); // "h2 #clcock 즉, 띄어쓰기 하면 못찾음. 에러 발생"

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`
}

getClock();
setInterval(getClock, 1000); //setInterval(function, ms);


// setTimeout(function, ms); 은 delay 처럼 사용할 수 있다. 특정 function을 ms 후에 작동시킬 수 있다.