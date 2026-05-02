const socket = io();

const visitorsDiv = document.getElementById("visitors");
const adminMessages = document.getElementById("adminMessages");
const adminForm = document.getElementById("adminForm");
const adminInput = document.getElementById("adminInput");
const activeTitle = document.getElementById("activeTitle");

let activeVisitorId = null;

function addMsg(text, who = "them") {
  const row = document.createElement("div");
  row.className = `msg ${who}`;
  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.textContent = text;
  row.appendChild(bubble);
  adminMessages.appendChild(row);
  adminMessages.scrollTop = adminMessages.scrollHeight;
}

function renderVisitors(list) {
  visitorsDiv.innerHTML = "";
  if (!list.length) {
    visitorsDiv.innerHTML = `<div class="muted">No visitors online</div>`;
    return;
  }

  list.forEach((v) => {
    const btn = document.createElement("button");
    btn.className = "store";
    btn.style.width = "100%";
    btn.style.marginBottom = "10px";
    btn.textContent = `${v.name} (${v.id.slice(0, 6)})`;
    btn.onclick = () => {
      activeVisitorId = v.id;
      activeTitle.textContent = `Chatting with: ${v.name}`;
      adminMessages.innerHTML = "";
      addMsg("You are now connected. Reply to the visitor below.", "them");
      adminInput.focus();
    };
    visitorsDiv.appendChild(btn);
  });
}

socket.on("admin:visitors", (list) => renderVisitors(list));

socket.on("admin:message", ({ fromId, fromName, text }) => {
  if (activeVisitorId === fromId) {
    addMsg(`${fromName}: ${text}`, "them");
  }
});

adminForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = adminInput.value.trim();
  if (!text) return;

  if (!activeVisitorId) {
    addMsg("Select a visitor first.", "them");
    return;
  }

  addMsg(`Admin: ${text}`, "me");
  socket.emit("admin:message", { toId: activeVisitorId, text });
  adminInput.value = "";
});
