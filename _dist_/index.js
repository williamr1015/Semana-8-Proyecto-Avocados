/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseUrl = "https://platzi-avo.vercel.app";

const appNode = document.querySelector('#container');
appNode.addEventListener('click', (event) => {
    if (event.target.nodeName === "H2") {
        window.alert(`hola has seleccionado el ${item.name}`)
    }
})
const formatPrice = (price) => {
        const newPrice = new window.Intl.NumberFormat("en-EN", {
            style: "currency",
            currency: "USD",
        }).format(price);
        return newPrice;
    }
    //web api
window.fetch(`${baseUrl}/api/avo`)
    .then((respuesta) => respuesta.json())
    .then((responseJson) => {
        const todosLosItems = [];
        responseJson.data.forEach(item => {
            const imagen = document.createElement('img');
            imagen.src = `${baseUrl}${item.image}`;
            imagen.className = "image-container";
            const title = document.createElement("h2");
            title.textContent = item.name;
            title.className = "title-container";
            const description = document.createElement("h2");
            description.textContent = item.attributes.description;
            description.className = "description-container";
            const price = document.createElement('div');
            price.textContent = formatPrice(item.price);
            price.className = "price-container";
            const container = document.createElement('div');
            container.append(imagen, title, description, price);
            todosLosItems.push(container);
        });
        appNode.append(...todosLosItems);
    });