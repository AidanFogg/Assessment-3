console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form has been submitted successfully');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let picture = document.querySelector('img');

form.addEventListener('mouseover', () => {
	alert('You are one cool cat')
});