$(document).ready(function(){
  menu()
  slide()
  advanced_tab()
  popup()
})

function menu(){
  // gnb 메뉴에 접근
  $('.gnb>li').hover(
    function(){
      // 마우스 들어오면
      $('.lnb').stop().slideDown(300)
    },
    function(){
      // 마우스 나가면
      $('.lnb').stop().slideUp(300)
    }
  )
}

function slide(){ // 슬라이드 시작
  setInterval(slideMove,3000)  
  // 3초마다 실제로 animate
}
var slide_i = 0
function slideMove(){
  // animate 실행
  if(slide_i>=2){
    $('#slide_contents').animate({'top':'0px'},400)
    slide_i=0  
    return
  }
  $('#slide_contents').animate({'top':'-=300px'},400)
  slide_i++
}

function tab(){
  // 앵커중에 0번쨰 - 공지사항 버튼
  $('.tab_btn>a').eq(0).click(function(){
    $('.tab_contents>div').eq(1).hide() // 갤러리 컨텐츠 숨김
    $('.tab_contents>div').eq(0).show()
  })
  // 앵커중에 1번쨰 - 갤러리 버튼
  $('.tab_btn>a').eq(1).click(function(){
    $('.tab_contents>div').eq(0).hide()
    $('.tab_contents>div').eq(1).show()

  })
}

function advanced_tab(){
  $('tab_btn>a').click(function(){
    // 앵커만 클릭하면~ 반응
    // 안에서 몇뻔째 앵커인가
    var index = $(this).index()
    alert(index)
    // 지금 이벤트가 일어난 곳의 index번호
    // (앵커에서 클릭 이벤트가 일어났으니까 앵커번호가 알아서 들어옴)
    // 보여줄 것이 탭 컨텐츠 밑에있는 div 번호
    $('.tab_contents>div').hide()
    // 탭 컨텐츠 하위 영역에 있는 div 모두 숨기고
    $('.tab_contents>div').eq(index).show() 
    //내가 보여줄 그 탭 컨텐츠 밑의 div번호만 보여준다.
  })
}

function popup(){
  // 공지사항 첫번째 글을 클릭하면 팝업창 뜨게
  $('.pop').click(function(){
    $('#popup').show()
  })
  $('#closeBtn').click(function(){
    $('#popup').hide()
  })
}