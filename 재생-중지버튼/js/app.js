
$(document).ready(function(){
    toggleBtn()//호출
})

function toggleBtn(){
    $("#my-btn").click(function(){
        //클릭했을때 실행할 기능
        var result = $('#my-btn').hasClass('play')
        if(result){     // play class가 존재함
            $('#my-btn').removeClass('play')
            $('#my-btn').addClass('pause')
        }
        else{
            $('#my-btn').removeClass('pause')
            $('#my-btn').addClass('play')
        }
    })
}