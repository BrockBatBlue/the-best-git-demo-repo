let magicButton = document.getElementById("magicButton");

const changeButtonColor = (event) => {
    event.target.style.backgroundColor = "blue";
}

magicButton.onclick = changeButtonColor;