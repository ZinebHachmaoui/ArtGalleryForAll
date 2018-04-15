var express = require('express');
var app = express();
var body_parser = require('body-parser');

app.set('view engine' , 'ejs')
app.use('/assets',express.static('assets'))
const winston = require('winston');
const logger = new (winston.Logger)({
  transports: [
    // colorize the output to the console
    new (winston.transports.Console)({
        timestamp: function() {
            return (new Date()).toLocaleTimeString();
        },
        colorize: true
    })
  ]});
logger.level= 'silly'

var cookie = require('cookie-parser')
app.use(cookie())
app.use(body_parser.json())

app.use(function(req,res,next){
    logger.debug("url: " + req.originalUrl);
    next();
})

app.get('/',(request,response)=>{
    var cookie = request.cookies.lastVisit;
    response.cookie('lastVisit',
                   new Date().toLocaleTimeString(),
                    { maxAge: 10000} 
                    )
    logger.info("last Visit: " + cookie)  
    response.render("index2")
    
})
app.get('/portrait-a-la-demande',(request,response)=>{
        response.render("portrait-a-la-demande", {qs: request.query})  
})
app.post('/portrait-a-la-demande',(request,response)=> {
logger.debug(request.body)    
response.send('ok')
                                         })

app.get('/nos-artistes',(request,response)=>{

        response.render("nos-artistes", {qs: request.query})

    
})
app.post('/nos-artistes',(request,response)=> {
logger.debug(request.body)    
response.send('ok')
                                         })

app.get('/contact',(request,response)=>{
        response.render("contact", {qs: request.query})    
})
app.post('/contact',(request,response)=> {
logger.debug(request.body)    
response.send('ok')
                                         })

//404 aucune interception
app.use(function(req,res,next){
    res.status(404).render("404")
        logger.debug("404: c'est une erreur");

})
app.listen(3000)
logger.info("C'est parti ")
logger.silly("mon kiki")


