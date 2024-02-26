const body=document.querySelector("body");
const h1=document.createElement("h1");
h1.innerText="Digital Clock";
h1.style.color="purple";
const div=document.querySelector("div");
body.insertBefore(h1,div);
const hour=document.querySelector("#hours");
const minute=document.querySelector("#minutes");
const second=document.querySelector("#seconds");
const time=document.querySelector("#ampm");
function digitalClock(){
    const date=new Date();
    const hr=date.getHours();
    const min=date.getMinutes();
    const sec=date.getSeconds();

     hour.innerText=hr;
    minute.innerText= min < 10 ? "0" + min : min;
    second.innerText=sec < 10 ? "0" + sec : sec;
    time.innerText="PM";
    /*if(hr>12){
        hr = hr - 12;
        time.innerText="PM";
    }
    else if(
        hr = 12;h2==0){
        time.innerText = "AM";
    }
    else{
        time.innerText="AM";
    } 
   */
}

setInterval(digitalClock,500);
