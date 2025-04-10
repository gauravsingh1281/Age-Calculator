import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;

//Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs", {
    Day: "--",
    Month: "--",
    Year: "--",
    userDay: null,
    userMonth: null,
    userYear: null,
  });
});

app.post("/", (req, res) => {
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();

  // Data entered by the user
  const { day, month, year } = req.body;
  const userDay = Number(day);
  const userMonth = Number(month);
  const userYear = Number(year);

  // Difference in Day, Month, and Year
  let diffDay = currentDay - userDay;
  let diffMonth = currentMonth - userMonth;
  let diffYear = currentYear - userYear;

  if (diffDay < 0) {
    diffMonth -= 1;
    const daysInPrevMonth = new Date(
      currentYear,
      currentMonth - 1,
      0
    ).getDate();
    diffDay += daysInPrevMonth;
  }
  if (diffMonth < 0) {
    diffYear -= 1;
    diffMonth += 12;
  }
  res.render("index.ejs", {
    Day: diffDay,
    Month: diffMonth,
    Year: diffYear,
    userDay: userDay,
    userMonth: userMonth,
    userYear: userYear,
  });
});
app.listen(port, () => {
  console.log(`App started listening on port ${port}`);
});
