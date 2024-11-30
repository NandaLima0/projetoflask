const curtirBtn = document.getElementById('curtirBtn');
const statusCurtir = document.getElementById('statusCurtir');


if (localStorage.getItem('curtido') === 'true') {
    curtirBtn.classList.add('curtido');
    statusCurtir.textContent = 'Você curtiu!';
}
else{
    statusCurtir.textContent = 'Você não curtiu ainda.';
        localStorage.setItem('curtido', 'false');
}


curtirBtn.addEventListener('click', () => {
    const curtido = curtirBtn.classList.contains('curtido');
    
    if (curtido) {
        curtirBtn.classList.remove('curtido');
        statusCurtir.textContent = 'Você não curtiu ainda.';
        localStorage.setItem('curtido', 'false');
    } else {
        curtirBtn.classList.add('curtido');
        statusCurtir.textContent = 'Você curtiu!';
        localStorage.setItem('curtido', 'true');
    }
});