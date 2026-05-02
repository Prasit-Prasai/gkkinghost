// =============================
// 1) CHAT LINKS (SET YOUR REAL)
// =============================
const WHATSAPP_NUMBER = "923001234567"; // countrycode+number (no +, no spaces)
const WHATSAPP_TEXT = "Hi Admin, I want to join GK KING (G KING’S LEGACY).";
const MESSENGER_USERNAME = "GK KING"; // m.me/<username>

const wa = document.getElementById("waLink");
const ms = document.getElementById("msLink");

if (wa) {
  wa.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_TEXT)}`;
}
if (ms) {
  ms.href = `https://m.me/gk.king.777870`;
}

// ===================================
// 2) PLATFORM LIST (YOUR REAL URLs)
// ===================================
// Put platform icons in: public/assets/img/platforms/
const platforms = [
  { name: "JUWA", icon: "assets/img/platforms/juwa.png", url: "https://juwa777.com/juwa" },
  { name: "CASH FRENZY", icon: "assets/img/platforms/cash-frenzy.png", url: "https://www.cashfrenzy777.com" },
  { name: "VBLINK", icon: "assets/img/platforms/vblink.jpg", url: "https://www.vblink777.club" },
  { name: "JOKER", icon: "assets/img/platforms/joker.jpg", url: "https://www.joker777.win" },
  { name: "MRALLINONE", icon: "assets/img/platforms/mrallinone.jpg", url: "https://www.mrallinone777.com" },
  { name: "ULTRA PANDA", icon: "assets/img/platforms/ultra-panda.png", url: "https://www.ultrapanda.club" },
  { name: "YOLO", icon: "assets/img/platforms/yolo.jpg", url: "https://yolo777.game" },
  { name: "WINNERS CLUB", icon: "assets/img/platforms/winners-club.jpg", url: "https://www.winnersclub777.com" },
  { name: "FIRE KIRIN", icon: "assets/img/platforms/fire-kirin.jpg", url: "http://start.firekirin.xyz:8580" },
  { name: "CASH MACHINE", icon: "assets/img/platforms/cash-machine.jpg", url: "https://www.cashmachine777.com/" },
  { name: "ORION STAR", icon: "assets/img/platforms/orion-start.jpg", url: "http://start.orionstars.vip:8580" },
  { name: "MILKY WAY", icon: "assets/img/platforms/milky-way.jpg", url: "https://milkywayapp.xyz" },
  { name: "VEGAS SWEEPS", icon: "assets/img/platforms/vegas-sweep.jpg", url: "https://m.lasvegassweeps.com" },
  { name: "JUWA 2.0", icon: "assets/img/platforms/juwa2.jpg", url: "https://m.juwa2.com" },
  { name: "BILLION BALLS", icon: "assets/img/platforms/billion-balls.jpg", url: "https://billionballs.win" },
  { name: "PANDA MASTER", icon: "assets/img/platforms/panda-master.jpg", url: "https://pandamaster.vip:8888" },
  { name: "GAME VAULT", icon: "assets/img/platforms/game-vault.jpg", url: "https://gamevault999.com" },
  { name: "GAME ROOM", icon: "assets/img/platforms/game-room.jpg", url: "https://www.gameroom777.com" },
  { name: "MEDUSA", icon: "assets/img/platforms/medusa.jpg", url: "https://medusa777.com" },
  { name: "PANDA POWER", icon: "assets/img/platforms/panda-power.png", url: "https://dev.pandapower777.com/login" },
  { name: "SPINCITY", icon: "assets/img/platforms/spincity.jpg", url: "https://play.spincity777.vip/" },
  { name: "FUNSTATION", icon: "assets/img/platforms/funstation.jpg", url: "https://www.funstation.site/download/" },
  { name: "MAFIA", icon: "assets/img/platforms/mafia.jpg", url: "https://www.mafia77777.com/m" },
];

// ===================================
// 3) SORT PLATFORMS A → Z
// ===================================
platforms.sort((a, b) => a.name.localeCompare(b.name));

// ===================================
// 4) RENDER PLATFORM CARDS
// ===================================
const grid = document.getElementById("platformGrid");

function createPlatformCard(p) {
  const a = document.createElement("a");
  a.className = "platform";
  a.href = p.url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";

  const img = document.createElement("img");
  img.className = "platform__icon";
  img.src = p.icon;
  img.alt = `${p.name} icon`;

  // fallback if icon is missing
  img.onerror = () => {
    img.onerror = null;
    img.src =
      "data:image/svg+xml;charset=UTF-8," +
      encodeURIComponent(
        `<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64'>
          <rect width='100%' height='100%' rx='14' ry='14' fill='rgba(255,255,255,0.12)'/>
          <text x='50%' y='54%' text-anchor='middle' font-size='22' fill='rgba(255,255,255,0.75)' font-family='Arial'>GK</text>
        </svg>`
      );
  };

  const name = document.createElement("div");
  name.className = "platform__name";
  name.textContent = p.name;

  const arrow = document.createElement("div");
  arrow.className = "platform__arrow";
  arrow.textContent = "↗";

  a.appendChild(img);
  a.appendChild(name);
  a.appendChild(arrow);
  return a;
}

if (grid) {
  // Clear existing content (prevents duplicates on reload)
  grid.innerHTML = "";
  platforms.forEach((p) => grid.appendChild(createPlatformCard(p)));
}
// =============================
// GK KING GALLERY SLIDER
// =============================

const totalImages = 60; // Change if you add more images
const slidesContainer = document.getElementById("slides");

for (let i = 1; i <= totalImages; i++) {
  const img = document.createElement("img");
  img.src = `assets/gallery/${i}.jpg`;
  img.alt = `GK KING Gallery ${i}`;
  slidesContainer.appendChild(img);
}

let currentIndex = 0;

function updateSlider() {
  slidesContainer.style.transform =
    `translateX(-${currentIndex * 100}%)`;
}

document.querySelector(".next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalImages;
  updateSlider();
});

document.querySelector(".prev").addEventListener("click", () => {
  currentIndex =
    (currentIndex - 1 + totalImages) % totalImages;
  updateSlider();
});

// Hamburger Menu Toggle
// HAMBURGER MENU
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

if(hamburger && navMenu){

hamburger.addEventListener("click", ()=>{
  navMenu.classList.toggle("active");
});

document.querySelectorAll('.nav__link').forEach(link=>{
  link.addEventListener("click", ()=>{
    navMenu.classList.remove("active");
  });
});

}


// CONTACT DROPDOWN
const contactBtn = document.querySelector(".contact-btn");
const contactMenu = document.querySelector(".contact-menu");

if(contactBtn && contactMenu){

contactBtn.addEventListener("click", function(e){
  e.preventDefault();
  e.stopPropagation();

  contactMenu.classList.toggle("show");
});

document.addEventListener("click", function(e){

 if(
   !contactBtn.contains(e.target) &&
   !contactMenu.contains(e.target)
 ){
   contactMenu.classList.remove("show");
 }

});

document.querySelectorAll(".contact-menu a").forEach(link=>{
 link.addEventListener("click",()=>{
   contactMenu.classList.remove("show");
 });
});

}
