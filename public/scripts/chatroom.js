import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";
const socket = io();
const messageDiv = document.getElementById("chats")
const params = new URLSearchParams(window.location.search)
let name = params.get("name")


socket.on("connect", () => {
const inp = document.getElementById("msg")
let mess = ""
const btn = document.getElementById("btn")

//track changes
inp.addEventListener("change",(ev)=> {
    mess = ev.target.value
})

//send message on button click
btn.addEventListener("click",(ev)=>{
    if(mess===""){
        alert("A message is required")
    }
    else {
        socket.emit("message", JSON.stringify({ userName : name, message : mess }))
    inp.value = ""
    mess = ""

    }
    
})

//event to receive message
socket.on("chat", (data)=>{
    console.log("received")
        let received = JSON.parse(data)
        let el = document.createElement("p")
        el.innerText = `${received.userName} : ${received.message}`
        messageDiv.appendChild(el)
    })

});

