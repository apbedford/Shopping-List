$(document).ready(function(){


function addListItem (event){
    event.preventDefault();

	var item = $("#entry").val();
	$("#added").append('<li><p>'+item+'</p><input class="remove" type="image" src="x-solid.png"/></li>')
	$('#entry').val('');}

// no item alert
$('#button').click(function(event){
    event.preventDefault();
	if($('#entry').val() !== "") {} 	
	else { alert('Please add an item!');
	
	}
});

//add list item
$(function(){
 $("#button").on('click', addListItem);

});

//delete list items
$('#added').on('click', '.remove', function(event){event.preventDefault(); 
	$(this).parent().remove()});
});


//$('#added').fadeOut(300, function(){ 
    //$(this).remove();
//});