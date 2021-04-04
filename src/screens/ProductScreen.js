import products from '../static/data/products/index.get.js';
import categories from '../static/data/categories/index.get.js';
const ProductScreen = {
    render: (categoryId) => {
        const filteredProducts = products.filter(product => product.category === categoryId);
        const productList = filteredProducts.length === 0 ? products : filteredProducts;
        return `
            <div class="product-screen-container">
                <ul class="product-categories">
                    ${categories.map(category => {
                        const activeClass = category.id === categoryId ? "active-product" : ""; 
                        return `
                            <li class="category-list ${activeClass}" id="${category.id}">
                                <a class="category-anchor-btn" href="products.html?categoryId=${category.id}">${category.name}</a>
                            </li>
                    `}).join('\n')}
                </ul>
                <ul class="product-card-container">
                    ${productList.map(product => {
                        return `
                        <li class="product-card">
                            <h3>${product.name}</h3>
                            <img src="..${product.imageURL}" alt="${product.name}" class="product-card-image"/>
                            <div>
                                <p class="product-description">${product.description}</p>
                                <span>MRP Rs.${product.price}</span>
                                <button class="button">Buy now</button>
                            </div>
                        </li>
                    `}).join('\n')}
                </ul>
            </div>
        `
    }
}

export default ProductScreen;