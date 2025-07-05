import emailjs from 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3.11.0/+esm';

console.log("✅ script.js cargado correctamente como módulo");

emailjs.init("N5MpmArRpVxcBJfjf"); // Tu Public Key

const form = document.getElementById("contact-form");
const btn = document.getElementById("button");

if (form && btn) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    btn.textContent = "Enviando...";
    btn.disabled = true;

    emailjs.sendForm("service_7yawa4k", "template_wxy8ouq", this)
      .then(() => {
        alert("✅ Correo enviado correctamente");
        form.reset();
        btn.textContent = "Enviar";
        btn.disabled = false;
      })
      .catch((error) => {
        alert("❌ Error al enviar: " + error.text);
        btn.textContent = "Enviar";
        btn.disabled = false;
      });
  });
}

// === SCROLL TO TOP BUTTON ===
const scrollBtn = document.createElement("button");
scrollBtn.innerHTML = "▲";
scrollBtn.classList.add("scroll-top");
scrollBtn.title = "Volver arriba";
scrollBtn.style.display = "none";
document.body.appendChild(scrollBtn);

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

// === NAVBAR ACTIVE SECTION HIGHLIGHT ===
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

function updateActiveLink() {
  let index = sections.length;
  while (--index >= 0) {
    const sectionTop = sections[index].offsetTop;
    if (window.scrollY + 80 >= sectionTop) {
      navLinks.forEach((link) => link.classList.remove("active"));
      const activeLink = document.querySelector(
        `.nav-links a[href="#${sections[index].id}"]`
      );
      if (activeLink) activeLink.classList.add("active");
      break;
    }
  }
}

window.addEventListener("scroll", updateActiveLink);

// === PRINT MODE ===
window.addEventListener("beforeprint", () => {
  scrollBtn.style.display = "none";
});

window.addEventListener("afterprint", () => {
  if (window.scrollY > 300) scrollBtn.style.display = "block";
});
