$(function() {
    /*获取本地json数据 */
    var service_data
    $.getJSON("../data/services.json", function(data) {
        service_data = data
        console.log('本地json数据：', service_data)
    })
    /*服务大类*/
    $('.cate_nav_item').mouseover(function(e) {
        $(this).addClass('active').siblings('.cate_nav_item').removeClass('active')
        var id = $(this).data('id')
        $('#item_box_'+id).addClass('item_box_active').siblings('.item_box').removeClass('item_box_active')
        $('#service_title').text(service_data[id]['name'])
        $('#service_desc_text').html(service_data[id]['content'])
    })

    /*具体业务*/
    $('.cate_list .cate_item').mouseover(function(e) {
        $(this).addClass('active').siblings('.cate_item').removeClass('active')
    })
    /*$('.cate_list .cate_item').click(function(e) {
        var num = $(this).data('number')
        $('#service_title').text(service_data[num]['name'])
        $('#service_desc_text').html(service_data[num]['content'])
        console.log(num)
        console.log(service_data[num])
    })*/

    /*移动端导航 */
    $('.mobile_nav').on('click', function () {
        $('.mobile_nav_list').slideToggle()
    })

    $('.page_content').on('click', function () {
        $('.mobile_nav_list').slideUp()
    })
})