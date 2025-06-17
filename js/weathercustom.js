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

  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=kr&appid=${APIkey}&units=metric`
  );

  //정보를 json형식으로 변경하여 data에 넣음
  let data = await response.json();

  render(data);

  //시간별온도
  let response2 = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&lang=kr&appid=${APIkey}&units=metric`
  );

  //정보를 json형식으로 변경하여 data에 넣음
  let data2 = await response2.json();

  render2(data2);
};
getLocation();

//버튼클릭
btn.addEventListener("click", async () => {
  //입력한 city명을 가져옴
  cityname = input.value;

  weather(cityname);

  render(data);
  //시간별 온도
  let response2 = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${cityname}&lang=kr&appid=${APIkey}&units=metric`
  );

  //정보를 json형식으로 변경하여 data에 넣음
  let data2 = await response2.json();

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

  render(data);

  //시간별 온도
  let response2 = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${cityname}&lang=kr&appid=${APIkey}&units=metric`
  );

  //정보를 json형식으로 변경하여 data에 넣음
  let data2 = await response2.json();

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

const calendarDates = document.getElementById("days");
const currentMonthElement = document.getElementById("current-date");
const prevBtn = document.querySelector(".calendar_wrap .left");
const nextBtn = document.querySelector(".calendar_wrap .right");

//월 이름을 영어로 바꾸기
let monthNames = [
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

let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let currentdate = today.getDate();

/* 월별 캘랜더를 생성하고 표시 */
function renderCalendar() {
  /* 현재 월의 첫 번째 날짜를 나타내는 Date 객체를 저장 해당 월의 첫 번째 날짜에 대한 정보를 얻는다. */
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);

  /* 현재 월의 총 일 수를 나타내는 값을 저장 
  해당 월이 몇 일까지 있는지 알 수 있다. */
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  /* 현재 월의 첫 번째 날짜의 요일을 나타내는 값을 저장 해당 월의 첫 번째 날짜가 무슨 요일인지 알 수 있다. */
  const startDayOfWeek = firstDayOfMonth.getDay();

  // 월을 나타내는 요소에 현재 월과 연도를 설정하여 표시한다.
  let currentMonthName = monthNames[currentMonth];
  currentMonthElement.textContent = `${currentMonthName} ${currentYear} `;
  // 일자를 표시하는 그리드 컨테이너를 비운다.
  calendarDates.innerHTML = "";

  // 빈 날짜(이전 달)
  for (let i = 0; i < startDayOfWeek; i++) {
    const emptyDate = document.createElement("li");
    //  빈 날짜를 나타내는 div 요소를 생성한다.
    emptyDate.classList.add("date", "empty");
    // 생성한 div 요소에 "date"와 "empty" 클래스를 추가한다.
    calendarDates.appendChild(emptyDate);
    // 생성한 빈 날짜 요소를 캘린더 그리드에 추가한다.
  }

  // 현재 달의 날짜
  for (let i = 1; i <= daysInMonth; i++) {
    const dateElement = document.createElement("li");
    dateElement.classList.add("date");
    dateElement.textContent = i;
    calendarDates.appendChild(dateElement);
  }
  const calendarDate = document.querySelectorAll("#days li");

  calendarDate[currentdate].classList.remove("active");
  calendarDate[currentdate - 1].classList.add("active");
}
renderCalendar();

prevBtn.addEventListener("click", () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  renderCalendar();
});

nextBtn.addEventListener("click", () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  renderCalendar();
});
