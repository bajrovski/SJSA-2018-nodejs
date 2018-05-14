var wsUri = "ws://127.0.0.1:8080";

function WS(){
    websocket = new WebSocket(wsUri);
    websocket.onopen = function(e){
        var data = {
            type: "system",
            data: {
                action: 'join',
                handle: handle
            },
        };
        websocket.send(JSON.stringify(data));
        console.log("Connected to server!")
    };
    
    websocket.onmessage = function (e) {
        try{
            var data = JSON.parse(e.data)
        }catch(e){
            console.log()
        }
        console.log(e.data);
        switch (data.type) {
            case "chat":
                addChatMessage(data.data);
                break;
            case "system":
                handleSystemOp(data);
            default:
                console.error("Unknown type of message");
                break;
        }
    };
    websocket.onerror = function (e) {
        console.error(e.data);
    };
    
    websocket.onclose = function (e) {
        console.log("Disconnected from server!")
    };

}


function addChatMessage(msg){
    document.getElementById("messages").value += msg + "\n";
};

function handleSystemOp(){
    switch (data.data.action){
        case 'join':
            var opt = document.createElement("option");
            opt.innerText = data.data.handle;
            document.getElementById('users').appendChild(opt);
        break;
    }
};

document.getElementById('msg').addEventListener('keypress', function(e){
    if(e.code == 'Enter'){
        var msg = {
            type: 'chat',
            data: handle + ':' + this.value
        };
        websocket.send(JSON.stringify(msg));
        this.value = "";
    }
});

document.getElementById('connect').addEventListener('click', function(){
    var handle = document.getElementById('handle').value.trim();
    if(handle != ''){
        WS();
        this.disabled = 'disabled';
    }
});