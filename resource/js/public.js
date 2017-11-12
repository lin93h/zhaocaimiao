$(function () {
  //右侧二维码
  $('.fixed_qrcode .qr_box').hover(
    function () {
      $(this).addClass('qr_active')
    },
    function () {
      $(this).removeClass('qr_active')
    }
  )
})