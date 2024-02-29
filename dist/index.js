const button = document.getElementById("button")

async function getData() {
    try {
        const response = await fetch("https://api.adviceslip.com/advice")
        const data = await response.json()
        document.getElementById("advice").innerHTML = "'" + data.slip.advice + "'"
        document.getElementById("advice_id").innerHTML = "ADVICE #" + data.slip.id
        if (response.status !== 200) {
            console.log('error', data.status)
        }
    }
    catch(error) {
        console.log('couldnt fetch', error)
    }
}

getData()

function getAdvice() {
    getData()
}

