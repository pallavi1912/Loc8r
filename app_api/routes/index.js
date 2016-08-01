var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/locations');
var ctrlReview = require('../controllers/reviews');
// we don't need to specify /api here because we have already specified in app.js that these paths will be used only if the url starts with /api so it is assured that it will always with /api 
// locations:define routes for locations
// router.get('/locations', ctrlLocations.locationsListByDistance);
router.post('/locations', ctrlLocations.locationsCreate);
router.get('/locations/:locationid/reviews/:reviewid', ctrlLocations.locationsReadOne);
// router.put('/locations/:locationid', ctrlLocations.locationUpdateOne);
// router.delete('/locations/:locationid', ctrlLocations.locationDeleteOne);

// reviews:define routes for reviews
router.post('/locations/:locationid/reviews', ctrlReview.reviewsCreate);
// router.get('/locations/:locationid/reviews/:reviewid', ctrlReviews.reviewReadOne);
// router.put('/locations/:locationid/reviews/:reviewid', ctrlReviews.reviewUpdateOne);
// router.delete('/locations/:locationid/reviews/:reviewid', ctrlReviews.reviewDeleteOne);
//export routes
module.exports = router;