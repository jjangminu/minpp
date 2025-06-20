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
let codingHard = $("#codingHardF").offset().top;
let project = $("#project").offset().top;
let design = $("#design").offset().top;
let contact = $("#contact").offset().top;

//header bat
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
    $("header .menu li").removeClass("on");
    $("header .fix_menu li").removeClass("on");
    $("header .fix_menu li .cir").removeClass("on");
    $("header .menu li").eq(0).addClass("on");
    $("header .fix_menu li").eq(0).addClass("on");
    $("header .fix_menu li").eq(0).find(".cir").addClass("on");
  } else if (scr >= vision && scr < codingHard) {
    $("header .menu li").removeClass("on");
    $("header .fix_menu li").removeClass("on");
    $("header .fix_menu li .cir").removeClass("on");
    $("header .menu li").eq(1).addClass("on");
    $("header .fix_menu li").eq(1).addClass("on");
    $("header .fix_menu li").eq(1).find(".cir").addClass("on");
  } else if (scr >= codingHard + 600 && scr < project) {
    $("header .menu li").removeClass("on");
    $("header .fix_menu li").removeClass("on");
    $("header .fix_menu li .cir").removeClass("on");
    $("header .menu li").eq(2).addClass("on");
    $("header .fix_menu li").eq(2).addClass("on");
    $("header .fix_menu li").eq(2).find(".cir").addClass("on");
  } else if (scr >= project + 2500 && scr < design + 2500) {
    $("header .menu li").removeClass("on");
    $("header .fix_menu li").removeClass("on");
    $("header .fix_menu li .cir").removeClass("on");
    $("header .menu li").eq(3).addClass("on");
    $("header .fix_menu li").eq(3).addClass("on");
    $("header .fix_menu li").eq(3).find(".cir").addClass("on");
  } else if (scr >= design + 3500 && scr < contact + 3500) {
    $("header .menu li").removeClass("on");
    $("header .fix_menu li").removeClass("on");
    $("header .fix_menu li .cir").removeClass("on");
    $("header .menu li").eq(4).addClass("on");
    $("header .fix_menu li").eq(4).addClass("on");
    $("header .fix_menu li").eq(4).find(".cir").addClass("on");
  } else if (scr >= contact + 4500) {
    $("header .menu li").removeClass("on");
    $("header .fix_menu li").removeClass("on");
    $("header .fix_menu li .cir").removeClass("on");
    $("header .menu li").eq(5).addClass("on");
    $("header .fix_menu li").eq(5).addClass("on");
    $("header .fix_menu li").eq(5).find(".cir").addClass("on");
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
//header navi hover
$("header .fix_menu li").on("mouseenter", function () {
  $("header .fix_menu li p").stop().fadeOut(500);
  $("header .fix_menu li p").removeClass("on");
  $(this).find("p").stop().fadeIn(500);
  $(this).find("p").addClass("on");
});
$("header .fix_menu li").on("mouseleave", function () {
  $("header .fix_menu li p").stop().fadeOut(500);
  $("header .fix_menu li p").removeClass("on");
});
//header navi click
$("header .menu li").on("click", function () {
  let i = $("li").index(this);
  if (i == 3) {
    $("html,body").animate({ scrollTop: 0 }, 500);
  }
  $("header .menu li").removeClass("on");
  $(this).addClass("on");
});
$("header .fix_menu li").on("click", function () {
  let i = $("li").index(this);
  console.log(i);
  if (i == 9) {
    $("html,body").animate({ scrollTop: 0 }, 500);
  }
  $("header .fix_menu li").removeClass("on");
  $(this).addClass("on");
});

var tl = gsap.timeline();

ScrollTrigger.matchMedia({
  "(min-width:750px)": function () {
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
          start: "top 70%",
          end: "top top",
          scrub: 2,
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
    gsap.timeline({
      scrollTrigger: {
        trigger: ".vision",
        start: "top top",
        end: "30% top",
        scrub: 2,
        pin: true,
      },
    });

    //aboutMe
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".aboutMe",
          start: "top 40%",
          end: "50% top",
          scrub: 2,
        },
      })
      .fromTo(".aboutMe .title", { opacity: 0 }, { opacity: 0.3, duration: 3 })
      .fromTo(
        ".aboutMe .top li:first-child",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 3 }
      )
      .fromTo(
        ".aboutMe .top li:nth-child(2)",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 3 }
      )
      .fromTo(
        ".aboutMe .top li:last-child",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 3 }
      )
      .fromTo(
        ".aboutMe .middle li:first-child",
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 3 }
      )
      .fromTo(
        ".aboutMe .middle li:last-child",
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 3 }
      )
      .fromTo(
        ".aboutMe .bottom ul li:nth-child(1)",
        { opacity: 0 },
        { opacity: 1, duration: 3 }
      )
      .fromTo(
        ".aboutMe .bottom ul li:nth-child(2)",
        { opacity: 0 },
        { opacity: 1, duration: 3 }
      )
      .fromTo(
        ".aboutMe .bottom ul li:nth-child(3)",
        { opacity: 0 },
        { opacity: 1, duration: 3 }
      )
      .fromTo(
        ".aboutMe .bottom ul li:nth-child(4)",
        { opacity: 0 },
        { opacity: 1, duration: 3 }
      )
      .fromTo(
        ".aboutMe .bottom ul li:nth-child(5)",
        { opacity: 0 },
        { opacity: 1, duration: 3 }
      )
      .fromTo(
        ".aboutMe .bottom ul li:nth-child(6)",
        { opacity: 0 },
        { opacity: 1, duration: 3 }
      )
      .fromTo(
        ".aboutMe .bottom ul li:nth-child(7)",
        { opacity: 0 },
        { opacity: 1, duration: 3 }
      )
      .fromTo(
        ".aboutMe .bottom ul li:nth-child(8)",
        { opacity: 0 },
        { opacity: 1, duration: 3 }
      )
      .fromTo(
        ".aboutMe .bottom ul li:nth-child(9)",
        { opacity: 0 },
        { opacity: 1, duration: 3 }
      )
      .fromTo(
        ".aboutMe .bottom .line",
        { opacity: 0, width: "0px" },
        { opacity: 1, width: "100%", duration: 25 },
        10
      );
    gsap.timeline({
      scrollTrigger: {
        trigger: ".aboutMe",
        start: "top top",
        end: "60% top",
        scrub: 2,
        pin: true,
      },
    });

    //codingHard
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".codingHardF",
          start: "top 60%",
          end: "50% 10%",
          scrub: 2,
        },
      })
      .fromTo(
        ".codingHardF .web",
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 3 }
      )
      .fromTo(
        ".codingHardF .title",
        { opacity: 0, x: 50 },
        { x: 0, opacity: 1, duration: 3 }
      )
      .fromTo(
        ".codingHardF .detail",
        { opacity: 0 },
        { opacity: 1, duration: 3 }
      )
      .fromTo(
        ".codingHardF .icon",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 3 }
      )
      .fromTo(
        ".codingHardF .button",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 3 }
      )
      .fromTo(
        ".codingHardF .image",
        { opacity: 0, y: 500 },
        { opacity: 1, y: 0, duration: 3 },
        5
      )
      .fromTo(
        ".codingHardF .image img",
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 3 },
        10
      );
    gsap.timeline({
      scrollTrigger: {
        trigger: ".codingHardF",
        start: "top top",
        end: "60% top",
        scrub: 2,
        pin: true,
      },
    });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".codingHardS",
          start: "top 60%",
          end: "50% 10%",
          scrub: 2,
        },
      })
      .fromTo(
        ".codingHardS .web",
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 3 }
      )
      .fromTo(
        ".codingHardS .title",
        { opacity: 0, x: -50 },
        { x: 0, opacity: 1, duration: 3 }
      )
      .fromTo(
        ".codingHardS .detail",
        { opacity: 0 },
        { opacity: 1, duration: 3 }
      )
      .fromTo(
        ".codingHardS .icon",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 3 }
      )
      .fromTo(
        ".codingHardS .button",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 3 }
      )
      .fromTo(
        ".codingHardS .image",
        { opacity: 0, y: 500 },
        { opacity: 1, y: 0, duration: 3 },
        5
      )
      .fromTo(
        ".codingHardS .image img",
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 3 },
        10
      );
    gsap.timeline({
      scrollTrigger: {
        trigger: ".codingHardS",
        start: "top top",
        end: "60% top",
        scrub: 2,
        pin: true,
      },
    });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".codingHardT",
          start: "top 60%",
          end: "50% 10%",
          scrub: 2,
        },
      })
      .fromTo(
        ".codingHardT .web",
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 3 }
      )
      .fromTo(
        ".codingHardT .title",
        { opacity: 0, x: 50 },
        { x: 0, opacity: 1, duration: 3 }
      )
      .fromTo(
        ".codingHardT .detail",
        { opacity: 0 },
        { opacity: 1, duration: 3 }
      )
      .fromTo(
        ".codingHardT .icon",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 3 }
      )
      .fromTo(
        ".codingHardT .button",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 3 }
      )
      .fromTo(
        ".codingHardT .image",
        { opacity: 0, y: 500 },
        { opacity: 1, y: 0, duration: 3 },
        5
      )
      .fromTo(
        ".codingHardT .image img",
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 3 },
        10
      );
    gsap.timeline({
      scrollTrigger: {
        trigger: ".codingHardT",
        start: "top top",
        end: "60% top",
        scrub: 2,
        pin: true,
      },
    });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".codingHardR",
          start: "top 60%",
          end: "50% 10%",
          scrub: 2,
        },
      })
      .fromTo(
        ".codingHardR .web",
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 3 }
      )
      .fromTo(
        ".codingHardR .title",
        { opacity: 0, x: -50 },
        { x: 0, opacity: 1, duration: 3 }
      )
      .fromTo(
        ".codingHardR .detail",
        { opacity: 0 },
        { opacity: 1, duration: 3 }
      )
      .fromTo(
        ".codingHardR .icon",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 3 }
      )
      .fromTo(
        ".codingHardR .button",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 3 }
      )
      .fromTo(
        ".codingHardR .image",
        { opacity: 0, y: 500 },
        { opacity: 1, y: 0, duration: 3 },
        5
      )
      .fromTo(
        ".codingHardR .image img",
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 3 },
        10
      );
    gsap.timeline({
      scrollTrigger: {
        trigger: ".codingHardR",
        start: "top top",
        end: "60% top",
        scrub: 2,
        pin: true,
      },
    });

    //codingClone
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".codingClone",
          start: "top 60%",
          end: "20% 10%",
          scrub: 2,
        },
      })
      .fromTo(
        ".codingClone .titleF",
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 3, "text-shadow": "5px 5px #faef5d" }
      )
      .fromTo(
        ".codingClone .wrap > li:nth-child(1)",
        { opacity: 0, y: 50 },
        { y: 0, opacity: 1, duration: 3 }
      )
      .fromTo(
        ".codingClone .wrap > li:nth-child(2)",
        { opacity: 0, y: 50 },
        { y: 0, opacity: 1, duration: 3 }
      )
      .fromTo(
        ".codingClone .wrap > li:nth-child(3)",
        { opacity: 0, y: 50 },
        { y: 0, opacity: 1, duration: 3 }
      )
      .fromTo(
        ".codingClone .titleS",
        { opacity: 0, x: 50 },
        { x: 0, opacity: 1, duration: 3, "text-shadow": "5px 5px #faef5d" }
      );
    gsap.timeline({
      scrollTrigger: {
        trigger: ".codingClone",
        start: "top top",
        end: "50% top",
        scrub: 2,
        pin: true,
      },
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

    //design
    let list = gsap.utils.toArray(".design .list li");
    let listA = gsap.utils.toArray(".design .list li.a");
    let listB = gsap.utils.toArray(".design .list li.b");
    let listC = gsap.utils.toArray(".design .list li.c");
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".design",
          start: "top 80%",
          end: "top top",
          scrub: 2,
        },
      })
      .fromTo(
        ".design .title h2",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 2 }
      )
      .fromTo(
        ".design .circle.one",
        { opacity: 0, y: 50, x: 30 },
        { opacity: 1, y: 0, x: 0, duration: 2 }
      )
      .fromTo(
        ".design .circle.two",
        { opacity: 0, x: 80 },
        { opacity: 1, x: 0, duration: 2 }
      )
      .fromTo(
        ".design .cross",
        { opacity: 0, x: 50, rotate: 360 },
        { opacity: 1, x: 0, rotate: 30, duration: 2 }
      )
      .fromTo(
        ".design .circle.three",
        { opacity: 0, y: 70 },
        { opacity: 1, y: 0, duration: 2 }
      )
      .fromTo(".design .list", { opacity: 0 }, { opacity: 1, duration: 3 }, 5);
    gsap.to(list, {
      xPercent: -1550,
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
      rotation: 5,
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
      rotation: -10,
      scrollTrigger: {
        trigger: ".design",
        start: "center center",
        end: "100% 0% ",
        scrub: 2,
      },
    });

    //video
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".video",
          start: "top 80%",
          end: "top top",
          scrub: 5,
        },
      })
      .fromTo(
        ".video h2",
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 2,
        }
      )
      .fromTo(
        ".video video",
        {
          opacity: 0,
          y: 50,
        },
        { opacity: 1, y: 0, duration: 2 }
      );
    gsap.timeline({
      scrollTrigger: {
        trigger: ".video",
        start: "top top",
        end: "50% top",
        scrub: 2,
        pin: true,
      },
    });

    //contact
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".contact",
          start: "top 80%",
          end: "top 40%",
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
  },

  "(max-width:750px)": function () {},
});

//project
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
    $(".project .nav .line").stop().animate({ width: "50%" }, 3000);
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

// design
$(".design .list li").on("click", function () {
  let i = $(".design .list li").index(this);
  $(".design .list_s").fadeIn(500);
  $(".design .list_s").addClass("on");
  $(".design .list_s li").eq(i).fadeIn(500);
  $(".design .list_s li").eq(i).addClass("on");
  $("body").addClass("hidden");
  $("body").removeClass("xhidden");
});
$(".design .close").on("click", function () {
  $(".design .list_s").fadeOut(0);
  $(".design .list_s li").fadeOut(0);
  $(".design .list_s").removeClass("on");
  $(".design .list_s li").removeClass("on");
  $("body").removeClass("hidden");
  $("body").addClass("xhidden");
});

//video
$(".video .wrap li").on("mouseenter", function () {
  $("li").not(this).addClass("mov");
  $(this).addClass("on");
});
$(".video .wrap li").on("mouseleave", function () {
  $(".video .wrap li").removeClass("mov");
  $(".video .wrap li").removeClass("on");
});
