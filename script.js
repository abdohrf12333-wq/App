let status = document.querySelector(".status");
let serverText = document.getElementById("server");
let btn = document.getElementById("btn");

let selected = null;

function selectServer(s){
    selected = s;
    serverText.innerText = s;
}

function connect(){
    if(!selected){
        alert("اختار سيرفر");
        return;
    }

    if(status.innerText === "غير متصل"){
        status.innerText = "متصل";
        status.style.color = "#00ff99";
        btn.innerText = "فصل";
    }else{
        status.innerText = "غير متصل";
        status.style.color = "#ff4d4d";
        btn.innerText = "اتصال";
    }
}
