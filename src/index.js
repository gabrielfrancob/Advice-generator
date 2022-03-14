const button = document.querySelector('.change');
const adviceArea = document.querySelector('#advice');
const adiviceId = document.querySelector('#advice-id');
const url = 'https://api.adviceslip.com/advice';

fetch(url)
    .then(resp => resp.json())
    .then(data =>{
        adviceArea.innerText = `"${data.slip.advice}"`; 
        adiviceId.innerText = `Advice #${data.slip.id}`
    })

button.addEventListener('click', () =>{
    fetch(url)
    .then(resp => resp.json())
    .then(data =>{
        adviceArea.innerText = `"${data.slip.advice}"`; 
        adiviceId.innerText = `Advice #${data.slip.id}`
    })
})