var express = require("express"),
    router = express.Router(),
    Campground = require("../models/campground"),
    Comment = require("../models/comment"),
    middleware = require("../middleware"),
    request = require("request"),
    geocoder = require("geocoder");
    
    
function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&");
}
    

router.get("/", function(req, res){
    if(req.query.search && req.xhr) {
        const regex = new RegExp(escapeRegex(req.query.search), "gi");
        Campground.find({name: regex}, function(err, allCampgrounds){
            if(err){
                console.log(err);
            } else {
                res.status(200).json(allCampgrounds);
            }
        });
    } else{
        Campground.find({}, function(err, allCampgrounds){
            if(err){
                console.log(err);
            } else {
                if(req.xhr) {
                    res.json(allCampgrounds);
                } else {
                    res.render("campgrounds/index", {campgrounds: allCampgrounds, page: "campgrounds"});
                }
            }
        });
    }
	//____
    // Campground.find({}, function(err, allCampgrounds){
    //     if(err){
    //         console.log(err);
    //     } else {
    //         res.render("campgrounds/index", {campgrounds:allCampgrounds});
    //     }
    // });
    // res.render('campgrounds', {campgrounds:campgrounds});
});

router.post("/", middleware.isLoggedIn, function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var price = req.body.price;
    var desc = req.body.description;
    var author = {
        id: req.user._id,
        username: req.user.username
    };
    geocoder.geocode(req.body.location, function (err, data) {
        var lat = data.results[0].geometry.location.lat;
        var lng = data.results[0].geometry.location.lng;
        var location = data.results[0].formatted_address;
            var newCampground = {name: name, image: image, price: price, description: desc, author: author, location: location, lat: lat, lng: lng};
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            res.redirect("/campgrounds");
        }
    });
    });
});

router.get("/new", middleware.isLoggedIn, function(req, res){
   res.render("campgrounds/new"); 
});

router.get("/:id", function(req, res){
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err || !foundCampground){
            console.log(err);
            req.flash("error", "Sorry, that campground does not exist!");
            return res.redirect("/campgrounds");
        } 
        res.render("campgrounds/show", {campground: foundCampground});
    });
});

//EDIT CAMPGROUND ROUTE
router.get("/:id/edit", middleware.checkCampgroundOwnership || middleware.isAdmin, function(req, res){
         Campground.findById(req.params.id, function(err, foundCampground){
             if(err){
                 req.flash("error", "Campground not found");
                 res.redirect("back");
             }
            res.render("campgrounds/edit", {campground: foundCampground});
    });
});
//UPDATE CAMPGROUND ROUTE
router.put("/:id", middleware.checkCampgroundOwnership || middleware.isAdmin, function(req, res){
    //find and update the correct campground
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground){
        if(err){
            req.flash("error", "Something went wrong!");
            res.redirect("/campgrounds");
        } else {
            req.flash("success", "Campground Updated!!")
            res.redirect("/campgrounds/" + req.params.id);
        }
    });
});

//DESTROY CAMPGROUND ROUTE
router.delete("/:id", middleware.checkCampgroundOwnership || middleware.isAdmin, function(req, res) {
    Campground.findByIdAndRemove(req.params.id, function(err){
        if(err){
            req.flash("error", "You don't have permission to do that.");
            res.redirect("/campgrounds");
        } else {
            req.flash("success", "Campground deleted!!");
            res.redirect("/campgrounds");
        }
    });
});


module.exports = router;