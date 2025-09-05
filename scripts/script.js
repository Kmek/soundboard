
console.log(audioData);


const soundboardLibrary = document.getElementById("soundboardLibrary");
const soundboard = document.getElementById("soundboard");

audioData.forEach(a => {
  console.log(a);
  let audioNode = document.createElement("audio");
  audioNode.id = a.title;
  audioNode.src = "audio/" + a.file;
  // audioNode.controls = true;
  audioNode.preload = "auto";

  soundboardLibrary.appendChild(audioNode);

  let audioBtn = document.createElement("button");
  audioBtn.innerHTML = a.title;
  audioBtn.onclick = () => {
    console.log("Here")
    audioNode.cloneNode().play()
  }
  soundboard.appendChild(audioBtn);
})

