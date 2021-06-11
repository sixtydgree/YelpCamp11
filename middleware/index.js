// all middleware is here
var Campground = require("../models/campground"),
    User = require("../models/user"),
    Comment = require("../models/comment");
var middlewareObj = {};

middlewareObj.checkCampgroundOwnership = function(req, res, next){
     if(req.isAuthenticated()){
         Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            req.flash("error", "Campground not found");
            res.redirect("back");
        } else {
            //does user own post
            if(foundCampground.author.id.equals(req.user._id) || req.user.isAdmin){
                next();
            } else {
                req.flash("error", "You don't have permission to do that.");
               res.redirect("back");
            }
        }
    });
    } else {
        req.flash("error", "You need to be logged in to do that...");
        res.redirect("back");
    }
} 



middlewareObj.checkCommentOwnership = function(req, res, next){
     if(req.isAuthenticated()){
         Comment.findById(req.params.comment_id, function(err, foundComment){
        if(err){
            res.redirect("back");
        } else {
            //does user own post
            if(foundComment.author.id.equals(req.user._id) || req.user.isAdmin){
                next();
            } else {
                req.flash("error", "You don't have permission to do that...");
               res.redirect("back");
            }
        }
    });
    } else {
        req.flash("error", "You need to be logged in to do that...");
        res.redirect("back");
    }
}


middlewareObj.isLoggedIn = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error", "You need to be logged in to do that...");
    res.redirect("/login");
}

 middlewareObj.isAdmin = function(req, res, next) {
    if(req.user.isAdmin) {
      next();
    } else {
      req.flash("error", "You no longer have access to that!");
      res.redirect('back');
    }
  };
  
 middlewareObj.isSafe = function(req, res, next) {
    if(req.body.image.match(/^https:\/\/*/)) {
      next();
    }else {
      req.flash("error", "Only images from a secure source may be used.");
      res.redirect('back');
    }
  };
  
middlewareObj.checkUserOwnership = function(req, res, next){
     if(req.isAuthenticated()){
         User.findById(req.params.id, function(err, foundUser){
        if(err){
            req.flash("error", "User not found");
            res.redirect("back");
        } else {
            //does user own post
            if(foundUser._id.equals(req.user._id) || req.user.isAdmin){
                next();
            } else {
                req.flash("error", "You don't have permission to do that.");
               res.redirect("back");
            }
        }
    });
    } else {
        req.flash("error", "You need to be logged in to do that...");
        res.redirect("back");
    }
} 


module.exports = middlewareObj;