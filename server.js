//import modules
import express from 'express'
import * as racerDb from './data/racers-db.js'
//create express app
const app = express()
//configure the app
app.set('view engine', 'ejs')
//mount middleware


//mount routes
app.get('/racers', function(req,res){
    racerDb.find({}, function(error, racers){
        res.render('racers/index',{
            racers,
            error
        })
    })
})

app.get('/', function(req,res){
    res.redirect('/racers')
})

app.listen(3000, function(){
    console.log('Listening on port 3000')
})