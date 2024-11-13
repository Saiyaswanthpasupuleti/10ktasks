var http = require("http");
const { json } = require("stream/consumers");

var url = require("url");

var server = http.createServer((req, res) => {
  

  var parsed = url.parse(req.url, true);

  console.log(parsed.query.order);

  if (parsed.query.order == "desc") {
    j.sort((a, b) => {
       return a.price - b.price;
    });
  } else if (parsed.query.order == "asc") {
    j.sort((a, b) => {
      return   b.price - a.price;
    });
  } else {
    var j = j;
  }
console.log(j);

  res.end(JSON.stringify(j));
});

var port = 3007;
server.listen(port, () => {
  console.log("hi i am conected to " + "http:/localhost:" + port);
});