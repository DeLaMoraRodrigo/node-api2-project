const express = require("express");
const postsRouter = require("./data/postsRouter");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
    res.json({ query: req.query, params: req.params, headers: req.headers})
})

server.use("/api/posts", postsRouter);

server.listen(4000, () => {
    console.log("Server is up an running!")
})