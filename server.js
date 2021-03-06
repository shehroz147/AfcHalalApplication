const http = require("http");
const app = require('./app');
const express = require('express');
// const app = express();
const fs = require('fs');
const port = process.env.PORT || 3232;
// const server = http.createServer(app);
console.log("Serving on ", port)

//


const options = {
  key: fs.existsSync(process.env.SSL_KEY) ? fs.readFileSync(process.env.SSL_KEY) : null,
  cert: fs.existsSync(process.env.SSL_CRT) ? fs.readFileSync(process.env.SSL_CRT) : null,
};

const server = process.env.MODE == "DEV" ? http.createServer(app) : http.createServer(options, app);

console.log("Serving on ", port)
server.listen(port);
server.timeout=20000;
// const clients = [];
// const io = require("socket.io")(server);
//
// //io connection
// io.on("connection", (socket, data) => {
//
//     socket.on("disconnect", () => {
//         for (let i in clients) {
//             for (let j = 0; j < clients[i].length; j++) {
//                 if (clients[i][j].socket == socket.id) {
//                     clients[i].splice(j, 1);
//
//                     // clients[i]['status'] = false;
//                     // socket.broadcast.emit('offline',i);
//                 }
//             }
//         }
//     });
//
//
//     // ======================================>Add user according to the User ID
//
//     socket.on('addUser', function (data) {
//         if (typeof clients[data.userId] == 'undefined')
//             clients[data.userId] = [];
//         for (let j = 0; j < clients[data.userId].length; j++) {
//             if (clients[data.userId][j].socket == socket.id)
//                 clients[data.userId].splice(j, 1);
//         }
//         clients[data.userId].push({"socket": socket.id});
//         clients[data.userId]['status'] = true;
//
//         console.log('====== User Added. Connected Users List ======\n', getConnectedUsers(clients));
//         socket.broadcast.emit('broadcast', 'hello friends!');
//     });
//
//     socket.on('sendData', function (obj) {
//         if (obj.socketType == 'Message' || obj.socketType == 'StatusUpdate') {
//             MongoHelper.saveThreadMessage(obj);
//             if (typeof clients[obj.data.toUser] != 'undefined') {
//                 for (let i = 0; i < clients[obj.data.toUser].length; i++) {
//                     if (clients[obj.data.toUser][i].socket != socket.id) {
//                         socket.broadcast.to(clients[obj.data.toUser][i].socket).emit('receiveData', obj);
//                     }
//                 }
//
//     });
// });
//
//
// // ==================================> Get the list off all connected users
// function getConnectedUsers(clients) {
//     connectedUsers = [];
//     count = 0;
//     for (var i in clients) {
//         if (clients[i]['status'] === true) {
//             connectedUsers[count] = i;
//             ++count;
//         }
//     }
//     return connectedUsers;
// }

// server.listen(port);


// const server = app.listen(5000,()=>{
//   const {address,port} = server.address();
//   console.log(`${address}`);
//   console.log(`Listening at http://${address}:${port}`);

// });

