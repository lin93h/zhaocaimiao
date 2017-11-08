$(function () {
    $('.mobile_nav').on('click', function () {
        $('.mobile_nav_list').slideToggle()
    })

    $('.page_content').on('click', function () {
        $('.mobile_nav_list').slideUp()
    })
})