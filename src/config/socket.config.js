import io from "socket.io-client";
console.log(io);

export const socket = io.connect("http://localhost:5005");
