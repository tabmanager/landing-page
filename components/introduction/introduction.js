class Introduction extends Section{
    constructor(attributes) {
        super(attributes);
        this.subtitle = attributes.subtitle;
        this.url = attributes.url;
    }

    create() {
        const h1 = document.createElement("h1");        
        const title = document.createTextNode(this.title);
        h1.appendChild(title);

        const a = document.createElement("a");        
        const subtitle = document.createTextNode(this.subtitle);
        a.appendChild(subtitle);
        a.href=this.url;

        const p = document.createElement("p");        
        // const description = document.inner(this.description);
        p.innerHTML = this.description;

        const feature = document.createElement("section");
        feature.appendChild(h1);
        feature.appendChild(p);
        feature.appendChild(a);

        feature.classList.add("introduction");

        return feature;
    }
}