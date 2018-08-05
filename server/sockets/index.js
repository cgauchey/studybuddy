module.exports = io => {
  let rooms = { room1: [] };

  let countRepeat = 0;
  let countExplain = 0;
  let countExample = 0;

  io.on("connection", socket => {
    console.log(
      `A socket connection to the server has been made: ${socket.id}`
    );
    rooms["room1"].push(socket);
    socket.on("disconnect", () => {
      console.log(`Connection ${socket.id} has left the building`);
    });

    socket.on("repeatCounter", repeatCounter => {
      countRepeat++;
      rooms["room1"].map(socket_ => {
        socket_.broadcast.emit("repeatCounter", [countRepeat, repeatCounter]);
      });
    });

    socket.on("explainCounter", explainCounter => {
      countExplain++;
      rooms["room1"].map(socket_ => {
        socket_.broadcast.emit("explainCounter", [
          countExplain,
          explainCounter
        ]);
      });
    });

    socket.on("exampleCounter", exampleCounter => {
      countExample++;
      rooms["room1"].map(socket_ => {
        socket_.broadcast.emit("exampleCounter", [
          countExample,
          exampleCounter
        ]);
      });
    });

    socket.on("resetCounter", resetCounter => {
      let countReset = 0;
      rooms["room1"].map(socket_ => {
        socket_.broadcast.emit("resetCounter", [countReset, resetCounter]);
      });
    });

    socket.on("message", messages => {
      rooms["room1"].map(socket_ => {
        console.log("message", messages);
        // console.log("messages item", messages[0]["text"]);
        socket_.broadcast.emit("message", messages);
      });
    });

    // const clients = {};
    // const users = {};

    // socket.on("connection", socket => {
    //   clients[socket.id] = socket;
    //   socket.on("message", message => onMessageReceived(message, socket));
    // });

    // function onMessageReceived(message, senderSocket) {
    //   const userId = users[senderSocket.id];
    //   sendAndSaveMessage(message, senderSocket);
    // }

    // function sendExistingMessage(socket) {
    //   //send messages from db
    //   const messages = db.collection();
    // }

    // function sendAndSaveMessage(message, socket, fromServer) {
    //   const messageData = {
    //     text: message.text,
    //     createdAt: new Date(message.createdAt)
    //     // chatId: chatId
    //   };

    //   db.collection("messages").insert(messageData, message => {
    //     // If the message is from the server, then send to everyone.
    //     var emitter = fromServer ? socket : socket.broadcast;
    //     emitter.emit("message", [message]);
    //   });
    // }
  });
};
