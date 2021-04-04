import categories from '../static/data/categories/index.get.js';
const HomeScreen = {
    render: () => {
        return `
            <ul class="card-container">
                ${categories.map(category => `
                    <li class="category-card">
                        <img src="..${category.imageUrl}" alt="${category.name}" class="card-image"/>
                        <div class="card-content-div">
                            <h3>${category.name}</h3>
                            <p>${category.description}</p>
                            <a class="btn-anchor" href="products.html?categoryId=${category.id}">
                                <span class="button">Explore ${category.key}</span>
                            </a>
                        </div>
                    </li>
                `).join('\n')}
            </ul>
        `
    }
}

export default HomeScreen;