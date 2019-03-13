function Navigation(item) {
    const nav = document.querySelector(item);
    nav.innerHTML = `
    <div class="nav-head">
        <h1 class="logo">Tabless Thursday</h1>
        <button class="dropdown-button hidden-desktop"></button>
    </div>

    <div class="menu hidden-mobile">
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="">Join</a>
    </div>
    `;

    const menuButton = document.querySelector(".dropdown-button");
    new MenuButton(menuButton);
}


class MenuButton {
    constructor(menuButton) {
        this.menuButton = menuButton;
        this.menu = document.querySelector(".menu");
        this.menuButton.addEventListener('click', () => this.expandMenu());
    }

    expandMenu() {
        this.menuButton.classList.toggle("dropdown-button-active");
        this.menu.classList.toggle("hidden-mobile");
    }
}

