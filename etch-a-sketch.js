// Add a button to the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. Once entered, the existing grid should be removed and a new grid should be generated in the same total space as before (e.g. 960px wide) so that you’ve got a new sketch pad. Tip: Set the limit for the user input to a maximum of 100. A larger number of squares results in more computer resources being used, potentially causing delays, freezing, or crashing that we want to prevent.
// Research button tags in HTML and how you can make a JavaScript function run when one is clicked.
// Also check out prompts.
// You should be able to enter 64 and have a brand new 64x64 grid pop up without changing the total amount of pixels used.

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// create 16x16 square divs using js only
// center the container div to be more presentable - DONE

// use loops to create the first row
// start by creating a for loop that creates a div 16 times, and appends DONE
// each of these will eventually be the horizontal rows
// we will house each column div within these rows eventually
// let's style each div as a class .rowDiv so we can see how it looks, don't forget border



// think of how this will look in the DOM
// <div> 16xdivs </div> for the first loop let's append all to the container div
// function loopMaker() will do just that
//we will have to name each rowDiv() by number, or we can create an array of divs....
// ^^^^ DONE ^^^^

// for each row div, add 16 column divs or colDivs
// create a loop that runs through each row, then adds 16 divs to them
// add them to a colDivArr[] to track? let's try a 2d array
// create each grid by creating a new div and appending?
// create a class for the divs so that they behave and are placed correctly
// repeat until we hit the end of the 16th row and finish
// place them in the "container" div
// make them appear as a grid
// ^^^ DONE ^^^


// add hover effect to each column div
// the hover effect is to stay
// when the hover effect is applied, set the class to "etchedDiv"
// add event listener for a hover, then apply "etchedDiv"
// ^^^ DONE ^^^ 







function loopMaker() {
    let rowDivArr = [];
    let colDivArr = [];
    const grabContainer = document.querySelector("#container")

    //create row divs
    for (let i = 0; i < 16; i++){
        rowDivArr[i] = document.createElement('div');
        rowDivArr[i].setAttribute('class', 'rowDiv');
        grabContainer.appendChild(rowDivArr[i]);
        colDivArr[i] = [];

        //create column divs 
        for (let j = 0; j < 16; j++){
            colDivArr[i][j] = document.createElement('div');
            colDivArr[i][j].setAttribute('class', 'colDiv');
            colDivArr[i][j].addEventListener('mouseover', () => {
                colDivArr[i][j].classList.add('etchedDiv');
              });
            rowDivArr[i].appendChild(colDivArr[i][j]);
        }
    }

    

}




loopMaker();