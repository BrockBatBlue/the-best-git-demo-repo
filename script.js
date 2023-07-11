let magicButton = document.getElementById("magicButton");

const changeButtonColor = (event) => {
    let newColor = () => {
        return Math.floor(Math.random()*255);
    }
    
    
    event.target.style.backgroundColor = `rgb(${newColor()}, ${newColor()}, ${newColor()})`;
}

magicButton.onclick = changeButtonColor;