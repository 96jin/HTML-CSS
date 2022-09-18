
var select1Index=0;
var select2Index=0;
var totalPrice=0;
var btnIdx=0;

var select1Menu=[
    '',
    '002)위카플리스 후드티 BR',
    '003)위카플리스 후드티 CB',
]
/*
var select2Menu=[
    ['',''],
    ['BRICK 090 ◈144346560◈(-59000원)','BRICK 090 ◈144346561◈(-59000원)'],
    ['CARBON BLACK 095 ◈144346567◈(-59000원)','CARBON BLACK 100 ◈144346568◈(-59000원)'],
]
*/
var select2Menu=[
    ['',''],

    [
        {name:'BRICK 090 ◈144346560◈(-59000원)',price:36200},
        {name:'BRICK 090 ◈144346561◈(-59000원)',price:36300}
    ],

    [
        {name:'CARBON BLACK 095 ◈144346567◈(-59000원)',price:36400},
        {name:'CARBON BLACK 100 ◈144346568◈(-59000원)',price:36500}
    ],
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
                var option = $("<option>"+select2Menu[idx][i].name+"</option>");
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
        var select2Item=select2Menu[select1Index][select2Index-1].name;
        var itemPrice=select2Menu[select1Index][select2Index-1].price;
        var full_item_name=select1Item+"+"+select2Item;
        
        addBuyItem(full_item_name,itemPrice);

        itemDesign();
        calTotalPrice(itemPrice);
        refreshSelectBox();
    })
}

function addBuyItem(full_item_name,itemPrice){
    btnIdx++;
    $('#buy-list').append('<div id="item">'+
        '<div id="item-name">'+full_item_name+'</div>'+
        '<div id="item-price">'+itemPrice+"원"+'</div>'+
        '<button id="delBtn'+btnIdx+'"'+'>삭제</button>'
        +'</div>');
    delItem(btnIdx);
}

function delItem(btnIdx){
    $("#delBtn"+btnIdx).click(function(){
        alert("delBtn!");
        alert($(this).parent().html());
        //alert($(this).parent().empty());
        alert($(this).parent().remove());
        var priceInfo=$(this).parent().find("#item-price").text();
        alert(priceInfo);
        var curTotalPrice=$('#total-price>span').text();
        curTotalPrice -= priceInfo;
        $('#total-price>span').text(curTotalPrice);
    });
}


function itemDesign(){
    $("#buy-list>#item>#item-name").css({
        "background-color":"aqua"
    });
    $("#buy-list>#item>#item-price").css({
        "background-color":"indigo"
    });
}

function calTotalPrice(itemPrice){
    totalPrice += itemPrice;
    $("#total-price>span").empty();
    $("#total-price").append('<span>'+totalPrice+'</span>')
}