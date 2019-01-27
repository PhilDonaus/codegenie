
var X = 'X';
var O = 'O';

var values = {
	1:' ',
	2:' ',
	3:' ',
	4:' ',
	5:' ',
	6:' ',
	7:' ',
	8:' ',
	9:' '
}

var count = 0;

var current = ' ';

function change_status(){
	if (current === ' '){
		current = 'X';
		return 'X';
	}
	if (current === 'X'){
		current = 'O';
		return 'O';
	}
	if (current === 'O'){
		current = 'X';
		return 'X';
	}
}

function tictac(index){
	if (values[index] === ' '){
		values[index] = change_status();
		count = count + 1;
		render();
	}
	winner(values);
}

function render(){
	document.getElementById("one").innerHTML = values[1];
	document.getElementById("two").innerHTML = values[2];
	document.getElementById("three").innerHTML = values[3];
	document.getElementById("four").innerHTML = values[4];
	document.getElementById("five").innerHTML = values[5];
	document.getElementById("six").innerHTML = values[6];
	document.getElementById("seven").innerHTML = values[7];
	document.getElementById("eight").innerHTML = values[8];
	document.getElementById("nine").innerHTML = values[9];
}


function winner(data){

	if (data[1] === data[2] && data[2] === data[3] && data[1] !== ' '){
		document.getElementById("win").innerHTML = data[1] + " is the winner!";
	}
	if (data[4] === data[5] && data[5] === data[6] && data[4] !== ' '){
		document.getElementById("win").innerHTML = data[4] + " is the winner!";
	}
	if (data[7] === data[8] && data[8] === data[9] && data[7] !== ' '){
		document.getElementById("win").innerHTML = data[7] + " is the winner!";
	}
	if (data[1] === data[4] && data[4] === data[7] && data[1] !== ' '){
		document.getElementById("win").innerHTML = data[1] + " is the winner!";
	}
	if (data[2] === data[5] && data[5] === data[8] && data[2] !== ' '){
		document.getElementById("win").innerHTML = data[2] + " is the winner!";
	}
	if (data[3] === data[6] && data[6] === data[9] && data[3] !== ' '){
		document.getElementById("win").innerHTML = data[3] + " is the winner!";
	}
	if (data[1] === data[5] && data[5] === data[9] && data[1] !== ' '){
		document.getElementById("win").innerHTML = data[1] + " is the winner!";
	}
	if (data[3] === data[5] && data[5] === data[7] && data[3] !== ' '){
		document.getElementById("win").innerHTML = data[3] + " is the winner!";
	}
	if (count == 9){
		document.getElementById("win").innerHTML = " It's a tie!";
	}
}

function restart(){
	current = ' ';
	values = {
		1:' ',
		2:' ',
		3:' ',
		4:' ',
		5:' ',
		6:' ',
		7:' ',
		8:' ',
		9:' '
	};
	render();
	document.getElementById("win").innerHTML = "";
}