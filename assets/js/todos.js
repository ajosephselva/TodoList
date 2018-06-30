//check of todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//click on x to delete todo
$("ul").on("click", "span", function(event){ //event can be any name
	$(this).parent().fadeOut(500, function(){
		$(this).remove(); //the this here refers to the li not the span
	}); //parent ensures the whole li	
	event.stopPropagation();
});

//adding input
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val(""); // empty input
		//create new li to ul
	$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>")

	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle(200);
})