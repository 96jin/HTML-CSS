var select2Menu=[
    ['',''],
    ['BRICK 090 ◈144346560◈(-59000원)','BRICK 090 ◈144346560◈(-59000원)'],
    ['CARBON BLACK 095 ◈144346567◈(-59000원)','CARBON BLACK 100 ◈144346568◈(-59000원)'],
]

$(document).ready(function(){
    init_select();
    firstSelectBoxChanged();
    secondSelectBoxChanged();
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

            $('#select2').empty();//내용 비우기
            $("#select2").append('<option>사이즈</option>');
            for(var i=0; i<select2Menu[idx].length; i++){
                var option = $("<option>"+select2Menu[idx][i]+"</option>");
                $('#select2').append(option);
            }
        }
    })
}

function secondSelectBoxChanged(){
    $('#select2').change(function(){
        alert("select box2 changed!");
  
        var idx=$("#select2 option").index($("#select2 option:selected"));
        alert(idx+"번째 선택");
    })
}