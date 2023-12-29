var welcomearray = ["Welcome, my name is Maanya"];
var textPosition = 0;
var speed = 100;

typewriter = () => {
    document.querySelector("#welcome").
    innerHTML = welcomearray[0].substring(0, textPosition)

    if (textPosition++ !=  welcomearray[0].length)
        setTimeout(typewriter, speed);
}

window.addEventListener("load", typewriter);

