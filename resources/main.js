'use strict';

document.addEventListener("DOMContentLoaded", function(event) {
    const menuItems = document.getElementsByClassName("menu-item");

    for (let i = 0; i < menuItems.length; i++) {
        const menuItem = menuItems[i];
        //console.log(menuItem);
        menuItem.addEventListener('click', function() {
            //console.log(menuItem.dataset.content);
            switch (menuItem.dataset.content) {
                case 'orders-container':
                    changeLogo("./assets/logo-vip.png");
                    break;
                case 'reward-container':
                    changeLogo("./assets/logo-gold.png");
                    break;
                case 'account-container':
                    changeLogo("./assets/logo-elite.png"); 
                    break;
                case 'payment-container':
                    changeLogo("./assets/logo-member.png"); 
                    break;
                case 'sign-out-container':
                    changeLogo("./assets/logo-vip.png"); 
                    break;
            }

            for(let j = 0; j < menuItems.length; j++) {

                if(menuItems[j].classList.contains('selected')){
                    menuItems[j].classList.remove("selected");
                } else {
                    continue;
                }
            }
            menuItem.classList.add("selected");

            const dataContent = menuItem.dataset.content;
            const contentElements = document.getElementsByClassName("content");
         
            for(let k = 0; k < contentElements.length; k++) {
                if(contentElements[k].classList.contains('hidden')) {
                    continue;
                } else {
                    contentElements[k].classList.add("hidden");
                    //console.log(contentElements[k]);
                }
            }
            //console.log(menuItem.dataset.content);
            document.getElementById(dataContent).classList.remove("hidden");
        });
    }
});

function changeLogo (image) {
    let logoImage = document.getElementById('logo');
    logoImage.src = image;
    //console.log(logoImage);
}

