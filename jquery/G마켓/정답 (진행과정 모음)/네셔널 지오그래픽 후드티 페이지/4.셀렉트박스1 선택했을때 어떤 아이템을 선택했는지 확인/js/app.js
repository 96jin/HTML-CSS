$(document).ready(function(){
    init_select();
    firstSelectBoxChanged();
});


function init_select(){
    $('#select2').attr('disabled', 'true');
}

function firstSelectBoxChanged(){
    $('#select1').change(function(){
        alert("select box1 changed!");

        var idx=$("#select1 option").index($("#select1 option:selected"));
        alert(idx+"번째 선택");

    })
}

