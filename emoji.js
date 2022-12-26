const fig = document.querySelectorAll('.far')
let stella = document.querySelectorAll('.fa-star')
stella.forEach((stellina, index) => {
  stellina.addEventListener('click', ()=> {
    updateRating(index)
  })
})
function  updateRating(index){
  stella.forEach((stellina, idx)=> {
if(idx < index + 1) {
  stellina.classList.add('active')
}else{
  stellina.classList.remove('active')
}

})
fig.forEach((figi) => {
  figi.style.transform = `translateX(-${index * 50}px)`
  })

}
