// var mongoose= require('mongoose');
var Loc = require('./../models/locations');
var ObjectID = require('mongodb').ObjectID;

var ldata = new Loc({
    name: 'xxxx',
    address: 'yyyy',
    rating: 4,
    facilities: ['sdasdzd'],
    "coords": [88.423425, 22.591311],
    "openingTimes": [{ 
    	"days": "Monday-Friday", 
    	"opening": "9:00 am", 
    	"closing": "8:00 pm", 
    	"closed": false 
    }, { 
    	"days": "Saturday", 
    	"opening": "9:00 am", 
    	"closing": "5:00 pm", 
    	"closed": false 
    }, { 
    	"days": "Sunday", 
    	"closed": true 
    }],
    reviews: {
    	author:'ddssxzbdshtdh',
    	rating:5,
    	reviewText:'sdgfgkjvkls siug sk skj ssd dsf',
    	createdOn: new Date()
    }
});

// ldata.save(function(){});

// common function for HTTP status code and JSON 
var sendJsonResponse = function(res, status, content) {
        res.status(status);
        res.json(content)
    }
    // placeholder functions
module.exports.locationsCreate = function(req, res) {
    sendJsonResponse(res, 200, { "status": "success" })
};


//This controller will be used to the location by id
module.exports.locationsReadOne = function(req, res) {
    // To check if there is locationid or not
    if (req.params && req.params.locationid) {
        Loc
            .findById(req.params.locationid)
            .select('name reviews')
            .exec(function(err, location) {
                // when location is not found
                if (!location) {
                    sendJsonResponse(res, 404, {
                        "message": "location not found"
                    })
                    return;
                }
                // if error is found
                else if (err) {
                    sendJsonResponse(res, 404, err)
                    return;
                }
                var review = location.reviews.id(req.params.reviewid);

                // review=location.reviews.id(ObjectId('req.params.reviewid'))
                sendJsonResponse(res, 200, review);
            })

    } else {
        sendJsonResponse(res, 404, {
            "message": "locationid not found"
        });
    }
    // Loc
    //    .findById(req.params.locationid)
    //    .exec(function(err,location){
    //    	  sendJsonResponse(res, 200, location)
    //    })

};
