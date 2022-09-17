$(document).ready(function(){
  loginMaintain()
  closeNotice()
  selecLang()
  randImg()
})


let flagMaintain = true
function loginMaintain(){
  // login_off -> login_on
  $('.login_check').click(function(){
    if(flagMaintain){
      $('.login_check>span').removeClass('login_on')
      $('.login_check>span').addClass('login_off')
      flagMaintain = false
    }
    else{
      $('.login_check>span').removeClass('login_off')
      $('.login_check>span').addClass('login_on')
      flagMaintain = true
    }
  })
}

function closeNotice(){
  $('div>img').click(function(){
    $('.safe_notice').hide()
    $('.tri').hide()
  })
}

function selecLang(){
  $('.lang>select').change(function(){
    let lang = $('.lang>select').val()
    if(lang === '한국어'){
      $('.input_box>#id').attr('placeholder','아이디')
      $('.input_box>#pw').attr('placeholder','비밀번호')
      $('#login').attr('value','로그인')
      $('.more_easy>h1').text('더욱 간편한 로그인')
      $('.login_check>label').text('로그인 상태 유지')
    }
    else if(lang === 'English'){
      $('.input_box>#id').attr('placeholder','ID')
      $('.input_box>#pw').attr('placeholder','PASSWORD')
      $('#login').val('Sign in')  // val() 로 지정해줘도 된다.
      $('.more_easy>h1').text('More Easier Sign in')
      $('.login_check>label').text('Stay Signed in')
    }
    else if(lang === '中文(简体)'){
      $('.input_box>#id').attr('placeholder','중국어 아이디1')
      $('.input_box>#pw').attr('placeholder','중국어 비밀번호1')
      $('#login').attr('value','Sign in')
      $('.more_easy>h1').text('More Easier Sign in')
      $('.login_check>label').text('Stay Signed in')
    }
    else if(lang === '中文(台灣)'){
      $('.input_box>#id').attr('placeholder','중국어 아이디2')
      $('.input_box>#pw').attr('placeholder','중국어 비밀번호2')
      $('#login').attr('value','Sign in')
      $('.more_easy>h1').text('More Easier Sign in')
      $('.login_check>label').text('Stay Signed in')
    }
    loginTab(lang)
  })
}

let imgList = ['./images/whale.png','./images/pay_point.png','./images/security_login.png']
function randImg(){
  let randIdx = Math.floor(Math.random() * imgList.length)
  $('.whale_wrap>img').attr('src',imgList[randIdx])
}

function loginTab(lang){
  if(lang === '한국어'){
    $('.other_country').hide()
    $('.button_area').show()
    $('.safe_notice').show()
    $('.tri').show()
    $('.whale_wrap').show()
  }
  else{
    $('.button_area').hide()
    $('.whale_wrap').hide()
    $('.safe_notice').hide()
    $('.tri').hide()
    $('.other_country').show()
  }
}