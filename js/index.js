$(document).ready(function(){
$(window).resize(function(){    // chỉ vào cái màn hình chúng ta dùng thuốc tính resize
    if($(document).width() <= 800){  // nếu cái width màn hình bây giờ mà lớn hơn 375 px 
       $('#site').removeClass('clearfix');
      }else{
       $("#site").addClass('clearfix');
      }
 });

 $(window).resize(function(){    // chỉ vào cái màn hình chúng ta dùng thuốc tính resize
   if($(document).width() <= 755){  // nếu cái width màn hình bây giờ mà lớn hơn 375 px 
      $('#site2').removeClass('clearfix');
     }else{
      $("#site2").addClass('clearfix');
     }
});

$(window).resize(function(){    // chỉ vào cái màn hình chúng ta dùng thuốc tính resize
   if($(document).width() > 755){  // nếu cái width màn hình bây giờ mà lớn hơn 375 px 
      $('#site2').removeClass('open-respon-menu');
   }
});

 $(window).width(function(){    // chỉ vào cái màn hình chúng ta dùng thuốc tính resize
    if($(document).width() <= 755){  // nếu cái width màn hình bây giờ mà lớn hơn 375 px 
       $('#site2').removeClass('clearfix');
      }else{
       $("#site2").addClass('clearfix');
      }
 });

 $("#icon-menu-respond").click(function(){  // khi click vào #icon thì no sẽ xổ cái menu ra kiểu toggle 
   $("#site2").toggleClass('open-respon-menu');
   return false;
 });
 $("#icon-close").click(function(){  // khi click vào #icon thì no sẽ xổ cái menu ra kiểu toggle 
   $("#site2").removeClass('open-respon-menu');
   return false;
 });
});
