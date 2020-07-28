//check off todo list
$('ul').on('click', 'li', function(){
    $(this).toggleClass('completed')
});

//click on "x" to delete todo
$('ul').on('click', 'span', function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
})

//building input field
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //grabbing todo text from input
        var todoText = $(this).val();
        //clears input field
        $(this).val("")
        //create a new li and add to ul
        $('ul').append("<li><span id='delete'><i class='fas fa-minus-circle'></i></span> " + todoText + "</li>");
    };
});

//plus sign click listener to close "add new todo"
$("#toggleTodo").click(function(){
    $("input[type='text']").fadeToggle();
})