const popup = document.createElement("div")
popup.classList.add("popup")
popup.innerHTML = 'Выберите интересующий Вас элемент (сноску)'
document.body.appendChild(popup)

const zones = document.querySelectorAll('.zone')
zones.forEach((el,n)=>{
    el.classList.add('hide')
    el.n = n
    el.addEventListener('click',ev=>{
        var n = ev.currentTarget.n
        var x = ev.clientX
        var y = ev.clientY
        showInfo(n, x, y)
    })
})

function getScreenWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
  }

const showInfo = (n,x,y)=>{
    const dx = dy = 10
    popup.innerHTML = DATA[n].n + '. ' + DATA[n].text

    if (x<getScreenWidth()/2){
        popup.style.left = x + dx + 'px'
        popup.style.top = y + dy + 'px'
    }
    else{
        popup.style.left = x + dx - popup.offsetWidth + 'px'
        popup.style.top = y + dy + 'px'
    }
}