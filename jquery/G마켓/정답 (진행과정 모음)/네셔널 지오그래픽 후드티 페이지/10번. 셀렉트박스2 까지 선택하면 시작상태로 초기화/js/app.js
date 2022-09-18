
var select1Index=0;
var select2Index=0;

var select1Menu=[
    '',
    '002)위카플리스 후드티 BR',
    '003)위카플리스 후드티 CB',
]

var select2Menu=[
    ['',''],
    ['BRICK 090 ◈144346560◈(-59000원)','BRICK 090 ◈144346561◈(-59000원)'],
    ['CARBON BLACK 095 ◈144346567◈(-59000원)','CARBON BLACK 100 ◈144346568◈(-59000원)'],
]

$(document).ready(function(){
    initSelectBox();
    firstSelectBoxChanged();
    secondSelectBoxChanged();
});


function initSelectBox(){
    
    $('#select2').attr('disabled', true);//셀렉트박스 2번 비활성화
}

function refreshSelectBox(){
    $('#select2').empty();//내용 비우기
    $("#select2").append('<option>사이즈</option>');//사이즈 옵션 추가
    $('#select2').attr('disabled', true);//셀렉트박스 2번 비활성화

    $("#select1 option:eq(0)").prop("selected", true); //첫번째 option 선택

}

function firstSelectBoxChanged(){
    $('#select1').change(function(){
        alert("select box1 changed!");

        var idx=$("#select1 option").index($("#select1 option:selected"));
        select1Index=idx;
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
        select2Index=idx;    
        alert(idx+"번째 선택");
        var select1Item=select1Menu[select1Index];
        var select2Item=select2Menu[select1Index][select2Index-1];
        var full_item_name=select1Item+"+"+select2Item;

        $('#buy-list').append('<div>'+full_item_name+'</div>');

        refreshSelectBox();
    })
}