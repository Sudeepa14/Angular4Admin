module.exports = function(app) {

    // api ---------------------------------------------------------------------
    // get all todos
            app.get('/', function(req, res) {
                res.send("you are in the todos in the api");
                 console.log("in the /");
            });

    // application -------------------------------------------------------------
    // app.get('*', function(req, res) {
    //     // res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    //     console.log("in the star ");
    //     res.sendfile('D:/editlat/last/last/src/index.html');
   
    // });

};
