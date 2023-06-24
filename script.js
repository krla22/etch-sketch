let gridForm = document.getElementById("data-form");
let innerDiv = document.getElementById("inner-div");
let gridItems = document.getElementById("grid-id");
let showGridSize = document.getElementById("show-grid");
let size;

createGrid(16);

gridForm.addEventListener("submit", function(event){
    event.preventDefault();
    let gridSize = document.getElementById("size").value;
    
    size = gridSize;    

    innerDiv.innerHTML = '';
    gridChecker(size);
})

gridForm.addEventListener("reset", function(event){
    event.preventDefault();
    document.getElementById("size").value = "";
    innerDiv.style.backgroundColor = "";
    innerDiv.style.border = "";
    innerDiv.innerHTML = '';
})

document.getElementById("clear").addEventListener("click", function(event){
    event.preventDefault();
    resetColor();
})

document.getElementById("erase").addEventListener("click", function(event){
    event.preventDefault();
    eraserMode();
})

document.getElementById("brush").addEventListener("click", function(event){
    event.preventDefault();
    colorChange();
})

function gridChecker(size){
    if ((size < 16) || (size >64)){
        alert("Only grid sizes from 16 to 64 are accepted!");
        return createGrid(16);
    }
    
    if ((size >= 16) && (size<=64)){
        createGrid(size);
        showGridSize.innerText = `Current Grid Size: ${size}`
    }
}

function createGrid(size){
    let totalItems = size * size;
    let itemSize = `${100 / size}%`;

    for (i = 1; i <= totalItems; i++){
        let squares = document.createElement('div');
        innerDiv.style.gridTemplateColumns = `repeat(${size}, ${itemSize})`;
        innerDiv.style.gridTemplateRows = `repeat(${size}, ${itemSize})`;
        squares.classList.add('grid-item');
        squares.id = "grid-id";
        squares.setAttribute('draggable', false);
        innerDiv.appendChild(squares);
    }
}

function resetColor(){
    let gridColor = innerDiv.querySelectorAll('div');
    gridColor.forEach(grid => {
        grid.style.backgroundColor = "white";
    });
}

function colorChange() {
    let gridColor = innerDiv.querySelectorAll('div');
    let mouseIsDown = false;

    gridColor.forEach(grid => {
        grid.addEventListener('mousedown', function(){
            mouseIsDown = true;
        });
        grid.addEventListener('mouseup', function(){
            mouseIsDown = false;
        });
            
        grid.addEventListener('mousemove', function(){
            if(mouseIsDown){
                this.style.backgroundColor = "black";
            }
        });
    });
}

function eraserMode(){
    let gridColor = innerDiv.querySelectorAll('div');
    let mouseIsDown = false;

    gridColor.forEach(grid => {
        grid.addEventListener('mousedown', function(){
            mouseIsDown = true;
        });
        grid.addEventListener('mouseup', function(){
            mouseIsDown = false;
        });
            
        grid.addEventListener('mousemove', function(){
            if(mouseIsDown){
                this.style.backgroundColor = "white";
            }
        });
    });
}
