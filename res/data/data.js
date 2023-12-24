/************************************************/
/*                    EXPORT                    */
/************************************************/
export const data = [
    {
        name: "header",
        logo: {
            link: "./res/img/logo/logo-white.png",
            class: "logo",
            alt: "Omnifood logo",
        },

        nav: [
            {
                text: "Food delivery",
                link: "#",
            },
            {
                text: "How it works",
                link: "#",
            },
            {
                text: "Our cities",
                link: "#",
            },
            {
                text: "Sign up",
                link: "#",
                id: "sign-up__btn",
            },
            {
                text: "Log in",
                link: "#",
                id: "log-in__btn",
            },
        ],

        hero: {
            class: "hero-text-box",
            text: "Goodbye junk food.<br />Hello super healthy meals.",
            buttons: [
                {
                    text: "I’m hungry",
                    link: "#",
                    class: "btn btn-full",
                },
                {
                    text: "Show me more",
                    link: "#",
                    class: "btn btn-ghost",
                },
            ],
        },
    },

    {
        name: "features",
        h2: "Get food fast &mdash; not fast food.",
        p: {
            class: "long-text",
            text: "Hello, we’re Omnifood, your new premium food delivery service. We know you’re always busy. No time for cooking. So let us take care of that, we’re really good at it, we promise!",
        },

        boxes: [
            {
                class: "box",
                ionicon: {
                    class: "icon-big",
                    name: "infinite",
                },

                h3: "Up to 365 days/year",
                p: "Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexibly if that’s your style.",
            },
            {
                class: "box",
                ionicon: {
                    class: "icon-big",
                    name: "stopwatch",
                },

                h3: "Ready in 20 minutes",
                p: "You're only twenty minutes away from your delicious and super healthy meals delivered right to your home. We work with the best chefs in each town to ensure that you're 100% happy.",
            },
            {
                class: "box",
                ionicon: {
                    class: "icon-big",
                    name: "leaf",
                },

                h3: "100% organic",
                p: "Nll our vegetables are fresh, organic and local. Animals are raised without added hormones or antibiotics. Good for your health, the environment, and it also tastes better!",
            },
            {
                class: "box",
                ionicon: {
                    class: "icon-big",
                    name: "card",
                },

                h3: "Order anything",
                p: "We don't limit your creativity, which means you can order whatever you feel like. You can also choose from our menu containing over 100 delicious meals. It's up to you!",
            },
        ],
    },

    {
        name: "meals",
        class: "meals-showcase",
        figClass: "meal-photo",

        images: [
            {
                src: "./res/img/bg/1.jpg",
                alt: "Korean bibimbap with egg and vegetables",
            },
            {
                src: "./res/img/bg/2.jpg",
                alt: "Simple italian pizza with cherry tomatoes",
            },
            {
                src: "./res/img/bg/3.jpg",
                alt: "Chicken breast steak with vegetables",
            },
            {
                src: "./res/img/bg/4.jpg",
                alt: "Autumn pumpkin soup",
            },
            {
                src: "./res/img/bg/5.jpg",
                alt: "Paleo beef steak with vegetables",
            },
            {
                src: "./res/img/bg/6.jpg",
                alt: "Healthy baguette with egg and vegetables",
            },
            {
                src: "./res/img/bg/7.jpg",
                alt: "Burger with cheddar and bacon",
            },
            {
                src: "./res/img/bg/8.jpg",
                alt: "Granola with cherries and strawberries",
            },
        ],
    },

    {
        name: "steps",
        h2: "HOW IT WORKS – SIMPLE AS 1, 2, 3",
        img: {
            class: "animate__animated animate__pulse animate__infinite animate__fast app-screen ",
            src: "./res/img/png/app-iPhone.png",
            alt: "Omni food app on iPhone",
        },
        steps: [
            {
                class: "works-step",
                number: "1",
                p: "Choose the subscription plan that best fits your needs and sign up today.",
            },
            {
                class: "works-step",
                number: "2",
                p: "Order your delicious meal using our mobile app or website. Or you can even call us!",
            },
            {
                class: "works-step",
                number: "3",
                p: "Enjoy your meal after less than 20 minutes. See you the next time!",
            },
        ],

        btnanel: {
            class: "loadbtn-panel",
            buttons: [
                {
                    link: "#",
                    class: "btn-app",
                    src: "./res/img/svg/download-app.svg",
                    alt: "App store button",
                },
                {
                    link: "#",
                    class: "btn-app",
                    src: "./res/img/png/download-app-android.png",
                    alt: "Android store button",
                },
            ],
        },
    },

    {
        name: "cities",
        h2: "We're currently in these cities",

        cities: {
            class: "box",
            boxes: [
                {
                    src: "./res/img/bg/lisbon-3.jpg",
                    alt: "Lisbon",
                    h3: "Lisbon",

                    features: {
                        class: "city-feature",
                        data: [
                            {
                                class: "icon-small hydrated",
                                name: "person",
                                text: "1600+ happy eaters",
                            },
                            {
                                class: "icon-small hydrated",
                                name: "star",
                                text: "60+ top chefs",
                            },
                            {
                                class: "icon-small hydrated",
                                name: "logo-twitter",
                                link: '<a href="#">@omnifood_lx</a>',
                            },
                        ],
                        // link: "#",
                        // linktext: "@omnifood_lx",
                    },
                },
                {
                    src: "./res/img/bg/san-francisco.jpg",
                    alt: "San francisco",
                    h3: "San Francisco",

                    features: {
                        class: "city-feature",
                        data: [
                            {
                                class: "icon-small hydrated",
                                name: "person",
                                text: "3700+ happy eaters",
                            },
                            {
                                class: "icon-small hydrated",
                                name: "star",
                                text: "160+ top chefs",
                            },
                            {
                                class: "icon-small hydrated",
                                name: "logo-twitter",
                                link: '<a href="#">@omnifood_sf</a>',
                            },
                        ],
                        // link: "#",
                        // linktext: "@omnifood_lx",
                    },
                },
                {
                    src: "./res/img/bg/berlin.jpg",
                    alt: "Berlin",
                    h3: "Berlin",

                    features: {
                        class: "city-feature",
                        data: [
                            {
                                class: "icon-small hydrated",
                                name: "person",
                                text: "2300+ happy eaters",
                            },
                            {
                                class: "icon-small hydrated",
                                name: "star",
                                text: "110+ top chefs",
                            },
                            {
                                class: "icon-small hydrated",
                                name: "logo-twitter",
                                link: '<a href="#">@omnifood_berlin</a>',
                            },
                        ],
                        // link: "#",
                        // linktext: "@omnifood_berlin",
                    },
                },
                {
                    src: "./res/img/bg/london.jpg",
                    alt: "London",
                    h3: "London",

                    features: {
                        class: "city-feature",
                        data: [
                            {
                                class: "icon-small hydrated",
                                name: "person",
                                text: "1200+ happy eaters",
                            },
                            {
                                class: "icon-small hydrated",
                                name: "star",
                                text: "50+ top chefs",
                            },
                            {
                                class: "icon-small hydrated",
                                name: "logo-twitter",
                                link: '<a href="#">@omnifood_london</a>',
                            },
                        ],
                        // link: "#",
                        // linktext: "@omnifood_london",
                    },
                },
            ],
        },
    },
];
