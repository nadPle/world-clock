function showStandardTime() {
  let standardTimeElement = document.querySelector("h1");
  let standardTime = moment().tz("Europe/Zurich");

  standardTimeElement.innerHTML = standardTime.format("H:mm:ss");
}

function updateTime() {
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

function updateSelectedCity(event) {
  clearInterval(updateTimeInterval);

  let cityTimeZone = event.target.value;

  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityDate = moment().tz(cityTimeZone);
  let cityElement = document.querySelector("#variable-city-element");

  cityElement.innerHTML = `
        <div class="cities-grid-bern" id="bern">
        <div class="grid-item-city">${cityName}</div>
        <div class="grid-item-date">${cityDate.format("MMMM Do YYYY")}</div>
        <div class="grid-item-time">${cityDate.format("H:mm")}</div>
        </div>
<a href = "index.html">Show all cities</a>
        `;
}

let selectedCity = document.querySelector("#selected-city");
selectedCity.addEventListener("change", updateSelectedCity);

setInterval(showStandardTime, 1000);
updateTime();
let updateTimeInterval = setInterval(updateTime, 1000);
