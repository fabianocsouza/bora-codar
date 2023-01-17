var btn_360 = document.querySelector('.btn-360')

let count = true

btn_360.addEventListener('click', () => {
  if (count) {
    btn = document.querySelector('.img-btn').src = '/assets/exit.svg'
    btn
    document.querySelector('.sofa').src = '/assets/sofa02.gif'
    count = false
  } else {
    document.querySelector('.img-btn').src = '/assets/360.svg'
    document.querySelector('.sofa').src = '/assets/sofa01.svg'
    count = true
  }
})
