

$(document).ready(function(){
   
  
      
   $('#Kevin').hide();
   
   

   
    $.get('/getLanding', function(results){

 // getStub('/getLanding', function(results){
    var tableString = "<tr><th>Name</th><th>Course</th><th>Cost</th><th>Start Date</tr>";
    var $approve =$('#approve');
   
   
    $.each(results, function(index, rowObject){
      tableString += "<tr><td><a class='detailView' id=" + rowObject.trng_reqst_nbr  + " href= '#' >" + rowObject.name +  "</a></td><td>" + rowObject.trng_cors_nm + "</td><td>" + rowObject.trng_cors_cost + "</td><td>" + rowObject.trng_cors_strt_dt + "</td></tr>"
    });
                $('#aLanding_table').html(tableString); 
                console.log("here");
                 $(".detailView").on('click', function(){
       // $('#Jeff').hide();
       // $('#Kevin').fadeIn();
     console.log('this is 2');
      var id = ($(this).attr('id'));
        console.log(id);
         var id = this.id;
         $.get('/view/'+id, function(results){
          console.log(results);
          
          
$('#trng_cors_typ').html(results[0].trng_cors_typ);
$('#trng_cors_nm').html(results[0].trng_cors_nm);
$('#trng_cors_strt_dt').html(results[0].trng_cors_strt_dt);           
$('#trng_cors_end_dt').html(results[0].trng_cors_end_dt);              
$('#trng_cors_totl_nbr_hrs').html(results[0].trng_cors_totl_nbr_hrs);     
$('#trng_cors_locn').html(results[0].trng_cors_locn);              
$('#trng_cors_cost').html(results[0].trng_cors_cost);               
$('#Trng_cors_rltd_exp_amt').html(results[0].Trng_cors_rltd_exp_amt);   
$('#Trng_Cors_Budg_Pln_Flg').html(results[0].Trng_Cors_Budg_Pln_Flg);
$('#Vndr_nm').html(results[0].Vndr_nm);
$('#Vndr_Mail_Addr').html(results[0].Vndr_Mail_Addr);
$('#Vndr_Mail_City').html(results[0].Vndr_Mail_City);
$('#Vndr_Mail_St').html(results[0].Vndr_Mail_St);
$('#Trng_Reqst_Fwd_Actg_Paym_Flg').html(results[0].trng_reqst_fwd_actg_paym_flag);
$('#Trng_Cors_rltd_exp_amt').html(results[0].Trng_Cors_rltd_exp_amt);
$('#Vndr_Nm').html(results[0].vndr_nm);
$('#Vndr_Mail_Addr').html(results[0].vndr_mail_addr);
$('#Vndr_Mail_City').html(results[0].vndr_mail_City);
$('#Vndr_Mail_St').html(results[0].vndr_mail_st);
$('#Vndr_Mail_Zip_Cd').html(results[0].vndr_zip_cd);
          
         });
       
        $('#Jeff').hide();
        $('#Kevin').fadeIn();
    });
      
     
           
       });
});
 

 


/*
 var id = this.id;
          $.ajax({
  method: "GET",
  url: "/view/"+ id,
   function(index, rowObject){
              rowObject.trng_cors_nm
              
              $('#trng_cors_nm').append(rowObject.trng_cors_nm);
          }
          })
         

/*


 $('#trng_cors_nbr')
$('#trng_cors_typ')
 $('#trng_cors_nm}')
 $('#trng_cors_strt_dt')
 $('#trng_cors_end_dt')
 $('#trng_cors_totl_nbr_hrs')
$('#trng_cors_locn')
 $('#trng_cors_cost')
$('#trng_cors_rltd_exp_amt')
$('#trng_reqst_cors_bnft_txt')
$('#trng_cors_budg_pln_flg')
$('#trng_cors_not_budg_pln_rsn_txt')
$('#vndr_nm')
$('#vndr_mail_addr')
$('#vndr_mail_city')
$('#vndr_mail_st')
$('#vndr_zip_cd')
$('#trng_reqst_fwd_actg_paym_flag')
/*

$(".detailview").on('click', function(){
    //var id = this.id
    
    var id = this.id
    //ajax get view/id
    
   $.ajax({
  method: "GET",
  url: "/views/"+id,
  
})

 
    */
    
    
    //fade out
    
  


    //fade in

 