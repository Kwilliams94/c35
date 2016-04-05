

$(document).ready(function(){
   
   
   

   
    $.get('/getLanding', function(results){

 // getStub('/getLanding', function(results){
    var tableString = "<tr><th>Name</th><th>Course</th><th>Cost</th><th>Start Date</tr>";
    var $approve =$('#approve');
   
   
    $.each(results, function(index, rowObject){
      tableString += "<tr><td><a class='detailview' id='' href= '/view/" + rowObject.trng_reqst_nbr + "'>" + rowObject.name +  "</a></td><td>" + rowObject.trng_cors_nm + "</td><td>" + rowObject.trng_cors_cost + "</td><td>" + rowObject.trng_cors_strt_dt + "</td></tr>"
                $('#aLanding_table').html(tableString);
      
           
 

    
});




    $('#aLanding_table').html(tableString);
    
   
    
    
  });
 
});

$(".detailview").on('click', function(){
    //var id = this.id
    //ajax get 
    //set values in html from json
    //fade out
    //fade in
    
});
 