$(document).ready(function(){
  popupcheck() // 호출(사용)
  closeBtn()
  chkCookie()
})

function chkCookie(){
  if($.cookie('popup_java') === 'ok'){
    // popup_java라는 이름의 쿠키의 값이 ok라면 == 쿠키가 존재하면?
    // 쿠키가 생성되어 유지되려면 서버가 존재해야한다. -> 닷홈에서 호스팅하자.
    $('#popup').hide()
  }
}

function popupcheck(){
  $('#pop-chk').click(function(){
    // alert('체크박스 클릭')
    // 쿠키 생성
    $.cookie('popup_java','ok',{
      expires:1/24/60,  // 단위는 day
      path:'/'
    })
    $('#popup').hide()
    // name, value,domain,expires...
    // name : 임의로 설정
    // value : ok (값 확인)
    // expires,path
    // -> 현재 경로에 7일뒤에 만료되는 쿠키를 생성하겠다.
  })
}

function closeBtn(){
  $('#close-btn').click(function(){
    // alert('창 닫기 버튼 클릭')
    $('#popup').hide()
  })
}