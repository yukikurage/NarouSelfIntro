let count = 0
const countElement = document.querySelector('#count')

const countUp = () => {
    count++
    update()
}

const reset = () => {
    count = 0
    update()
}

const update = () => {
    countElement.innerText = '回数: ' + count
}