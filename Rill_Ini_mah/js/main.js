// main.js

// Komsep DOM manipulation sederhana

// getElemenbyid / query selector
// add event listener
// classlist toggle

//mengambil elemen dari htnml
const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');

navToggle.addEventListener('click', function(){
    siteNav.classList.toggle('is-open');// menambah tambah atau hapis class is open
});


//menutup nav kalau klil di luar
document.addEventListener('click', function(e){
    if (!navToggle.contains(e.target) && !siteNav.contains(e.target)) {
        siteNav.classList.remove('is-open');
    }
});

// Highlight nav link yang aktif sesaui halaman
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(function(link){
    if(linkPage === currentPage){
        link.classList.add('active');
    }else{
        link.classList.remove('active');
    }
});  