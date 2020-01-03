var mysql  = require('mysql');  
 
var connection = mysql.createConnection({     
  host     : '10.211.55.5',       
  user     : 'root',              
  password : 'root',       
  port: '3306',                   
  database: 'sciframe4' 
}); 
 
connection.connect();
 
var  sql = "SELECT * FROM TM_USER WHERE ACCOUNT='SUPERMAN'";
//查
connection.query(sql,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
 
       console.log('--------------------------SELECT----------------------------');
       console.log(result);
       console.log('------------------------------------------------------------\n\n');  
       
});
 
connection.end();