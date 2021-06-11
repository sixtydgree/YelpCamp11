var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest", 
        image: "https://farm8.staticflickr.com/7268/7121859753_e7f787dc42.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla laoreet sodales. Ut a felis at enim imperdiet lacinia iaculis vitae nisl. Integer vitae ornare tellus. Maecenas et aliquet urna, vel blandit lacus. Suspendisse scelerisque sem id leo fringilla, et convallis enim cursus. Nam fringilla dui a velit faucibus ultrices. Aliquam laoreet ante at massa fermentum, in consequat tellus tincidunt. In eget tellus lorem. In a condimentum neque. Aenean et sem auctor, varius libero non, fringilla nisi. Integer facilisis massa ac justo posuere, nec bibendum metus dapibus. Nulla at posuere diam. Sed eget libero ac est accumsan cursus. Proin ultrices, lorem quis sollicitudin maximus, sem nulla consectetur lacus, et bibendum sem dolor vel ex. Pellentesque ac fringilla neque. Vivamus molestie blandit ante in lacinia. Morbi dapibus porttitor congue. In vitae ipsum nulla. In auctor venenatis ipsum, sit amet rutrum leo euismod et. Nam eget fermentum risus, et volutpat magna. Nullam maximus mattis mi, id scelerisque est rhoncus ac. Maecenas elit arcu, laoreet aliquam bibendum a, pretium faucibus ex. Phasellus gravida nulla nisi, eu tempor libero sollicitudin vel. In maximus a felis eget congue. Etiam sit amet dui convallis, faucibus eros et, auctor dui."
    },
    {
        name: "The Mesa", 
        image: "https://farm4.staticflickr.com/3487/3753652204_a752eb417d.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla laoreet sodales. Ut a felis at enim imperdiet lacinia iaculis vitae nisl. Integer vitae ornare tellus. Maecenas et aliquet urna, vel blandit lacus. Suspendisse scelerisque sem id leo fringilla, et convallis enim cursus. Nam fringilla dui a velit faucibus ultrices. Aliquam laoreet ante at massa fermentum, in consequat tellus tincidunt. In eget tellus lorem. In a condimentum neque. Aenean et sem auctor, varius libero non, fringilla nisi. Integer facilisis massa ac justo posuere, nec bibendum metus dapibus. Nulla at posuere diam. Sed eget libero ac est accumsan cursus. Proin ultrices, lorem quis sollicitudin maximus, sem nulla consectetur lacus, et bibendum sem dolor vel ex. Pellentesque ac fringilla neque. Vivamus molestie blandit ante in lacinia. Morbi dapibus porttitor congue. In vitae ipsum nulla. In auctor venenatis ipsum, sit amet rutrum leo euismod et. Nam eget fermentum risus, et volutpat magna. Nullam maximus mattis mi, id scelerisque est rhoncus ac. Maecenas elit arcu, laoreet aliquam bibendum a, pretium faucibus ex. Phasellus gravida nulla nisi, eu tempor libero sollicitudin vel. In maximus a felis eget congue. Etiam sit amet dui convallis, faucibus eros et, auctor dui."
    },
    {
        name: "Foggy Bank Park", 
        image: "https://farm8.staticflickr.com/7677/17482091193_e0c121a102.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla laoreet sodales. Ut a felis at enim imperdiet lacinia iaculis vitae nisl. Integer vitae ornare tellus. Maecenas et aliquet urna, vel blandit lacus. Suspendisse scelerisque sem id leo fringilla, et convallis enim cursus. Nam fringilla dui a velit faucibus ultrices. Aliquam laoreet ante at massa fermentum, in consequat tellus tincidunt. In eget tellus lorem. In a condimentum neque. Aenean et sem auctor, varius libero non, fringilla nisi. Integer facilisis massa ac justo posuere, nec bibendum metus dapibus. Nulla at posuere diam. Sed eget libero ac est accumsan cursus. Proin ultrices, lorem quis sollicitudin maximus, sem nulla consectetur lacus, et bibendum sem dolor vel ex. Pellentesque ac fringilla neque. Vivamus molestie blandit ante in lacinia. Morbi dapibus porttitor congue. In vitae ipsum nulla. In auctor venenatis ipsum, sit amet rutrum leo euismod et. Nam eget fermentum risus, et volutpat magna. Nullam maximus mattis mi, id scelerisque est rhoncus ac. Maecenas elit arcu, laoreet aliquam bibendum a, pretium faucibus ex. Phasellus gravida nulla nisi, eu tempor libero sollicitudin vel. In maximus a felis eget congue. Etiam sit amet dui convallis, faucibus eros et, auctor dui."
    }
    ];

function seedDB(){
    //Remove all campgrounds
        Campground.remove({}, function(err){
        // if(err){
        //     console.log(err);
        // }
        // console.log("removed campgrounds");
            //Add some campgrounds
    //     data.forEach(function(seed){
    //         Campground.create(seed, function(err, campground){
    //             if(err) {
    //                 console.log(err);
    //             } else {
    //                 console.log("added a campground");
    //                 Comment.create({
    //                     text: "This place is great, but I wish there was internet",
    //                     author: "Homer"
    //                 }, function(err, comment){
    //                     if(err){
    //                         console.log(err);
    //                     } else {
    //                          campground.comments.push(comment);
    //                         campground.save();
    //                         console.log("Created new comment")
    //                     }
    //                 });
    //             }
    //         });
    //     });
    });

    //Add a few comments
}


module.exports = seedDB;