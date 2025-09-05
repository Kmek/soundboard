
console.log("Audio Data Object", audioData);


const soundboardLibrary = document.getElementById("soundboardLibrary");
const soundboard = document.getElementById("soundboard");

let idIndex = 0;

audioData.forEach(a => {
  idIndex++;
  let audioId = "audioId" + idIndex;

  console.log("Loaded:", a);
  let audioNode = document.createElement("audio");
  audioNode.id = audioId;
  audioNode.src = "audio/" + a.file;
  // audioNode.controls = true;
  audioNode.preload = "auto";
  soundboardLibrary.appendChild(audioNode);

  let audioBtn = document.createElement("button");
  audioBtn.innerHTML = a.title;
  audioBtn.onclick = () => {
    audioNode.cloneNode().play()
  }
  soundboard.appendChild(audioBtn);
})

