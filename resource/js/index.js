$(function () {
    $('.mobile_nav').on('click', function () {
        $('.mobile_nav_list').slideToggle()
    })

    $('.page_content').on('click', function () {
        $('.mobile_nav_list').slideUp()
    })

    //平滑滚动锚点
    $('a[href*=#],area[href*=#]').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var $target = $(this.hash);
          $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
          if ($target.length) {
            var targetOffset = $target.offset().top;
            $('html,body').animate({
              scrollTop: targetOffset
            },
            1000);
            return false;
          }
        }
    });

    $.getJSON("./data/index.json", function(data) {
      console.log('本地json数据：',data)
    })
})