var rows = 10;
var cols = 10;
var squareSize = 50;

var gameBoard1Container = document.getElementById("gameBoard1");

for (i = 0; i < cols; i++) {
	for (j = 0; j < rows; j++) {

		var square = document.createElement("div");
		gameBoard1Container.appendChild(square);

		square.id = 's' + j + i;

		var topPosition = j * squareSize;
		var leftPosition = i * squareSize;

		square.style.top = topPosition + 'px';
		square.style.left = leftPosition + 'px';
	}
}

var hitCount = 0;

var gameBoard1 = [
	[0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
	[1, 0, 0, 0, 0, 0, 1, 1, 1, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
	[1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]

gameBoard1Container.addEventListener("click", fireTorpedo, false);

function fireTorpedo(e) {

	if (e.target !== e.currentTarget) {
		var row = e.target.id.substring(1, 2);
		var col = e.target.id.substring(2, 3);


		if (gameBoard1[row][col] == 0) {
			e.target.style.background = '#bbb';
			gameBoard1[row][col] = 3;


		} else if (gameBoard1[row][col] == 1) {
			e.target.style.background = 'red';

			gameBoard1[row][col] = 2;

			hitCount++;

			if (hitCount == 17) {
				alert("All enemy battleships have been defeated! You win!");
			}

		} else if (gameBoard1[row][col] > 1) {
			alert("Stop wasting your torpedos! You already fired at this location.");
		}
	}
	e.stopPropagation();
}


var rows = 10;
var cols = 10;
var squareSize = 50;

var gameBoard2Container = document.getElementById("gameBoard2");

for (i = 0; i < cols; i++) {
	for (j = 0; j < rows; j++) {

		var square = document.createElement("div");
		gameBoard2Container.appendChild(square);

		square.id = 's' + j + i;

		var topPosition = j * squareSize;
		var leftPosition = i * squareSize;

		square.style.top = topPosition + 'px';
		square.style.left = leftPosition + 'px';
	}
}

var hitCount = 0;


var gameBoard2 = [
	[0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
	[1, 0, 0, 0, 0, 0, 1, 1, 1, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
	[1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]


gameBoard2Container.addEventListener("click", fireTorpedo, false);


function fireTorpedo(e) {

	if (e.target !== e.currentTarget) {
		var row = e.target.id.substring(1, 2);
		var col = e.target.id.substring(2, 3);


		if (gameBoard2[row][col] == 0) {
			e.target.style.background = '#bbb';
			gameBoard2[row][col] = 3;


		} else if (gameBoard2[row][col] == 1) {
			e.target.style.background = 'red';

			gameBoard2[row][col] = 2;

			hitCount++;

			if (hitCount == 17) {
				alert("All enemy battleships have been defeated! You win!");
			}

		} else if (gameBoard2[row][col] > 1) {
			alert("Stop wasting your torpedos! You already fired at this location.");
		}
	}
	e.stopPropagation();
}
