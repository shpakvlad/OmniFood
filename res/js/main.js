import { data } from "../data/data.js";

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
/*                     MVC                      */
/************************************************/
const signUp = new UsersController(new UsersModel(), new UsersView());
setData();
signUp.init();

/************************************************/
/*                     DATA                     */
/************************************************/
function setData() {
    data.forEach((element) => {
        if (element.name == "header") {
            /* ===== HEADER ===== */
            let header = document.querySelector("header .container");

            //logo
            const img = document.createElement("img");

            img.className = element.logo.class;
            img.setAttribute("src", element.logo.link);
            img.setAttribute("alt", element.logo.alt);
            header.append(img);

            //nav
            const nav = document.createElement("nav");
            element.nav.forEach((element) => {
                const a = document.createElement("a");
                a.setAttribute("href", element.link);
                a.textContent = element.text;
                if (element.hasOwnProperty("id")) {
                    a.id = element.id;
                }

                nav.appendChild(a);
            });
            header.append(nav);

            //hero
            const hero = document.createElement("div");
            hero.className = element.hero.class;

            const h1 = document.createElement("h1");
            h1.innerHTML = element.hero.text;
            hero.appendChild(h1);

            element.hero.buttons.forEach((element) => {
                const a = document.createElement("a");
                a.textContent = element.text;
                a.setAttribute("href", element.link);
                a.className = element.class;

                hero.appendChild(a);
            });
            header.append(hero);
        }

        /* ===== FEATURES ===== */
        if (element.name == "features") {
            let features = document.querySelector(
                ".section-features .container"
            );

            const h2 = document.createElement("h2");
            h2.innerHTML = element.h2;

            const p = document.createElement("p");
            p.className = element.p.class;
            p.innerHTML = element.p.text;

            features.append(h2);
            features.append(p);

            /* ===== CARDS ===== */
            const featuresBoxes = document.querySelector(
                ".section-features .container:nth-child(2)"
            );

            element.boxes.forEach((element) => {
                const div = document.createElement("div");
                div.className = element.class;

                const ion = document.createElement("ion-icon");
                ion.className = element.ionicon.class;
                ion.setAttribute("name", element.ionicon.name);
                div.appendChild(ion);

                const h3 = document.createElement("h3");
                h3.textContent = element.h3;
                div.appendChild(h3);

                const p = document.createElement("p");
                p.textContent = element.p;
                div.appendChild(p);

                featuresBoxes.append(div);
            });
        }
    });
}
