//header
let header = document.querySelector("header");
let headerLogo = document.querySelector("header h1");

//header mobile menu
let bar = document.querySelector("header .bar");
let close = document.querySelector("header .close");
let navi = document.querySelector("header ul");

bar.addEventListener("click", function () {
  bar.style.display = "none";
  close.style.display = "block";
  navi.style.opacity = "1";
});
close.addEventListener("click", function () {
  bar.style.display = "block";
  close.style.display = "none";
  navi.style.opacity = "0";
});

//main list
let now = document.querySelector("#now");
let popular = document.querySelector("#popular");
let rated = document.querySelector("#rated");
let upcoming = document.querySelector("#upcoming");

//scroll 함수
window.addEventListener("scroll", function () {
  //header scroll bg
  const scr = this.window.pageYOffset;

  //page map
  const nowTop = scr + now.getBoundingClientRect().top;
  const popularTop = scr + popular.getBoundingClientRect().top;
  const ratedTop = scr + rated.getBoundingClientRect().top;
  const upcomingTop = scr + upcoming.getBoundingClientRect().top;

  if (scr >= 75) {
    header.style.backgroundColor = "rgba(0, 0, 0,0.3)";
    headerLogo.style.color = "white";
  } else {
    header.style.backgroundColor = "rgb(0, 0, 0)";
    headerLogo.style.color = "gold";
  }
});

//visual
let visualBanner = document.querySelector("#visual");
let visualCard = document.querySelector("#visual .card");

visualBanner.addEventListener("mouseenter", () => {
  visualCard.classList.add("on");
});

visualBanner.addEventListener("mouseleave", () => {
  visualCard.classList.remove("on");
});

//api key, url
api_key = `7cfd8c773e76044413c14a3d8dbcf7eb`;
let now_url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=ko-KR&page=1`;
let popular_url = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=ko-KR&page=1`;
let rated_url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=ko-KR&page=1`;
let upcoming_url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=ko-KR&page=1`;

//popular 변수선언
let popularWrap = document.querySelector("#popularWrap");
let popularCard = document.querySelectorAll("#popularWrap li");
let popularItems = document.querySelectorAll("#popularWrap .detail");
let popularFront = document.querySelectorAll("#popularWrap .front");
let popularFrontPoster = document.querySelectorAll(
  "#popularWrap .front .poster"
);
let popularFrontTitle = document.querySelectorAll("#popularWrap .front h3");
let popularFrontAverage = document.querySelectorAll("#popularWrap .front p");
let popularBack = document.querySelectorAll("#popularWrap .back");
let popularBackPoster = document.querySelectorAll("#popularWrap .back .poster");
let popularBackTitle = document.querySelectorAll("#popularWrap .back h3");
let popularBackAverage = document.querySelectorAll("#popularWrap .back p");

//popular
let popular_movie = async () => {
  let response = await fetch(popular_url);
  let data = await response.json();
  console.log(data);

  let frontcount = popularFront.length - 1;
  let backcount = popularBack.length - 1;
  let countPlus = 8;

  for (i = 0; i <= frontcount; i++) {
    popularFrontPoster[
      i
    ].src = `https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}`;
    popularFrontTitle[i].textContent = data.results[i].title;
    popularFrontAverage[i].textContent =
      data.results[i].vote_average.toFixed(2);
  }
  for (i = 0; i <= backcount; i++) {
    popularBackPoster[
      i
    ].src = `https://image.tmdb.org/t/p/w500/${data.results[countPlus].poster_path}`;
    popularBackTitle[i].textContent = data.results[countPlus].title;
    popularBackAverage[i].textContent =
      data.results[countPlus].vote_average.toFixed(2);
    countPlus++;
  }
};
popular_movie();

//popular roll
let popular_roll = () => {
  setInterval(popularTurn, 5000);
};
popularTurn = () => {
  popularCard.forEach(function (item) {
    setTimeout(function () {
      item.classList.toggle("on");
    }, 500);
  });
};
popular_roll();

//now 변수선언
let nowWrap = document.querySelector("#nowWrap");
let nowItems = document.querySelectorAll("#nowWrap li");
let nowPoster = document.querySelectorAll("#nowWrap .poster");
let nowTitle = document.querySelectorAll("#nowWrap h3");
let nowMark = document.querySelectorAll("#nowWrap div i");
let nowHeart = document.querySelectorAll("#nowWrap p");
let nowLike = document.querySelectorAll("#nowWrap .like");

//now
let now_movie = async () => {
  let response = await fetch(now_url);
  let data = await response.json();
  console.log(data);

  count = nowItems.length - 1;

  for (i = 0; i <= count; i++) {
    nowPoster[
      i
    ].src = `https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}`;
    nowTitle[i].textContent = data.results[i].title;
    nowLike[i].textContent = data.results[i].vote_count;
  }
};
now_movie();

//now bookmark click
nowMark.forEach(function (item, index) {
  item.addEventListener("click", () => {
    item.classList.toggle("yellow");
  });
});

//now like click
nowHeart.forEach(function (item, index) {
  let nowClick = false;
  item.addEventListener("click", function () {
    if (!nowClick) {
      item.classList.add("red");
      nowCount = Number(nowLike[index].innerText);
      nowLike[index].textContent = nowCount + 1;
      nowClick = true;
    }
  });
});

//rated 변수선언
let ratedWrap = document.querySelector("#ratedWrap");
let ratedItems = document.querySelectorAll("#ratedWrap li");
let ratedPoster = document.querySelectorAll("#ratedWrap .poster");
let ratedTitle = document.querySelectorAll("#ratedWrap h3");
let ratedLike = document.querySelectorAll("#ratedWrap .like");
let ratedRank = document.querySelectorAll("#ratedWrap .rank");
let ratedDetail = document.querySelectorAll("#ratedWrap p");
let rated_left = document.querySelector("#rated .left");
let rated_right = document.querySelector("#rated .right");

//rated
let rated_movie = async () => {
  let response = await fetch(rated_url);
  let data = await response.json();
  console.log(data);

  let count = ratedItems.length - 1;

  for (i = 0; i <= count; i++) {
    ratedPoster[
      i
    ].src = `https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}`;
    ratedTitle[i].textContent = data.results[i].title;
    ratedLike[i].textContent = data.results[i].vote_count;
    ratedRank[i].textContent = data.results[i].vote_average.toFixed(2);
    ratedDetail[i].textContent = data.results[i].overview;
    if (ratedDetail[i].textContent == "") {
      ratedDetail[i].innerHTML =
        "자세한 설명이 없습니다. <br>영화사 사이트를 참고하세요.";
    }
  }
};
rated_movie();

//rated button opacity
rated.addEventListener("mouseenter", () => {
  rated_left.style.opacity = "1";
  rated_right.style.opacity = "1";
});
rated.addEventListener("mouseleave", () => {
  rated_left.style.opacity = "0";
  rated_right.style.opacity = "0";
});

//rated move
let rated_count = 0;
let rated_total = ratedItems.length - 1;

let rated_roll = () => {
  rated_stop = setInterval(ratedSlide, 2000);
};

ratedSlide = () => {
  ratedWrap.style.transition = "0.5s";
  ratedWrap.style.marginLeft = "-25%";
  setTimeout(() => {
    ratedWrap.style.transition = "0s";
    ratedWrap.style.marginLeft = 0;
    ratedWrap.appendChild(ratedItems[rated_count]);
    if (rated_count == 7) {
      rated_count = 0;
    } else {
      rated_count++;
    }
  }, 500);
};
rated_roll();

//rated button click
rated_left.addEventListener("click", () => {
  clearInterval(rated_stop);
  if (rated_count == 0) {
    rated_count = 7;
  } else {
    rated_count--;
  }
  ratedWrap.style.transition = "0s";
  ratedWrap.style.marginLeft = "-25%";
  ratedWrap.prepend(ratedItems[rated_count]);
  setTimeout(() => {
    ratedWrap.style.transition = "0.5s";
    ratedWrap.style.marginLeft = "0%";
  }, 0);
  rated_roll();
});
rated_right.addEventListener("click", () => {
  clearInterval(rated_stop);
  ratedWrap.style.transition = "0.5s";
  ratedWrap.style.marginLeft = "-25%";
  setTimeout(() => {
    ratedWrap.style.transition = "0s";
    ratedWrap.style.marginLeft = 0;
    ratedWrap.appendChild(ratedItems[rated_count]);
    if (rated_count == 7) {
      rated_count = 0;
    } else {
      rated_count++;
    }
  }, 500);
  rated_roll();
});

//upcoming 변수선언
let upcomingWrap = document.querySelector("#upcomingWrap");
let upcomingItems = document.querySelectorAll("#upcomingWrap li");
let upcomingPoster = document.querySelectorAll("#upcomingWrap .poster");
let upcomingTitle = document.querySelectorAll("#upcomingWrap h3");
let upcomingDay = document.querySelectorAll("#upcomingWrap .day");
let upcomingDate = document.querySelectorAll("#upcomingWrap .date");
let upcomingButton = document.querySelector("#upcoming .button");
let upcomingAngle = document.querySelector("#upcoming .button i");

//오늘날짜 불러오기
let today = new Date();

//upcoming
let upcoming_movie = async () => {
  let response = await fetch(upcoming_url);
  let data = await response.json();
  console.log(data);

  count = upcomingItems.length - 1;

  for (i = 0; i <= count; i++) {
    upcomingPoster[
      i
    ].src = `https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}`;
    upcomingTitle[i].textContent = data.results[i].title;
    upcomingDate[i].textContent = data.results[i].release_date;
    let Dday = today - new Date(data.results[i].release_date);
    if (Dday >= 0) {
      upcomingDay[i].textContent = `+${Math.ceil(
        Dday / (1000 * 60 * 60 * 24)
      )}`;
    } else {
      upcomingDay[i].textContent = Math.ceil(Dday / (1000 * 60 * 60 * 24));
    }
  }
};
upcoming_movie();

//upcoming button
upcomingButton.addEventListener("click", () => {
  upcomingWrap.classList.toggle("open");
  upcomingAngle.classList.toggle("turn");
});
