(function(){
    const openbutton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const closedmenu = document.querySelector('.nav__close')

    openbutton.addEventListener('click', ()=>{
        menu.classList.add('nav__link--show');
    });

    closedmenu.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
    });


})();