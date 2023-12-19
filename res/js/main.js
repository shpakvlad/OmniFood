/************************************************/
/*                    SWIPER                    */
/************************************************/
const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
    autoplay: {
        delay: 4000,
    },
    pagination: true,
});

/************************************************/
/*                   CLASSES                    */
/************************************************/
const signUp = new UsersController(new UsersModel, new UsersView);
signUp.init();
