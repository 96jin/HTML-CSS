$(document).ready(function(){
  auto_login()
  non_member()
  tab_menu()
})
let on = false
function auto_login(){
  // on, off
  // 자동 로그인 클릭하면
  $('.auto_check').click(function(){
    if(!on){
        let chkAutolog = confirm("공용PC에서 자동로그인은 위험할 수 있습니다.")
        if(chkAutolog){
          $('.auto_check>a>img').attr('src','./images/check_small_on.png')
          $('.auto_check').removeClass('off')
          $('.auto_check').addClass('on')
          on = true
          }
        }
    else{
        $('.auto_check>a>img').attr('src','./images/check_small_off.png')
        $('.auto_check').removeClass('on')
        $('.auto_check').addClass('off')
        on = false
      }
    })
}

function non_member(){
  
}

function tab_menu(){
  $('#tab_btn>a').click(function(event){
    event.preventDefault()
    let tabIdx = $(this).index()
    if(tabIdx===0){
      subIdx = 1
    }
    else{
      subIdx = 0
    }
    $('#tab_btn>a').eq(subIdx).css('color','#AAAA').css('backgroundColor','#F1F1F1')
    $('#tab_btn>a').eq(tabIdx).css('color','black').css('backgroundColor','white')
    $('#tab_contents>div').eq(subIdx).hide()
    $('#tab_contents>div').eq(tabIdx).show()
  })
}