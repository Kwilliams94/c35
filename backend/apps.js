var express = require('express');
var database = require('./database.js');
var app = express();
var port = process.env.PORT || 1337;
var bodyParser = require('body-parser');
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: true }) );
var moment = require('moment');
moment().format();  //installed by jeff 4/4/2016

//Set up to render the html correctly from the html folder
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname.replace('backend', 'frontend') + '/html');
app.use(express.static(__dirname.replace('backend', 'frontend')));

app.get('/', function(req,res){
  console.log('app / requested');
  return res.status(200).send("hello world");
});

app.get('/hi', function(req,res){
  console.log('app / requested');
  return res.status(200).send("hi there programmer");
});


app.get('/getTrains', function(req,res){
   database.executeQuery("SELECT * FROM trains", function(results) {
      res.send(results);
});
});


app.get('/helloworld', function(req,res){
  console.log('app / helloworld requested');
  return res.render('helloworld.html');
});


app.get('/rForm', function(req,res){
  console.log('app / rForm requested');
  return res.render('rForm.html');
});

app.get('/trainList', function(req,res){
  console.log('app / trains requested');
  return res.render('trainList.html');
});


//misc calls





//STATUS PAGE APPROVERS

app.get('/getstat', function(req,res){
  console.log('app getstat/ requested');
  database.executeQuery("SELECT trng_reqst_nbr, trng_cors_cost, trng_reqst_immed_supv_apvl_flg, trng_reqst_dept_hd_apvl_flg, trng_reqst_vp_apvl_flg FROM ttx_empl_trng_reqst", function(results) {
      res.send(results);
});
});


app.get('/status', function(req,res){
  console.log('app / status requested');
  return res.render('status.html');
});


// ANCILLARY PAGES
app.get('/contactUs', function(req,res){
  console.log('app / contactUs requested');
  return res.render('contactUs.html');
});





//FOR THE cHistory PAGE USER
app.get('/cHistory', function(req,res){
  console.log('app cHistory/  requested');
  return res.render('cHistory.html');
});

// *****************************view page*************************





//



app.get('/view/:id', function(req,res){
  console.log('app /view/:id');
  var id = req.params.id;
  var sql=`select * from ttx_empl_trng_reqst where trng_reqst_nbr  = '${id}';
  `;
  console.log(sql);
 database.executeQuery(sql , function(results){
   console.log(JSON.stringify(results))
  
  res.send(results);
  
  // res.send(results);
 });
  
  
  });



app.get('/getHistory', function(req,res){
  console.log('app getHistory/ requested');
  database.executeQuery("SELECT trng_reqst_nbr, trng_cors_nm, trng_cors_strt_dt, trng_cors_end_dt FROM ttx_empl_trng_reqst", function(results) {
      res.send(results);
     
});
});
//zui get

app.get('/zUi', function(req,res){
  console.log('app zUi/  requested');
  return res.render('zUi.html');
});


//FOR THE LANDING PAGE APPROVERS
/*

app.get('/addrForm', function(req,res){
  console.log('app addrForm/ requested');
  database.executeQuery("select Cast (DATE_PART('year',  current_date)as text) || 0 || Cast (DATE_PART('month',  current_date)as text) || count(*) from date_2016 as trng_reqst_nbr;", function(results) {
      res.send(results);
});
});
*/

app.get('/getLanding', function(req,res){
  console.log('app getLanding/ requested');
  database.executeQuery("select trng_cors_nm,trng_cors_cost, Trng_Reqst_Immed_Supv_Apvl_Flg, trng_cors_strt_dt, trng_reqst_nbr,name from ttx_empl_trng_reqst t, empl_info e  where e.email = t.Cntct_Email_Addr and trng_reqst_immed_supv_apvl_flg ='P';", function(results) {
      res.send(results);
});
});

//aLanding call
app.get('/aLanding', function(req,res){
  console.log('app / aLanding requested');
  return res.render('aLanding.html');
});

//zUI call




//POSTING INFO
 
app.post('/addzUi', function(req,res){
      var sql = `
   INSERT INTO empl_info (id,name,email) 
   VALUES ('${req.body.id}', '${req.body.name}', '${req.body.email}');
  `;
        database.executeQuery(sql);
   console.log('posted to /addzUi');
  console.log(JSON.stringify(req.body));
  return res.send("success");
});

//post approver route
//get

app.get('/appSend', function(req,res){
  console.log('app / appSend requested');
   var sequel = `
   Update ttx_empl_trng_reqst
   set  trng_reqst_immed_supv_apvl_flg
  where trng_request_immed_supv_apv_flg = 'Y';
  `;
        database.executeQuery(sequel);
 
  
});



 //post submit form

 app.post('/Form', function(req,res){
  var sql = `
INSERT INTO ttx_empl_trng_reqst (
trng_cors_nbr,
trng_cors_typ,                 
trng_cors_nm,                  
trng_cors_strt_dt,             
trng_cors_end_dt,               
trng_cors_totl_nbr_hrs,         
trng_cors_locn,                 
trng_cors_cost,                 
Trng_cors_rltd_exp_amt,         
Trng_Cors_Budg_Pln_Flg,
Vndr_nm,
Vndr_Mail_Addr,
Vndr_Mail_City,
Vndr_Mail_St,
Trng_Reqst_Fwd_Actg_Paym_Flg) 
VALUES (
'${req.body.trng_cors_nbr}',
'${req.body.trng_cors_typ }',
'${req.body.trng_cors_nm}',
'${req.body.trng_cors_strt_dt}',
'${req.body.trng_cors_end_dt}',
'${req.body.trng_cors_totl_nbr_hrs}',
'${req.body.trng_cors_locn}',
'${req.body.trng_cors_cost}',
'${req.body.trng_cors_rltd_exp_amt}',
'${req.body.trng_cors_budg_pln_flg}',
'${req.body.vndr_nm}',
'${req.body.vndr_mail_addr}',
'${req.body.vndr_mail_city}',
'${req.body.vndr_mail_st}',
'${req.body.trng_reqst_fwd_actg_paym_flag},
');
  `;
   database.executeQuery(sql);
  console.log('posted to /addrForm');
  console.log(JSON.stringify(req.body));
  return res.send("success");
});


//get Info Form

/*
app.get('/getInfo', function(req,res){
  console.log('app /getInfo requested');
  database.executeQuery("select trng_cors_typ, trng_cors_nm,trng_cors_nbr, trng_cors_strt_dt,trng_cors_end_dt,trng_cors_totl_nbr_hrs,trng_cors_locn,trng_cors_cost,Trng_cors_rltd_exp_amt,Trng_reqst_cors_bnft_txt,trng_Cors_Budg_Pln_Flg,trng_Cors_Not_Budg_Pln_Rsn_Txt,Vndr_nm,vndr_Mail_Addr,Vndr_Mail_City,Vndr_Mail_St,Vndr_Mail_Zip_Cd,Trng_Reqst_Fwd_Actg_Paym_Flg from ttx_empl_trng_reqst ", function(results) {
      res.send(results);
});
});

*/
/*
  app.post('/getzUi', function(req,res){
    console.log("Sending the data");
    database.executeQuery("INSERT INTO empl_info (id,name,email) VALUES ('"
    return res.send("success");
  });
//app.post('/', function(request, response) {
//    response.write(request.body.user);
//    response.end();
//});
*/

app.listen(port, function(){
  console.log("Application is running:");
  console.log("Listening on " + port);
});
