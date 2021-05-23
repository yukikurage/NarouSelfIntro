let count = 0

const countUp = () => {
    count++
    update()
}

const reset = () => {
    count = 0
    update()
}

const update = () => {
    const countElement = document.querySelector('#count')
    countElement.innerText = '回数: ' + count
}