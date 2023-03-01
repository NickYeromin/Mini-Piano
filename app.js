const bntDo = document.querySelector('#do')
const bntRe = document.querySelector('#re')
const bntMi = document.querySelector('#mi')
const bntFa = document.querySelector('#fa')
const bntSol = document.querySelector('#sol')
const bntLya = document.querySelector('#lya')
const btnRandom = document.querySelector('#random')
const bgBtnRandom = document.querySelector('#bgrandom')

const noteDo = document.querySelector('#noteDo')
const noteRe = document.querySelector('#noteRe')
const noteMi = document.querySelector('#noteMi')
const noteFa = document.querySelector('#noteFa')
const noteSol = document.querySelector('#noteSol')
const noteLya = document.querySelector('#noteLya')

const notes = [noteDo,noteRe,noteMi,noteFa,noteSol,noteLya]
const colors = [['#922B21','#C0392B'],['#AF601A','#F39C12'],['#B7950B','#F1C40F'],['#1E8449','#27AE60'],['#2874A6','#3498DB'],['#6C3483','#8E44AD']]

bntDo.addEventListener('click',() => {
    noteDo.play()
})
bntRe.addEventListener('click',() => {
    noteRe.play()
})
bntMi.addEventListener('click',() => {
    noteMi.play()
})
bntFa.addEventListener('click',() => {
    noteFa.play()
})
bntSol.addEventListener('click',() => {
    noteSol.play()
})
bntLya.addEventListener('click',() => {
    noteLya.play()
})
btnRandom.addEventListener('click',() => {
    notes[randomIndex(notes)].play()
    let color = randomIndex(colors)
    btnRandom.style.backgroundColor = colors[color][1]
    bgBtnRandom.style.backgroundColor = colors[color][0]
   
})

function randomIndex(array){
    return Math.round(Math.random()*array.length-1)
    
}