$(document).ready(function () {

  var x, i, j, l, ll, selElmnt, a, b, c;
  /* Look for any elements with the class "custom-select": */
  x = document.getElementsByClassName("custom-select");
  l = x.length;
  for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    /* For each element, create a new DIV that will act as the selected item: */
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /* For each element, create a new DIV that will contain the option list: */
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < ll; j++) {
      /* For each option in the original select element,
      create a new DIV that will act as an option item: */
      c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener("click", function (e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
      });
      b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function (e) {
      /* When the select box is clicked, close any other select boxes,
      and open/close the current select box: */
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
  }

  function closeAllSelect(elmnt) {
    /* A function that will close all select boxes in the document,
    except the current select box: */
    var x, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i)
      } else {
        y[i].classList.remove("select-arrow-active");
      }
    }
    for (i = 0; i < xl; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
      }
    }
  }

  /* If the user clicks anywhere outside the select box,
  then close all select boxes: */
  document.addEventListener("click", closeAllSelect);

  $(".select-main").click(function () {
    $(this).toggleClass('act');
    $(this).find('span').toggleClass('act');
  });

  $(".box_birds_search_application_balance .box_birds_search_application_title_departure").click(function () {
    $(".box_birds_search_application_balance .box_birds_search_application_item .box_birds_search_application_item_departure").text('Перевозка');
    $(".box_birds_search_application_balance .box_birds_search_application_item .box_birds_search_application_item_departure_icon img").attr('src', 'img/shipping.svg');
  });

  $(".box_birds_search_application_balance .box_birds_search_application_title_shipping").click(function () {
    $(".box_birds_search_application_balance .box_birds_search_application_item .box_birds_search_application_item_departure").text('Отправление');
    $(".box_birds_search_application_balance .box_birds_search_application_item .box_birds_search_application_item_departure_icon img").attr('src', 'img/departure.svg');
  });

  $(".box_birds_profile_header_right_verification_input_box").hover(
    function () {
      $(this).find(".box_birds_profile_header_prompt").addClass('act');
    }, function () {
      setTimeout(() => {
        $(".box_birds_profile_header_prompt").remove();
      }, 2000);
    }
  );

  $("#tab4 .box_birds_search_first_card_product_box_item_courier_heart2").click(function () {
    $(this).parent().parent().parent().parent().fadeOut(500);
    setTimeout(() => {
      $(this).parent().parent().parent().parent().remove();
    }, 500);
  });

  $(".box_birds_search_application_button.balance").click(function () {
    $(this).parent().find('.balance-history').find('.hide').toggleClass('act');
  });

  $(".box_birds_search_application_mobile-btns_item.deperture").click(function () {
    $(".box_birds_search_application_mobile-content.deperture").removeClass('disbl');
    $(".box_birds_search_application_mobile-content.shipping").addClass('disbl');
  });

  $(".box_birds_search_application_mobile-btns_item.shipping").click(function () {
    $(".box_birds_search_application_mobile-content.shipping").removeClass('disbl');
    $(".box_birds_search_application_mobile-content.deperture").addClass('disbl');
  });

  $(".box_birds_search_application_button").click(function () {
    $(this).parent().find('.box_birds_search_application_mobile-content').find('.box_birds_search_application_mobile-content_item.hidden').toggleClass('act');
  });

  $(".box_birds_search_application_mobile-btns_item").click(function () {
    $(this).parent().find('.box_birds_search_application_mobile-btns_item').removeClass('active');
    $(this).addClass('active');
  });

  $(".tabs_menu-slick").slick({
    arrows: false,
    slidesToShow: 2.5,
    infinite: false,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.5,
        }
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1.5,
        }
      }
    ]
  });

  $(".box_birds_search_header_box_item_burger").click(function () {
    $(".box_birds_search_header_box.mobile").toggleClass('fixed');
    $(".box_birds_search_header_box_menu").toggleClass('act');
  });

  $(".box_birds_search_header_box_menu .tabs_menu li").click(function () {
    $(".box_birds_search_header_box_item_burger input").trigger('click');
  });

  $(".box_birds_search_application_title_departure").click(function () {
    $(this).removeClass('act');
    $('.box_birds_search_application_title_shipping').addClass('act');
  });

  $(".box_birds_search_application_title_shipping").click(function () {
    $(this).removeClass('act');
    $('.box_birds_search_application_title_departure').addClass('act');
  });

  /*
  $('.box_birds_profile_header_right_verification_input_item').keyup(function () {
    if ($(this).parent().find('.box_birds_profile_header_prompt')) {
      $(this).parent().find('.box_birds_profile_header_prompt').addClass('act');
      setTimeout(() => {
        $(this).parent().find('.box_birds_profile_header_prompt').fadeOut(400);
      }, 6000);
    }
  });
*/
  $(".box_birds_search_application_item_status_btn").click(function () {
    $(this).parent().find('.box_birds_search_application_item_status').css('display', 'none');
    $(this).parent().find('.box_birds_search_application_item_status.finish').addClass('act');
    $(this).parent().removeClass('active');
    $(this).remove();
  });

  $.fn.datepicker.dates['ru'] = {
    days: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
    daysShort: ["Вск", "Пнд", "Втр", "Срд", "Чтв", "Птн", "Суб", "Вск"],
    daysMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    monthsShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
    today: "Сегодня",
    weekStart: 1
  };

  $(".box_birds_search_first_content_header_form_date").datepicker({
    format: 'dd.mm.yy',
    templates: {
      leftArrow: '<div class="datepicker-prev"> </div>',
      rightArrow: '<div class="datepicker-next"> </div>'
    },
    language: 'ru',
    autoclose: true
  }).on("show", function (event) {
    $("tfoot").on("click", function () {
      $(".box_birds_search_first_content_header_form_date").datepicker('hide');
    });
  });

  $(".box_birds_search_first_content_header_form_date").datepicker('update', new Date());


  $(".box_birds_profile_header_right_verification_personal_info_input_date").datepicker({
    format: 'dd.mm.yy',
    templates: {
      leftArrow: '<div class="datepicker-prev"> </div>',
      rightArrow: '<div class="datepicker-next"> </div>'
    },
    language: 'ru'
  }).on("show", function (event) {
    $("tfoot").on("click", function () {
      $(".box_birds_profile_header_right_verification_personal_info_input_date").datepicker('hide');
    });
  });

  $(".box_birds_profile_header_right_verification_personal_info_input_date").datepicker('update', new Date());

  function highlightRangeDate(date) {
    var selectedDates = $('#date').datepicker('getDates');
    if (selectedDates.length === 2 && date >= selectedDates[0] && date <= selectedDates[1]) {
      return 'highlighted';
    }
    return '';
  }

  $('#date').datepicker({
    startView: 0,
    minViewMode: 0,
    maxViewMode: 2,
    multidate: true,
    multidateSeparator: "-",
    autoClose: true,
    format: 'dd.mm.yy',
    templates: {
      leftArrow: '<div class="datepicker-prev"> </div>',
      rightArrow: '<div class="datepicker-next"> </div>',
      footer: 'Test',
    },
    language: 'ru',
    beforeShowDay: highlightRangeDate,
  }).on("changeDate", function (event) {
    var dates = event.dates,
      elem = $('#date');
    if (elem.data("selecteddates") == dates.join(",")) return;
    if (dates.length > 2) dates = dates.splice(dates.length - 1);
    dates.sort(function (a, b) { return new Date(a).getTime() - new Date(b).getTime() });
    elem.data("selecteddates", dates.join(",")).datepicker('setDates', dates);
  }).on("show", function (event) {
    $("tfoot").on("click", function () {
      $("#date").datepicker('hide');
    });
  });
  $("#date").datepicker('setDates', [new Date(), new Date(Date.now() + 1000 * 60 * 60 * 24 * 2)]);

  $('#date-tab3').datepicker({
    startView: 0,
    minViewMode: 0,
    maxViewMode: 2,
    multidate: true,
    multidateSeparator: "-",
    autoClose: true,
    format: 'dd.mm.yy',
    templates: {
      leftArrow: '<div class="datepicker-prev"> </div>',
      rightArrow: '<div class="datepicker-next"> </div>'
    },
    language: 'ru',
    beforeShowDay: highlightRange,
  }).on("changeDate", function (event) {
    var dates = event.dates,
      elem = $('#date-tab3');
    if (elem.data("selecteddates") == dates.join(",")) return;
    if (dates.length > 2) dates = dates.splice(dates.length - 1);
    dates.sort(function (a, b) { return new Date(a).getTime() - new Date(b).getTime() });
    elem.data("selecteddates", dates.join(",")).datepicker('setDates', dates);
  }).on("show", function (event) {
    $("tfoot").on("click", function () {
      $("#date-tab3").datepicker('hide');
    });
  });

  $("#date-tab3").datepicker('setDates', [new Date(), new Date(Date.now() + 1000 * 60 * 60 * 24 * 2)]);

  function highlightRange(date) {
    var selectedDates = $('#date-tab3').datepicker('getDates');
    if (selectedDates.length === 2 && date >= selectedDates[0] && date <= selectedDates[1]) {
      return 'highlighted';
    }
    return '';
  }

  $('#date-tab4').datepicker({
    startView: 0,
    minViewMode: 0,
    maxViewMode: 2,
    multidate: true,
    multidateSeparator: "-",
    autoClose: true,
    format: 'dd.mm.yy',
    templates: {
      leftArrow: '<div class="datepicker-prev"> </div>',
      rightArrow: '<div class="datepicker-next"> </div>'
    },
    language: 'ru',
    beforeShowDay: highlightRangeFavorite,
  }).on("changeDate", function (event) {
    var dates = event.dates,
      elem = $('#date-tab4');
    if (elem.data("selecteddates") == dates.join(",")) return;
    if (dates.length > 2) dates = dates.splice(dates.length - 1);
    dates.sort(function (a, b) { return new Date(a).getTime() - new Date(b).getTime() });
    elem.data("selecteddates", dates.join(",")).datepicker('setDates', dates);
  }).on("show", function (event) {
    $("tfoot").on("click", function () {
      $("#date-tab4").datepicker('hide');
    });
  });

  $("#date-tab4").datepicker('setDates', [new Date(), new Date(Date.now() + 1000 * 60 * 60 * 24 * 2)]);

  function highlightRangeFavorite(date) {
    var selectedDates = $('#date-tab4').datepicker('getDates');
    if (selectedDates.length === 2 && date >= selectedDates[0] && date <= selectedDates[1]) {
      return 'highlighted';
    }
    return '';
  }

  $('#date-balance-1').datepicker({
    startView: 0,
    minViewMode: 0,
    maxViewMode: 2,
    multidate: true,
    multidateSeparator: "-",
    autoClose: true,
    format: 'dd.mm.yy',
    templates: {
      leftArrow: '<div class="datepicker-prev"> </div>',
      rightArrow: '<div class="datepicker-next"> </div>'
    },
    language: 'ru',
    beforeShowDay: highlightRangeBalance,
  }).on("changeDate", function (event) {
    var dates = event.dates,
      elem = $('#date-balance-1');
    if (elem.data("selecteddates") == dates.join(",")) return;
    if (dates.length > 2) dates = dates.splice(dates.length - 1);
    dates.sort(function (a, b) { return new Date(a).getTime() - new Date(b).getTime() });
    elem.data("selecteddates", dates.join(",")).datepicker('setDates', dates);
  }).on("show", function (event) {
    $("tfoot").on("click", function () {
      $("#date-balance-1").datepicker('hide');
    });
  });

  function highlightRangeBalance(date) {
    var selectedDates = $('#date-balance-1').datepicker('getDates');
    if (selectedDates.length === 2 && date >= selectedDates[0] && date <= selectedDates[1]) {
      return 'highlighted';
    }
    return '';
  }

  $("#date-balance-1").datepicker('setDates', [new Date(), new Date(Date.now() + 1000 * 60 * 60 * 24 * 2)]);

  $('#date-balance-2').datepicker({
    startView: 0,
    minViewMode: 0,
    maxViewMode: 2,
    multidate: true,
    multidateSeparator: "-",
    autoClose: true,
    format: 'dd.mm.yy',
    templates: {
      leftArrow: '<div class="datepicker-prev"> </div>',
      rightArrow: '<div class="datepicker-next"> </div>'
    },
    language: 'ru',
    beforeShowDay: highlightRangeBalanceSecond,
  }).on("changeDate", function (event) {
    var dates = event.dates,
      elem = $('#date-balance-2');
    if (elem.data("selecteddates") == dates.join(",")) return;
    if (dates.length > 2) dates = dates.splice(dates.length - 1);
    dates.sort(function (a, b) { return new Date(a).getTime() - new Date(b).getTime() });
    elem.data("selecteddates", dates.join(",")).datepicker('setDates', dates);
  }).on("show", function (event) {
    $("tfoot").on("click", function () {
      $("#date-balance-2").datepicker('hide');
    });
  });

  $("#date-balance-2").datepicker('setDates', [new Date(), new Date(Date.now() + 1000 * 60 * 60 * 24 * 2)]);

  function highlightRangeBalanceSecond(date) {
    var selectedDates = $('#date-balance-2').datepicker('getDates');
    if (selectedDates.length === 2 && date >= selectedDates[0] && date <= selectedDates[1]) {
      return 'highlighted';
    }
    return '';
  }

  $('#date-balance-3').datepicker({
    startView: 0,
    minViewMode: 0,
    maxViewMode: 2,
    multidate: true,
    multidateSeparator: "-",
    autoClose: true,
    format: 'dd.mm.yy',
    templates: {
      leftArrow: '<div class="datepicker-prev"> </div>',
      rightArrow: '<div class="datepicker-next"> </div>'
    },
    language: 'ru',
    beforeShowDay: highlightRangeBalanceThird,
  }).on("changeDate", function (event) {
    var dates = event.dates,
      elem = $('#date-balance-3');
    if (elem.data("selecteddates") == dates.join(",")) return;
    if (dates.length > 2) dates = dates.splice(dates.length - 1);
    dates.sort(function (a, b) { return new Date(a).getTime() - new Date(b).getTime() });
    elem.data("selecteddates", dates.join(",")).datepicker('setDates', dates);
  }).on("show", function (event) {
    $("tfoot").on("click", function () {
      $("#date-balance-3").datepicker('hide');
    });
  });

  $("#date-balance-3").datepicker('setDates', [new Date(), new Date(Date.now() + 1000 * 60 * 60 * 24 * 2)]);

  function highlightRangeBalanceThird(date) {
    var selectedDates = $('#date-balance-3').datepicker('getDates');
    if (selectedDates.length === 2 && date >= selectedDates[0] && date <= selectedDates[1]) {
      return 'highlighted';
    }
    return '';
  }

  $('#date-balance-4').datepicker({
    startView: 0,
    minViewMode: 0,
    maxViewMode: 2,
    multidate: true,
    multidateSeparator: "-",
    autoClose: true,
    format: 'dd.mm.yy',
    templates: {
      leftArrow: '<div class="datepicker-prev"> </div>',
      rightArrow: '<div class="datepicker-next"> </div>'
    },
    language: 'ru',
    beforeShowDay: highlightRangeBalanceFour,
  }).on("changeDate", function (event) {
    var dates = event.dates,
      elem = $('#date-balance-4');
    if (elem.data("selecteddates") == dates.join(",")) return;
    if (dates.length > 2) dates = dates.splice(dates.length - 1);
    dates.sort(function (a, b) { return new Date(a).getTime() - new Date(b).getTime() });
    elem.data("selecteddates", dates.join(",")).datepicker('setDates', dates);
  }).on("show", function (event) {
    $("tfoot").on("click", function () {
      $("#date-balance-4").datepicker('hide');
    });
  });

  $("#date-balance-4").datepicker('setDates', [new Date(), new Date(Date.now() + 1000 * 60 * 60 * 24 * 2)]);

  function highlightRangeBalanceFour(date) {
    var selectedDates = $('#date-balance-4').datepicker('getDates');
    if (selectedDates.length === 2 && date >= selectedDates[0] && date <= selectedDates[1]) {
      return 'highlighted';
    }
    return '';
  }

  $('#date-balance-5').datepicker({
    startView: 0,
    minViewMode: 0,
    maxViewMode: 2,
    multidate: true,
    multidateSeparator: "-",
    autoClose: true,
    format: 'dd.mm.yy',
    templates: {
      leftArrow: '<div class="datepicker-prev"> </div>',
      rightArrow: '<div class="datepicker-next"> </div>'
    },
    language: 'ru',
    beforeShowDay: highlightRangeBalanceFive,
  }).on("changeDate", function (event) {
    var dates = event.dates,
      elem = $('#date-balance-5');
    if (elem.data("selecteddates") == dates.join(",")) return;
    if (dates.length > 2) dates = dates.splice(dates.length - 1);
    dates.sort(function (a, b) { return new Date(a).getTime() - new Date(b).getTime() });
    elem.data("selecteddates", dates.join(",")).datepicker('setDates', dates);
  }).on("show", function (event) {
    $("tfoot").on("click", function () {
      $("#date-balance-5").datepicker('hide');
    });
  });

  $("#date-balance-5").datepicker('setDates', [new Date(), new Date(Date.now() + 1000 * 60 * 60 * 24 * 2)]);

  function highlightRangeBalanceFive(date) {
    var selectedDates = $('#date-balance-5').datepicker('getDates');
    if (selectedDates.length === 2 && date >= selectedDates[0] && date <= selectedDates[1]) {
      return 'highlighted';
    }
    return '';
  }


  $(".balance-history_change .departure").click(function () {
    $(".balance-history_change .shipping").removeClass('act');
    $(this).addClass('act');

    $(".balance-history.shipping").removeClass('act');
    $(".balance-history.departure").addClass('act');
  });

  $(".balance-history_change .shipping").click(function () {
    $(".balance-history_change .departure").removeClass('act');
    $(this).addClass('act');

    $(".balance-history.departure").removeClass('act');
    $(".balance-history.shipping").addClass('act');
  });




  /*
    $(".box_birds_search_application_tab_date").datepicker({
      format: 'dd.mm.yy',
      templates: {
        leftArrow: '<div class="datepicker-prev"> </div>',
        rightArrow: '<div class="datepicker-next"> </div>'
      },
      language: 'ru',
      startDate: date,
      endDate : date_1,
    });
  */

  $(".instruction-item_next").click(function (e) {
    e.preventDefault();
    let index = $(this).parent().parent().data('index');
    if (index == 4) {
      $(".box_birds_search_first_instruction").removeClass('active');
      $(".box_birds_search_first_active_application").addClass('active');
    }
    else {
      $(".instruction-item").removeClass('act');
      $(`#instruction-item-${index + 1}`).addClass('act');
    }
  });

  $(".instruction-item_back").click(function (e) {
    e.preventDefault();
    let index = $(this).parent().parent().data('index');
    if (index == 1) {
      return;
    }
    else {
      $(".instruction-item").removeClass('act');
      $(`#instruction-item-${index - 1}`).addClass('act');
    }
  });

  $(".instruction-item_skip").click(function (e) {
    e.preventDefault();
    $(".box_birds_search_first_instruction").removeClass('active');
    $(".box_birds_search_first_active_application").addClass('active');
  });

  $(".notice-block_close").click(function () {
    $(".notice-block").remove();
    $(".box_birds_search_header_box_item_clerk_advice").removeClass('act');
    $(".box_birds_search_header_box_item_clerk_advice").addClass('delete');
  });

  $(".box_birds_search_header_box_item_clerk_advice").click(function () {
    $(".notice-block").toggleClass('act');
    $(this).toggleClass('open');
  });

  // Вкладки

  $('.tabs_menu-slick_item').click(function (e) {
    e.preventDefault();
    $('.tabs_menu-slick_item.active').removeClass('active');
    $(".box_birds_search_application_mobile-btns_item").removeClass('active');
    $(".box_birds_search_application_mobile-btns_item.deperture").addClass('active');
    $(".box_birds_search_application_mobile-content.deperture").removeClass('disbl');
    $(".box_birds_search_application_mobile-content.shipping").addClass('disbl');
    $(this).addClass('active');
    var tab = $(this).data('href');
    $('.tab').not(tab).css({
      'display': 'none'
    });
    $(tab).fadeIn(1000);
  });

  $('.tabs_menu a').click(function (e) {
    e.preventDefault();
    $('.tabs_menu .active').removeClass('active');
    $(this).addClass('active');
    var tab = $(this).attr('href');
    $('.tab').not(tab).css({
      'display': 'none'
    });
    $(tab).fadeIn(1000);
  });

  // Появление кнопки создания заявки
  $('.box_birds_search_first_content_header_form_btn').click(function () {
    $('.box_birds_search_first_active_application').addClass('active');
    $('.box_birds_search_first_instruction').removeClass('active');
  })

  $('.box_birds_search_first_active_application_content_btn').click(function () {
    $('.box_birds_search_first_active_application').removeClass('active');
    $('.box_birds_search_first_application_content_title').removeClass('active');
    $('.box_birds_search_first_application_box').removeClass('active');
    $('.box_birds_search_first_card_product_box').addClass('active');
  })

  $('.box_birds_search_first_card_product_box_item_courier_parcel_size_item').click(function () {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
  })

  $('.box_birds_search_first_card_product_box_item_btn').click(function () {
    $(this).next().addClass('active');
    $(this).removeClass('active');
  })

  $('#sending-3').change(function () {
    var vibor = $(this).find(':selected').val();
    if (vibor == 'str1') {
      $('.box_birds_search_first_card_product_box1').addClass('active');
      $('.box_birds_search_first_card_product_box2').removeClass('active');
    } else if (vibor == 'str2') {
      $('.box_birds_search_first_card_product_box2').addClass('active');
      $('.box_birds_search_first_card_product_box1').removeClass('active');
    }
  });

  $('.box_birds_search_application_button').click(function () {
    $(this).prev().toggleClass('active');
    $(this).children('.btn_text1').toggleClass('active');
    $(this).children('.btn_text2').toggleClass('active');
  })

  $('.box_birds_search_application_tabs_btn1').click(function () {
    $(this).addClass('active');
    $('.box_birds_search_application_tabs_btn2').removeClass('active');
    $('.box_birds_search_application_wrap1').addClass('active');
    $('.box_birds_search_application_wrap2').removeClass('active');
  })

  $('.box_birds_search_application_tabs_btn2').click(function () {
    $(this).addClass('active');
    $('.box_birds_search_application_tabs_btn1').removeClass('active');
    $('.box_birds_search_application_wrap2').addClass('active');
    $('.box_birds_search_application_wrap1').removeClass('active');
  })

  $('.box_birds_search_application_tabs_btn3').click(function () {
    $(this).addClass('active');
    $('.box_birds_search_application_tabs_btn4').removeClass('active');
    $('.box_birds_search_application_wrap3').addClass('active');
    $('.box_birds_search_application_wrap4').removeClass('active');
  })

  $('.box_birds_search_application_tabs_btn4').click(function () {
    $(this).addClass('active');
    $('.box_birds_search_application_tabs_btn3').removeClass('active');
    $('.box_birds_search_application_wrap4').addClass('active');
    $('.box_birds_search_application_wrap3').removeClass('active');
  })

  $('.box_birds_search_application_tabs_btn5').click(function () {
    $(this).addClass('active');
    $('.box_birds_search_application_tabs_btn6').removeClass('active');
    $('.box_birds_search_application_wrap5').addClass('active');
    $('.box_birds_search_application_wrap6').removeClass('active');
  })

  $('.box_birds_search_application_tabs_btn6').click(function () {
    $(this).addClass('active');
    $('.box_birds_search_application_tabs_btn5').removeClass('active');
    $('.box_birds_search_application_wrap6').addClass('active');
    $('.box_birds_search_application_wrap5').removeClass('active');
  })

  $('.box_birds_search_first_card_product_box_item_courier_heart1').click(function () {
    $(this).removeClass('active');
    $(this).next().addClass('active');
  })
  $('.box_birds_search_first_card_product_box_item_courier_heart2').click(function () {
    $(this).removeClass('active');
    $(this).prev().addClass('active');
  })



  $('.box_birds_search_verification_btn').click(function () {
    $('.box_birds_search_verification').css('display', 'none');
    $('.box_birds_search_verification_box').addClass('active');
    $('.box_birds_search_verification_box_status_load_photo').addClass('active');
  })

  $('.box_birds_search_verification_box_status_load_btn').click(function () {
    $('.box_birds_search_verification_box_status_load_photo').removeClass('active');
    $('.box_birds_search_verification_box_status_load_selfie').addClass('active');
    $('.box_birds_search_verification_box_status_number2').addClass('active');
    $('.box_birds_search_verification_box_status_number1 img').addClass('active');
    $('.box_birds_search_verification_box_status_number1 span').removeClass('active');
  })

  $('.box_birds_search_verification_box_selfie_load_btn').click(function () {
    $('.box_birds_search_verification_box_status_number2 img').addClass('active');
    $('.box_birds_search_verification_box_status_number2 span').removeClass('active');
    $('.box_birds_search_verification_box').removeClass('active');
    $('.box_birds_search_verification_passed').addClass('active');
    $('.box_birds_search_content_tab5').css('display', 'none');
  })

  $('.box_birds_search_verification_passed_btn').click(function () {
    $('.box_birds_search_content_tab7').addClass('active');
    $('#tab7').css('display', 'block');
    $('#tab5').css('display', 'none');
    $(".box_birds_search_content_tab5").css('display', 'none');
    $(".verification-slick").addClass('disbl');
  })

  $('.box_birds_search_account_transactions_header_btn1').click(function () {
    $(this).addClass('active');
    $('.box_birds_search_account_transactions_header_btn2').removeClass('active');
    $('.box_birds_search_account_transactions_content_box1').addClass('active');
    $('.box_birds_search_account_transactions_content_box2').removeClass('active');
    $('.box_birds_search_account_transactions_balance1').addClass('active');
    $('.box_birds_search_account_transactions_balance2').removeClass('active');
  })

  $('.box_birds_search_account_transactions_header_btn2').click(function () {
    $(this).addClass('active');
    $('.box_birds_search_account_transactions_header_btn1').removeClass('active');
    $('.box_birds_search_account_transactions_content_box2').addClass('active');
    $('.box_birds_search_account_transactions_content_box1').removeClass('active');
    $('.box_birds_search_account_transactions_balance2').addClass('active');
    $('.box_birds_search_account_transactions_balance1').removeClass('active');
  })

  $("input[type='tel']").mask("+7 (999) 999 99 99");

  $('.box_birds_profile_header_right_verification_inputs_btn').click(function () {
    $(this).css('display', 'none');
    $(this).next().addClass('active');
  })

  $('body').on('click', '.box_birds_profile_header_right_verification_personal_info_input_eye', function () {
    if ($(this).prev().attr('type') == 'password') {
      $(this).addClass('active');
      $(this).prev().attr('type', 'text');
    } else {
      $(this).removeClass('active');
      $(this).prev().attr('type', 'password');
    }
    return false;
  });

  $('.box_birds_profile_header_left_btn').click(function () {
    $('.box_birds_profile_header_right_verification_status_wrap').removeClass('active');
    $('.box_birds_profile_header_right_verification_status_wrap_passed').addClass('active');
  })

});

let inputs = document.querySelectorAll('.box_birds_search_verification_box_status_load_photo_loader');
Array.prototype.forEach.call(inputs, function (input) {
  let label = input.nextElementSibling,
    labelVal = document.querySelector('.box_birds_search_verification_box_status_load_photo_txt').innerText;

  input.addEventListener('change', function (e) {
    let countFiles = '';
    if (this.files && this.files.length >= 1)
      countFiles = this.files.length;

    if (countFiles)
      document.querySelector('.box_birds_search_verification_box_status_load_photo_txt').innerText = 'Выбрано файлов: ' + countFiles;
    else
      document.querySelector('.box_birds_search_verification_box_status_load_photo_txt').innerText = labelVal;
  });
});


