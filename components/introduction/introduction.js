class Introduction extends Section{
    constructor(attributes) {
        super(attributes);
        this.subtitle = attributes.subtitle;
    }

    create() {
        const h1 = document.createElement("h1");        
        const title = document.createTextNode(this.title);
        h1.appendChild(title);

        const h3 = document.createElement("h3");        
        const subtitle = document.createTextNode(this.subtitle);
        h3.appendChild(subtitle);

        const p = document.createElement("p");        
        const description = document.createTextNode(this.description);
        p.appendChild(description);

        const feature = document.createElement("section");
        feature.appendChild(h1);
        feature.appendChild(h3);
        feature.appendChild(p);
        feature.classList.add("introduction");

        return feature;
    }
}