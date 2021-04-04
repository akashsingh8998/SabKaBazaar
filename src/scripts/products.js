import ProductScreen from '../screens/ProductScreen.js';
import { getHeaderAndFooter,getQueryParams } from '../appUtils/common.js';
const router = () => {
    getHeaderAndFooter();
    const main = document.getElementById("main-container");
    const categoryId = getQueryParams('categoryId');
    main.innerHTML = ProductScreen.render(categoryId);
}

window.addEventListener('load',router);