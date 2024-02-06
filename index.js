var welcomearray = ['Maanya Naveen'];
var secondlnarr = ['Computer Science major @ The University of Cincinnati'];


var textPosition = 0;

var speed = 100;

typewriter = () => {
    document.querySelector("#welcome").
    innerHTML = welcomearray[0].substring(0, textPosition)

    document.querySelector("#secondlnarr").
    innerHTML = secondlnarr[0].substring(0, textPosition)

    if (textPosition++ !=  welcomearray[0].length)
        setTimeout(typewriter, speed);
    
    else if(textPosition++ !=  secondlnarr[0].length)
        setTimeout(typewriter, speed);
}



window.addEventListener("load", typewriter);
