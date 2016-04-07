WHAT IM TRYING TO ACCOMPLISH!

GET APPROVER BUTTON TO APPROVE
==========================================================
STEP 1
________________________________________________________
TARGET THE APPROVER BUTTON
MAKE THE BUTTON GENERATED ATTACHED TO EACH REQUEST NUMBER
_________________________________________________________

#BUTTON IS PRESSED#

CRE  ONFIRMATION
UPON CONFIRMATION === TRUE
THEN
SEND TO THE DATABASE A QUERY 'UPDATE'
***************************************************
Update ttx_empl_trng_reqst
set  trng_reqst_immed_supv_apvl_flg
where trng_request_immed_supv_apv_flg = 'Y'  
****************************************************
SEND BACK SUCCESS
ALERT THE USER THAT IT WAS SUCCESSFUL

==========================================================