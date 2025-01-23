import './index.css'

const dropContainer = document.querySelectorAll(".drop.container")
const dropButton = document.querySelectorAll(".drop.button")

dropContainer.forEach(dc => {
    const button = dc.querySelector(".drop.button")
    const list = dc.querySelector(".drop.list")
    button.addEventListener('mouseenter',() => {
        list.classList.remove('invisible')
    })
    dc.addEventListener('mouseleave',() => {
        list.classList.add('invisible')
    })
})


dropButton.forEach(db => db.addEventListener(() => {

}))