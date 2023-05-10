const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer();

server.on("request", (req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
    <h1>Hello Node!</h1>
    <a href="http://localhost:8000/read-message">read</a>
    <a href="http://localhost:8000/write-message">write</a>

    `);
  }
  if (req.url === "/read-message") {
    res.setHeader("Content-Type", "text/html");
    const textFilePath = path.join(__dirname, "text.html");
    fs.readFile(textFilePath, (err, content) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(content, "utf8");
    });
  }
  if (req.url === "/write-message" && req.method === "GET") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    console.log("post");
    res.write(`
    <form method="post">
    <input type="text" name="message"></input><button type="submit" mthod="POST">submit</button>
    </form>
    `);
    res.end();
  }

  if (req.url === "/write-message" && req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    console.log(body);
    req.on("end", () => {
      const formData = new URLSearchParams(body);
      const message = formData.get("message");
      let content = `<p>${message}</p>`;
      fs.writeFile("text.html", content, (err) => {
        if (err) throw err;
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
});

server.on('listening', ()=>{
    console.log("Server is listening...")
})

server.listen(8000);


















//memo
//npm init -y
//npm install -D nodemon

//"Nodemon" is a utility tool that monitors changes in the source code of a Node.js application 
//and automatically restarts the application whenever a change is detected, 
//which is particularly useful during development.
//The "-D" flag stands for "--save-dev" and indicates that the package 
//will be installed as a dev dependency, meaning it is not necessary 
//for the production deployment of the application, but only required during development.
//After running this command, the "nodemon" package will be installed locally 
//in the "node_modules" directory of your project, and the package information 
//will be added to the "devDependencies" section of your project's "package.json" file.

