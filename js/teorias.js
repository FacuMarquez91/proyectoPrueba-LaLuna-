(function(){
    const titleTeorias = [...document.querySelectorAll('.teorias-title')];

    titleTeorias.forEach(teorias => {
        const answer = teorias.nextElementSibling;
        const image = teorias.querySelector('.teorias-img'); // Asegurarse de que el ícono esté dentro del elemento '.teorias-title'.

        // Inicialmente, ocultar los elementos al cargar la página
        answer.style.height = '0';
        image.classList.remove('teorias-arrow--rotate');

        teorias.addEventListener('click', () => {
            let height = 0;
            let addPadding = teorias.parentElement.parentElement;
            image.classList.toggle('teorias-arrow--rotate');

            if (answer.style.height === '0px') {
                height = answer.scrollHeight + 'px';
            }

            answer.style.height = height;
        });
    });
})();






