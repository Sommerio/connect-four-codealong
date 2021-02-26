/*----- constants -----*/


/*----- app's state (variables) -----*/
let board, turn, winner;

/*----- cached element references -----*/


/*----- event listeners -----*/


/*----- functions -----*/
init();

function init() {
  // Initialize all state
  board = [
    [0, 0, 0, 0, 0, 0],  // Column 0
    [0, 0, 0, 0, 0, 0],  // Column 1
    [0, 0, 0, 0, 0, 0],  // Column 2
    [0, 0, 0, 0, 0, 0],  // Column 3
    [0, 0, 0, 0, 0, 0],  // Column 4
    [0, 0, 0, 0, 0, 0],  // Column 5
    [0, 0, 0, 0, 0, 0],  // Column 6
  ];
  turn = 1;
  winner = null;
  render();
}

function render() {

}