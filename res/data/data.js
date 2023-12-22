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
];
