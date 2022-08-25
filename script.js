// Таймер
const minutes = document.querySelector('.Timer__minutes');
const seconds =  document.querySelector('.Timer__seconds');

// Для изменения времени менять только количество миллисекунд в конце
const timeToCount = new Date(Date.parse(new Date) + 60000*30);

function countdown(){
  let diff = timeToCount - new Date();
  let min = Math.floor(diff / 1000 / 60) % 60;
  let sec = Math.floor(diff / 1000) % 60;
  minutes.textContent =  min > 0 ? min : "0";
  seconds.textContent = sec > 0 ? sec : '0';
  if (diff<=0){
    clearInterval(setIntervalVar);
  }
}

countdown()
let setIntervalVar = setInterval(countdown, 1000)


// Подсказки для инпутов
const inputs = document.querySelectorAll('.Form input');

for (input of inputs){
  input.addEventListener('focus',(event)=>{event.target.previousElementSibling.style.visibility = 'visible'; console.log(input)})
  input.addEventListener('blur',(event)=>{event.target.previousElementSibling.style.visibility = 'hidden';})
}

