"use strict";

var loopback = require("loopback");
var boot = require("loopback-boot");

var par = require("./feedParser");

var app = (module.exports = loopback());

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit("started");
    var baseUrl = app.get("url").replace(/\/$/, "");
    console.log("Web server listening at: %s", baseUrl);

    if (app.get("loopback-component-explorer")) {
      var explorerPath = app.get("loopback-component-explorer").mountPath;
      console.log("Browse your REST API at %s%s", baseUrl, explorerPath);
    }
    // getHtml();
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module) app.start();
});

// router
app.get("/feeds", function(req, res) {
  par.getFeedsSourceBBC();
  par.getFeedsSourceDW();
  console.log("length", par.allfeeds.length);
  // let arr = [10];
  // if (par.allfeeds.length > 0) {
  //   console.log(par.allfeeds);
  //   for (feed in par.allfeeds) {
  //     console.log("allllllla\n");
  //     arr.push(par.allfeeds.pop());
  //   }
  //   console.log("arr", arr);
  // }
  let a = par.allfeeds;
  par.allfeeds = [];
  res.json(a);
});
