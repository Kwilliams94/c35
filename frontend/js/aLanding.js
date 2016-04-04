

$(document).ready(function(){
   

   
    $.get('/getLanding', function(results){

 // getStub('/getLanding', function(results){
    var tableString = "<tr><th>Name</th><th>Course</th><th>Cost</th><th>Start Date</tr>";
    var $approve =$('#approve');
   
   
    $.each(results, function(index, rowObject){
      tableString += "<tr><td>" + rowObject.name + "</td><td>" + rowObject.trng_cors_nm + "</td><td>" + rowObject.trng_cors_cost + "</td><td>" + rowObject.trng_cors_strt_dt + "</td></tr>"
                $('#aLanding_table').html(tableString+scriptString);
      
           
           
  var scriptString = function approve(){ 
       $.post('/approved', { 
       trng_reqst_immed_supv_apvl_flg : 'Y'    });    }   
           

     
     

    
});


    $('#aLanding_table').html(tableString);
    
   
    
    
  });
 
});


 