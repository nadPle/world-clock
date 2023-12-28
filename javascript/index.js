function showTime() {
  let standardTimeElement = document.querySelector("h1");
  let standardTime = moment().tz("Europe/Zurich");

  standardTimeElement.innerHTML = standardTime.format("H:mm:ss");

  let bernElement = document.querySelector("#bern");
  let bernElementDate = bernElement.querySelector(".grid-item-date");
  let bernElementTime = bernElement.querySelector(".grid-item-time");
  let bernTime = moment().tz("Europe/Zurich");

  bernElementDate.innerHTML = bernTime.format("MMMM Do YYYY");
  bernElementTime.innerHTML = bernTime.format("H:mm");

  let londonElement = document.querySelector("#london");
  let londonElementDate = londonElement.querySelector(".grid-item-date");
  let londonElementTime = londonElement.querySelector(".grid-item-time");
  let londonTime = moment().tz("Europe/London");

  londonElementDate.innerHTML = londonTime.format("MMMM Do YYYY");
  londonElementTime.innerHTML = londonTime.format("H:mm");

  let johannesburgElement = document.querySelector("#johannesburg");
  let johannesburgElementDate =
    johannesburgElement.querySelector(".grid-item-date");
  let johannesburgElementTime =
    johannesburgElement.querySelector(".grid-item-time");
  let johannesburgTime = moment().tz("Africa/Johannesburg");

  johannesburgElementDate.innerHTML = johannesburgTime.format("MMMM Do YYYY");
  johannesburgElementTime.innerHTML = johannesburgTime.format("H:mm");

  let washingtonElement = document.querySelector("#washington");
  let washingtonElementDate =
    washingtonElement.querySelector(".grid-item-date");
  let washingtonElementTime =
    washingtonElement.querySelector(".grid-item-time");
  let washingtonTime = moment().tz("US/Eastern");

  washingtonElementDate.innerHTML = washingtonTime.format("MMMM Do YYYY");
  washingtonElementTime.innerHTML = washingtonTime.format("H:mm");
}

showTime();
setInterval(showTime, 1000);
