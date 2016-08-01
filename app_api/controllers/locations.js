// var mongoose= require('mongoose');
var Loc=require('./../models/locations');
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
	if(req.params && req.params.locationid){
		Loc
		   .findById(req.params.locationid)
		   .select('name reviews')
		   .exec(function(err,location){
		   	// when location is not found
		   	if(!location){
		   		sendJsonResponse(res,404,{
		   			"message":"location not found"
		   		})
		   		return;
		   	}
		   	// if error is found
		   	else if(err){
		   		sendJsonResponse(res,404,err)
		   		return;
		   	}
		   	var review = {};
		   	console.log("reviews",location.reviews);
		   	for(var i=0;i<location.reviews.length;i++) {
		   		console.log('-------',req.params.reviewid, typeof req.params.reviewid, (location.reviews[i].id), typeof location.reviews[i].id);
		   		if(req.params.reviewid == (location.reviews[i].id).toString()) {
		   			review = location.reviews[i];
		   			break;
		   		}
		   	}
		   	// review=location.reviews.id(ObjectId('req.params.reviewid'))
		   	console.log("reviews",review,location.reviews,req.params.reviewid);
		   	sendJsonResponse(res,200,review)
		   })

	}
	else
	{
		sendJsonResponse(res,404,{
			"message":"locationid not found"
		});
	}
	// Loc
	//    .findById(req.params.locationid)
	//    .exec(function(err,location){
	//    	  sendJsonResponse(res, 200, location)
	//    })
  
};