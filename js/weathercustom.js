//날씨정보
let place = document.querySelector("#place");
let temp = document.querySelector("#temp");
let des = document.querySelector("#des");
let feel = document.querySelector("#feel");
let humidity = document.querySelector("#humidity");
let wind = document.querySelector("#wind");
let video = document.querySelector(".video");

//시간
let now_time = document.querySelector("#time");
let one_hour = document.querySelector("#one_hour");
let three_hour = document.querySelector("#three_hour");
let five_hour = document.querySelector("#five_hour");
let seven_hour = document.querySelector("#seven_hour");

//시간별온도
let one_temp = document.querySelector("#one_temp");
let three_temp = document.querySelector("#three_temp");
let five_temp = document.querySelector("#five_temp");
let seven_temp = document.querySelector("#seven_temp");

//아이콘
let iconImg2 = document.querySelector("#iconImg");
let one_icon = document.querySelector("#one_icon");
let three_icon = document.querySelector("#three_icon");
let five_icon = document.querySelector("#five_icon");
let seven_icon = document.querySelector("#seven_icon");

//city
let cityname = "seoul";
let APIkey = "9a261559bd7168d93cf4219996533092";

//현재시각
clock = () => {
  today = new Date();
  now_hour = today.getHours();
  now_minute = today.getMinutes();
  now_seconds = today.getSeconds();
  //10이 되기 전이면 앞에 0을 붙임
  if (now_minute < 10) {
    now_minute = "0" + now_minute;
  }
  if (now_seconds < 10) {
    now_seconds = "0" + now_seconds;
  }
  now_time.textContent = now_hour + ":" + now_minute + ":" + now_seconds;
};
setInterval(clock, 100);
clock();

//하단 시간별
today.setHours(now_hour + 3);
one_hour.textContent = today.getHours() + "시";
today.setHours(now_hour + 6);
three_hour.textContent = today.getHours() + "시";
today.setHours(now_hour + 9);
five_hour.textContent = today.getHours() + "시";
today.setHours(now_hour + 12);
seven_hour.textContent = today.getHours() + "시";

//push
let input = document.querySelector("input");
let btn = document.querySelector(".btn");

//enter 입력시 버튼 클릭 효과
input.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    btn.click();
  }
});

//현재위치
getLocation = () => {
  navigator.geolocation.getCurrentPosition(success);
};
success = async (position) => {
  lat = position.coords.latitude;
  lon = position.coords.longitude;
  console.log(lat, lon);

  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=kr&appid=${APIkey}&units=metric`
  );

  //정보를 json형식으로 변경하여 data에 넣음
  let data = await response.json();
  console.log(data);

  render(data);

  //시간별온도
  let response2 = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&lang=kr&appid=${APIkey}&units=metric`
  );

  //정보를 json형식으로 변경하여 data에 넣음
  let data2 = await response2.json();
  console.log(data2);

  render2(data2);
};
getLocation();

//버튼클릭
btn.addEventListener("click", async () => {
  //입력한 city명을 가져옴
  cityname = input.value;
  console.log(cityname);

  weather(cityname);

  render(data);
  //시간별 온도
  let response2 = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${cityname}&lang=kr&appid=${APIkey}&units=metric`
  );

  //정보를 json형식으로 변경하여 data에 넣음
  let data2 = await response2.json();
  console.log(data2);

  render2(data2);
});

//비동기식형식_button
weather = async (cityname) => {
  //모든정보를 받음
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&lang=kr&appid=${APIkey}&units=metric`
  );

  //정보를 json형식으로 변경하여 data에 넣음
  let data = await response.json();
  console.log(data);

  render(data);

  //시간별 온도
  let response2 = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${cityname}&lang=kr&appid=${APIkey}&units=metric`
  );

  //정보를 json형식으로 변경하여 data에 넣음
  let data2 = await response2.json();
  console.log(data2);

  render2(data2);
};

//detail 함수 : 함수선언 후 실행문에서 data값을 받아와야 출력됨
render = (data) => {
  //현재 날씨 데이터 입력
  //지역
  place.textContent = data.name;
  //온도
  let temp2 = Math.round(data.main.temp) + "℃";
  temp.textContent = temp2;
  //설명
  des.textContent = data.weather[0].description;
  //체감온도
  feel.textContent = Math.round(data.main.feels_like) + "℃";
  //습도
  humidity.textContent = data.main.humidity + "%";
  //풍속
  wind.textContent = data.wind.speed + "m/s";
  //아이콘
  let icon = data.weather[0].icon;
  let madeIcon;
  if (icon == "01d") {
    madeIcon = "source/weather_source/icon_sun.png";
    video.src = "source/weather_source/sun.mp4";
  } else if (icon == "02d") {
    madeIcon = "source/weather_source/icon_suncloud.png";
    video.src = "source/weather_source/cloud.mp4";
  } else if (icon == "03d" || icon == "03n") {
    madeIcon = "source/weather_source/icon_cloud.png";
    video.src = "source/weather_source/cloud.mp4";
  } else if (icon == "04d" || icon == "04n") {
    madeIcon = "source/weather_source/icon_cloudy.png";
    video.src = "source/weather_source/cloud.mp4";
  } else if (icon == "09d" || icon == "09n") {
    madeIcon = "source/weather_source/icon_rain.png";
    video.src = "source/weather_source/rain.mp4";
  } else if (icon == "10d") {
    madeIcon = "source/weather_source/icon_sunrain.png";
  } else if (icon == "11d" || icon == "11n") {
    madeIcon = "source/weather_source/icon_strom.png";
  } else if (icon == "13d" || icon == "13n") {
    madeIcon = "source/weather_source/icon_snow.png";
  } else if (icon == "50d" || icon == "50n") {
    madeIcon = "source/weather_source/icon_windy.png";
  } else if (icon == "01n") {
    madeIcon = "source/weather_source/icon_night.png";
  } else if (icon == "02n") {
    madeIcon = "source/weather_source/icon_mooncloud.png";
  } else if (icon == "10n") {
    madeIcon = "source/weather_source/icon_moonrain.png";
  }
  iconImg2.src = madeIcon;
};

render2 = (data2) => {
  one_temp.textContent = Math.round(data2.list[3].main.temp) + "℃";
  three_temp.textContent = Math.round(data2.list[4].main.temp) + "℃";
  five_temp.textContent = Math.round(data2.list[5].main.temp) + "℃";
  seven_temp.textContent = Math.round(data2.list[6].main.temp) + "℃";

  let icon = data2.list[2].weather[0].icon;
  let madeIcon;
  if (icon == "01d") {
    madeIcon = "source/weather_source/icon_sun.png";
  } else if (icon == "02d") {
    madeIcon = "source/weather_source/icon_suncloud.png";
  } else if (icon == "03d" || icon == "03n") {
    madeIcon = "source/weather_source/icon_cloud.png";
  } else if (icon == "04d" || icon == "04n") {
    madeIcon = "source/weather_source/icon_cloudy.png";
  } else if (icon == "09d" || icon == "09n") {
    madeIcon = "source/weather_source/icon_rain.png";
  } else if (icon == "10d") {
    madeIcon = "source/weather_source/icon_sunrain.png";
  } else if (icon == "11d" || icon == "11n") {
    madeIcon = "source/weather_source/icon_strom.png";
  } else if (icon == "13d" || icon == "13n") {
    madeIcon = "source/weather_source/icon_snow.png";
  } else if (icon == "50d" || icon == "50n") {
    madeIcon = "source/weather_source/icon_windy.png";
  } else if (icon == "01n") {
    madeIcon = "source/weather_source/icon_night.png";
  } else if (icon == "02n") {
    madeIcon = "source/weather_source/icon_mooncloud.png";
  } else if (icon == "10n") {
    madeIcon = "source/weather_source/icon_moonrain.png";
  }
  one_icon.src = madeIcon;

  let icon1 = data2.list[3].weather[0].icon;
  let madeIcon1;
  if (icon1 == "01d") {
    madeIcon1 = "source/weather_source/icon_sun.png";
  } else if (icon1 == "02d") {
    madeIcon1 = "source/weather_source/icon_suncloud.png";
  } else if (icon1 == "03d" || icon1 == "03n") {
    madeIcon1 = "source/weather_source/icon_cloud.png";
  } else if (icon1 == "04d" || icon1 == "04n") {
    madeIcon1 = "source/weather_source/icon_cloudy.png";
  } else if (icon1 == "09d" || icon1 == "09n") {
    madeIcon1 = "source/weather_source/icon_rain.png";
  } else if (icon1 == "10d") {
    madeIcon1 = "source/weather_source/icon_sunrain.png";
  } else if (icon1 == "11d" || icon1 == "11n") {
    madeIcon1 = "source/weather_source/icon_strom.png";
  } else if (icon1 == "13d" || icon1 == "13n") {
    madeIcon1 = "source/weather_source/icon_snow.png";
  } else if (icon1 == "50d" || icon1 == "50n") {
    madeIcon1 = "source/weather_source/icon_windy.png";
  } else if (icon1 == "01n") {
    madeIcon1 = "source/weather_source/icon_night.png";
  } else if (icon1 == "02n") {
    madeIcon1 = "source/weather_source/icon_mooncloud.png";
  } else if (icon1 == "10n") {
    madeIcon1 = "source/weather_source/icon_moonrain.png";
  }
  three_icon.src = madeIcon1;

  let icon2 = data2.list[4].weather[0].icon;
  let madeIcon2;
  if (icon2 == "01d") {
    madeIcon2 = "source/weather_source/icon_sun.png";
  } else if (icon2 == "02d") {
    madeIcon2 = "source/weather_source/icon_suncloud.png";
  } else if (icon2 == "03d" || icon2 == "03n") {
    madeIcon2 = "source/weather_source/icon_cloud.png";
  } else if (icon2 == "04d" || icon2 == "04n") {
    madeIcon2 = "source/weather_source/icon_cloudy.png";
  } else if (icon2 == "09d" || icon2 == "09n") {
    madeIcon2 = "source/weather_source/icon_rain.png";
  } else if (icon2 == "10d") {
    madeIcon2 = "source/weather_source/icon_sunrain.png";
  } else if (icon2 == "11d" || icon2 == "11n") {
    madeIcon2 = "source/weather_source/icon_strom.png";
  } else if (icon2 == "13d" || icon2 == "13n") {
    madeIcon2 = "source/weather_source/icon_snow.png";
  } else if (icon2 == "50d" || icon2 == "50n") {
    madeIcon2 = "source/weather_source/icon_windy.png";
  } else if (icon2 == "01n") {
    madeIcon2 = "source/weather_source/icon_night.png";
  } else if (icon2 == "02n") {
    madeIcon2 = "source/weather_source/icon_mooncloud.png";
  } else if (icon2 == "10n") {
    madeIcon2 = "source/weather_source/icon_moonrain.png";
  }
  five_icon.src = madeIcon2;

  let icon3 = data2.list[5].weather[0].icon;
  let madeIcon3;
  if (icon3 == "01d") {
    madeIcon3 = "source/weather_source/icon_sun.png";
  } else if (icon3 == "02d") {
    madeIcon3 = "source/weather_source/icon_suncloud.png";
  } else if (icon3 == "03d" || icon3 == "03n") {
    madeIcon3 = "source/weather_source/icon_cloud.png";
  } else if (icon3 == "04d" || icon3 == "04n") {
    madeIcon3 = "source/weather_source/icon_cloudy.png";
  } else if (icon3 == "09d" || icon3 == "09n") {
    madeIcon3 = "source/weather_source/icon_rain.png";
  } else if (icon3 == "10d") {
    madeIcon3 = "source/weather_source/icon_sunrain.png";
  } else if (icon3 == "11d" || icon3 == "11n") {
    madeIcon3 = "source/weather_source/icon_strom.png";
  } else if (icon3 == "13d" || icon3 == "13n") {
    madeIcon3 = "source/weather_source/icon_snow.png";
  } else if (icon3 == "50d" || icon3 == "50n") {
    madeIcon3 = "source/weather_source/icon_windy.png";
  } else if (icon3 == "01n") {
    madeIcon3 = "source/weather_source/icon_night.png";
  } else if (icon == "02n") {
    madeIcon3 = "source/weather_source/icon_mooncloud.png";
  } else if (icon3 == "10n") {
    madeIcon3 = "source/weather_source/icon_moonrain.png";
  }
  seven_icon.src = madeIcon3;
};

calendarCoding = () => {
  const currYear = today.getFullYear(),
    currMonth = today.getMonth();

  console.log(today);
  console.log(currYear);
  console.log(currMonth);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  console.log(months[currMonth]);
};
calendarCoding();

//weather img roll
// 요소 & 사이즈
const weatherImgwrap = document.querySelector(".weather_image ul");
const wrapScrollWidth = weatherImgwrap.scrollWidth;
const wrapClientWidth = weatherImgwrap.clientWidth;
