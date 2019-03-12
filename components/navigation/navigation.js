class MenuButton {
    constructor(menuButton) {
        this.menuButton = menuButton;
        this.menu = document.querySelector(".menu");
        this.menuButton.addEventListener('click', () => this.expandMenu());
    }

    expandMenu() {
        this.menu.classList.toggle("hidden-mobile")
    }
}

const menuButton = document.querySelector(".dropdown-button");
new MenuButton(menuButton);