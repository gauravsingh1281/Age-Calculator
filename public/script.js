const inputForm = document.getElementById("dateForm");
inputForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const day = document.getElementById("day");
  const month = document.getElementById("month");
  const year = document.getElementById("year");
  const dayHeading = document.querySelector(".day-title");
  const monthHeading = document.querySelector(".month-title");
  const yearHeading = document.querySelector(".year-title");
  const showDayErrMsg = document.querySelector(".day-err-msg");
  const showMonthErrMsg = document.querySelector(".month-err-msg");
  const showYearErrMsg = document.querySelector(".year-err-msg");
  const showValidDateErrMsg = document.querySelector(".show-valid-date-msg");
  let dayValue, monthValue, yearValue;
  let isValid = true;
  //Reset error messages
  showDayErrMsg.textContent = "";
  showMonthErrMsg.textContent = "";
  showYearErrMsg.textContent = "";
  showValidDateErrMsg.textContent = "";
  dayHeading.classList.remove("error");
  monthHeading.classList.remove("error");
  yearHeading.classList.remove("error");
  year.style.border = "1px solid var(--Off-black)";
  month.style.border = "1px solid var(--Off-black)";
  day.style.border = "1px solid var(--Off-black)";

  // Get current year
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  //user input validation

  //for day

  if (day.value.trim() !== "") {
    dayValue = Number(day.value);
    if (isNaN(dayValue) || dayValue < 1 || dayValue > 31) {
      showDayErrMsg.textContent = "Must be a valid day";
      dayHeading.classList.add("error");
      day.style.border = "1px solid var(--Light-red)";
      isValid = false;
    }
  } else {
    showDayErrMsg.textContent = "This field is required";
    dayHeading.classList.add("error");
    day.style.border = "1px solid var(--Light-red)";
    isValid = false;
  }

  //for month
  if (month.value.trim() !== "") {
    monthValue = Number(month.value);
    if (isNaN(monthValue) || monthValue < 1 || monthValue > 12) {
      showMonthErrMsg.textContent = "Must be a valid month";
      monthHeading.classList.add("error");
      month.style.border = "1px solid var(--Light-red)";
      isValid = false;
    }
  } else {
    showMonthErrMsg.textContent = "This field is required";
    monthHeading.classList.add("error");
    month.style.border = "1px solid var(--Light-red)";
    isValid = false;
  }

  //For year
  if (year.value.trim() !== "") {
    yearValue = Number(year.value);
    if (isNaN(yearValue) || yearValue < 1000 || yearValue > currentYear) {
      showYearErrMsg.textContent = "Must be in the past";
      yearHeading.classList.add("error");
      year.style.border = "1px solid var(--Light-red)";
      isValid = false;
    }
  } else {
    showYearErrMsg.textContent = "This field is required";
    yearHeading.classList.add("error");
    year.style.border = "1px solid var(--Light-red)";
    isValid = false;
  }

  // for valid date
  if (isValid) {
    const inputDate = new Date(`${yearValue}-${monthValue}-${dayValue}`);
    if (
      inputDate.getDate() !== dayValue ||
      inputDate.getMonth() + 1 !== monthValue ||
      inputDate.getFullYear() !== yearValue
    ) {
      showValidDateErrMsg.textContent = "Must be a valid date";
      day.style.border = "1px solid var(--Light-red)";
      month.style.border = "1px solid var(--Light-red)";
      year.style.border = "1px solid var(--Light-red)";
      isValid = false;
    }
  }
  if (isValid) {
    this.submit();
  }
});
