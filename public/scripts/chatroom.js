import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";
const socket = io();

socket.on("connect", () => {

    socket.emit("message", JSON.stringify({ userName : "Fawaz", message : "Hello World" }))
    socket.on("message", (data)=>{
        console.log(data)
    })

});

// const input = document.getElementById("msg")
// console.log(input)
// const btn = document.getElementById("btn")

// btn.addEventListener("click", cb)

