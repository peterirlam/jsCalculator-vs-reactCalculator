const disp = (num) => {
	document.querySelector('#textarea').value += num; 
}; 

const calculate = () => {
	let value = document.querySelector('#textarea').value;
	let answer = eval(value);
	document.querySelector('#textarea').value = answer;
};

const clr = () => {
	document.querySelector('#textarea').value = null;
};
