// Create a webpage with a 16x16 grid of square divs.
// Create the divs using JavaScript. Don’t try making them by hand with copy and pasting in your HTML file!
// It’s best to put your grid squares inside another “container” div (which can go directly in your HTML).
// There are several different ways to make the divs appear as a grid (versus just one on each line). Feel free to use any or play with each of them:
// float/clear
// inline-block
// flexbox
// CSS Grid
// Be careful with borders and margins, as they can adjust the size of the squares!


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
            console.log(colDivArr);
            rowDivArr[i].appendChild(colDivArr[i][j]);
        }
    }

    

}




loopMaker();