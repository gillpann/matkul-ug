/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// Loading
document.addEventListener("DOMContentLoaded", function () {
    const lihatMateriBtns = document.querySelectorAll(".lihatMateriBtn");
    const kembaliBtn = document.querySelector(".btn-back");
    const loadingOverlay = document.getElementById("loading-overlay");

    loadingOverlay.style.display = "block";
    setTimeout(function () {
        loadingOverlay.style.display = "none";
    }, 1000);

    lihatMateriBtns.forEach(function (btn) {
        btn.addEventListener("click", function (event) {
            event.preventDefault(); 

        loadingOverlay.style.display = "block";

        setTimeout(function () {
            window.location.href = btn.getAttribute("href");
        }, 1000);
        });
    });

    if (kembaliBtn) {
        kembaliBtn.addEventListener("click", function (event) {
            event.preventDefault();

        loadingOverlay.style.display = "block";

        setTimeout(function () {
            window.location.href = kembaliBtn.getAttribute("href");
        }, 1000);
        });
    }
});


// back to top
document.addEventListener("DOMContentLoaded", function () {
    const backToTopBtn = document.getElementById("back-to-top");

    if (!document.body.classList.contains("home")) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 100) {
            backToTopBtn.style.display = "block";
            } else {
                backToTopBtn.style.display = "none";
                }
        });
    }


    backToTopBtn.addEventListener("click", function (event) {
        event.preventDefault();

    backToTopBtn.classList.add("animate__animated", "animate__bounce");

    
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });

    
    setTimeout(function () {
        backToTopBtn.classList.remove("animate__animated", "animate__bounce");
    }, 1000); 
    });
});