//check of completed to dos 
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed")
});

//clicking on delete to remove to do
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
})

//adding a new to do on user input
$("input[type= 'text']").keypress(function(event){
	//once user presses enter key
	if(event.which === 13){
		//save input into variable
		var newTodo = $(this).val();
		//clear the value
		$(this).val("");
		//create new li and span then to the ul
		$("ul").append("<li> <span> <i class='fa fa-trash'> </i> </span> " + newTodo + "</li>" );
	}
})

$(".fa-pencil").click(function(){
	$("input[type= 'text'").fadeToggle(200);
});