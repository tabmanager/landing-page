function Navigation(item) {
    var t0 = performance.now();

    const nav = document.querySelector(item);    
    nav.innerHTML = `
    <div class="nav-head">
        <div class="logo"></div>
        <h1 class="">tabless thursday</h1>
        <button class="dropdown-button hidden-desktop"></button>
    </div>

    <div class="menu hidden-mobile">
        <a href="index.html">home</a>
        <a href="about.html">about</a>
        <a href="">join</a>
    </div>
    `;
    var t1 = performance.now();
    console.log(t1 - t0);
    const menuButton = document.querySelector(".dropdown-button");
    new MenuButton(menuButton);
}


class MenuButton {
    constructor(menuButton) {
        this.menuButton = menuButton;
        this.menu = document.querySelector(".menu");
        this.menuButton.innerHTML = content.dropdownIcon;
        this.menuButton.addEventListener('click', () => this.expandMenu());
    }

    expandMenu() {
        this.menuButton.classList.toggle("dropdown-button-active");
        this.menu.classList.toggle("hidden-mobile");
    }
}

