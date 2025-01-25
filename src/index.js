import './index.css'

document
    .querySelectorAll(".drop.list")
    .forEach(dl => {
        dl.classList.add('invisible')

        const dropContainer = document.createElement('div')
        dropContainer.classList.add('drop', 'container')

        const dropButton = document.createElement('button')
        dropButton.classList.add('drop', 'button')
        dropButton.textContent = '···'

        dropButton.addEventListener('click',() => {
            dl.classList.toggle('invisible')
        })

        dl.parentNode.insertBefore(dropContainer, dl)
        dropContainer.appendChild(dropButton)
        dropContainer.appendChild(dl)

    })

document
    .querySelectorAll(".carousel.container")
    .forEach(container => {
        let selected = 0
        
        const width = container
                        .attributes.getNamedItem('frame-width').value
        const height = container
                        .attributes.getNamedItem('frame-height').value

        const frame = document.createElement('div')
        frame.classList.add('carousel', 'frame')
        frame.style.width = width
        frame.style.height = height

        container.parentNode.insertBefore(frame, container)
        frame.appendChild(container)    
        
        const images = container
                        .querySelectorAll(".carousel.image")

        const control = document.createElement('div')
        control.classList.add('carousel', 'control')

        images.forEach((img,index) => {
            img.style.width = width
            img.style.height = height

            const button = document.createElement('button')
            button.classList.add('carousel', 'button')
            if (index === 0) button.classList.add('selected')
            button.addEventListener('click', (e) => {
                container.style.transform = `translate(${- index * width.match(/\d+/)}px, 0px)`
                e.currentTarget
                    .parentNode
                    .childNodes[selected]
                    .classList.remove('selected')
                e.currentTarget.classList.add('selected')
                selected = index
            })
            control.appendChild(button)        
        })

        const next = document.createElement('button')
        next.classList.add('carousel', 'button', 'next')
        next.textContent = '>'

        next.addEventListener('click', () => {
            const buttons = control.querySelectorAll(".carousel.button")
            const buttonToClick = selected === images.length - 1
                                    ? 0
                                    : selected + 1
            buttons[buttonToClick].click()
        })

        const prev = document.createElement('button')
        prev.classList.add('carousel', 'button', 'prev')
        prev.textContent = '<'

        prev.addEventListener('click', () => {
            const buttons = control.querySelectorAll(".carousel.button")
            const buttonToClick = selected === 0
                                    ? images.length - 1
                                    : selected - 1
            buttons[buttonToClick].click()
        })

        frame.appendChild(control)
        frame.appendChild(prev)
        frame.appendChild(next)

        setInterval(() => next.click(), 5000)

    })