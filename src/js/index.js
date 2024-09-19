const rateButtons = document.querySelectorAll('.rate-buttons button')
const form = document.querySelector('#form')
const cardOne = document.querySelector('.card-one')
const cardTwo = document.querySelector('.card-two')
const rating = document.querySelector('.selected-rating')


// SUBMIT BUTTON

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const selectedOption = document.querySelector('.selected')
    const selectedNumber = selectedOption.textContent
    if (!selectedOption) return
    activeCards()
    rating.textContent = `You selected ${selectedNumber} out of 5`
})

function activeCards() {
    cardOne.classList.add('non-active')
    cardTwo.classList.remove('non-active')
}



// RATE BUTTONS

rateButtons.forEach((button) => {
    button.addEventListener('click',
        () => {
            const selectedBtn = document.querySelector('.selected')

            if (selectedBtn) removeSelected()
            button.classList.add('selected')
        })
})

function removeSelected() {
    rateButtons.forEach((button) => {
        button.classList.remove('selected')
    })
}