const lights = {
    red: document.getElementById("red"),
    yellow: document.getElementById("yellow"),
    green: document.getElementById("green"),
};

let currentLight = "red";

function changeLight() {
    lights.red.classList.remove("active");
    lights.yellow.classList.remove("active");
    lights.green.classList.remove("active");

    if (currentLight === "red") {
        lights.red.classList.add("active");
        currentLight = "green";
        setTimeout(changeLight, 8000);
    } else if (currentLight === "green") {
        lights.green.classList.add("active");
        currentLight = "yellow";
        setTimeout(changeLight, 10000);
    } else if (currentLight === "yellow") {
        lights.yellow.classList.add("active");
        currentLight = "red";
        setTimeout(changeLight, 4000);
    }
}

changeLight();
