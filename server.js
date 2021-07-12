// Import modules
import express from 'express'
import * as racerDb from './data/racers-db.js'

// Create express app
const app = express()

// Configure the app
app.set('view engine', 'ejs')

// Mount middleware


// Mount routes
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