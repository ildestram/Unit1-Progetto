function changeBg(){
    let orange = document.getElementById('navbar');
    let scrollValue = window.scrollY;
    if(scrollValue < 420){
        navbar.classList.remove('bgColor');
    } else {
        navbar.classList.add('bgColor');
    }
    
}

window.addEventListener('scroll', changeBg);