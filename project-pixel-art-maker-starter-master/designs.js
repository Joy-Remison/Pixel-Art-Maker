// Select color input
//Accessing the color element 
const color = document.getElementById('colorPicker');

// Select size input
//accessing the table and size picker element
const table = document.getElementById('pixelCanvas');
const sizePicker = document.getElementById('sizePicker');

//accessing the height and width element
let height = document.getElementById('inputHeight').value;
let width = document.getElementById('inputWidth').value;
makeGrid(height, width);

//adding an event listener to clear the grid on submission
sizePicker.addEventListener('submit', (event) => {

    event.preventDefault();
    table.firstChild.remove();
    let height = document.getElementById('inputHeight').value;
    let width = document.getElementById('inputWidth').value;
    makeGrid(height, width);
});



// When size is submitted by the user, call makeGrid()

//append row function using for loop
function makeGrid(height, width) {
    for (i = 0; i <= height; i++) {
        let row = table.insertRow(i);
        for (j = 0; j <= width; j++) {
            let cell = row.insertCell(j);
            cell.addEventListener('click', (event) => {
                cell.style.backgroundColor = color.value;
            });
        }
    }

    // Your code goes here!

}