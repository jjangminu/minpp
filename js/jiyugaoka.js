$(function () {
  $(window)
    .resize(function () {
      if (window.innerWidth > 1000) {
        /* pc */
        //header nav
        $("header nav ul li").on("mouseenter", function () {
          $("header nav .tit").css({ "background-color": "transparent" });
          $("header nav .sub_nav").stop().slideUp();
          $(this).find(".sub_nav").stop().slideDown();
          $(this).find(".tit").css({ "background-color": "#313a6b" });
        });
        $("header nav .sub_nav li").on("mouseenter", function () {
          $(this)
            .parent(".sub_nav")
            .prev(".tit")
            .css({ "background-color": "#313a6b" });
          $(this).parent(".sub_nav").stop().slideDown();
        });
        $("header nav").on("mouseleave", function () {
          $("header nav .sub_nav").stop().slideUp();
          $("header nav .tit").css({ "background-color": "transparent" });
        });
        $("header .bar_nav").on("click", function () {
          $("body").removeClass("scr_hide");
          $("header .bar_nav").hide();
        });
        //header bar
        $("header .bar").on("click", function () {
          $("body").addClass("scr_hide");
          $("header .bar_nav").show();
        });
        $("header .close").on("click", function () {
          $("body").removeClass("scr_hide");
          $("header .bar_nav").hide();
        });
      } else {
        /* mobile, tablet */
        //header bg
        $(window).on("scroll", function () {
          scr = $(this).scrollTop();
          if (scr >= 200) {
            $("header").css({ "background-color": "#212956", border: "none" });
          } else {
            $("header").css({
              "background-color": "transparent",
              "border-bottom": "1px solid white",
            });
          }
        });
        //header bar
        $("header .bar_m").on("click", function () {
          $("header .bar_m li").eq(0).toggleClass("top");
          $("header .bar_m li").eq(1).toggleClass("middle");
          $("header .bar_m li").eq(2).toggleClass("bottom");
          $("header .black_bg").toggle();
          $("body").toggleClass("scr_hide");
          $("header .mob_nav .wrap").toggleClass("mov");
          $("header .mob_nav li > div").slideUp();
          $("header .mob_nav .minus").hide();
          $("header .mob_nav .plus").show();
          $("header .mob_nav h3").removeClass("shadow");
        });
        //header sub nav
        $("header .mob_nav li > div").slideUp();
        let nav = $("header .mob_nav li");
        $("header .mob_nav li").on("click", function () {
          nav.not($(this)).find("div").slideUp();
          nav.not($(this)).find(".minus").hide();
          nav.not($(this)).find(".plus").show();
          nav.not($(this)).find("h3").removeClass("shadow");
          $(this).find(".minus").toggle();
          $(this).find(".plus").toggle();
          $(this).find("div").slideToggle();
          $(this).find("h3").toggleClass("shadow");
        });
        $("header .black_bg").on("click", function () {
          $(this).hide();
          $("header .mob_nav li div").slideUp();
          $("header .mob_nav .wrap").removeClass("mov");
          $("header .bar_m li").eq(0).removeClass("top");
          $("header .bar_m li").eq(1).removeClass("middle");
          $("header .bar_m li").eq(2).removeClass("bottom");
        });
      }
    })
    .resize();
  /* 사이즈에 맞춰 reset */
  var delay = 100;
  var timer = null;
  $(window).on("resize", function () {
    clearTimeout(timer);
    timer = setTimeout(function () {
      document.location.reload();
    }, delay);
  });

  //top_button
  $(window).on("scroll", function () {
    scr = $(this).scrollTop();
    if (scr >= 50) {
      $(".fix_but").css({ opacity: "1" });
    } else {
      $(".fix_but").css({ opacity: "0" });
    }
  });

  //visual
  visual_mov();
  function visual_mov() {
    $("#visual img").removeClass("#visual mov");
    $("#visual h4").css({ "margin-top": "0px", opacity: "1" });
    $("#visual h2").css({ "margin-top": "0px", opacity: "1" });
  }

  //contents navy_button
  $(".navy_but a").on("mouseenter", function () {
    $(".navy_but .bg").addClass("mov");
  });
  $(".navy_but a").on("mouseleave", function () {
    $(".navy_but .bg").removeClass("mov");
  });

  //con01 mobile_button
  $(".con01 .mo_but .right").on("click", function () {
    $(this).css({ opacity: "0" });
    $(this).siblings(".left").css({ opacity: "1" });
    $(".con01 .image").css({ "margin-left": "-100%" });
    $(".con01 .image li img").removeClass("mov");
    $(".con01 .image li:last-child img").addClass("mov");
  });
  $(".con01 .mo_but .left").on("click", function () {
    $(this).css({ opacity: "0" });
    $(this).siblings(".right").css({ opacity: "1" });
    $(".con01 .image").css({ "margin-left": "0px" });
    $(".con01 .image li img").removeClass("mov");
    $(".con01 .image li:first-child img").addClass("mov");
  });

  //con02 drag
  /* const rect = document.querySelector(".con02 ul").getBoundingClientRect();
  console.log(rect);
  $(".con02 ul").draggable({
    axis: "x",
  });
  $(".con02 ul li").on("draggabled", function () {
    $(".con02 ul").toggleClass("mov");
  }); */
  let con02_count = 0;
  $(".con02 .detail li").on("click", function () {
    if (con02_count == 1) {
      con02_count = 0;
    } else {
      con02_count++;
    }
    $(".con02 .detail").toggleClass("mov");
    $(".con02 .cir_but li").removeClass("on");
    $(".con02 .cir_but li").eq(con02_count).addClass("on");
  });
  $(".con02 .cir_but li").on("click", function () {
    if (con02_count == 1) {
      con02_count = 0;
    } else {
      con02_count++;
    }
    $(".con02 .detail").toggleClass("mov");
    $(".con02 .cir_but li").removeClass("on");
    $(".con02 .cir_but li").eq(con02_count).addClass("on");
  });

  //con03 roll
  function con03_result() {
    $(".con03 .imgwrap01 li").removeClass("on");
    $(".con03 .imgwrap02 li").removeClass("on");
    $(".con03 .mo_imgwrap li").removeClass("on");
    $(".con03 .tit li").removeClass("on");
    $(".con03 .txt li").removeClass("on");
    $(".con03 .detail li").removeClass("on");
    $(".con03 .cir_but li").removeClass("on");
    $(".con03 .imgwrap01 li").eq(con03_item).addClass("on");
    $(".con03 .imgwrap02 li").eq(con03_item).addClass("on");
    $(".con03 .mo_imgwrap li").eq(con03_item).addClass("on");
    $(".con03 .tit li").eq(con03_item).addClass("on");
    $(".con03 .txt li").eq(con03_item).addClass("on");
    $(".con03 .detail li").eq(con03_item).addClass("on");
    $(".con03 .cir_but li").eq(con03_item).addClass("on");
  }

  con03_roll();
  let con03_total = 2;
  let con03_item = 0;
  function con03_roll() {
    con03_stop = setInterval(function () {
      if (con03_item == con03_total - 1) {
        con03_item = 0;
      } else {
        con03_item++;
      }
      con03_result();
    }, 2000);
  }
  //con03 right_button
  $(".con03 .right").on("click", function () {
    clearInterval(con03_stop);
    if (con03_item == con03_total - 1) {
      con03_item = 0;
    } else {
      con03_item++;
    }
    con03_result();
    con03_roll();
  });
  //con03 left_button
  $(".con03 .left").on("click", function () {
    clearInterval(con03_stop);
    if (con03_item == con03_total - 1) {
      con03_item = 0;
    } else {
      con03_item++;
    }
    con03_result();
    con03_roll();
  });
  //con03 circle_button
  $(".con03 .cir_but li").on("click", function () {
    clearInterval(con03_stop);
    if (con03_item == con03_total - 1) {
      con03_item = 0;
    } else {
      con03_item++;
    }
    con03_result();
    con03_roll();
  });

  //con05 button
  $(".con05 li a").on("mouseenter", function () {
    $(".con05 li .front").removeClass("mov1");
    $(".con05 li .back").addClass("mov2");
    $(this).find(".front").addClass("mov1");
    $(this).find(".back").removeClass("mov2");
  });
  $(".con05 li a").on("mouseleave", function () {
    $(".con05 li .front").removeClass("mov1");
    $(".con05 li .back").addClass("mov2");
  });

  //con06 button
  $(".con06 .but").on("mouseenter", function () {
    $(".con06 .but .bg").addClass("mov1");
  });
  $(".con06 .but").on("mouseleave", function () {
    $(".con06 .but .bg").removeClass("mov1");
  });

  //con06 banners
  let con06_total = $(".con06 .banners li").length;
  let con06_item = 0;
  con06_roll();

  //con06 circle_button class
  function con06_repeat() {
    $(".con06 .cir_but li").removeClass("on");
    $(".con06 .cir_but li").eq(con06_item).addClass("on");
  }

  //con06 roll
  function con06_roll() {
    con06_stop = setInterval(function () {
      if (con06_item == 2) {
        con06_item = 0;
      } else {
        con06_item++;
      }
      con06_repeat();
      $(".con06 .banners")
        .stop()
        .animate({ "margin-left": "-100%" }, function () {
          $(".con06 .banners li:first-child").appendTo(".con06 .banners");
          $(".con06 .banners").css({ "margin-left": "0px" });
        });
    }, 3000);
  }

  //con06 right_button
  $(".con06 .arrow_but .right").on("click", function () {
    clearInterval(con06_stop);
    if (con06_item == 2) {
      con06_item = 0;
    } else {
      con06_item++;
    }
    con06_repeat();
    $(".con06 .banners")
      .stop()
      .animate({ "margin-left": "-100%" }, function () {
        $(".con06 .banners li:first-child").appendTo(".con06 .banners");
        $(".con06 .banners").css({ "margin-left": "0px" });
      });
    con06_roll();
  });

  //con06 left_button
  $(".con06 .arrow_but .left").on("click", function () {
    clearInterval(con06_stop);
    if (con06_item == 0) {
      con06_item = 2;
    } else {
      con06_item--;
    }
    con06_repeat();
    $(".con06 .banners")
      .stop()
      .animate({ "margin-left": "-100%" }, 0, function () {
        $(".con06 .banners li:last-child").prependTo(".con06 .banners");
        $(".con06 .banners").stop().animate({ "margin-left": "0px" });
      });
    con06_roll();
  });

  //con06 circle_button
  $(".con06 .cir_but li").on("click", function () {
    clearInterval(con06_stop);
    let con06_count = 0;

    if (con06_item < $(this).index()) {
      con06_count = $(this).index() - con06_item;
      con06_item = $(this).index();
      console.log(con06_count);
      if (con06_count == 2) {
        $(".con06 .banners")
          .stop()
          .animate({ "margin-left": "-200%" }, function () {
            $(".con06 .banners li:last-child").prependTo(".con06 .banners");
            $(".con06 .banners").css({ "margin-left": "0px" });
          });
      } else {
        $(".con06 .banners")
          .stop()
          .animate({ "margin-left": "-100%" }, function () {
            $(".con06 .banners li:first-child").appendTo(".con06 .banners");
            $(".con06 .banners").css({ "margin-left": "0px" });
          });
      }
    } else if (con06_item > $(this).index()) {
      con06_count = con06_item - $(this).index();
      con06_item = $(this).index();
      console.log(con06_count);
      if (con06_count == 2) {
        $(".con06 .banners")
          .stop()
          .animate({ "margin-left": "-200%" }, 0, function () {
            $(".con06 .banners li:first-child").appendTo(".con06 .banners");
            $(".con06 .banners").stop().animate({ "margin-left": "0px" });
          });
      } else {
        $(".con06 .banners")
          .stop()
          .animate({ "margin-left": "-100%" }, 0, function () {
            $(".con06 .banners li:last-child").prependTo(".con06 .banners");
            $(".con06 .banners").stop().animate({ "margin-left": "0px" });
          });
      }
    }
    con06_repeat();
    con06_roll();
  });
});
