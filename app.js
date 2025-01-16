const http = require("http");
const fs = require("fs");

// readStream.on("data", (chunk) => {
//   console.log("new data received");
//   console.log(chunk);
//   writeStream.write(chunk);
// });

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });

  const readStream = fs.createReadStream(__dirname + "/read-me.txt", "utf-8");
  // const writeStream = fs.createWriteStream(__dirname + "/write-me.txt");

  readStream.pipe(res);

  // res.end("hello world");
});

console.log("Listening on port 3000");
server.listen(3000, "127.0.0.1");
