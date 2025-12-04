// 1. Validació del formulari amb missatge personalitzat
document.getElementById("formulari").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Formulari enviat correctament!");
});

// 2. Botó per canviar el color de fons aleatori
function canviColor() {
    const colors = ["red", "blue", "green", "yellow", "purple"];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}

// 3. Mostrar la data i hora actual
window.onload = function() {
    const div = document.createElement("div");
    div.textContent = "Data i hora actual: " + new Date().toLocaleString();
    document.body.appendChild(div);
};
