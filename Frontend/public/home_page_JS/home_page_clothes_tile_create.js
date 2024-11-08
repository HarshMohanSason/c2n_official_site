
const products = [
    {
        name: "T-Shirt",
        image: "Images/C2NLogoWithName.webp",
        price: "$19.99"
    },
    {
        name: "Hoodie",
        image: "Images/C2NLogoWithName.webp",
        price: "$39.99"
    },
    {
        name: "Jeans",
        image: "Images/C2NLogoWithName.webp",
        price: "$29.99"
    },
    {
        name: "Cap",
        image: "Images/C2NLogoWithName.webp",
        price: "$14.99"
    }
];

// Function to create product cards
function createProductCard(product) {
    const container = document.createElement('div');
    container.style.border = '1px solid #ccc';
    container.style.borderRadius = '8px';
    container.style.width = '350px';
    container.style.height = '500px';
    container.style.textAlign = 'center';
    container.style.padding = '20px';
    container.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';

    const img = document.createElement('img');
    img.src = product.image;
    img.alt = product.name;
    img.style.width = '100%'; // Makes image responsive
    img.style.borderRadius = '8px 8px 0 0'; // Rounds the top corners

    const title = document.createElement('h3');
    title.textContent = product.name;

    const price = document.createElement('p');
    price.textContent = product.price;

    container.appendChild(img);
    container.appendChild(title);
    container.appendChild(price);

    return container;
}

function renderProducts() {
    const productContainer = document.getElementById('home-page-product-container');

    products.forEach(product => {
        const productCard = createProductCard(product);
        productContainer.appendChild(productCard);
    });
}

renderProducts();