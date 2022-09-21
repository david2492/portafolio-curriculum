function toggleMenu() {
    const menu = document.getElementById('main-menu');
    menu.classList.toggle('hidden');
}


const btnSwitch = document.querySelector('#switch');
btnSwitch.addEventListener('click', () =>{
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
});


