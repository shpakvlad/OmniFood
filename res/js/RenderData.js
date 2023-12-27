class RenderData {
    constructor(dataArray) {
        this.dataArray = dataArray;
    }

    renderData(start, stop) {
        if (stop > this.dataArray.length) {
            stop = this.dataArray.length;
        }

        if (start < this.dataArray.length) {
            const cardList = document.querySelector("#products__cards");
            const divRow = document.createElement("div");
            divRow.className = "product__cards-row";
            divRow.classList.add("animate__animated");
            divRow.classList.add("animate__slideInUp");

            for (let index = start; index < stop; index++) {
                const element = this.dataArray[index];

                const div = document.createElement("div");
                div.className = "product__card";
                const h3 = document.createElement("h3");
                h3.textContent = element.header;
                div.appendChild(h3);

                const p = document.createElement("p");
                p.textContent = element.descr;
                div.appendChild(p);

                divRow.append(div);
            }
            cardList.append(divRow);
        }
    }
}