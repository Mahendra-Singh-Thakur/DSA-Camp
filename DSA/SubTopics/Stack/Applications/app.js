let contentshow = document.querySelectorAll('.cont');

contentshow.forEach((c) => {
    c.addEventListener('click', (e) => {
        e.preventDefault();
        let paragraph = c.querySelector('p'); 
        if (paragraph.classList.contains('hide')) {
            paragraph.classList.remove('hide'); 
        } else {
            paragraph.classList.add('hide'); 
        }
    })
})