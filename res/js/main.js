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
            let header = selectEl("header .container");
            // let header = document.querySelector("header .container");

            //logo
            const img = createEl("img");

            img.className = element.logo.class;
            img.setAttribute("src", element.logo.link);
            img.setAttribute("alt", element.logo.alt);
            header.append(img);

            //nav
            const nav = createEl("nav");
            element.nav.forEach((element) => {
                const a = createEl("a");
                a.setAttribute("href", element.link);
                a.textContent = element.text;
                if (element.hasOwnProperty("id")) {
                    a.id = element.id;
                }

                nav.appendChild(a);
            });
            header.append(nav);

            //hero
            const hero = createEl("div");
            hero.className = element.hero.class;

            const h1 = createEl("h1");
            h1.innerHTML = element.hero.text;
            hero.appendChild(h1);

            element.hero.buttons.forEach((elem) => {
                const a = createEl("a");
                a.textContent = elem.text;
                a.setAttribute("href", elem.link);
                a.className = elem.class;

                hero.appendChild(a);
            });
            header.append(hero);
        }

        /* ===== FEATURES ===== */
        if (element.name == "features") {
            let features = selectEl(".section-features .container");
            // let features = document.querySelector(
            //     ".section-features .container"
            // );

            const h2 = createEl("h2");
            h2.innerHTML = element.h2;

            const p = createEl("p");
            p.className = element.p.class;
            p.innerHTML = element.p.text;

            features.append(h2);
            features.append(p);

            /* ===== CARDS ===== */
            const featuresBoxes = selectEl(
                ".section-features .container:nth-child(2)"
            );

            element.boxes.forEach((elem) => {
                const div = createEl("div");
                div.className = elem.class;

                const ion = createEl("ion-icon");
                ion.className = elem.ionicon.class;
                ion.setAttribute("name", elem.ionicon.name);
                div.appendChild(ion);

                const h3 = createEl("h3");
                h3.textContent = elem.h3;
                div.appendChild(h3);

                const p = createEl("p");
                p.textContent = elem.p;
                div.appendChild(p);

                featuresBoxes.append(div);
            });
        }

        /* ===== MEALS ===== */
        if (element.name == "meals") {
            let showCaseRow1 = selectEl(".section-meals .meals-showcase");
            let showCaseRow2 = selectEl(".section-meals .meals-showcase:nth-child(2)");

            let counter = 0
            element.images.forEach((elem) => {
                let li = createEl("li");
                let figure = createEl("figure");
                figure.className = element.figClass;
                let img = createEl("img");
                img.setAttribute("src", elem.src);
                img.setAttribute("alt", elem.alt);
                figure.append(img);
                li.appendChild(figure);

                counter++;
                if (counter <= 4) {
                    
                    showCaseRow1.append(li);
                } else {
                    showCaseRow2.append(li);
                }



            });

        }
    });
}

function selectEl(element) {
    return document.querySelector(element);
}

function createEl(element) {
    return document.createElement(element);
}
