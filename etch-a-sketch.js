// Add a button to the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. Once entered, the existing grid should be removed and a new grid should be generated in the same total space as before (e.g. 960px wide) so that you’ve got a new sketch pad. Tip: Set the limit for the user input to a maximum of 100. A larger number of squares results in more computer resources being used, potentially causing delays, freezing, or crashing that we want to prevent.
// Research button tags in HTML and how you can make a JavaScript function run when one is clicked.
// Also check out prompts.
// You should be able to enter 64 and have a brand new 64x64 grid pop up without changing the total amount of pixels used.

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//create a button, then append it to the top of the body
// prompt user
// we will create a function to do this gameButton
// we have created gameButton() and now need to add styling for the button

//working on this
function gameButton() {
    const btnDiv = document.createElement('div');
    const btn = document.createElement('button');
    const bodyTag = document.querySelector('body');

    bodyTag.insertBefore(btnDiv, bodyTag.firstChild);
    btnDiv.appendChild(btn);
    btnDiv.setAttribute('id', 'gameButtonDiv');
    btn.setAttribute('id', 'gameButton');
    btn.textContent = "Start here!";

    btn.onclick = () => console.log("Hello World");
}


function gridMaker() {
    let rowDivArr = [];
    let colDivArr = [];
    const grabContainer = document.querySelector("#container");
    
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





gameButton();
gridMaker();
