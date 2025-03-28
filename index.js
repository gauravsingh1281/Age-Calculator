import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;

//Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});
app.listen(port, () => {
  console.log(`App started listening on port ${port}`);
});
