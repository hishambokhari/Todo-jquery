
$(function(){
  $("h1").animate({
    "margin-left": "100px"
  }, "slow");
  

$('#taskBtn').click(function() {
  
    var newTask = $('#taskInputText').val();

    if(newTask !== '') {
      
        var count = $("#taskListSection").children().length;
        
        $('#taskListSection').append('<li class="list-group-item deletetask bg-success">' + count + '. '+ newTask + '</li>');
       
        $('#taskInputText').val('');
        
        deleteTasks();
        
        setTimeout(function(){
          $('#taskListSection li.bg-success').removeClass('bg-success');
        },1000); 
      
    } else {
        alert('Come on, you\'re better than that');   
    }
});  
});

function deleteTasks(){
 $('.deletetask').click(function(){
    $(this).remove();
}); 

}