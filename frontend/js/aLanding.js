

$(document).ready(function(){
   

   
    $.get('/getLanding', function(results){

 // getStub('/getLanding', function(results){
    var tableString = "<tr><th>Req #</th><th>Course</th><th>Cost</th><th>Start Date</tr>";
    var $approve =$('#approve');
   
   
    $.each(results, function(index, rowObject){
      tableString += "<tr><td><a href= '#'>" + rowObject.trng_reqst_nbr + "</td>" + "<td>" + rowObject.trng_cors_nm + "</td>" +
        "<td>" + rowObject.trng_cors_cost + "</td><td>" + rowObject.trng_cors_strt_dt + "</td></tr><tr><td><button class='approve' id='approve_" + rowObject.trng_reqst_nbr + "'>Approve</button><button class='reject' id='reject_" + rowObject.trng_reqst_nbr + "' >Reject  </button></td></tr>";
               
                
      
           
   

     
     

    
});


    $('#aLanding_table').html(tableString);
    
    
  });
 
});


 