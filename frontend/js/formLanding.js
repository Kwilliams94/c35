
$(document).ready(function(){
   
    
     
    $.get('/views/:id', function(results){
    
     var tableString = "<tr><th>Name</th><th>Course</th><th>Cost</th><th>Start Date</tr>";
    var $approve =$('#approve');
   
   
    $.each(results, function(index, rowObject){
      tableString += "<tr><td><a href= '/view/" + rowObject.trng_reqst_nbr + "'>" + rowObject.name +  "</a></td><td>" + rowObject.trng_cors_nm + "</td><td>" + rowObject.trng_cors_cost + "</td><td>" + rowObject.trng_cors_strt_dt + "</td></tr>";
      
                $('#aLanding_table').html(tableString);
      
           
 

    
});




    $('#aLanding_table').html(tableString);
    
   
    
    
});
  });
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
*/