/*----- constants -----*/
const colorLookup = {
  '0': 'white',
  '1': 'purple',
  '-1': 'lime'
};

/*----- app's state (variables) -----*/
let board, turn, winner;

/*----- cached element references -----*/


/*----- event listeners -----*/
document.getElementById('markers')
  .addEventListener('click', handleDrop);

/*----- functions -----*/
init();

function handleDrop(evt) {
  console.log(evt.target);
}

function init() {
  // Initialize all state
  board = [
    [1, 0, 0, 0, 0, 0],  // Column 0
    [0, 0, 0, 0, 0, 0],  // Column 1
    [0, 0, 0, 0, 0, 0],  // Column 2
    [0, 0, 0, 0, 0, 0],  // Column 3
    [0, 0, 0, 0, 0, 0],  // Column 4
    [0, 0, 0, 0, 0, 0],  // Column 5
    [0, 0, 0, 0, 0, -1],  // Column 6
  ];
  turn = 1;
  winner = null;
  render();
}

function render() {
  // Render the board
  board.forEach(function(colArr, colIdx) {
    // Iterate over the col array to access the cell vals
    colArr.forEach(function(cellVal, rowIdx) {
      // Select the correct div for this cellVal
      const div = document.getElementById(`c${colIdx}r${rowIdx}`);
      div.style.backgroundColor = colorLookup[cellVal];
    });
  });
}