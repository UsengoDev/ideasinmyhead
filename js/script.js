// On page load, apply theme according to session storage
$(function() {    
    const path = window.location.pathname;

    if (path === '/' || path.endsWith('index.html')) {
      // homepage
      $('.header').load('header.html');
      $('.footer').load('footer.html');
    } else {
      // subfolder or other page
      $('.header').load('../header.html');
      $('.footer').load('../footer.html');
    }

});