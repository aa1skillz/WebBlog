var express=require("express");
var config=require("config");
var bodyParser=require("body-parser");
var session=require("express-session");

var app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: config.get("secret_key"),
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));



app.set("views",__dirname+"/apps/views");
app.set("view engine","ejs");
//static folder
app.use("/static",express.static(__dirname+"/public"));

var controllers=require(__dirname+"/apps/controllers/");
app.use(controllers);
//api
var routes=require('./api/router');
app.use('/blog/api',routes);

var host=config.get("server.host");
var port=config.get("server.port");
app.listen(port,host, function(){
    console.log("Server is running on port ",port);
});