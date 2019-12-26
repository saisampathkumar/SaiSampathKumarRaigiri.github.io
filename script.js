const header = document.querySelector('.main-header');

var mybutton = document.getElementById("myBtn");

window.addEventListener('scroll', ()=>{
    const scrollPos = window.scrollY;
    if(scrollPos >5){
        header.classList.add('scrolled');
        mybutton.style.display = "block";
    }else{
        header.classList.remove('scrolled');
        mybutton.style.display = "none";
    }
});

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }