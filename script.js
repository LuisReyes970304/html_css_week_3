const burger = document.querySelector(".burger");
const block = document.querySelectorAll(".block");

burger.addEventListener("click", () => {
    block.forEach(btn => {
        btn.classList.toggle("show");
    });
});

const container = document.querySelector(".container");
const modal = document.querySelector(".modal");
const closeBtn = modal.querySelector("button");

closeBtn.addEventListener("click", () => {
    container.style.display = "none";
});

const mainNav = document.querySelector('.main_nav');
const dropdown = document.querySelectorAll('.dropdown');
const header_btn = document.querySelectorAll('.button');

header_btn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.forEach(down => {
            if (down.id === btn.value) {
                down.classList.toggle("show");
            };
            if (down.id != btn.value) {
                down.classList.remove("show");
            };
        });
    });
});

dropdown.forEach(down => {
    down.addEventListener("click", (e) => {
        e.stopPropagation();
    });
});

window.addEventListener("click", () => {
    dropdown.forEach(down => {
        down.classList.remove("show");
    });
});

const darkMode = document.querySelector(".dark_mode");
const root = document.querySelector(":root"); 

darkMode.addEventListener("click", () => {
    root.classList.toggle("dark_mode");
    darkMode.disabled = true;
    classic.disabled = false;
    darkMode.style.color = "grey";
    classic.style.color = "white";
});

const classic = document.querySelector(".classic");

classic.addEventListener("click", () => {
    root.classList.toggle("dark_mode");
    classic.disabled = true;
    darkMode.disabled = false;
    classic.style.color = "grey";
    darkMode.style.color = "white";
});

const chatForm = document.getElementById("chatForm");
const chatTarea = chatForm.querySelector("textarea");
const chatOutput = document.querySelector("output");

chatForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const data = chatTarea.value.trim();
    chatInput.value = "";
    if(!data) {
        return;
    }
    if(data) {
        chatOutput.value = "Thanks so much for that question. Our team will be contacting you as soon possible!"
        let appointment = document.createElement("a");
        
    }
});


