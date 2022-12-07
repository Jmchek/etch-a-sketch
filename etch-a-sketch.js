// Add a button to the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. Once entered, the existing grid should be removed and a new grid should be generated in the same total space as before (e.g. 960px wide) so that you’ve got a new sketch pad. Tip: Set the limit for the user input to a maximum of 100. A larger number of squares results in more computer resources being used, potentially causing delays, freezing, or crashing that we want to prevent.
// Research button tags in HTML and how you can make a JavaScript function run when one is clicked.
// Also check out prompts.
// You should be able to enter 64 and have a brand new 64x64 grid pop up without changing the total amount of pixels used.

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


function gameButton() {
    const btnDiv = document.createElement('div');
    const btn = document.createElement('button');
    const bodyTag = document.querySelector('body');

    bodyTag.insertBefore(btnDiv, bodyTag.firstChild);
    btnDiv.appendChild(btn);
    btnDiv.setAttribute('id', 'gameButtonDiv');
    btn.setAttribute('id', 'gameButton');
    btn.textContent = "Start here!";

    btn.addEventListener('click', promptUser);
    btn.addEventListener('click', () => {
        if(document.querySelector("#container").firstChild){
            btn.textContent = "Clear the board and make another?";
        } else {
            btn.textContent = "Start again?";
        }
        console.log(document.querySelector("#container").firstChild);
        
    });
}

function promptUser () {
        let userInput = 0;
        userInput = prompt("Please input the dimensions of your grid (e.g. 50 for a 50x50 grid). Please keep it under 100.", 16);

        if (userInput === null) {
            gridClear();
            return;
        } else if (userInput > 99 || userInput <= 0) {
            userInput = 16;
            gridClear();
            alert("Please input a number between 0 and 99.");
            promptUser();
        } else {
            console.log(userInput);
            gridMaker(userInput);
        }
}


function gridMaker(gridDim) {
    let rowDivArr = [];
    let colDivArr = [];
    let rowColSize = gridDim;
    const grabContainer = document.querySelector("#container");
    gridClear();
    
    
    if(!grabContainer.firstChild) {
        //create row divs
        for (let i = 0; i < rowColSize; i++){
            rowDivArr[i] = document.createElement('div');
            rowDivArr[i].setAttribute('class', 'rowDiv');
            grabContainer.appendChild(rowDivArr[i]);
            colDivArr[i] = [];
    
            //create column divs 
            for (let j = 0; j < rowColSize; j++){
                colDivArr[i][j] = document.createElement('div');
                colDivArr[i][j].setAttribute('class', 'colDiv');
                colDivArr[i][j].addEventListener('mouseover', () => {
                    colDivArr[i][j].classList.add('etchedDiv');
                  });
                rowDivArr[i].appendChild(colDivArr[i][j]);
            }
        }
    }
    

}

function gridClear() {
    const parent = document.querySelector("#container");
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}





gameButton();