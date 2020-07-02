import express from "express";
import { fn2 } from "@myrepo/lib2";

const port = process.env.PORT || 7002;

const app = express();

app.get("/api/v1/f2", (req, res) => res.send(fn2()));

const server = app.listen(port, () => {
  console.log(`Express server app listening`, server.address());
});
