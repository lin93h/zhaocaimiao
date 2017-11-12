$(function () {
    $('.mobile_nav').on('click', function () {
        $('.mobile_nav_list').slideToggle()
    })

    $('.page_content').on('click', function () {
        $('.mobile_nav_list').slideUp()
    })

    

    

    $.getJSON("./data/index.json", function(data) {
      console.log('本地json数据：',data)
    })
})