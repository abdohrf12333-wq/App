let time = 0;
let interval;
let isConnected = false;

// استرجاع الحالة لو الصفحة اتقفلت
window.onload = function(){
    if(localStorage.getItem("vpnStatus") === "on"){
        time = parseInt(localStorage.getItem("vpnTime")) || 0;
        startTimer();
        document.getElementById("status").innerText = "Status: CONNECTED";
        isConnected = true;
    }
    loadIP();
};

function connect(){
    if(isConnected) return;

    document.getElementById("status").innerText = "Status: CONNECTED";
    localStorage.setItem("vpnStatus","on");
    isConnected = true;
    startTimer();
}

function disconnect(){
    document.getElementById("status").innerText = "Status: OFF";
    clearInterval(interval);
    time = 0;
    document.getElementById("timer").innerText = "00:00";
    localStorage.setItem("vpnStatus","off");
    localStorage.setItem("vpnTime","0");
    isConnected = false;
}

function startTimer(){
    interval = setInterval(()=>{
        time++;
        localStorage.setItem("vpnTime",time);

        let minutes = Math.floor(time/60);
        let seconds = time%60;

        document.getElementById("timer").innerText =
        (minutes<10?"0":"")+minutes + ":" +
        (seconds<10?"0":"")+seconds;

    },1000);
}

function loadIP(){
    fetch("https://api.ipify.org?format=json")
    .then(res=>res.json())
    .then(data=>{
        document.getElementById("ip").innerText = "IP: " + data.ip;
    })
    .catch(()=>{
        document.getElementById("ip").innerText = "IP: Unable to load";
    });
}
