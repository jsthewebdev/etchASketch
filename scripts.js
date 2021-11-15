// general onload
let tilesParent = document.querySelector("body > div.flexContainer > div > div.etchTilesContainer")
let etchParent = document.querySelector("#etchTiles")
// slider code

let slider = document.getElementById("myRange");
let output = document.getElementById("valueRange");
let sliderValue = slider.value;
output.innerHTML = `${sliderValue} x ${sliderValue} Grid`;

function changeColor(e) {
    e.target.style.backgroundColor = "black"
}

slider.oninput = function() {
    let thisValue = this.value;
    output.innerHTML = `${thisValue} x ${thisValue} Grid`;
    reloadGrid();
    sliderValue = this.value;
    initializeGrid();
    
  }

// grid boxes code

const etchTilesContainer = document.getElementsByClassName("etchTilesContainer")[0];
const etchTiles = document.getElementById("etchTiles");
const blankDiv = document.getElementById('blankDiv')

function initializeGrid() {
    etchTilesContainer.style.display = "flex"

    for (let i=0; i < sliderValue * sliderValue; i++) {
        const newDiv = document.createElement('div')
        const newDivStyles = document.querySelector('.innerGridSquare');
        let divWidths = 500 / sliderValue
        document.documentElement.style.setProperty('--customWidth', `${divWidths}px`)
        document.documentElement.style.setProperty('--customHeight', `${divWidths}px`)
        // newDivStyles.style.minWidth = divWidths;
        newDiv.classList.add("innerGridSquare");
        newDiv.addEventListener('mouseover', changeColor)
        tilesParent.appendChild(newDiv);
        console.log(divWidths)
    }
    
}

function reloadGrid() {
    tilesParent.innerHTML = ''
}

function clearGrid() {
    reloadGrid();
    initializeGrid();
}
initializeGrid();