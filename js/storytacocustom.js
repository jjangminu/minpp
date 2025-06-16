$(function () {
  var delay = 100;
  var timer = null;
  $(window).on("resize", function () {
    clearTimeout(timer);
    timer = setTimeout(function () {
      document.location.reload();
    }, delay);
  });

  let visual = $("#visual").offset().top;
  let con1 = $("#con1").offset().top;
  let con2 = $("#con2").offset().top;
  let con3 = $("#con3").offset().top;
  let con4 = $("#con4").offset().top;
  let con5 = $("#con5").offset().top;
  let con6 = $("#con6").offset().top;
  let con7 = $("#con7").offset().top;
  let con8 = $("#con8").offset().top;

  console.log(con1, con2, con3, con4);

  //scroll
  let scr = 0;
  $(window).on("scroll", function () {
    scr = $(this).scrollTop();
    console.log(scr);
    //header bg_scroll
    if (scr >= 20) {
      $("header").css({ "background-color": "rgb(255, 89, 39)" });
      $("header").on("mouseleave", function () {
        $(this).css({ "background-color": "rgb(255, 89, 39)" });
      });
    } else {
      $("header").css({ "background-color": "transparent" });
      $("header").on("mouseleave", function () {
        $(this).css({ "background-color": "transparent" });
      });
    }

    //visual mov
    if (scr >= visual && scr <= con2) {
      $("#visual .wrap_txt")
        .stop()
        .animate({ "margin-top": "0px", opacity: "1" }, 2000);
    } else {
      $("#visual .wrap_txt")
        .stop()
        .animate({ "margin-top": "80px", opacity: "0" });
    }

    //con1 mov
    if (scr + 150 >= con1) {
      $("#con1 .bg").css({ transform: "scale(1)" });
      $("#con1 .tit_wrap").addClass("mov1");
      $("#con1 .circle").addClass("mov2");
    } else if (scr <= visual) {
      $("#con1 .bg").css({ transform: "scale(1.5)" });
      $("#con1 .tit_wrap").removeClass("mov1");
      $("#con1 .circle").removeClass("mov2");
    }

    //con2 mov
    if (scr + 350 >= con2) {
      $("#con2 > div").addClass("mov");
    } else if (scr <= con1) {
      $("#con2 > div").removeClass("mov");
    }

    //con3 mov
    if (scr + 250 >= con3) {
      $("#con3 .bg").addClass("mov1");
      $("#con3 li p").addClass("mov2");
      $("#con3 li").eq(1).find("p").addClass("mov3");
      $("#con3 li").eq(2).find("p").addClass("mov4");
    } else if (scr <= con1) {
      $("#con3 .bg").removeClass("mov1");
      $("#con3 li p").removeClass("mov2");
      $("#con3 li").eq(1).find("p").removeClass("mov3");
      $("#con3 li").eq(2).find("p").removeClass("mov4");
    }

    //con4 mov
    if (scr + 250 >= con4) {
      $("#con4 .tit_wrap").addClass("mov1");
      $("#con4 .num").addClass("mov2");
    } else if (scr <= con3) {
      $("#con4 .tit_wrap").removeClass("mov1");
      $("#con4 .num").removeClass("mov2");
    }
    //con4 num
    let con4_x = 2900;
    let con4_y = 50;
    let con4_z = 76;
    if (scr + 250 >= con4 && scr + 230 <= con4) {
      let con4_num = setInterval(function () {
        con4_x++;
        con4_y++;
        con4_z++;
        $("#con4 .num li:nth-child(1) span").stop().text(con4_x);
        $("#con4 .num li:nth-child(2) span").stop().text(con4_y);
        $("#con4 .num li:nth-child(3) span").stop().text(con4_z);
        if (con4_x == 3000 && con4_y == 150 && con4_z == 176) {
          clearInterval(con4_num);
        }
      }, 30);
    } else if (scr < con3) {
      con4_x = 2900;
      con4_y = 50;
      con4_z = 76;
      $("#con4 .num li:nth-child(1) span").stop().text(con4_x);
      $("#con4 .num li:nth-child(2) span").stop().text(con4_y);
      $("#con4 .num li:nth-child(3) span").stop().text(con4_z);
    } else {
      con4_x = 3000;
      con4_y = 150;
      con4_z = 176;
      $("#con4 .num li:nth-child(1) span").stop().text(con4_x);
      $("#con4 .num li:nth-child(2) span").stop().text(con4_y);
      $("#con4 .num li:nth-child(3) span").stop().text(con4_z);
    }

    //con5 mov
    if (scr + 150 >= con5) {
      $("#con5 > .bg").addClass("mov1");
      $("#con5 .wrap").addClass("mov2");
    } else if (scr <= con4) {
      $("#con5 > .bg").removeClass("mov1");
      $("#con5 .wrap").removeClass("mov2");
    }

    //con6 mov
    if (scr + 200 >= con6) {
      $("#con6 .tit_wrap").addClass("mov1");
      $("#con6 .detail_wrap").addClass("mov2");
    } else if (scr <= con5) {
      $("#con6 .tit_wrap").removeClass("mov1");
      $("#con6 .detail_wrap").removeClass("mov2");
    }

    //con7 mov
    if (scr + 150 >= con7) {
      $("#con7 .tit_wrap").addClass("mov1");
      $("#con7 .detail_wrap").addClass("mov2");
    } else if (scr <= con6) {
      $("#con7 .tit_wrap").removeClass("mov1");
      $("#con7 .detail_wrap").removeClass("mov2");
    }

    //con8 mov
    if (scr >= con7 + 500) {
      $("#con8 > .bg").addClass("mov1");
      $("#con8 .wrap").addClass("mov2");
    } else if (scr <= con7) {
      $("#con8 > .bg").removeClass("mov1");
      $("#con8 .wrap").removeClass("mov2");
    }
  });

  //header bar
  $("header .bar").on("click", function () {
    $("header .sub_nav").css({ top: "70%", opacity: "0" });
    $("header .bar li:eq(1)").toggle();
    $("header .bar li:eq(0)").toggleClass("rot01");
    $("header .bar li:eq(2)").toggleClass("rot02");
    $("header .sub_wrap").toggle();
    $("header .sub_nav").animate({ top: "50%", opacity: "1" });
    $("body").toggleClass("hidden");
  });
  //header bg
  $("header").on("mouseenter", function () {
    $(this).css({ "background-color": "rgb(255, 89, 39)" });
  });
  $("header").on("mouseleave", function () {
    $(this).css({ "background-color": "transparent" });
  });

  //공통_more버튼
  $(".more").on("mouseenter", function () {
    $(this).find(".bg").stop().animate({ "margin-left": "0px" }, 50);
    $(this).find(".plus").css({ transform: "rotate(180deg)" });
  });
  $(".more").on("mouseleave", function () {
    $(this).find(".bg").stop().animate({ "margin-left": "-200px" }, 50);
    $(this).find(".plus").css({ transform: "rotate(0deg)" });
  });

  //visual 문자 mov
  visual_mov();
  function visual_mov() {
    $("#visual .wrap_txt")
      .stop()
      .animate({ "margin-top": "0px", opacity: "1" }, 2000);
  }
  //visual scroll_moving
  setInterval(function () {
    $("#visual .scroll")
      .delay(500)
      .animate({ bottom: "80px" }, function () {
        $("#visual .scroll").css({ bottom: "25px" });
      });
  }, 500);

  //con1 circle move
  $("#con1 .circle li").on("mouseenter", function () {
    $("#con1 .circle li").stop().animate({ "margin-top": "0px" }, 200);
    $(this).stop().animate({ "margin-top": "-10px" }, 200);
  });
  $("#con1 .circle li").on("mouseleave", function () {
    $("#con1 .circle li").stop().animate({ "margin-top": "0px" }, 200);
  });

  //con3 text move
  $("#con3 li").on("mouseenter", function () {
    $("#con3 li").eq(1).find("p").removeClass("mov3");
    $("#con3 li").eq(2).find("p").removeClass("mov4");
    $("#con3 li p").css({ "margin-bottom": "0px" });
    $(this).find("p").css({ "margin-top": "-20px" });
  });
  $("#con3 li").on("mouseleave", function () {
    $("#con3 li p").css({ "margin-top": "0px" });
  });

  //con6 img turn
  $("#con6 .detail li").on("mouseenter", function () {
    $("#con6 .detail li").find("img").removeClass("turn");
    $(this).find("img").addClass("turn");
  });

  //con7 roll{
  let con7_i = 0;
  con7_roll();
  function con7_roll() {
    roll = setInterval(function () {
      $("#con7 .photo")
        .stop()
        .animate({ "margin-left": "-100%" }, function () {
          $("#con7 .photo li:first-child").appendTo("#con7 .photo");
          $("#con7 .photo").css({ "margin-left": "0px" });
        });
      $("#con7 .gradient li").removeClass("mov");
      if (con7_i == 5) {
        con7_i = 0;
      } else {
        con7_i++;
      }
      $("#con7 .gradient li").eq(con7_i).addClass("mov");
    }, 3000);
  }
  //con7 button
  $("#con7 .right").on("click", function () {
    $("#con7 .gradient li").removeClass("mov");
    if (con7_i == 5) {
      con7_i = 0;
    } else {
      con7_i++;
    }
    $("#con7 .gradient li").eq(con7_i).addClass("mov");
    clearInterval(roll);
    $("#con7 .photo")
      .stop()
      .animate({ "margin-left": "-100%" }, function () {
        $("#con7 .photo li:first-child").appendTo("#con7 .photo");
        $("#con7 .photo").css({ "margin-left": "0px" });
      });
    con7_roll();
  });
  $("#con7 .left").on("click", function () {
    clearInterval(roll);
    $("#con7 .gradient li").removeClass("mov");
    if (con7_i == 0) {
      con7_i = 5;
    } else {
      con7_i--;
    }
    $("#con7 .gradient li").eq(con7_i).addClass("mov");
    $("#con7 .photo")
      .stop()
      .animate({ "margin-left": "-100%" }, 0, function () {
        $("#con7 .photo li:last-child").prependTo("#con7 .photo");
        $("#con7 .photo").stop().animate({ "margin-left": "0px" });
      });
    con7_roll();
  });
});
