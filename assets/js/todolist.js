
// $("li").click(function(){
// 	console.log($(this).css("color"));
	

// 	if ($(this).css("color") === "rgb(255, 0, 0)") {
// 		$(this).css({
// 			color: "black",
// 			textDecoration: "none"
// 		});
// 	}
// 	else{
// 		$(this).css({
// 		// this will refer only to the one clicked not the entire li
// 		color: "red",
// 		textDecoration: "line-through"
// 		// because text-decoration with a dash in javascript is not possible and we need to replace it
// 	});
// 	}
	
// });

// This will be the same as above but in an easier way:

$("ul").on("click", "li", function(){
	// we put ul because will be the code 
	// that will exist when the page loads
	// and the click action will apply to the li
	$(this).toggleClass("completed");
	
});

// Click on X to delete:

$("ul").on("click", "span", function(event){
	// but by clicking the span then it will trigger the li, then the ul, then the div and finally the body
	event.stopPropagation();
	// this will prevent from "bubbling out"
	$(this).parent().fadeOut(500, function(){
		// by placing a function inside the fadeOut we will tell 
		// JS to wait to run the remove action when fadeOut is finished
		$(this).remove();
		// this "this" refers to the li not the span
	});
	// where parent is the entire li and this the span

});

$("input[type= 'text'").keypress(function(){
	if (event.which === 13) {
		var todo = $(this).val();
		$(this).val("");
		$("ul").append("<li><span> <i class='fa fa-trash'></i> </span>" + todo + "</li>")
	}
});


$(".fa-address-card-o").click(function(){
	$("input[type= 'text'").fadeToggle();
})