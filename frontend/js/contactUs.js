$(document).ready(function(){
   
    $.get('/getHistory', function(results){

 // getStub('/getLanding', function(results){
    var tableString = "<tr><th>Req #</th><th>Course</th><th>Start Date</th><th>End Date</th></tr>";
   
   
    $.each(results, function(index, rowObject){
      tableString += "<tr class='clickable-row'><td>" + rowObject.trng_reqst_nbr + "</td>" +
        "<td>" + rowObject.trng_cors_nm + "</td>" +
        "<td>" + rowObject.trng_cors_strt_dt + "</td><td>" + rowObject.trng_cors_end_dt + "</td><td><input type='button' name='approve'  value='Complete Course' onclick='selectAll()'></td></tr>";

    });
    $('#cHistoryTable').html(tableString);
    
    
  });

});