/*GET 'about' page*/
module.exports.about = function(req, res) {
        res.render('generic-text', {
                    title: 'About',
                    pageHeader: {
                        title: 'about Us'
                    },
                    aboutInfo: 'Loc8r was created to help people find places to sit down and get a bit of work done.'
                     });
                };
