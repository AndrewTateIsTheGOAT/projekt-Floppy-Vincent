const counter = document.getElementById('counter');
let count = 0;

counter.addEventListener('mousedown', counting)
counter.addEventListener('contextmenu', menu)
let klass = 0;

function counting(event){
    if(event.button === 0){
    document.body.className = "";
    count++;
    document.body.classList.add("J" + Math.floor(Math.random() * 10));
    }else if(event.button === 2){
    document.body.className = "";
    count--;
    document.body.classList.add("J" + Math.random(1,11));
    }
    counter.textContent = count;
    console.log(event)
};

function menu(event){
    event.preventDefault()
}