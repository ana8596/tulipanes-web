window.onload = function() {
    const tulipanesContainer = document.querySelector('.tulipanes');
    const tulipanImg = 'https://i.pinimg.com/736x/80/e0/08/80e008170ffd0622cb10ffad831db7bc.jpg'; // 

    // Crea 5 tulipanes y los agrega al contenedor
    for (let i = 0; i < 20; i++) {
        const tulipan = document.createElement('img');
        tulipan.src = tulipanImg;
        tulipan.classList.add('tulipan');
        tulipan.style.left = `${Math.random() * 100}%`; // Posición horizontal aleatoria
        tulipan.style.top = `${Math.random() * 400}px`; // Posición vertical aleatoria
        tulipanesContainer.appendChild(tulipan);
    }
};

