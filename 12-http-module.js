const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page.");
  }

  if (req.url === "/about") {
    req.end("This is about section");
  }

  res.end(`
  <h1>Something went wrong here!!</h1>
  
  `);
});

server.listen(5000);
