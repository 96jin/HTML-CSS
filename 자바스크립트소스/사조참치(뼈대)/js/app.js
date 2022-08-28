$(document).ready(function(){
  scroll_header()
})

function scroll_header(){
  // 스크롤 이벤트 적용
  // 스크롤 탑 높이가 얼마>
  // 분리, 다시 원상복귀
  $(window).scroll(function(){
    // console.log('scroll!')
    var sc_top = $(this).scrollTop()
    // console.log(sc_top)
    if(sc_top>=467){
      $('header').addClass('fixed')
    }
    else{
      $('header').removeClass('fixed')
    }
  })
}