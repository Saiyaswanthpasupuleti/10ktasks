let http = require("http");
let fs = require("fs");
const server = http.createServer((req, res) => {
  fs.readFile('./Result.txt', 'utf8', (err, data) => {
    if(err){
      console.log(err)
    }
    else{
      console.log(data)
    }
  });
  
});

server.listen(3001, () => {
  console.log("can can !_!");
});
