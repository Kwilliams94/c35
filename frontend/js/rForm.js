$(document).ready(function(){


  $('#addEmployeeForm').submit(function(event){

    $.post('/Form', {  
      trng_reqst_nbr :                $('trng_reqst_nbr').val(),
      trng_cors_typ:                  $('trng_cors_typ').val(),
      trng_cors_nm :                  $('trng_cors_nm').val(),
      trng_cors_nbr:                  $('trng_cors_nbr').val(),        
      trng_cors_strt_dt:              $('trng_cors_strt_dt').val() ,          
      trng_cors_end_dt:               $('trng_cors_end_dt').val(),            
      trng_cors_totl_nbr_hrs:         $('trng_cors_totl_nbr_hrs').val(),            
      trng_cors_locn:                 $('trng_cors_locn').val(),          
      trng_cors_cost:                 $('trng_cors_cost').val(),          
      Trng_cors_rltd_exp_amt:         $('trng_cors_rltd_exp_amt').val(),            
      Trng_reqst_cors_bnft_tx:        $('Trng_reqst_cors_bnft_tx').val(),    
     	Trng_Cors_Budg_Pln_Flg:         $('Trng_Cors_Budg_Pln_Flg').val(),          
     	Vndr_nm:                        $('Vndr_nm').val(),                                        
      Vndr_Mail_Addr:                 $('Vndr_Mail_Addr').val(),                        
      Vndr_Mail_City:                 $('Vndr_Mail_City').val(),                              
      Vndr_Mail_St:                   $('Vndr_Mail_St').val(),                              
      trng_Reqst_Fwd_Actg_Paym_Flg:   $('Trng_Reqst_Fwd_Actg_Paym_Flg').val()          
      
   
      
     
      
    });
    console.log(JSON.stringify);
    console.log("SENT FROM THE JS");
   
      alert("Form Submitted");
  });
  
  
  
  
});
  
  
  