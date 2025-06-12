//scroll smooth
const lenis = new Lenis({
  duration: 2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

//gsap scrolltrigger
gsap.registerPlugin(ScrollTrigger);

//window size
let windowX = window.innerWidth;
let windowY = window.innerHeight;
//page top 값
let visual = $("#visual").offset().top;
let vision = $("#vision").offset().top;
let codingHard = $("#codingHard").offset().top;
let project = $("#project").offset().top;
let design = $("#design").offset().top;
let contact = $("#contact").offset().top;

//header
$("header .bar").on("click", function () {
  windowX = window.innerWidth;
  $("header .menu_circle").toggleClass("on");
  $("body").toggleClass("hidden");
  $("body").toggleClass("xhidden");
  $("header .menu").fadeToggle(500);
  $("header .bar li").toggleClass("on");
  if (windowX >= 800) {
    $("header .menu").css("display", "flex");
  } else {
    $("header .menu").css("display", "block");
  }
});
$("header h1").on("click", function () {
  target = $("main .visual").offset().top;
  $("html").animate({ scrollTop: target });
});

//현재 스크롤 위치 class
$(window).on("scroll", function () {
  var scr = $(this).scrollTop();
  if (scr >= visual && scr < vision) {
    $("header .fix_menu li").removeClass("on");
    $("header .menu li").removeClass("on");
    $("header .fix_menu li").eq(0).addClass("on");
    $("header .menu li").eq(0).addClass("on");
  } else if (scr >= vision && scr < codingHard) {
    $("header .fix_menu li").removeClass("on");
    $("header .menu li").removeClass("on");
    $("header .fix_menu li").eq(1).addClass("on");
    $("header .menu li").eq(1).addClass("on");
  } else if (scr >= codingHard && scr < project) {
    $("header .fix_menu li").removeClass("on");
    $("header .menu li").removeClass("on");
    $("header .fix_menu li").eq(2).addClass("on");
    $("header .menu li").eq(2).addClass("on");
  } else if (scr >= project && scr < design) {
    $("header .fix_menu li").removeClass("on");
    $("header .menu li").removeClass("on");
    $("header .fix_menu li").eq(3).addClass("on");
    $("header .menu li").eq(3).addClass("on");
  } else if (scr >= design && scr < contact) {
    $("header .fix_menu li").removeClass("on");
    $("header .menu li").removeClass("on");
    $("header .fix_menu li").eq(4).addClass("on");
    $("header .menu li").eq(4).addClass("on");
  } else if (scr >= contact) {
    $("header .fix_menu li").removeClass("on");
    $("header .menu li").removeClass("on");
    $("header .fix_menu li").eq(5).addClass("on");
    $("header .menu li").eq(5).addClass("on");
  }
});

//header navi click page scroll
$('a[href*="#"]').on("click", function (e) {
  $("html,body").animate(
    { scrollTop: $($(this).attr("href")).offset().top },
    500
  );
  e.preventDefault();
});
//header navi click class
$("header .menu li").on("click", function () {
  let i = $("li").index(this);
  if (i == 3) {
    $("html,body").animate({ scrollTop: 0 }, 500);
  }
  $("header .menu li").removeClass("on");
  $(this).addClass("on");
});
$(" .fix_menu li").on("click", function () {
  let i = $("li").index(this);
  console.log(i);
  if (i == 9) {
    $("html,body").animate({ scrollTop: 0 }, 500);
  }
  $("header .fix_menu li").removeClass("on");
  $(this).addClass("on");
});

var tl = gsap.timeline();

//visual pinSpacing
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".visual",
      start: "",
      end: "",
      scrub: 2,
      pin: true,
      pinSpacing: false,
    },
  })
  .fromTo(
    ".vision .top",
    { opacity: 0, backgroundColor: "#1a1a1a" },
    { opacity: 1, duration: 5, backgroundColor: "#6499e9" }
  )
  .fromTo(
    ".vision .bottom",
    { opacity: 0, backgroundColor: "#1a1a1a" },
    { opacity: 1, duration: 5, backgroundColor: "#6499e9" }
  );

//vision
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".vision",
      start: "top top",
      end: "bottom 20%",
      scrub: 2,
      pin: true,
    },
  })
  .fromTo(
    ".vision .circleL .one",
    {
      opacity: 0,
      scale: 0,
    },
    { opacity: 1, scale: 1, duration: 3 }
  )
  .fromTo(
    ".vision .circleL .two",
    {
      opacity: 0,
      scale: 0,
    },
    { opacity: 1, scale: 1, duration: 3 }
  )
  .fromTo(
    ".vision .now",
    {
      opacity: 0,
    },
    { opacity: 1, duration: 5 }
  )
  .fromTo(
    ".vision .circle.center",
    {
      opacity: 0,
      scale: 0,
    },
    { opacity: 1, scale: 1, duration: 3 }
  )
  .fromTo(
    ".vision .future",
    {
      opacity: 0,
    },
    { opacity: 1, duration: 5 }
  )
  .fromTo(
    ".vision .circleR .one",
    {
      opacity: 0,
      scale: 0,
    },
    { opacity: 1, scale: 1, duration: 3 }
  )
  .fromTo(
    ".vision .circleR .two",
    {
      opacity: 0,
      scale: 0,
    },
    { opacity: 1, scale: 1, duration: 3 }
  )
  .fromTo(
    ".vision .middle .line",
    {
      width: "0px",
    },
    { width: "100%", duration: 25 },
    0
  );

//aboutMe
gsap.timeline({
  scrollTrigger: {
    trigger: ".aboutMe",
    start: "top top",
    end: "bottom 20%",
    scrub: 2,
    pin: true,
  },
}); /*
  .fromTo(
    ".aboutMe .cross.one ",
    {
      opacity: 0,
      scale: 0,
      x: -500,
    },
    { opacity: 1, scale: 1, rotation: 360, duration: 3, x: 0 }
  )
  .fromTo(
    ".aboutMe .cross.two ",
    {
      opacity: 0,
      scale: 0,
      rotation: 360,
      x: 500,
    },
    { opacity: 1, scale: 1, duration: 3, x: 0, rotation: 45 }
  )
  .fromTo(
    ".aboutMe .cross.three ",
    {
      opacity: 0,
      scale: 0,
    },
    { opacity: 1, scale: 1, duration: 3 }
  )
  .fromTo(
    ".aboutMe h2 ",
    {
      opacity: 0,
      y: -500,
    },
    { opacity: 1, duration: 5, y: 0 }
  )
  .fromTo(
    ".aboutMe .card ",
    {
      opacity: 0,
      scale: 0,
      y: 5000,
    },
    { opacity: 1, scale: 1, duration: 10, y: 0 }
  )
  .fromTo(
    ".aboutMe .circle2 ",
    {
      opacity: 0,
      scale: 0,
      y: "-450%",
    },
    { opacity: 1, scale: 1, duration: 3 }
  ); */

//codingHard
gsap.timeline({
  scrollTrigger: {
    trigger: ".codingHard",
    start: "top top",
    end: "bottom top",
    scrub: 2,
    pin: true,
  },
});
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".codingHard",
      start: "top top",
      end: "bottom 20%",
      scrub: 2,
    },
  })
  .fromTo(
    ".codingHard .txtWrap",
    {
      opacity: 0,
    },
    { opacity: 1, duration: 2 }
  )
  .fromTo(
    ".codingHard .left li:first-child",
    {
      opacity: 0,
      x: -500,
    },
    { opacity: 1, x: 0, duration: 2 }
  )
  .fromTo(
    ".codingHard .imgWrap",
    {
      opacity: 0,
      x: 500,
    },
    { opacity: 1, x: 0, duration: 2 }
  )
  .fromTo(
    ".codingHard .left li:last-child",
    {
      opacity: 0,
      x: -500,
    },
    { opacity: 1, x: 0, duration: 2 }
  )
  .fromTo(
    ".codingHard .right .detail",
    { opacity: 0 },
    { opacity: 1, duration: 2 }
  )
  .fromTo(
    ".codingHard .right .detail .wrap",
    { y: 100, opacity: 0 },
    { y: 0, opacity: 1, duration: 2 }
  )
  .fromTo(
    ".codingHard .right .detail ul",
    { opacity: 0 },
    { opacity: 1, duration: 2 }
  )
  .fromTo(
    ".codingHard .right .nav",
    { opacity: 0 },
    { opacity: 1, duration: 2 }
  );

//codingHard nav
let h = 0;
startH();
function timerH() {
  $(".codingHard .nav .line")
    .css({ transition: "none", width: "0%" })
    .outerWidth();
  setInterval(() => {
    $(".codingHard .nav .line").css({
      transition: "width 5s linear",
      width: "80%",
    });
  }, 10);
}
function startH() {
  stop = setInterval(function () {
    if (h == 2) {
      h = 0;
    } else {
      h++;
    }
    timerH();
    $(".codingHard .roll li").fadeOut(10);
    if (h == 0) {
      $(".codingHard .roll li.one").fadeIn(500);
    } else if (h == 1) {
      $(".codingHard .roll li.two").fadeIn(500);
    } else if (h == 2) {
      $(".codingHard .roll li.three").fadeIn(500);
    }
  }, 5000);
}

$(".codingHard .nav .play").on("click", function () {
  startH();
  timer();
  $(".codingHard .nav .pause").removeClass("on");
});

$(".codingHard .nav .pause").on("click", function () {
  clearInterval(stop);
  $(this).addClass("on");
});

$(".codingHard .for").on("click", function () {
  clearInterval(stop);
  $(".codingHard .nav .pause").removeClass("on");
  if (h == 2) {
    h = 0;
  } else {
    h++;
  }
  $(".codingHard .roll li").fadeOut(10);
  if (h == 0) {
    $(".codingHard .roll li.one").fadeIn(500);
  } else if (h == 1) {
    $(".codingHard .roll li.two").fadeIn(500);
  } else if (h == 2) {
    $(".codingHard .roll li.three").fadeIn(500);
  }
  startH();
  timerH();
});

$(".codingHard .back").on("click", function () {
  clearInterval(stop);
  $(".codingHard .nav .pause").removeClass("on");
  if (h == 0) {
    h = 2;
  } else {
    h--;
  }
  $(".codingHard .roll li").fadeOut(10);
  if (h == 0) {
    $(".codingHard .roll li.one").fadeIn(500);
  } else if (h == 1) {
    $(".codingHard .roll li.two").fadeIn(500);
  } else if (h == 2) {
    $(".codingHard .roll li.three").fadeIn(500);
  }
  startH();
  timerH();
});

//codingClone
gsap.timeline({
  scrollTrigger: {
    trigger: ".codingClone",
    start: "top top",
    end: "bottom top",
    scrub: 2,
    pin: true,
  },
});
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".codingClone",
      start: "top top",
      end: "bottom 20%",
      scrub: 2,
    },
  })
  .fromTo(
    ".codingClone .txtWrap",
    {
      opacity: 0,
    },
    { opacity: 1, duration: 2 }
  )
  .fromTo(
    ".codingClone .right li:first-child",
    {
      opacity: 0,
      x: 500,
    },
    { opacity: 1, x: 0, duration: 2 }
  )
  .fromTo(
    ".codingClone .imgWrap",
    {
      opacity: 0,
      x: -500,
    },
    { opacity: 1, x: 0, duration: 2 }
  )
  .fromTo(
    ".codingClone .right li:last-child",
    {
      opacity: 0,
      x: 500,
    },
    { opacity: 1, x: 0, duration: 2 }
  )
  .fromTo(
    ".codingClone .right .detail",
    { opacity: 0 },
    { opacity: 1, duration: 2 }
  )
  .fromTo(
    ".codingClone .right .detail .wrap",
    { y: 100, opacity: 0 },
    { y: 0, opacity: 1, duration: 2 }
  )
  .fromTo(
    ".codingClone .right .detail ul",
    { opacity: 0 },
    { opacity: 1, duration: 2 }
  )
  .fromTo(
    ".codingClone .right .nav",
    { opacity: 0 },
    { opacity: 1, duration: 2 }
  );

//codingClone nav
let c = 0;
startC();
function timerC() {
  $(".codingClone .nav .line")
    .css({ transition: "none", width: "0%" })
    .outerWidth();
  setInterval(() => {
    $(".codingClone .nav .line").css({
      transition: "width 5s linear",
      width: "80%",
    });
  }, 10);
}
function startC() {
  stop = setInterval(function () {
    if (c == 2) {
      c = 0;
    } else {
      c++;
    }
    timerC();
    $(".codingClone .roll li").fadeOut(10);
    if (c == 0) {
      $(".codingClone .roll li.one").fadeIn(500);
    } else if (c == 1) {
      $(".codingClone .roll li.two").fadeIn(500);
    } else if (c == 2) {
      $(".codingClone .roll li.three").fadeIn(500);
    }
  }, 5000);
}

$(".codingClone .nav .play").on("click", function () {
  startC();
  timerC();
  $(".codingClone .nav .pause").removeClass("on");
});

$(".codingClone .nav .pause").on("click", function () {
  clearInterval(stop);
  $(this).addClass("on");
});

$(".codingClone .for").on("click", function () {
  clearInterval(stop);
  $(".codingClone .nav .pause").removeClass("on");
  if (c == 2) {
    c = 0;
  } else {
    c++;
  }
  $(".codingClone .roll li").fadeOut(10);
  if (c == 0) {
    $(".codingClone .roll li.one").fadeIn(500);
  } else if (c == 1) {
    $(".codingClone .roll li.two").fadeIn(500);
  } else if (c == 2) {
    $(".codingClone .roll li.three").fadeIn(500);
  }
  startC();
  timerC();
});

$(".codingClone .back").on("click", function () {
  clearInterval(stop);
  $(".codingClone .nav .pause").removeClass("on");
  if (c == 0) {
    c = 2;
  } else {
    c--;
  }
  $(".codingClone .roll li").fadeOut(10);
  if (c == 0) {
    $(".codingClone .roll li.one").fadeIn(500);
  } else if (c == 1) {
    $(".codingClone .roll li.two").fadeIn(500);
  } else if (c == 2) {
    $(".codingClone .roll li.three").fadeIn(500);
  }
  startC();
  timerC();
});

//project
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".project",
      start: "top 80%",
      end: "20% 60%",
      scrub: 2,
    },
  })
  .fromTo(
    ".project .wrap > li",
    { scale: 0, opacity: 0 },
    { opacity: 1, duration: 3, scale: 1 }
  );
gsap.timeline({
  scrollTrigger: {
    trigger: ".project",
    start: "top top",
    end: "50% top",
    scrub: 2,
    pin: true,
  },
});

projectSwipe();
function projectSwipe() {
  roll = setInterval(function () {
    $(".project .wrap")
      .stop()
      .animate({ "margin-left": "-100%" }, function () {
        $(".project .wrap > li:first-child").appendTo(".project .wrap");
        $(".project .wrap").css({ "margin-left": "0px" });
      });
    $(".project .nav .line").css("width", "0px");
    $(".project .nav .line").stop().animate({ width: "70%" }, 3000);
  }, 3000);
}
$(".project .nav .play").on("click", function () {
  projectSwipe();
  $(".project .nav .line").stop().animate({ width: "70%" }, 3000);
});
$(".project .nav .pause").on("click", function () {
  clearInterval(roll);
  $(".project .nav .line").stop().css("width", "0px");
});
$(".project .right").on("click", function () {
  clearInterval(roll);
  $(".project .wrap")
    .stop()
    .animate({ "margin-left": "-100%" }, function () {
      $(".project .wrap > li:first-child").appendTo(".project .wrap");
      $(".project .wrap").css({ "margin-left": "0px" });
    });
  $(".project .nav .line").stop().css("width", "0px");
  $(".project .nav .line").stop().animate({ width: "70%" }, 3000);
  projectSwipe();
});
$(".project .left").on("click", function () {
  clearInterval(roll);
  $(".project .wrap > li:last-child").prependTo(".project .wrap");
  $(".project .wrap").css({ "margin-left": "-100%" });
  $(".project .wrap").stop().animate({ "margin-left": "0px" });
  $(".project .nav .line").stop().css("width", "0px");
  $(".project .nav .line").stop().animate({ width: "70%" }, 3000);
  projectSwipe();
});

//design
let list = gsap.utils.toArray(".design .list li");
let listA = gsap.utils.toArray(".design .list li.a");
let listB = gsap.utils.toArray(".design .list li.b");
let listC = gsap.utils.toArray(".design .list li.c");
gsap.to(list, {
  xPercent: -1650,
  ease: "none",
  scrollTrigger: {
    trigger: ".design",
    start: "center center",
    end: "100% 0% ",
    pin: true,
    scrub: 5,
  },
});
gsap.to(listA, {
  rotation: 20,
  scrollTrigger: {
    trigger: ".design",
    start: "center center",
    end: "100% 0% ",
    scrub: 2,
  },
});
gsap.to(listB, {
  rotation: 10,
  scrollTrigger: {
    trigger: ".design",
    start: "center center",
    end: "100% 0% ",
    scrub: 2,
  },
});
gsap.to(listC, {
  rotation: -30,
  scrollTrigger: {
    trigger: ".design",
    start: "center center",
    end: "100% 0% ",
    scrub: 2,
  },
});

//contact
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".contact",
      start: "top 80%",
      end: "top top",
      scrub: 5,
    },
  })
  .fromTo(
    ".contact .top h2",
    { opacity: 0, x: -500 },
    { opacity: 1, x: 0, duration: 5 }
  )
  .fromTo(
    ".contact .top .cross",
    { rotation: 0, opacity: 0 },
    { rotation: 180, opacity: 1, duration: 5 }
  )
  .fromTo(
    ".contact .bottom .cross",
    { rotation: 0, opacity: 0, x: -200, y: -200 },
    { rotation: 135, opacity: 1, x: 0, y: 0, duration: 5 }
  )
  .fromTo(
    ".contact .bottom .txt",
    { opacity: 0, x: 500 },
    { opacity: 1, x: 0, duration: 5 }
  );
$(".design .list li").on("click", function () {
  let i = $(".design .list li").index(this);
  console.log(i);
  $(".design .list_s").fadeIn(500);
  $(".design .close").fadeIn(500);
  $(".design .list_s li").eq(i).css("opacity", "1");
});
$(".design .close").on("click", function () {
  $(".design .list_s").fadeOut(500);
  $(".design .close").fadeOut(500);
  $(".design .list_s li").css("opacity", "0");
});
