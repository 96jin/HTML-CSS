document.getElementById('btnAdd').addEventListener('click',addList)
document.getElementById('btnDelLast').addEventListener('click',removeLastList)
document.getElementById('DeleteSel').addEventListener('click',removeSelList)
document.getElementById('btnDelAll').addEventListener('click',removeAll)

// btnAdd에 클릭 이벤트를 설정, 클릭했을떄 실행되는 함수가 addList

const $write = document.getElementById('write')
$write.focus()

function addList(){
  const $listBody = document.getElementById('listBody')
  var newtr = document.createElement('tr')
  var newtd = document.createElement('td')
  var newtd2 = document.createElement('td')
  var newinput = document.createElement('input')
  newinput.setAttribute('type','checkbox')
  newinput.setAttribute('class','btn-chk')
  if(!$write.value.trim()){
    alert('입력하세요')
    return
  }
  newtd2.innerText =  $write.value
  newtd.appendChild(newinput)
  newtr.appendChild(newtd)
  newtr.appendChild(newtd2)
  $listBody.appendChild(newtr)
  $write.value = ''
  $write.focus()
}

function removeLastList(){
  const $listBody = document.getElementById('listBody')
  // var myCheck = document.getElementsByClassName('btn-chk')
  var children = $listBody.children.length
  if(children>0){
  $listBody.removeChild($listBody.lastElementChild)
  // $listBody.removeChild($listBody.children[myCheck.length-1])
  }
  else{
    return
  }
}

function removeSelList(){
  const $listBody = document.getElementById('listBody')
  var myCheck = document.getElementsByClassName('btn-chk')
  for(var i =0;i<myCheck.length;i++){
    if (myCheck[i].checked){
      $listBody.removeChild($listBody.children[i])
      if(i>=0){
        i--
      }
    }  
  }
}



function removeAll(){
  // $listBody.innerHTML =''    => 안의 HTML태그를 싹 지운다.
  const $listBody = document.getElementById('listBody')
  var myCheck = document.getElementsByClassName('btn-chk')
  for(var i =0;i<myCheck.length;i++){
      $listBody.removeChild($listBody.children[i])
      if(i>=0){
        i--
      
    }  
  }
}
/* 
var children = listBody.children.length
while(children!=0){
  children = listBody.children.length
  listBody.removeChild($listBody.children[children-1])
}
*/