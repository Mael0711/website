const yesBtn = document.querySelector('#yesBtn')

yesBtn.addEventListener('click',function () {
    alert('Sabia que ibas a decir que si uwu')
})

const noBtn = document.querySelector('#noBtn')

noBtn.addEventListener('mouseover', function() {
    const randomX = parseInt(Math.random()*1000)
    const randomY = parseInt(Math.random()*1000)
    noBtn.style.setProperty('top', randomY+'%')
    noBtn.style.setProperty('left', randomX+'%')
    noBtn.style.setProperty('transform', `translate(-${randomX}%,-${randomY}%)`)
})