function showStandardTime() {
  let standardTimeElement = document.querySelector("h1");
  let standardTimeZone = moment.tz.guess();
  let standardTime = moment().tz(standardTimeZone);

  standardTimeElement.innerHTML = standardTime.format("H:mm:ss");
}

showStandardTime();
setInterval(showStandardTime, 1000);

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

updateTime();
let updateTimeInterval = setInterval(updateTime, 1000);

function updateSelectedCity(event) {
  let cityElement = document.querySelector("#variable-city-element");
  let cityName;
  let cityDate;
  let selectedCityInterval;

  function changeSelectedCityTime() {
    let cityTimeZone = event.target.value;

    if (cityTimeZone === "current") {
      cityTimeZone = moment.tz.guess();
    }

    cityDate = moment().tz(cityTimeZone);
    cityName = cityTimeZone.replace("_", " ").split("/")[1];

    cityElement.innerHTML = `
          <div class="cities-grid-bern" id="bern">
          <div class="grid-item-city">${cityName}</div>
          <div class="grid-item-date">${cityDate.format("MMMM Do YYYY")}</div>
          <div class="grid-item-time">${cityDate.format("H:mm:ss")}</div>
          </div>
  <a href = "index.html" class="reset-link";>Back to all cities</a>
          `;

    let backgroundElement = document.querySelector("#bern");

    if (event.target.value === "America/Bogota") {
      backgroundElement.style.backgroundImage =
        "url(https://edelweiss.scene7.com/is/image/flyedelweiss/colombia-bog-skyline-2:page-header-teaser-1800w)";
    }

    if (event.target.value === "Australia/Canberra") {
      backgroundElement.style.backgroundImage =
        "url(https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_2732,w_4856,x_0,y_0/dpr_1.5/c_limit,w_3000/fl_lossy,q_auto/v1688419581/230703-oconnor-canberra-australia-hero_zbwg53)";
    }

    if (event.target.value === "Europe/Stockholm") {
      backgroundElement.style.backgroundImage =
        "url(https://res.cloudinary.com/kr-reisen/image/upload/f_auto,q_auto:good,ar_2.8,c_crop/w_1920/skandinavien/schweden/hotels/stockholm/skandinavien_schweden_hotels_stockholm-Header-Bild.webp)";
    }

    if (event.target.value === "Asia/Tokyo") {
      backgroundElement.style.backgroundImage =
        "url(https://image.geo.de/30148152/t/is/v3/w1440/r0/-/tokio-f-292656749-jpg--84404-.jpg)";
    }

    if (event.target.value === "America/Toronto") {
      backgroundElement.style.backgroundImage =
        "url(https://www.civitatis.com/blog/wp-content/uploads/2020/12/vista-aerea-toronto.jpg)";
    }

    if (event.target.value === "current") {
      backgroundElement.style.backgroundImage =
        "url(https://spaceaustralia.com/sites/default/files/2019-09/Australia%20from%20space.jpg)";
    }
  }
  clearInterval(updateTimeInterval);
  clearInterval(selectedCityInterval);
  changeSelectedCityTime();
  selectedCityInterval = setInterval(changeSelectedCityTime, 1000);
}

let selectedCity = document.querySelector("#selected-city");
selectedCity.addEventListener("change", updateSelectedCity);
