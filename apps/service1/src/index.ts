import express from "express";
import { fn1, fn12 } from "@myrepo/lib1";

const port = process.env.PORT || 7001;

const app = express();

app.get("/api/v1/f1", (_, res) => res.send(fn1()));
app.get("/api/v1/f12", (_, res) => res.send(fn12()));

const server = app.listen(port, () => {
  console.log(`Express server app listening`, server.address());
});
