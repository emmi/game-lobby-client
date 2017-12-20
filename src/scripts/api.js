import socketIOClient from 'socket.io-client';
const socket = socketIOClient("http://127.0.0.1:4001");

function sendMessage(message, cb) {
    socket.on('addedMessage', msg => {
        cb(null, msg)
    });
    socket.emit('sendMessage', message);
}

export {
    sendMessage
}
