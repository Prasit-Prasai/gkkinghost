const path = require("path");
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname, "../public")));

const visitors = new Map(); // socketId -> { name }

io.on("connection", (socket) => {
  // Visitor registers
  socket.on("visitor:join", ({ name }) => {
    visitors.set(socket.id, { name: name || "Visitor" });
    io.emit(
      "admin:visitors",
      Array.from(visitors.entries()).map(([id, v]) => ({ id, name: v.name }))
    );
  });

  // Visitor -> Admin
  socket.on("visitor:message", (payload) => {
    io.emit("admin:message", {
      fromId: socket.id,
      fromName: visitors.get(socket.id)?.name || "Visitor",
      text: payload?.text || "",
      ts: Date.now(),
    });
  });

  // Admin -> Visitor
  socket.on("admin:message", ({ toId, text }) => {
    io.to(toId).emit("visitor:message", {
      text: text || "",
      ts: Date.now(),
    });
  });

  socket.on("disconnect", () => {
    visitors.delete(socket.id);
    io.emit(
      "admin:visitors",
      Array.from(visitors.entries()).map(([id, v]) => ({ id, name: v.name }))
    );
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Running: http://localhost:${PORT}`));
