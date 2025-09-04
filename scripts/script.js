

var mew = document.getElementById("mew");

const playMew = () => {
    console.log("Clicked")
    
    console.log(mew)
    mew.cloneNode().play();
}

