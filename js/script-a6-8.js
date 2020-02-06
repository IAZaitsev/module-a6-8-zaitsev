//$("#my-progress-bar").width("41%")
var Load = 0;
function per1(){
	var CurrentLoad = Load;
	Load = CurrentLoad + 1;
	$("#my-progress-bar").width(`${Load}%`); /*в таких скобочках ``
	потому что иначе он не поймёт что написано, и что надо
	взять значение переменной LOAD, аналогично, если
	там выполнять какие-то действия (25+25) например, то
	тоже надо ставить такие скобки, иначе можно обойтись "" */
}
$("#1per").click(function(){ //по клику кнопки, вызываем функцию
	per1();
})

function per3(){
	var CurrentLoad = Load;
	Load = CurrentLoad + 3;
	$("#my-progress-bar").width(`${Load}%`); //заполнение
											//прогрессбара
}
$("#3per").click(function(){
	per3();
})

function per7(){
	var CurrentLoad = Load;
	Load = CurrentLoad + 7;
	$("#my-progress-bar").width(`${Load}%`);
}
$("#7per").click(function(){
	per7();
})


