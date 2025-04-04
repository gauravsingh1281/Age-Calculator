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
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  // Data entered by the user
  const { day, month, year } = req.body;
  const userDay = Number(day);
  const userMonth = Number(month);
  const userYear = Number(year);

  // Difference in Day, Month, and Year
  const diffDay = userDay - currentDay;
  const diffMonth = userMonth - currentMonth;
  const diffYear = userYear - currentYear;
  res.render("index.ejs", { Day: diffDay, Month: diffMonth, Year: diffYear });
});
app.listen(port, () => {
  console.log(`App started listening on port ${port}`);
});
