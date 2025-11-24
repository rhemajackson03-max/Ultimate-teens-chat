const socket = io();

function joinRoom() {
    const username = document.getElementById("username").value;
    const room = document.getElementById("room").value;

    socket.emit("join", { username, room });
}

function leaveRoom() {
    const username = document.getElementById("username").value;
    const room = document.getElementById("room").value;

    socket.emit("leave", { username, room });
}

function sendMessage() {
    const username = document.getElementById("username").value;
    const room = document.getElementById("room").value;
    const msg = document.getElementById("message").value;

    socket.emit("send", { username, msg, room });
    document.getElementById("message").value = "";
}

socket.on("message", data => {
    const box = document.getElementById("messages");
    const item = document.createElement("div");
    item.innerHTML = `<b>${data.username}:</b> ${data.msg}`;
    box.appendChild(item);
    box.scrollTop = box.scrollHeight;
});
