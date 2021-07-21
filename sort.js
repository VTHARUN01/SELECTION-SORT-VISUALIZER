const content = document.querySelector("#container")
const input = document.querySelector('input')
const reset = document.querySelector('#reset')
const slsSort = document.querySelector('#bubbleSort')
const array = []

input.addEventListener('input', () => {
    for (let i = 0; i < array.length; i++) {
        let spa = document.querySelector(`#span${i}`)
        spa.remove()
    }
})

input.addEventListener('click', () => {
    for (let i = 0; i < input.value; i++) {
        let span = document.createElement('span')
        span.id = `span${i}`;
        array[i] = random()
        span.style.border = `1px solid black`
        span.style.backgroundColor = `yellow`
        span.style.height = `${8 * array[i]}px`
        container.append(span)
        span.style.width = `${100 / input.value}%`

    }
})
slsSort.addEventListener('click', () => {
    wait()
})
function animation(i) {
    let a = i
    setTimeout(() => {


        for (let j = i + 1; j < input.value; j++) {
            if (array[a] < array[j]) {
                a = j;
            }
            let spanj = document.querySelector(`#span${j}`)
            spanj.style.backgroundColor = 'yellow'
        }
        let spani = document.querySelector(`#span${i}`)
        let spana = document.querySelector(`#span${a}`)
        spana.style.backgroundColor = 'red'
        spani.style.backgroundColor = `green`

        let temp = array[a];
        array[a] = array[i];
        array[i] = temp;
        let temp1 = spana.style.height;
        spana.style.height = spani.style.height;
        spani.style.height = temp1;

    }, 250 * (i + 1))

}

function random() {
    return Math.floor(Math.random() * 50) + 1
}
async function wait() {
    for (let i = 0; i < array.length; i++) {
        await animation(i)
    }
}