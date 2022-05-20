window.addEventListener('DOMContentLoaded',function (){
    window.addEventListener('scroll',function (){
        const header = document.querySelector('header');
        header.classList.toggle('sticky',window.scrollY > 0)
    })
   const menuBtn = document.querySelector('.menu-btn')
    const nav =document.querySelector('.nacvigation')
    menuBtn.addEventListener('click',() => {
        menuBtn.classList.toggle('active')
        nav.classList.toggle('active')
    })
    const scrollbtn = document.querySelector('.scrolltotop')
    window.addEventListener('scroll', () => {
        scrollbtn.classList.toggle('active', window.scrollY > 500)
    })
    scrollbtn.addEventListener('click',
        () => {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        })
    window.addEventListener('scroll',() =>{
        let reveals = document.querySelectorAll('.reveal')
        for(let i = 0; i < reveals.length; i++){
            let windowHeight = window.innerHeight;
            let revealTop = reveals[i].getBoundingClientRect().top;
            let revealPoint = 50;

            if(revealTop < windowHeight - revealPoint){
                reveals[i].classList.add('active')
            }
        }
    })
})



