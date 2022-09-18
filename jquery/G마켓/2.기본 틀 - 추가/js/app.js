$(document).ready(function(){
  initSelect()
  firstSelectBoxChanged()
  secondSelectBoxChanged()
});


function initSelect(){
  $('#selectSize').attr('disabled',true)  // disbaled : 기능을 끈다.(비활성화)
}

let selectMenu = [
  [], // 빈 행 (색상에 해당하는 인덱스)
  ['BRICK 090 ◈144346560◈(-59000원)','BRICK 090 ◈144346561◈(-59000원)'],
  ['CARBON BLACK 095 ◈144346567◈(-59000원)','CARBON BLACK 100 ◈144346568◈(-59000원)']
]
// selectColor의 어떤 아이템을 선택하면 , 여기서 몇번째 아이템을~
// selectSize 의 option값으로 추가한다.

function firstSelectBoxChanged(){
  $('#selectColor').change(function(){
    let idx = $("#selectColor option").index($("#selectColor option:selected"))
    console.log(idx)
    
    if(idx>0){  // 제목 말고 항목을 선택했다면
      $("#selectColor>option").eq(0).hide()
      // 색상 항목을 지워도 인덱스는 그대로 남아있다.
      $('#selectSize').attr('disabled',false)

      $('#selectSize').empty();   // 내부를 싹 비워준다.
      let size = ("<option>사이즈</option>")
      $('#selectSize').append(size)
      for(let i = 0 ; i<selectMenu[idx].length; i++){
        let option = ("<option>"+selectMenu[idx][i]+"</option>")
        $('#selectSize').append(option)
      }
    }
  })
}

function secondSelectBoxChanged(){
  $('#selectSize').change(function(){
    let idx2 = $("#selectSize option").index($("#selectSize option:selected"))
    console.log('size'+ idx2)

    // let itemName = selectMenu[idx][idx2]
    let itemName = $('#selectSize').val()
    console.log(itemName)
    $('#buy-list').append('<div id="buy-item">'+itemName+'</div>')

    // 시작 상태로 초기화
    refreshBox()
  })
}

function refreshBox(){
  $('#selectSize').empty()
  $('#selectSize').attr('disabled',true)
  $('#selectSize').append('<option>사이즈</option>')
  $('#selectColor option:eq(0)').show() // 숨겨놨던 첫번쨰 옵션을 보이게한다.
  $('#selectColor option:eq(0)').prop('selected',true) // 직접 선택한 상태로 만들어줌
}
