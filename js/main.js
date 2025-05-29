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
  $("body").css("overflow-x", "hidden");
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
  $("body").css("overflow-x", "hidden");
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
  } else if (scr >= contact - 50) {
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
gsap.timeline({
  scrollTrigger: {
    trigger: ".visual",
    start: "",
    end: "",
    scrub: 2,
    pin: true,
    pinSpacing: false,
  },
});

//vision
gsap.timeline({
  scrollTrigger: {
    trigger: ".vision",
    start: "top top",
    end: "bottom 50%",
    scrub: 2,
    pin: true,
    markers: true,
  },
});
