/*=================== Responsive Navigation Bar =================*/
let menuIcon = document.getElementById("menu-icon");
let menuList = document.getElementById("menu-list");
let selectMenu = document.querySelector(".nav-content");

menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("navbar-active");
});

menuIcon.onclick = () => {
    menuIcon.classList.toggle('nav-content');
    navbar.classList.toggle('active');
}

/*=================== Change Icon Menu Bar ===============*/
let changeIcon = function(icon){
    icon.classList.toggle('fa-times');
}



/*================= Scroll Section Active ================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('nav-content');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header navbar nav-content a[href*= ' + id + ']').classList.add('active');
            });
        };
    });

    /*====================== Sticky Navbar ==================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*====================== Remove Toggle Icon and Navbar ==================*/
    selectMenu.classList.remove('active');
};

/*====================== Scroll Effect Javascript ============================*/
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.konten-beranda, .sosial-media a, .konten-beranda a, .tentangsaya-konten, .beranda-img', { origin: 'top' });
ScrollReveal().reveal('.sosial-media, .konten-beranda h3, .konten-beranda h3, .tentangsaya-img, .portofolio-box img', { origin: 'bottom' });
ScrollReveal().reveal('.kemampuan-container .portofolio-container. portofolio-box img', { origin: 'left' });
ScrollReveal().reveal('.konten-beranda h1, .kemampuan-heading, .kemampuan-box, portofolio-box', { origin: 'right' });