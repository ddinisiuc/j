window.onload = function () {
    let servicesText = document.querySelectorAll('.services-text')[0];
    let button = document.querySelectorAll('.button');
    let overlayButton = document.querySelectorAll('#close');
    let overlay = document.querySelectorAll('.overlay');
    let menu = document.getElementsByClassName('menu-hidden')[0];
    let menuButton = document.getElementsByClassName('lines')[0];

    let j = 0;

    for (let j = 0; j < overlayButton.length; j++) {
        overlay[j].style.zIndex = "-1";
        overlayButton[j].addEventListener('click', function () {


            overlay[j].style.opacity = "0";
            overlay[j].style.zIndex = "-1";

            overlay[j].style.transition = "all 2s";



        });

    }


    for (let i = 0; i < button.length; i++) {

        button[i].addEventListener('click', function () {

            console.log(button[i]);
            for (let j = 0; j < overlay.length; j++) {

                overlay[i].style.opacity = "1";

                overlay[i].style.zIndex = "2";

                overlay[i].style.transition = "all 1s";
                overlay[i].style.display = "block";
                console.log(overlay[j]);
            }
        });

    }

    menuButton.addEventListener('click', function(){
        
        menu.classList.toggle('active');
        
    });

};