
$(document).ready(function(){
 //  getStub('/getTrains', function(results){
          $.get('/getTrains', function(results){
         var tableString = "<tr><th>Train Name</th><th>In Service</th><th>Number of Available Cars</th></tr>";
         $.each(results, function(index, rowObject){
      tableString += "<tr><td>" + rowObject.name + "</td>" +
        "<td>" + rowObject.inservice + "</td>" +
        "<td>" + rowObject.numberofavailable + "</td></tr>"
    });

         console.log(results);
         $.each(results, function(index, rowObject){
      tableString += "<tr><td>" + rowObject.name + "</td>" +
        "<td>" + rowObject.inservice + "</td>" +
        "<td>" + rowObject.numberofavailable + "</td></tr>"
    });
     $('#trainTable2').html(tableString);
   });
});

function getStub(endpoint,callback){
   var stubbedJson="";
   if (endpoint == "/getTrains"){
     
     stubbedJson = [ 
       {"id":1,"name":"stubb redline 813","inservice":true,"numberofavailable":8},
       {"id":2,"name":"redline 912","inservice":true,"numberofavailable":10},
       {"id":3,"name":"greenline 713","inservice":true,"numberofavailable":10},
       {"id":4,"name":"brownline 412","inservice":true,"numberofavailable":8}];
  }
  callback(stubbedJson);  
}


       
     