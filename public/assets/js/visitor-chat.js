const socket = io();

const chatFab = document.getElementById("chatFab");
const chatPanel = document.getElementById("chatPanel");
const chatClose = document.getElementById("chatClose");
const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const chatMessages = document.getElementById("chatMessages");

function add(text, who = "them") {
  const row = document.createElement("div");
  row.className = `msg ${who}`;
  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.textContent = text;
  row.appendChild(bubble);
  chatMessages.appendChild(row);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// register visitor once
socket.emit("visitor:join", { name: "Website Visitor" });

chatFab.addEventListener("click", () => {
  chatPanel.classList.remove("hidden");
  add("Hi! An admin can reply here. How can we help?", "them");
  chatInput.focus();
});
chatClose.addEventListener("click", () => chatPanel.classList.add("hidden"));

chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = chatInput.value.trim();
  if (!text) return;
  add(text, "me");
  socket.emit("visitor:message", { text });
  chatInput.value = "";
});

socket.on("visitor:message", ({ text }) => {
  if (text) add(text, "them");
});
