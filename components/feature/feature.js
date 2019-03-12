class Feature {
    constructor(attributes) {
        this.title = attributes.title;
        this.description = attributes.description;
    }

    display() {
        const h3 = document.createElement("h3");        
        const title = document.createTextNode(this.title);
        h3.appendChild(title);

        const p = document.createElement("p");        
        const description = document.createTextNode(this.description);
        p.appendChild(description);

        const feature = document.createElement("section");
        feature.appendChild(h3);
        feature.appendChild(p);
        feature.classList.add("feature");

        return feature;
    }
}