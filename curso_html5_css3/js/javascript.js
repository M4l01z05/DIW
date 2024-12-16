window.onload = () => {
    const chincheta1 = document.getElementById('chincheta1');
    const article1 = document.querySelector('article:nth-of-type(1)');
    const chincheta2 = document.getElementById('chincheta2');
    const chincheta3 = document.getElementById('chincheta3');
    const article3 = document.querySelector('article:nth-of-type(3)');
  
    // Animar la primera chincheta
    chincheta1.style.animation = 'mueveChincheta1 1s forwards';
  
    // Animar el primer artículo al finalizar la animación de la primera chincheta
    chincheta1.addEventListener('animationend', () => {
      article1.style.animation = 'animArticle1 0.5s forwards';
  
      // Animar la segunda chincheta al finalizar la animación del primer artículo
      article1.addEventListener('animationend', () => {
        chincheta2.style.animation = 'mueveChincheta2 1s forwards';
  
        // Animar la tercera chincheta al finalizar la animación de la segunda chincheta
        chincheta2.addEventListener('animationend', () => {
          chincheta3.style.animation = 'mueveChincheta3 1s forwards';
  
          // Animar el tercer artículo al finalizar la animación de la tercera chincheta
          chincheta3.addEventListener('animationend', () => {
            article3.style.animation = 'animArticle3 0.5s forwards';
          });
        });
      });
    });
  };
  