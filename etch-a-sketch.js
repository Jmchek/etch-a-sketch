// Instead of just changing the color of a square from black to white (for example), have each pass through with the mouse change it to a completely random RGB value. Then try having each pass just add another 10% of black to it so that only after 10 passes is the square completely black.

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// instead of css to create the hover effect, we will add an event listener for hover which changes the color DONE


// we have two kinds of squares, one that is active and ones that are not
// if we hover over inactive ones, then we change it to a random color
// if it's active, we take 10% of its current Black value and add that to it
// check if active, if the classlist contains 'active'

//we misunderstood how rgb code works, once it reaches (0,0,0) then it will become pure black
// we need to subtract 10 percent from each part and then it will eventually reach that color

// we're working on the change the square to black portion

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
                    if (!colDivArr[i][j].classList.contains('etchedDiv')) {
                        colDivArr[i][j].classList.add('etchedDiv');
                        colDivArr[i][j].setAttribute('style', `background-color: ${randomRGB()};`);
                    } else {
                        let divBGColor = colDivArr[i][j].style.backgroundColor;
                        let colorArr = divBGColor.slice(
                            divBGColor.indexOf("(") + 1, 
                            divBGColor.indexOf(")")
                        ).split(", ");
                        console.log(colorArr);
                        //for each for colorArr and apply changes
                        colorArr.forEach(x => {
                            if (x != 0){
                                x -= (10/100) * x;
                            }
                            colorArr[colorArr.indexOf(x)] = x;
                        });
                        console.log(colorArr);
                        
                        let newBGColor = "rgb(" + colorArr[0] + ", " + colorArr[1] + ", " + colorArr[2] + ")";
                        
                        colDivArr[i][j].setAttribute('style', `background-color: ${newBGColor};`);
                        //background-color: rgb(92, 123, 224);

                    }
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

function randomRGB() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let RGBColor = "rgb(" + x + "," + y + "," + z + ")"; 
    return RGBColor; 
}




gameButton();