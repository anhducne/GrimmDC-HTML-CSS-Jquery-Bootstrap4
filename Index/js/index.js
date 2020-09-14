$(document).ready(function () {
  $(window).resize(function () {    // chỉ vào cái màn hình chúng ta dùng thuốc tính resize
    if ($(document).width() <= 800) {  // nếu cái width màn hình bây giờ mà lớn hơn 375 px 
      $('#site').removeClass('clearfix');
    } else {
      $("#site").addClass('clearfix');
    }
  });

  $(window).resize(function () {    // chỉ vào cái màn hình chúng ta dùng thuốc tính resize
    if ($(document).width() <= 755) {  // nếu cái width màn hình bây giờ mà lớn hơn 375 px 
      $('#site2').removeClass('clearfix');
    } else {
      $("#site2").addClass('clearfix');
    }
  });

  $(window).resize(function () {    // chỉ vào cái màn hình chúng ta dùng thuốc tính resize
    if ($(document).width() > 755) {  // nếu cái width màn hình bây giờ mà lớn hơn 375 px 
      $('#site2').removeClass('open-respon-menu');
    }
  });

  $(window).width(function () {    // chỉ vào cái màn hình chúng ta dùng thuốc tính resize
    if ($(document).width() <= 755) {  // nếu cái width màn hình bây giờ mà lớn hơn 375 px 
      $('#site2').removeClass('clearfix');
    } else {
      $("#site2").addClass('clearfix');
    }
  });

  $("#icon-menu-respond").click(function () {  // khi click vào #icon thì no sẽ xổ cái menu ra kiểu toggle 
    $("#site2").toggleClass('open-respon-menu');
    return false;
  });
  $("#icon-close").click(function () {  // khi click vào #icon thì no sẽ xổ cái menu ra kiểu toggle 
    $("#site2").removeClass('open-respon-menu');
    return false;
  });
});
// js modal account
$(document).ready(function () {
  var modal = $('.modal');
  var btn = $('.btn');

  btn.click(function () {
    modal.fadeIn();
    return false;
  });

  $(window).on('click', function (a) {
    if ($(a.target).is('.modal')) {
      modal.fadeOut();
    }
  });
});
// js modal product
$(document).ready(function () {
  var modal2 = $('.modal-2');
  var btn2 = $('.btn-2');

  btn2.click(function () {
    modal2.slideDown();
    return false;
  });

  $(window).on('click', function (b) {
    if ($(b.target).is('.modal-2')) {
      modal2.slideUp();
    }
  });
});
// js change img in modal 
$(document).ready(function () {
  $('.modal-content-list-left').hover(function () {
    var link_imgl;
    link_imgl = $('.modal-content-list-img img').attr("src", 'img/modal-product1.jpg');
  });
  $('.modal-content-list-center').hover(function () {
    var link_imgl;
    link_imgl = $('.modal-content-list-img img').attr("src", 'img/modal-product2.jpg');
  });
  $('.modal-content-list-right').hover(function () {
    var link_imgl;
    link_imgl = $('.modal-content-list-img img').attr("src", 'img/modal-product3.jpg');
  });
});

// js modal opensearch
$(document).ready(function () {
  var modal3 = $('.modal-3');
  var btn3 = $('.btn-3');

  btn3.click(function () {
    modal3.fadeIn();
    return false;
  });

  $(window).on('click', function (c) {
    if ($(c.target).is('.modal-3')) {
      modal3.fadeOut();
    }
  });
});
