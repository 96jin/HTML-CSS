$(document).ready(function(){
    init_select();
    firstSelectBoxChanged();
});


function init_select(){
    $('#select2').attr('disabled', true);
}

function firstSelectBoxChanged(){
    $('#select1').change(function(){
        alert("select box1 changed!");

        var idx=$("#select1 option").index($("#select1 option:selected"));
        alert(idx+"번째 선택");

        if(idx != 0){//0번째 아니면 셀렉트2 활성화
            $('#select2').attr('disabled', false);
            $("#select1>option").eq(0).hide();//0번째 옵션 숨기기
        }
        
    })
}

