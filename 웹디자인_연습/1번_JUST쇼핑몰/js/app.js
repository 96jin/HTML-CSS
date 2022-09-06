$(document).ready(function(){
  menu()
  tab()
  pop()
  popupchk()
  chkCookie() 
  slide()
})

function menu(){
  $('#gnb>li').hover(
    function(){
      let index = $(this).index()
      $('#gnb>li').eq(index).find('.lnb').stop().slideDown()
  },
    function(){
      let index = $(this).index()
      $('#gnb>li').eq(index).find('.lnb').stop().slideUp()
    }  
  )
  // $('#gnb li').eq(index).find('.lnb').stop().slideDown()
}

function tab(){
  $('#tab-btn>a').click(function(){
    var index = $(this).index()
    console.log(index)
    $('#tab-contents>div').hide()
    $('#tab-contents>div').eq(index).show()
  })
}

function pop(){
  $('#closeBtn').click(function(){
    $('#popup').hide()
  })
}

function chkCookie(){
  if($.cookie('popup')==='ok'){
    $('#popup').hide()
  }
}
function popupchk(){
  $('#popup').click(function(){
    $.cookie('popup','ok',{
      expires : 1/24/60,
      path:'/',
    })
    $('#popup').hide()
  })
  $('#not1').click(function(){
    $('#popup').show()
  })
}

function slide(){
  $('#slide-contents').bxSlider({
  auto:true,
  speed:500,
  mode:'horizontal',
  pause:2000,
})}