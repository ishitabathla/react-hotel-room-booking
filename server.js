const express = require('express')
const next = require('next')
var bodyParser = require('body-parser')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
var session = require('express-session')
var mysql = require('mysql')

app.prepare()
.then(() => {
  const server = express()

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'next'
})

  connection.connect(function(err) {
    if (err) throw err
    console.log('You are now connected...')
  })

  server.use(bodyParser.urlencoded({ extended: false }))
  server.use(bodyParser.json())
  
  server.get('/data', (req, res) => {
     connection.query('SELECT * from data',function(err,response){
        if(err){
          console.log(err);
          throw err;
        }else{
           for (var i in response) {
                response[i].adult = parseInt(response[i].adult);
                response[i].childern = parseInt(response[i].childern);
             if (response[i].checked == 1) {
                response[i].checked = true;
             }else{
                response[i].checked = false;
             }
           }
           res.send(response);
        }
     });   
  });

 server.post('/submit', (req, res) => {
     var rooms = req.body.data.rooms;
   
    connection.query('SELECT * from data',function(err,response){
        if(err){
          console.log({err});
        }else{
        
          if(response.length==0){
            for(x in rooms){
      
                connection.query('INSERT INTO data (roomNum, checked, adult,childern) VALUES (?, ?, ?, ?)', [rooms[x].roomNum, rooms[x].checked, rooms[x].adult, rooms[x].childern], 
                function(err, result) { 
                  if(err){
                    console.log({err});
                  }else{
                    console.log({result})
                  }
                })
            }
          }else{
            connection.query('TRUNCATE table data',function(err,response){
              if(err){
                  console.log({err});
                }else{

                for(x in rooms){
                 
                 connection.query('INSERT INTO data (roomNum, checked, adult,childern) VALUES (?, ?, ?, ?)', [rooms[x].roomNum, rooms[x].checked, rooms[x].adult, rooms[x].childern], 
                function(err, result) { 
                  if(err){
                    console.log({err});
                  }else{
                    console.log({result})
                  }
                })

               }
              }
            })
          }
        }
    })
    res.send();
  });


  server.get('*', (req, res) => {    
    return handle(req, res)
  });
 

  server.listen(4000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:4000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})