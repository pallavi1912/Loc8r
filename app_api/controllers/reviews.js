var mongoose= require('mongoose');
var Loc= mongoose.model('Location');

var sendJsonResponse = function(res, render, content) {
    res.status(status);
    res.json(content)
}
module.exports.reviewsCreate = function(req, res) {
    sendJsonResponse(res, 200, { "status": "success" })
};
