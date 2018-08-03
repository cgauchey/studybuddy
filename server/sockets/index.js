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

    // socket.on("questions", questions => {
    //   rooms["room1"].map(socket_ => {
    //     console.log("questions", questions);
    //     console.log("questions item", questions[0]["text"]);
    //     socket_.broadcast.emit("questions", questions);
    //   });
    // });
  });
};
