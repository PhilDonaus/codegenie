
var x = 'X'
var o = 'O'
var values = {
	1:'',
	2:'',
	3:'',
	4:'',
	5:'',
	6:'',
	7:'',
	8:'',
	9:''
}


var current = ''

function change_status(state){
	if (state === 'X'){
		return '0';
	}
	else{
		return 'X';
	}
}

function onclick(index){

	current = change_status(values[index])
	values[index] = current
	return current
}


inse