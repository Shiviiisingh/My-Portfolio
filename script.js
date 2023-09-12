function firstPageAnim() {
  var tl = gsap.timeline();

  tl.from(".header", {
    y: -10,
    opacity: 0,
    duration: 2,
    ease: Expo.easeInOut
  })

}

firstPageAnim();


    let prevScrollPos = window.pageYOffset;
    const header = document.querySelector('.header');
    let isAtTop = true;

    window.onscroll = () => {
        const currentScrollPos = window.pageYOffset;

        if (currentScrollPos > prevScrollPos) {
            // User is scrolling down
            header.style.backgroundColor = '#000';
            isAtTop = false;
        } else if (currentScrollPos === 0) {
            // User has reached the top
            header.style.backgroundColor = 'transparent';
            isAtTop = true;
        }

        prevScrollPos = currentScrollPos;
    };


    const menuIcon = document.getElementById("menu-icon");
        const closeIcon = document.getElementById("close-icon");
        const navbar = document.getElementById("navbar");

        menuIcon.addEventListener("click", () => {
            // Open the menu
            navbar.style.transform = "translateX(0)";
        });

        closeIcon.addEventListener("click", () => {
            // Close the menu
            navbar.style.transform = "translateX(-100%)";
        });