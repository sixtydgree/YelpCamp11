var express = require("express"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    flash = require("connect-flash"),
    passport = require("passport"),
    cookieParser = require("cookie-parser"),
    LocalStrategy = require("passport-local"),
    methodOverride = require("method-override"),
    ajax = require("ajax"),
    Campground = require("./models/campground"),
    Comment = require("./models/comment"),
    User = require("./models/user"),
    session = require("express-session"),
    seedDB = require("./seeds");
    
require("dotenv").load();
   
   
var campgroundRoutes = require("./routes/campgrounds"),
    commentRoutes = require("./routes/comments"),
    indexRoutes = require("./routes/index");
    

var app = express();
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/yelp_camp_final", {useMongoClient: true});

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
});

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(cookieParser("secret"));
app.use(flash());
// seedDB();
app.locals.moment = require("moment");


app.use(require("express-session")({
    secret: "Amy always wins",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
     res.locals.error = req.flash("error");
     res.locals.success = req.flash("success");
    next();
});

app.use("/", indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);



app.get("*", function(req, res){
    res.send("ERROR 404: Page not found...");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp Engaged!!");
});