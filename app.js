const http = require("http");
const fs = require("fs");

// readStream.on("data", (chunk) => {
//   console.log("new data received");
//   console.log(chunk);
//   writeStream.write(chunk);
// });

const server = http.createServer((req, res) => {
  console.log("url", req.url);

  if (req.url === "/home" || req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/index.html").pipe(res);
  } else if (req.url === "/about-me") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/about.html").pipe(res);
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/404.html").pipe(res);
  }
});

console.log("Listening on port 3000");
server.listen(3000, "127.0.0.1");
