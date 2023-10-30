/************************************************/
/*                    SCROLL                    */
/************************************************/
let lastKnowPos = 0;

document.addEventListener("scroll", (event) => {
    lastKnowPos = window.scrollY;

    if (lastKnowPos > 100) {
        console.log(lastKnowPos);
    }
})