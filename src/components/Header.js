const Header = {
    render: () => {
        return `
        <div class="header-container">
            <a href="/">
                <img src="./static/images/logo.png" alt="Sabka Bazaar Grocery Supplies Pvt. Ltd" class="header-image"/>
            </a>
            <div class="header-content">
                <div class="signin-container">
                    <a href="/signin">Sign in</a>
                    <a href="/register">Register</a>
                </div>
                <div class="header-menus">
                    <div class="header-menu-items">
                        <a class="header-menu-item" href="/">Home</a>
                        <a class="header-menu-item" href="/products.html">Products</a>
                    </div>
                    <div class="header-cart-container">
                        <img src="./static/images/cart.svg" alt="Cart" width="30px" class="cart"/>
                        <p>0 items</p>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}

export default Header;