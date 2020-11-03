

//VANILLA JAVASCRIPT VERSION 

let input = document.querySelector('input');
let list = document.querySelector('ul');
let plus = document.querySelector('.fa-plus');

plus.addEventListener('click', function(event){
	input.classList.toggle('hidden');
})
let index = 0;


input.addEventListener('keypress', function(event){
	if(event.keyCode === 13){
		let toDo = document.createElement('li');		
		toDo.innerHTML = `<span id=${index++}><i class='fa fa-trash'></i></span>` + input.value;		
		input.value = "";
		list.append(toDo);

		
		toDo.addEventListener('click', function(){
			toDo.classList.toggle('completed');
			});

	
		let trashCan = document.getElementById(index - 1);
		if(trashCan){
			trashCan.addEventListener('click', function(event){
			event.preventDefault();
			event.target.parentNode.parentNode.remove();
		
		
		
		});
		};
	}
});



