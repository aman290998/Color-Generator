const btn = document.getElementById('btn');


const colCode =()=>{
    const randomCode = Math.floor(Math.random()*16777215).toString(16);
    const hexCode = "#" + randomCode;
    
    document.getElementById('cc').innerText = hexCode;
    document.getElementById('main').style.backgroundColor = hexCode;
}

btn.addEventListener('click', colCode)