let servers = [
    "🇺🇸 USA Server",
    "🇩🇪 Germany Server",
    "🇯🇵 Japan Server",
    "🇫🇷 France Server"
];

let selectedServer = localStorage.getItem("server");

function loadServers(){
    let list = document.getElementById("servers");

    servers.forEach(s=>{
        let li = document.createElement("li");
        li.innerText = s;
        li.onclick = ()=>{
            selectedServer = s;
            localStorage.setItem("server", s);
            document.getElementById("server").innerText = s;
        }
        list.appendChild(li);
    });

    if(selectedServer){
        document.getElementById("server").innerText = selectedServer;
    }
}

function connectVPN(){
    if(!selectedServer){
        alert("اختار سيرفر الاول");
        return;
    }

    let status = document.getElementById("status");

    if(status.innerText === "غير متصل"){
        status.innerText = "متصل";
    }else{
        status.innerText = "غير متصل";
    }
}

loadServers();
