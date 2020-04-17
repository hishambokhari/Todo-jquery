
$(function(){
  $("h1").animate({
    "margin-left": "100px"
  }, "slow");
  

$('#taskBtn').click(function() { // This is the submit button
  
    var newTask = $('#taskInputText').val(); // this var takes in the text typed in

    if(newTask !== '') { // if the text are is not empty - meaning something is typed in
      
        var count = $("#taskListSection").children().length; // this var takes in the length of the list
        
        $('#taskListSection').append('<li class="list-group-item deletetask bg-success">' + count + '. '+ newTask + '</li>'); // here the list is appended - newtask is added with the count 
       
        $('#taskInputText').val('');
        
        deleteTasks(); // function for delete tasks - created below
        
        setTimeout(function(){
          $('#taskListSection li.bg-success').removeClass('bg-success'); // when the delete button is clicked the task is removed from the li
        },1000); 
      
    } else {
        alert('Come on, you\'re better than that');   // if theres a error this is returned
    }
});  
});

function deleteTasks(){
 $('.deletetask').click(function(){ // delete function
    $(this).remove();
}); 

}