$(document).ready(function(){
  menu()
  moveSlide()
  pop()
})

function menu(){
  $('.gnb>li').hover(
    function(){
      const index = $(this).index()
      $('.gnb>li').eq(index).find('.lnb').stop().slideDown(250)
    },
    function(){
      const index = $(this).index()
      $('.gnb>li').eq(index).find('.lnb').stop().slideUp(250)
    }
  )
}

let slideIdx = 0
function moveSlide(){
  setInterval(slide,3000)
}
function slide(){
  if(slideIdx >=2){
    slideIdx=0
    $('#slide_contents').stop().animate({'left':'0px'})
    return
  }
  $('#slide_contents').stop().animate({'left' : '-=1200px'})
  slideIdx ++
}

function pop(){
  $('#pop').click(function(){
    console.log(1)
    $('#popup').show()
  })
  $('#closeBtn').click(function(){
    $('#popup').hide()
  })
}