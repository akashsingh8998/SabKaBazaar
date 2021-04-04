import HomeScreen from '../screens/HomeScreen.js';
import {getHeaderAndFooter} from '../appUtils/common.js';
const router = () => {
    getHeaderAndFooter();
    const main = document.getElementById("main-container");
    main.innerHTML = HomeScreen.render();
}

window.addEventListener('load',router);