$(function () {
  $(window)
    .resize(function () {
      if (window.innerWidth > 900) {
        /* pc, tablet_b */
        /* 서브메뉴 보이기 */
        $("header .big_menu").on("mouseenter", function () {
          $("header .big_menu ul").stop().fadeIn(500);
          $(".header_bg").stop().fadeIn(500);
          $("header").addClass("header_line");
        });
        $("header .big_menu").on("mouseleave", function () {
          $("header .big_menu ul").stop().fadeOut(500);
          $(".header_bg").stop().fadeOut(500);
          $("header").removeClass("header_line");
        });
        $("header .big_menu ul li").on("mouseenter", function () {
          $("header .big_menu ul li").children("a").css({ color: "gray" });
          $(this).children("a").css({ color: "black" });
        });
        $("header .big_menu ul li").on("mouseleave", function () {
          $("header .big_menu ul li").children("a").css({ color: "black" });
        });

        /* 언어목록 보이기 */
        $(".header_right .language").on("mouseenter", function () {
          $(".lan_menu").show();
          $("header h1").addClass("header_opacity");
          $("header .navi").addClass("header_opacity");
          $("header .carrer").addClass("header_opacity");
        });
        $(".header_right .language").on("mouseleave", function () {
          $(".lan_menu").hide();
          $("header h1").removeClass("header_opacity");
          $("header .navi").removeClass("header_opacity");
          $("header .carrer").removeClass("header_opacity");
        });

        /* visual fade */
        let i = 0;
        setInterval(function () {
          if (i == 3) {
            i = 0;
          } else {
            i++;
          }
          $("#visual .wrap li").fadeOut(1000);
          $("#visual .wrap li").eq(i).fadeIn(500);
        }, 5000);

        /* visual button */
        $("#visual .button .right").on("click", function () {
          if (i == 3) {
            i = 0;
          } else {
            i++;
          }
          $("#visual .wrap li").fadeOut(1000);
          $("#visual .wrap li").eq(i).fadeIn(500);
        });
        $("#visual .button .left").on("click", function () {
          if (i == 0) {
            i = 3;
          } else {
            i--;
          }
          $("#visual .wrap li").fadeOut(1000);
          $("#visual .wrap li").eq(i).fadeIn(500);
        });
      } else {
        /* mobile, tablet_s */
        /* menu보이기 */
        $("header .bar").on("click", function () {
          $(".header_bg").toggleClass("bg_a");
          $("header nav").toggleClass("bg_a");
          $("body").toggleClass("scr");
        });

        /* sub보이기 */
        $(".tit_wrap .down_but").on("click", function () {
          $(".tit_wrap .down_but").show();
          $(".tit_wrap .down_but").siblings(".up_but").hide();
          $(".tit_wrap .down_but").parent(".tit_wrap").css({
            "border-bottom": "none",
            "padding-bottom": "0px",
          });
          $(".tit_wrap .down_but")
            .parent(".tit_wrap")
            .siblings(".sub_nav")
            .slideUp();

          $(this).hide();
          $(this).siblings(".up_but").show();
          $(this).parent(".tit_wrap").css({
            "border-bottom": "1px solid gray",
            "padding-bottom": "15px",
          });
          $(this).parent(".tit_wrap").siblings(".sub_nav").slideDown();
        });

        $(".tit_wrap .up_but").on("click", function () {
          $(this).hide();
          $(this).siblings(".down_but").show();
          $(this).parent(".tit_wrap").css({
            "border-bottom": "none",
            "padding-bottom": "0px",
          });
          $(this).parent(".tit_wrap").siblings(".sub_nav").slideUp();
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

  /* container scale */
  $("#container li").on("mouseenter", function () {
    $("#container li").find("img").removeClass("scale");
    $(this).find("img").addClass("scale");
  });
  $("#container li").on("mouseleave", function () {
    $("#container li").find("img").removeClass("scale");
  });

  /* con02 left */
  $(".con02 .txt .eat").on("click", function () {
    $(".con02 .image img").fadeOut(800);
    $(".con02 .txt h2").stop().animate({ opacity: "0.5" });
    $(".con02 .image .eat").fadeIn(500);
    $(this).stop().animate({ opacity: "1" }, 500);
    $(".con02 .txt h2").on("mouseover", function () {
      $(this).css({ opacity: "1" });
    });
    $(".con02 .txt h2").on("mouseleave", function () {
      $(".con02 .txt h2").css({ opacity: "0.5" });
      $(".con02 .txt .eat").css({ opacity: "1" });
    });
  });
  $(".con02 .txt .drink").on("click", function () {
    $(".con02 .image img").fadeOut(800);
    $(".con02 .txt h2").stop().animate({ opacity: "0.5" });
    $(".con02 .image .drink").fadeIn(500);
    $(this).stop().animate({ opacity: "1" }, 500);
    $(".con02 .txt h2").on("mouseover", function () {
      $(this).css({ opacity: "1" });
    });
    $(".con02 .txt h2").on("mouseleave", function () {
      $(".con02 .txt h2").css({ opacity: "0.5" });
      $(".con02 .txt .drink").css({ opacity: "1" });
    });
  });
  $(".con02 .txt .enjoy").on("click", function () {
    $(".con02 .image img").fadeOut(800);
    $(".con02 .txt h2").stop().animate({ opacity: "0.5" });
    $(".con02 .image .enjoy").fadeIn(500);
    $(this).stop().animate({ opacity: "1" }, 500);
    $(".con02 .txt h2").on("mouseover", function () {
      $(this).css({ opacity: "1" });
    });
    $(".con02 .txt h2").on("mouseleave", function () {
      $(".con02 .txt h2").css({ opacity: "0.5" });
      $(".con02 .txt .enjoy").css({ opacity: "1" });
    });
  });

  /* con02 right */
  let c2_i = 1;
  $(".con02 .right_but").on("click", function () {
    /* button count */
    if (c2_i == 6) {
      c2_i = 1;
    } else {
      c2_i++;
    }
    $(".con02 .button span").text(c2_i);
    $(".con02 .img_wrap01, .con02 .img_wrap02, .con02 .img_wrap03").each(
      function () {
        $(this).find("li").fadeOut(800);
        $(this)
          .find("li")
          .eq(c2_i - 1)
          .fadeIn(500);
      }
    );
  });
  $(".con02 .left_but").on("click", function () {
    if (c2_i == 1) {
      c2_i = 6;
    } else {
      c2_i--;
    }
    $(".con02 .button span").text(c2_i);

    /* image change */
    $(".con02 .img_wrap01, .con02 .img_wrap02, .con02 .img_wrap03").each(
      function () {
        $(this).find("li").fadeOut(800);
        $(this)
          .find("li")
          .eq(c2_i - 1)
          .fadeIn(500);
      }
    );
  });

  /* con03 left */
  let c3_i = 1;
  $(".con03 .right_but").on("click", function () {
    /* button count */
    if (c3_i == 3) {
      c3_i = 1;
    } else {
      c3_i++;
    }
    $(".con03 .button span").text(c3_i);

    /* image change */
    $(".con03 .img_wrap01, .con03 .img_wrap02, .con03 .img_wrap03").each(
      function () {
        $(this).find("li").fadeOut(800);
        $(this)
          .find("li")
          .eq(c3_i - 1)
          .fadeIn(500);
      }
    );
  });
  $(".con03 .left_but").on("click", function () {
    if (c3_i == 1) {
      c3_i = 3;
    } else {
      c3_i--;
    }
    $(".con03 .button span").text(c3_i);

    /* image change */
    $(".con03 .img_wrap01, .con03 .img_wrap02, .con03 .img_wrap03").each(
      function () {
        $(this).find("li").fadeOut(800);
        $(this)
          .find("li")
          .eq(c3_i - 1)
          .fadeIn(500);
      }
    );
  });

  /* con03 right */

  $(".con03 .news").on("click", function () {
    $(".con03 .txt h2").stop().animate({ opacity: "0.5" }, 100);
    $(this).stop().animate({ opacity: "1" }, 100);
    $(".con03 .txt h2").on("mouseenter", function () {
      $(this).stop().animate({ opacity: "1" }, 100);
    });
    $(".con03 .txt h2").on("mouseleave", function () {
      $(".con03 .txt h2").stop().animate({ opacity: "0.5" }, 100);
      $(".con03 .news").stop().animate({ opacity: "1" }, 0);
    });
  });
  $(".con03 .mega").on("click", function () {
    $(".con03 .txt h2").stop().animate({ opacity: "0.5" }, 100);
    $(this).stop().animate({ opacity: "1" }, 100);
    $(".con03 .txt h2").on("mouseenter", function () {
      $(this).stop().animate({ opacity: "1" }, 100);
    });
    $(".con03 .txt h2").on("mouseleave", function () {
      $(".con03 .txt h2").stop().animate({ opacity: "0.5" }, 100);
      $(".con03 .mega").stop().animate({ opacity: "1" }, 0);
    });
  });

  /* footer */
  $(".bottom .plus_but").on("click", function () {
    $(this).hide();
    $(".bottom .minus_but").css({ display: "block" });
    $(".bottom .fam_scroll").show();
  });
  $(".bottom .minus_but").on("click", function () {
    $(this).hide();
    $(".bottom .plus_but").css({ display: "block" });
    $(".bottom .fam_scroll").hide();
  });
});
