function gameButton() {
    const btnDiv = document.createElement('div');
    const btn = document.createElement('button');
    const bodyTag = document.querySelector('body');
    const title = document.createElement('h1');

    

    bodyTag.insertBefore(btnDiv, bodyTag.firstChild);
    btnDiv.appendChild(btn);
    btnDiv.setAttribute('id', 'gameButtonDiv');
    btn.setAttribute('id', 'gameButton');
    btn.textContent = "Start here!";

    //title
    bodyTag.insertBefore(title, btnDiv);
    title.textContent = "Etch-A-Sketch";

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
                let oldBGColor = "empty";
                let oldColorArr = [];
                colDivArr[i][j] = document.createElement('div');
                colDivArr[i][j].setAttribute('class', 'colDiv');
                //color each div different and add hover effect
                colDivArr[i][j].addEventListener('mouseover', () => {
                    if (!colDivArr[i][j].classList.contains('etchedDiv')) {
                        colDivArr[i][j].classList.add('etchedDiv');
                        colDivArr[i][j].setAttribute('style', `background-color: ${randomRGB()};`);
                        const oldBGColorGrabber = colDivArr[i][j].style.backgroundColor;
                        oldBGColor = oldBGColorGrabber;
                        oldColorArr = oldBGColor.slice(
                            oldBGColor.indexOf("(") + 1, 
                            oldBGColor.indexOf(")")
                        ).split(", ");
                    } else {
                        let divBGColor = colDivArr[i][j].style.backgroundColor;
                        let colorArr = divBGColor.slice(
                            divBGColor.indexOf("(") + 1, 
                            divBGColor.indexOf(")")
                        ).split(", ");

                        //change bg color slowly to black
                        let newBGColor = "rgb(" + turnBlack(oldColorArr[0],colorArr[0])  + ", " + turnBlack(oldColorArr[1],colorArr[1]) + ", " + turnBlack(oldColorArr[2],colorArr[2]) + ")";

                        //set new color after adjusting the level of black
                        colDivArr[i][j].setAttribute('style', `background-color: ${newBGColor};`);

                    }
                  });
                rowDivArr[i].appendChild(colDivArr[i][j]);
            }
        }
    }
    

}

function turnBlack(oldColor, newColor) {
    if(newColor >= 0) {
        let newNum = Math.floor(newColor - oldColor * (10/100));
        return newNum < 0? 0 : newNum;
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