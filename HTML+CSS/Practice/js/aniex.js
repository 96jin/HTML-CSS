let $h1Text = document.querySelector('h1')

window.addEventListener('scroll', ()=>{
  let value = window.scrollY
  console.log(value)

  if (value>1000||value<450){
    $h1Text.style.animation="backSlide 1s ease-out forwards"
    // $h1Text.style.left='-100px'
    $h1Text.style.opacity=0
  }
  else{
    $h1Text.style.animation="slide 1s ease-out"
    // $h1Text.style.left='300px'
    $h1Text.style.opacity=1
  }
})