const counter = document.getElementById('counter')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
let count= 0

function updateCounter() {
    counter.textContent = 'Counter:' + count
}

plusBtn.onclick = function () {
    count++
    updateCounter()
}
minusBtn.onclick = function () {
    if (count > 0) {
        count--
        updateCounter()
    } else {
        counter.textContent = "Number can't be less than 0"
    }
}

updateCounter()
