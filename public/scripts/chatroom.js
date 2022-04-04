import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";
const socket = io();
const messageDiv = document.getElementById("chats")
const params = new URLSearchParams(window.location.search)
let name = params.get("name")
const btn = document.getElementById("btn")

if(name === "") window.location.href = "/pre-chat"

btn.disabled = true


fetch("/api/get-chats")
.then((res)=> {
    if(res.status === 500) throw new Error("Something went wrong with server")
    btn.disabled = false
    return res.json()
})
.then((response)=>{
    for(let i = response.length-1; i>=0; i--){
        displayMessage(response[i])
    }
})
.catch((e)=>{
btn.disabled = true
let el = document.createElement("p")
el.innerText = e.message
messageDiv.appendChild(el)
})




socket.on("connect", () => {
    const inp = document.getElementById("msg")
    let mess = ""
    
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
            let received = JSON.parse(data)
            displayMessage(received)
        })
    
    });

function displayMessage(obj){
    let el = document.createElement("p")
    el.innerText = `${obj.userName || obj.username} : ${obj.message}`
    messageDiv.appendChild(el)
}



